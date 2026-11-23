import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, Quote, Star } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany, getSetting } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "About Us",
    description: "Hover Business Services LLP — 80+ specialists across four offices delivering SEO, performance marketing, web and app development.",
    path: "/about-us",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Text from the admin panel (About section, Counters, Why choose us, Offices,
   Reviews, Clients, Team leaders) is loaded below. This copy is page-only. */

const HERO = {
  title: "We help businesses get found, get chosen and grow.",
  tagline: "Hover Business Services is a 360° digital agency. Strategy, SEO, ads, websites, apps and design, all under one roof and measured by one thing: your results.",
};

const STORY = [
  { k: "Start", t: "A small team with a simple promise", b: "Report honestly, fix what is not working and keep improving the numbers that matter to the client." },
  { k: "Grow", t: "From marketing to full digital delivery", b: "Clients asked us to build the websites and apps their campaigns pointed to, so we brought development and design in-house." },
  { k: "Today", t: "80+ specialists, four offices", b: "Delhi, Noida and Auckland teams serving businesses across India, New Zealand, the US, UK and the Gulf." },
];

const WAY = [
  { t: "Decide the numbers", b: "Every engagement starts with agreed targets: leads, sales, rankings or cost per enquiry." },
  { t: "Build and launch", b: "Specialists for each channel do the work. A senior lead reviews it before it goes live." },
  { t: "Report in plain language", b: "Monthly reports show what we did, what changed and what happens next." },
  { t: "Keep improving", b: "We test, learn and double down on what brings results, month after month." },
];

/* ============================== Page ============================== */

