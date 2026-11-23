import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone, Quote } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany, getSetting } from "@/lib/site";
import { CaseStudies } from "./CaseStudies";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Portfolio & Case Studies | Selected Client Projects",
    description: "Explore selected client projects, e-commerce stores, custom applications and the business growth achieved by Hover Business Services LLP.",
    path: "/portfolio",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Projects come from Admin → Work (with extra detail from src/data/portfolioData.ts).
   Numbers from Admin → Counters, sectors from Admin → Industries, quotes from Admin → Reviews. */

const HERO = {
  title: "Work that moved the numbers.",
  tagline: "Websites, stores, apps and campaigns we have built for growing businesses. Open any project to see the challenge, what we did and what changed.",
};

const PROCESS = [
  { t: "Discover", b: "Goals, audience, competitors and what success looks like in numbers." },
  { t: "Design", b: "Wireframes, visuals and campaign plans you approve before we build." },
  { t: "Build & launch", b: "Development and campaigns in short sprints with a live staging link." },
  { t: "Grow", b: "Tracking, reporting and steady improvements after launch." },
];

/* ============================== Page ============================== */

export default async function PortfolioPage() {
  const [co, stats, work, industries, reviews] = await Promise.all([
    getCompany(), getSetting("stats"), getSetting("work"), getSetting("industries"), getSetting("reviews"),
  ]);
  const covers = (work.items ?? []).map((w) => w.image).filter(Boolean).slice(0, 3);
  const quotes = (reviews.items ?? []).filter((r) => r?.text).slice(0, 2);
  const sectors = (industries.items ?? []).map((x) => x.name).filter(Boolean);

  return (
    <div className="pf text-[var(--color-ink)]">
      <style>{`
        .pf h1,.pf h2,.pf h3{color:inherit}
        @keyframes pf-fan{from{opacity:0;transform:translateY(40px) rotate(0)}to{opacity:1;transform:rotate(var(--r)) translateX(var(--x))}}
        .pf-fan{transform:rotate(var(--r)) translateX(var(--x));animation:pf-fan 1s cubic-bezier(.2,.8,.2,1) both}
        @media (prefers-reduced-motion:reduce){.pf-fan{animation:none}}
      `}</style>

      {/* HERO — fanned project covers */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] pb-16 pt-12 text-white md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[var(--color-brand)] opacity-30 blur-[130px]" />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-white/60"><Link href="/about-us" className="hover:underline">About us</Link><span>/</span><span className="text-white">Case studies</span></nav>
            <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.8rem,6.2vw,5.2rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[52ch] text-lg text-white/70">{HERO.tagline}</p>
            <a href="#work" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold">Browse projects <ArrowDown size={16} /></a>
          </div>
          <div className="relative mx-auto h-[380px] w-full max-w-[460px]">
            {(covers.length ? covers : [null, null, null]).map((src, i) => (
              <div key={i} className="pf-fan absolute left-1/2 top-1/2 -ml-[140px] -mt-[180px] h-[360px] w-[280px] overflow-hidden rounded-[28px] border-4 border-white/10 bg-white shadow-[var(--shadow-lg)]"
                style={{ "--r": `${(i - 1) * 9}deg`, "--x": `${(i - 1) * 70}px`, zIndex: i === 1 ? 3 : 1, animationDelay: `${i * 0.12}s` } as React.CSSProperties}>
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt="" className="h-full w-full object-contain p-8" />
                ) : <div className="h-full w-full bg-[linear-gradient(140deg,var(--color-brand),#7a0f0a)]" />}
              </div>
            ))}
          </div>
        </div>
        <div className="container-max relative mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.items.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <p className="font-display text-3xl font-extrabold">{s.value}{s.suffix}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-max">
          <h2 className="mb-8 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Selected projects</h2>
          <CaseStudies cmsWork={work.items} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">How every project runs</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.t} className={`rounded-[28px] p-7 ${i === PROCESS.length - 1 ? "bg-[var(--color-brand)] text-white" : "bg-white"}`}>
                <span className={`font-display text-5xl font-extrabold ${i === PROCESS.length - 1 ? "text-white/40" : "text-[var(--color-brand)]/20"}`}>{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{p.t}</h3>
                <p className={`mt-2 text-sm ${i === PROCESS.length - 1 ? "text-white/85" : "text-[var(--color-text-muted)]"}`}>{p.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTORS + QUOTES */}
      <section className="py-16 md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          {sectors.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Industries we have worked in</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {sectors.map((s) => <span key={s} className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold">{s}</span>)}
              </div>
              <Link href="/industries" className="mt-6 inline-flex items-center gap-1.5 font-bold text-[var(--color-brand)]">See all industries <ArrowRight size={15} /></Link>
            </div>
          )}
          {quotes.length > 0 && (
            <div className="space-y-4">
              {quotes.map((q) => (
                <figure key={q.name} className="rounded-3xl bg-[var(--color-ink)] p-7 text-white">
                  <Quote size={24} className="text-[var(--color-brand)]" />
                  <blockquote className="mt-3 leading-relaxed text-white/85">{q.text}</blockquote>
                  <figcaption className="mt-4 text-sm"><b>{q.name}</b> <span className="text-white/60">· {q.role}</span></figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-white md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />
            <h2 className="relative max-w-[18ch] font-display text-4xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Your project could be next.</h2>
            <p className="relative mt-3 max-w-[50ch] text-white/85">Tell us what you want to build or grow. You get a scope, timeline and quote within 48 hours.</p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Start a project <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
