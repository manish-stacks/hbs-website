import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight, Code2, Gauge, GitBranch, Layers, Lock, Phone, Plus, Server, Users,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Custom Web Development | Hover Business Services LLP",
    description: "Fast, secure websites and web apps built around your business workflow. Get a free quote from Hover Business Services LLP.",
    path: "/custom-web-development",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Web & App Development",
  "href": "/website-development"
};

const PAGE = {
  "title": "Custom Web Development",
  "eyebrow": "Web Development",
  "tagline": "Fast, secure websites and web apps built around your business workflow.",
  "intro": "Fast, secure websites and web apps built around your business workflow. Hover Business Services LLP handles Custom Web Development from planning to delivery, with a clear scope, regular updates and one point of contact."
};

type HeroData = { file: string; lines: string[] };
const HERO: HeroData = {
  "file": "src/app/dashboard/page.tsx",
  "lines": [
    "const orders = await db.orders.recent();",
    "",
    "export default function Dashboard() {",
    "  return <Grid>",
    "    <Revenue data={orders} />",
    "    <Leads source=\"website\" />",
    "  </Grid>;",
    "}"
  ]
};

const STATS: [string, string][] = [
  [
    "5+",
    "Years in business"
  ],
  [
    "3200+",
    "Happy clients"
  ],
  [
    "24/7",
    "Support available"
  ]
];

const BENEFITS = [
  {
    "t": "Clear milestones",
    "b": "You review progress in short stages, not at the very end."
  },
  {
    "t": "Performance focus",
    "b": "Speed and Core Web Vitals are part of the brief."
  },
  {
    "t": "Secure by default",
    "b": "Updates, backups and security checks are built in."
  },
  {
    "t": "Documented hand-over",
    "b": "Simple guides so your team can manage content."
  }
];

const INCLUDES = [
  "Requirement and design sign-off",
  "Clean, scalable code",
  "Testing and launch support",
  "Mobile-friendly, tested build",
  "Security and speed checks",
  "Post-launch support"
];

const PROCESS = [
  {
    "t": "Discover",
    "b": "We confirm scope, users and features before design starts."
  },
  {
    "t": "Build",
    "b": "We develop in short stages so you can review progress early."
  },
  {
    "t": "Launch and support",
    "b": "We test, launch and stay on hand for fixes and upgrades."
  }
];

const FAQS = [
  {
    "q": "Who owns the code and accounts?",
    "a": "You do. Code, hosting and domains stay in your name from day one."
  },
  {
    "q": "How long does a project take?",
    "a": "Small sites take 3 to 6 weeks. Stores and custom apps are timed after a short discovery."
  },
  {
    "q": "Do you offer support after launch?",
    "a": "Yes. Maintenance and support plans are available monthly."
  }
];

const RELATED = [
  {
    "label": "WordPress Development",
    "href": "/wordpress-development"
  },
  {
    "label": "Laravel Development",
    "href": "/laravel-development"
  },
  {
    "label": "PHP Development",
    "href": "/php-development"
  },
  {
    "label": "Next.js Development",
    "href": "/next-js-development"
  }
];

const OVERVIEW: string[] | null = null;

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = null;

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = null;

const ICONS = [Code2, Gauge, Lock, Layers, Server, GitBranch];

/* ============================== Page ============================== */

