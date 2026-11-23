import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, Filter, MousePointerClick, Phone, Plus, Target, Users, Wallet, Zap,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Performance Marketing | Hover Business Services LLP",
    description: "Multi-channel paid campaigns measured by leads, sales and return on spend. Get a free quote from Hover Business Services LLP.",
    path: "/performance-marketing",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Digital Marketing",
  "href": "/digital-marketing"
};

const PAGE = {
  "title": "Performance Marketing",
  "eyebrow": "Paid Marketing",
  "tagline": "Multi-channel paid campaigns measured by leads, sales and return on spend.",
  "intro": "Multi-channel paid campaigns measured by leads, sales and return on spend. Hover Business Services LLP handles Performance Marketing from planning to delivery, with a clear scope, regular updates and one point of contact."
};

type HeroData = { ad: string; url: string; platform: string; metrics: [string, string][]; product?: boolean };
const HERO: HeroData = {
  "ad": "Scale What Works · Multi-Channel Growth",
  "url": "hoverbusinessservices.com",
  "platform": "Google + Meta",
  "metrics": [
    [
      "ROAS",
      "5.2×"
    ],
    [
      "CAC",
      "−28%"
    ],
    [
      "Revenue",
      "+3.1×"
    ]
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
    "t": "Built around leads",
    "b": "We measure calls, forms and sales, not vanity numbers."
  },
  {
    "t": "Senior review",
    "b": "A senior lead checks every campaign before it goes live."
  },
  {
    "t": "Transparent pricing",
    "b": "Fixed scope and clear costs, with no hidden fees."
  },
  {
    "t": "Fast communication",
    "b": "One account manager and replies within one working day."
  }
];

const INCLUDES = [
  "Funnel and channel plan",
  "Creative and audience testing",
  "ROAS dashboard",
  "Dedicated account manager",
  "Clear monthly reporting",
  "No hidden fees"
];

const PROCESS = [
  {
    "t": "Audit and plan",
    "b": "We review your site, competitors and goals, then agree a clear plan."
  },
  {
    "t": "Execute",
    "b": "Our specialists carry out the plan with weekly progress updates."
  },
  {
    "t": "Measure and improve",
    "b": "Monthly reports show what worked and what we will do next."
  }
];

const FAQS = [
  {
    "q": "How soon will I see results?",
    "a": "Paid campaigns can produce leads within weeks. SEO and content usually compound over 3 to 6 months."
  },
  {
    "q": "Will I see what you are doing?",
    "a": "Yes. You get a clear monthly report with actions taken, key numbers and next steps."
  },
  {
    "q": "Is there a long lock-in?",
    "a": "No. After an initial set-up period we work month to month."
  }
];

const RELATED = [
  {
    "label": "Google Ads",
    "href": "/google-ads"
  },
  {
    "label": "PPC Management",
    "href": "/ppc-management"
  },
  {
    "label": "Shopping Ads",
    "href": "/shopping-ads"
  },
  {
    "label": "Lead Generation",
    "href": "/lead-generation"
  }
];

const OVERVIEW: string[] | null = null;

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = null;

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = null;

const ICONS = [Target, MousePointerClick, Wallet, BarChart3, Filter, Zap];

/* ============================== Page ============================== */