export default async function AboutPage() {
  const [co, about, stats, why, offices, reviews, clients, leaders] = await Promise.all([
    getCompany(), getSetting("about"), getSetting("stats"), getSetting("whyUs"), getSetting("offices"),
    getSetting("reviews"), getSetting("clients"), getSetting("leaders"),
  ]);
  const team = (leaders.items ?? []).filter((m) => m?.name && m?.image).slice(0, 4);
  const logos = (clients.items ?? []).filter((c) => c?.logo);
  const revs = (reviews.items ?? []).filter((r) => r?.text).slice(0, 3);

  return (
    <div className="ab text-[var(--color-ink)]">
      <style>{`
        .ab h1,.ab h2,.ab h3{color:inherit}
        @keyframes ab-spin{to{transform:rotate(360deg)}}
        @keyframes ab-marq{to{transform:translateX(-50%)}}
        @keyframes ab-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        .ab-spin{animation:ab-spin 18s linear infinite}
        .ab-marq{animation:ab-marq 36s linear infinite}
        .ab-rise{animation:ab-rise .9s cubic-bezier(.2,.7,.2,1) both}
        @media (prefers-reduced-motion:reduce){.ab-spin,.ab-marq,.ab-rise{animation:none}}
      `}</style>

      {/* HERO — statement + collage */}
      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container-max grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3.5 py-1.5 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" /> About Hover Business Services
            </p>
            <h1 className="mt-6 font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,5.8vw,4.9rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[54ch] text-lg text-[var(--color-text-muted)]">{HERO.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)]">Work with us <ArrowRight size={16} /></Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3.5 text-sm font-bold">See our work</Link>
            </div>
          </div>

          <div className="ab-rise relative mx-auto h-[440px] w-full max-w-[480px]">
            <div className="absolute right-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-[32px] bg-[var(--color-surface-2)] shadow-[var(--shadow-lg)]">
              {about.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={about.image} alt={about.imageAlt || "Hover Business Services team"} className="h-full w-full object-cover" />
              ) : <div className="h-full w-full bg-[linear-gradient(140deg,var(--color-brand),#7a0f0a)]" />}
            </div>
            <div className="absolute bottom-0 left-0 w-[58%] rounded-[28px] bg-[var(--color-ink)] p-6 text-white shadow-[var(--shadow-lg)]">
              <p className="font-display text-5xl font-extrabold">{about.badgeValue}</p>
              <p className="mt-1 text-sm text-white/70">{about.badgeLabel}</p>
              {team.length > 0 && (
                <div className="mt-4 flex -space-x-3">
                  {team.map((m) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={m.name} src={m.image} alt={m.alt || m.name} className="h-10 w-10 rounded-full border-2 border-[var(--color-ink)] object-cover" />
                  ))}
                </div>
              )}
            </div>
            <div className="absolute -left-2 top-6 flex h-28 w-28 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-[var(--shadow-lg)]">
              <svg viewBox="0 0 100 100" className="ab-spin absolute inset-0 h-full w-full" aria-hidden>
                <defs><path id="ab-c" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
                <text fontSize="10.5" fontWeight="700" fill="#fff" letterSpacing="2"><textPath href="#ab-c">360° DIGITAL AGENCY • SINCE DAY ONE •</textPath></text>
              </svg>
              <Star size={26} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      {logos.length > 0 && (
        <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-6">
          <div className="ab-marq flex w-max items-center gap-16">
            {[...logos, ...logos].map((c, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={c.logo} alt={c.alt || c.name} className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
            ))}
          </div>
        </div>
      )}

      {/* WHO WE ARE — admin "About section" */}
      <section className="py-16 md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{about.heading} {about.highlight}</h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed">{about.p1}</p>
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">{about.p2}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.points.filter(Boolean).map((p) => (
                <li key={p} className="flex gap-3 rounded-2xl bg-[var(--color-surface)] p-4 font-semibold"><Check size={18} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <div className="grid overflow-hidden rounded-[32px] bg-[var(--color-ink)] text-white sm:grid-cols-2 lg:grid-cols-4">
            {stats.items.map((s, i) => (
              <div key={s.label} className={`p-8 md:p-10 ${i === 0 ? "bg-[var(--color-brand)]" : "border-white/10 sm:border-l"}`}>
                <p className="font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,4vw,3.6rem)", lineHeight: 1 }}>{s.value}{s.suffix}</p>
                <p className="mt-3 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">How we got here</h2>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
            <span className="absolute left-0 right-0 top-6 hidden h-0.5 bg-[var(--color-border)] md:block" />
            {STORY.map((s, i) => (
              <li key={s.k} className="relative">
                <span className={`relative inline-flex h-12 items-center rounded-full px-5 font-display font-extrabold ${i === STORY.length - 1 ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-ink)] bg-white"}`}>{s.k}</span>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight">The way we work</h2>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">Simple, repeatable and transparent. You always know what is happening on your account.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {WAY.map((w, i) => (
              <li key={w.t} className="rounded-3xl border border-[var(--color-border)] p-7">
                <span className="font-display text-5xl font-extrabold text-[var(--color-brand)]/20">{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{w.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{w.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY US — admin "Why choose us" */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] py-16 text-white md:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--color-brand)] opacity-25 blur-[120px]" />
        <div className="container-max relative">
          <h2 className="max-w-[18ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">Why businesses stay with us</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {why.items.map((w) => (
              <div key={w.title} className="bg-[var(--color-ink)] p-7">
                <Check size={24} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/60">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERS PREVIEW */}
      {team.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-extrabold tracking-tight">The people leading the work</h2>
              <Link href="/team-members" className="inline-flex items-center gap-1.5 font-bold text-[var(--color-brand)]">Meet all team leaders <ArrowUpRight size={16} /></Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <figure key={m.name} className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-[var(--color-surface-2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.alt || m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
                    <p className="font-display font-bold">{m.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{[m.designation, m.position].filter(Boolean).join(", ")}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      {revs.length > 0 && (
        <section className="bg-[var(--color-brand-soft)] py-16 md:py-24">
          <div className="container-max">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-extrabold tracking-tight">In our clients&apos; words</h2>
              <Link href="/client-reviews" className="inline-flex items-center gap-1.5 font-bold text-[var(--color-brand)]">Read all reviews <ArrowUpRight size={16} /></Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {revs.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-3xl bg-white p-7 shadow-[var(--shadow-sm)]">
                  <Quote size={28} className="text-[var(--color-brand)]" />
                  <blockquote className="mt-4 flex-1 leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-6 border-t border-[var(--color-border)] pt-4"><p className="font-display font-bold">{r.name}</p><p className="text-sm text-[var(--color-text-muted)]">{r.role}</p></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OFFICES */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">Where to find us</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offices.items.map((o, i) => (
              <div key={o.city + i} className={`flex flex-col rounded-3xl p-6 ${i === 0 ? "bg-[var(--color-ink)] text-white" : "border border-[var(--color-border)]"}`}>
                <MapPin size={22} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{o.city}</h3>
                <p className={`text-xs font-semibold ${i === 0 ? "text-white/50" : "text-[var(--color-text-muted)]"}`}>{o.country}</p>
                <p className={`mt-3 flex-1 text-sm ${i === 0 ? "text-white/70" : "text-[var(--color-text-muted)]"}`}>{o.address}</p>
                {o.phone && <a href={`tel:${o.phone}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"><Phone size={14} className="text-[var(--color-brand)]" />{o.phone}</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-white md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[44px] border-white/10" />
            <h2 className="relative max-w-[18ch] font-display text-4xl font-extrabold md:text-6xl" style={{ letterSpacing: "-0.035em" }}>Let&apos;s grow your business together.</h2>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Talk to us <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
              <Link href="/career" className="inline-flex items-center gap-2 rounded-full px-4 py-4 text-sm font-semibold underline underline-offset-4">We are hiring</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