export default async function CustomWebDevelopmentPage() {
  const co = await getCompany();

  return (
    <div className="sx text-[var(--color-ink)]">
      <style>{`
        .sx h1,.sx h2,.sx h3{color:inherit}
        @keyframes sx-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        @keyframes sx-bar{from{transform:scaleY(.1)}to{transform:scaleY(1)}}
        @keyframes sx-line{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}
        @keyframes sx-pop{0%{transform:scale(.6);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
        @keyframes sx-card{from{opacity:0;transform:translateY(-24px) rotate(var(--r,0deg))}to{opacity:1;transform:rotate(var(--r,0deg))}}
        @keyframes sx-dash{to{stroke-dashoffset:-12}}
        .sx-rise{animation:sx-rise .7s cubic-bezier(.2,.7,.2,1) both}
        .sx-bar{transform-origin:bottom;animation:sx-bar 1s cubic-bezier(.2,.7,.2,1) both}
        .sx-line{animation:sx-line .45s ease-out both}
        .sx-pop{animation:sx-pop .6s .8s cubic-bezier(.2,.7,.2,1) both}
        .sx-card{transform:rotate(var(--r,0deg));animation:sx-card .8s cubic-bezier(.2,.8,.2,1) both}
        .sx-dash{animation:sx-dash 1.2s linear infinite}
        @media (prefers-reduced-motion:reduce){.sx-rise,.sx-bar,.sx-line,.sx-pop,.sx-card,.sx-dash{animation:none}}
      `}</style>

      <section className="relative overflow-hidden bg-[var(--color-surface)] pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(#e5d9d0 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-[var(--color-ink)]">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-[var(--color-text-muted)]">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-[var(--color-ink)]"><Phone size={15} /> {co.phone}</a>
          </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <div className="container-max grid gap-6 sm:grid-cols-3">
          {STATS.map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-3"><span className="font-display text-4xl font-extrabold text-[var(--color-brand)]">{v}</span><span className="text-sm text-[var(--color-text-muted)]">{l}</span></div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What we do for you</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            <p className="text-[var(--color-ink)]">{PAGE.intro}</p>
            {OVERVIEW?.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "Why it works"}</h2>
          {WHY?.sub && <p className="mt-2 text-[var(--color-text-muted)]">{WHY.sub}</p>}
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="bg-white p-7">
                  <I size={24} className="text-[var(--color-brand)]" />
                  <h3 className="mt-4 font-display text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-16 text-white md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">What&apos;s included</h2>
            <p className="mt-3 text-white/60">Everything below is part of the service, with no hidden extras.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {INCLUDES.map((x) => (
              <li key={x} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><Check size={18} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {DELIVERABLES && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <h2 className="max-w-[24ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{DELIVERABLES.title}</h2>
            {DELIVERABLES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{DELIVERABLES.sub}</p>}
            <div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.items.map((d) => (
                <div key={d.t} className="border-t-2 border-[var(--color-ink)] py-6">
                  <h3 className="font-display text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{d.b}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">{d.f.map((f) => <span key={f} className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium">{f}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {GALLERY && (
        <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
          <div className="container-max">
            <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{GALLERY.title}</h2>
            {GALLERY.sub && <p className="mt-2 max-w-[60ch] text-white/60">{GALLERY.sub}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.items.map((g) => (
                <figure key={g.title} className="group overflow-hidden rounded-2xl bg-white/[.04]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={g.image} alt={g.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-5">
                    <span className="text-xs font-semibold text-[var(--color-brand)]">{g.tag}</span>
                    <p className="mt-1 font-display font-bold">{g.title}</p>
                    {g.b && <p className="mt-1.5 text-sm text-white/60">{g.b}</p>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">How we work</h2>
          <ol className="relative mt-12 grid gap-8" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(200px,1fr))` }}>
            <span className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-[var(--color-border)] md:block" />
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative">
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-full font-display font-extrabold ${i === PROCESS.length - 1 ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-ink)] bg-white"}`}>{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {AUDIENCES && (
        <section className="bg-[var(--color-surface)] py-16 md:py-20">
          <div className="container-max">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{AUDIENCES.title}</h2>
            {AUDIENCES.sub && <p className="mt-2 text-[var(--color-text-muted)]">{AUDIENCES.sub}</p>}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.items.map((a) => (
                <div key={a.t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-sm)]">
                  <Users size={20} className="text-[var(--color-brand)]" />
                  <h3 className="mt-3 font-display font-bold">{a.t}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{a.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {WHY_HBS && (
        <section className="py-16 md:py-24">
          <div className="container-max grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY_HBS.title}</h2>
              {WHY_HBS.sub && <p className="mt-3 text-[var(--color-text-muted)]">{WHY_HBS.sub}</p>}
            </div>
            <ul className="space-y-4">
              {WHY_HBS.items.map((w) => (
                <li key={w.t} className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={15} /></span>
                  <div><h3 className="font-display text-lg font-bold">{w.t}</h3><p className="mt-1 text-[var(--color-text-muted)]">{w.b}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="pb-20 pt-4">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-[32px] bg-[var(--color-brand)] p-8 text-white md:p-12">
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Ready to get started?</h2>
            <p className="mt-3 text-white/85">Tell us about your business. We will reply with a clear plan and quote.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)]">Get a free quote <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> Call now</a>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Questions</h2>
            <div className="mt-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                  <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-12">
        <div className="container-max flex flex-col gap-5 md:flex-row md:items-center">
          <p className="shrink-0 font-display font-bold">Related services</p>
          <div className="flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">{r.label}<ArrowUpRight size={14} /></Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- hero visual for this page ---------- */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="overflow-hidden rounded-2xl border border-[#262a33] bg-[#14171d] shadow-[var(--shadow-lg)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/60">{HERO.file}</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-[#c9d1d9]">
          {HERO.lines.map((l, i) => (
            <div key={i} className="sx-line" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <span className="mr-4 inline-block w-4 select-none text-right text-white/25">{i + 1}</span>
              <Code line={l} />
            </div>
          ))}
        </pre>
      </div>
      <div className="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-success)] text-white"><Check size={12} /></span> Build passed · deployed
      </div>
    </div>
  );
}

/* tiny syntax colouring for the hero code window */
function Code({ line }: { line: string }) {
  if (line.trim().startsWith("//")) return <span className="text-white/35">{line}</span>;
  const parts = line.split(/('[^']*'|"[^"]*"|\b(?:const|let|await|async|return|export|default|function|new|use|require|import|from)\b)/g);
  return (
    <>
      {parts.map((p, i) =>
        /^['"]/.test(p) ? <span key={i} className="text-[#a5d6ff]">{p}</span>
        : /^(const|let|await|async|return|export|default|function|new|use|require|import|from)$/.test(p) ? <span key={i} className="text-[#ff7b72]">{p}</span>
        : <span key={i}>{p}</span>,
      )}
    </>
  );
}