export default async function PerformanceMarketingPage() {
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

      <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative order-2 py-6 lg:order-1">
            <div className="absolute inset-y-0 -left-[30vw] right-10 rounded-r-[48px] bg-[var(--color-brand)]" />
            <div className="relative"><HeroVisual /></div>
          </div>
          <div className="order-1 lg:order-2">
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
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-6 text-white">
        <div className="container-max flex flex-wrap items-center justify-between gap-6">
          {STATS.map(([v, l]) => (
            <p key={l} className="text-sm text-white/70"><span className="mr-2 font-display text-2xl font-extrabold text-white">{v}</span>{l}</p>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className={`rounded-[32px] bg-[var(--color-brand-soft)] p-8 md:p-10 ${OVERVIEW ? "" : "lg:col-span-2"}`}>
            <p className="max-w-[60ch] font-display text-2xl font-bold leading-snug text-[var(--color-ink)]">{PAGE.intro}</p>
          </div>
          {OVERVIEW && (
            <div className="space-y-4 self-center text-[var(--color-text-muted)]">
              {OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "The difference it makes"}</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className="grid items-center gap-3 py-6 md:grid-cols-[56px_1fr_1.4fr]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-2)]"><I size={20} /></span>
                  <h3 className="font-display text-xl font-bold">{b.t}</h3>
                  <p className="text-[var(--color-text-muted)]">{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      <section className="bg-[var(--color-brand-soft)] py-16 md:py-20">
        <div className="container-max grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Your checklist, handled</h2>
          <ul className="divide-y divide-[var(--color-brand)]/15 rounded-3xl bg-white px-6">
            {INCLUDES.map((x) => (
              <li key={x} className="flex items-center justify-between gap-4 py-4 font-semibold">{x}<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={14} /></span></li>
            ))}
          </ul>
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

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">From kickoff to results</h2>
          <ol className="mt-10 grid gap-4" style={{ gridTemplateColumns: `repeat(auto-fit,minmax(220px,1fr))` }}>
            {PROCESS.map((s, i) => (
              <li key={s.t} className="rounded-3xl bg-white p-7 shadow-[var(--shadow-sm)]">
                <span className="font-display text-5xl font-extrabold text-[var(--color-brand)]/20">{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

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

      <section className="py-16 md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">Before you ask</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">Still unsure? Speak to a specialist directly.</p>
            <a href={`tel:${co.phone}`} className="mt-6 inline-flex items-center gap-2 font-display text-xl font-bold text-[var(--color-brand)]"><Phone size={18} /> {co.phone}</a>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-[var(--color-surface)] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-max">
          <div className="grid items-center gap-8 rounded-[32px] border-2 border-[var(--color-ink)] p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Get your free plan</h2>
              <p className="mt-3 text-[var(--color-text-muted)]">Share your goals. You get a scope, timeline and quote within 48 hours.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-4 text-sm font-bold text-white">Request a quote <ArrowRight size={16} /></Link>
              <Link href="/free-website-audit" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-7 py-4 text-sm font-semibold">Free website audit</Link>
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
    <div className="relative mx-auto w-full max-w-[480px] space-y-3 text-[var(--color-ink)]">
      <div className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-lg)]">
        <p className="text-xs font-semibold text-[var(--color-text-muted)]">{HERO.platform}</p>
        <div className="mt-3 flex gap-3">
          {HERO.product && <span className="h-16 w-16 shrink-0 rounded-xl bg-[linear-gradient(135deg,var(--color-accent-soft),var(--color-brand-soft))]" />}
          <div>
            <p className="text-xs"><span className="font-bold">Sponsored</span> · {HERO.url}</p>
            <p className="mt-1 font-display text-lg font-bold leading-snug text-[#1a0dab]">{HERO.ad}</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Clear pricing · Fast response · Trusted by growing businesses</p>
          </div>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-3.5 py-1.5 text-xs font-bold text-white"><MousePointerClick size={13} /> Click → enquiry</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {HERO.metrics.map(([k, v], i) => (
          <div key={k} className="sx-rise rounded-2xl border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-sm)]" style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
            <p className="text-[11px] text-[var(--color-text-muted)]">{k}</p>
            <p className="font-display text-xl font-extrabold">{v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-16 items-end gap-1.5 rounded-2xl border border-[var(--color-border)] bg-white p-3">
        {[30, 42, 38, 55, 48, 66, 72, 80, 92].map((h, i) => (
          <span key={i} className="sx-bar flex-1 rounded-t" style={{ height: `${h}%`, background: i > 5 ? "var(--color-brand)" : "#e9e3de", animationDelay: `${0.2 + i * 0.05}s` }} />
        ))}
      </div>
      <p className="text-right text-[11px] opacity-60">Sample campaign view</p>
    </div>
  );
}
