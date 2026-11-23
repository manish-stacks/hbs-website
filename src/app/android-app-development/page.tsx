import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Bell, Check, ChevronRight, Lock, Phone, Plus, RefreshCw, Smartphone, Star, Users, Zap,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export const generateMetadata = () =>
  buildMeta({
    title: "Android App Development | Hover Business Services LLP",
    description: "Native Android apps that are fast and stable. Get a free quote from Hover Business Services LLP.",
    path: "/android-app-development",
  });

/* ======================= Page content (edit here) ======================= */

const HUB = {
  "label": "Web & App Development",
  "href": "/website-development"
};

const PAGE = {
  "title": "Android App Development",
  "eyebrow": "Mobile Apps",
  "tagline": "Native Android apps that are fast and stable.",
  "intro": "Native Android apps that are fast and stable. Hover Business Services LLP handles Android App Development from planning to delivery, with a clear scope, regular updates and one point of contact."
};

type HeroData = { app: string; screens: string[] };
const HERO: HeroData = {
  "app": "Delivery",
  "screens": [
    "Order #2041 · Out for delivery",
    "Driver · 6 min away",
    "Rate your order"
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
    "t": "Clean, scalable code",
    "b": "Built to be fast, secure and easy to extend later."
  },
  {
    "t": "Mobile-first",
    "b": "Every page is tested on phones, tablets and desktops."
  },
  {
    "t": "You own everything",
    "b": "Code, hosting and domains stay in your name."
  },
  {
    "t": "Support after launch",
    "b": "Maintenance and fixes are available on a monthly plan."
  }
];

const INCLUDES = [
  "Kotlin/Java development",
  "Play Store release",
  "Crash and usage monitoring",
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
    "label": "Mobile App Development",
    "href": "/mobile-app-development"
  },
  {
    "label": "App Maintenance & Support",
    "href": "/app-maintenance-support"
  }
];

const OVERVIEW: string[] | null = null;

const WHY: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const DELIVERABLES: { title: string; sub?: string; items: { t: string; b: string; f: string[] }[] } | null = null;

const AUDIENCES: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const WHY_HBS: { title: string; sub?: string; items: { t: string; b: string }[] } | null = null;

const GALLERY: { title: string; sub?: string; items: { title: string; tag: string; image: string; b?: string }[] } | null = null;

const ICONS = [Smartphone, Bell, Zap, Lock, Star, RefreshCw];

/* ============================== Page ============================== */

export default async function AndroidAppDevelopmentPage() {
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

      <section className="relative overflow-hidden pb-14 pt-10 text-center md:pt-14">
        <div className="pointer-events-none absolute left-1/2 top-[55%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)] blur-3xl" />
        <div className="container-max relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-text-muted)] justify-center">
            <Link href="/" className="hover:underline">Home</Link><ChevronRight size={13} />
            <Link href={HUB.href} className="hover:underline">{HUB.label}</Link><ChevronRight size={13} />
            <span className="text-[var(--color-ink)]">{PAGE.eyebrow}</span>
          </nav>
          <h1 className="mt-5 font-display font-extrabold mx-auto max-w-[20ch]" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.035em" }}>{PAGE.title}</h1>
          <p className="mt-5 max-w-[54ch] text-lg text-[var(--color-text-muted)] mx-auto">{PAGE.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)] transition-transform hover:-translate-y-0.5">Get a free quote <ArrowRight size={16} /></Link>
            <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold border-[var(--color-ink)]"><Phone size={15} /> {co.phone}</a>
          </div>
          <div className="mt-14 text-left"><HeroVisual /></div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <p className="mx-auto max-w-[62ch] text-center font-display text-2xl font-semibold leading-snug md:text-3xl">{PAGE.intro}</p>
          {OVERVIEW && <div className="mx-auto mt-10 grid max-w-5xl gap-6 text-[var(--color-text-muted)] md:grid-cols-3">{OVERVIEW.map((p, i) => <p key={i}>{p}</p>)}</div>}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <h2 className="max-w-[20ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">{WHY?.title ?? "What you get from it"}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[...BENEFITS, ...(WHY?.items ?? [])].slice(0, 6).map((b, i) => {
              const I = ICONS[i % ICONS.length]!;
              return (
                <div key={i} className={`rounded-[26px] p-7 ${i === 0 ? "bg-[var(--color-brand)] text-white md:row-span-2 md:flex md:flex-col md:justify-end" : "border border-[var(--color-border)] bg-white"}`}>
                  <I size={i === 0 ? 36 : 22} className={i === 0 ? "" : "text-[var(--color-brand)]"} />
                  <h3 className={`mt-4 font-display font-bold ${i === 0 ? "text-2xl" : "text-lg"}`}>{b.t}</h3>
                  <p className={`mt-2 text-sm ${i === 0 ? "text-white/85" : "text-[var(--color-text-muted)]"}`}>{b.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-max">
          <div className="grid divide-y divide-white/10 rounded-[28px] bg-[var(--color-ink)] px-6 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center"><p className="font-display text-4xl font-extrabold">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
            ))}
          </div>
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

      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Included in every plan</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {INCLUDES.map((x) => (
              <span key={x} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold shadow-[var(--shadow-sm)]"><Check size={16} className="text-[var(--color-brand)]" />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Step by step</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">A clear process, so you always know what happens next.</p>
          </div>
          <ol className="relative border-l-2 border-[var(--color-border)] pl-8">
            {PROCESS.map((s, i) => (
              <li key={s.t} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{s.b}</p>
              </li>
            ))}
          </ol>
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
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">Frequently asked</h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="group h-fit rounded-2xl border border-[var(--color-border)] bg-white p-5 open:shadow-[var(--shadow-md)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold">{f.q}<Plus size={18} className="shrink-0 transition-transform group-open:rotate-45" /></summary>
                <p className="mt-3 text-[var(--color-text-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-center text-white md:py-16">
            <h2 className="mx-auto max-w-[22ch] font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Let&apos;s plan your {PAGE.eyebrow.toLowerCase()} growth</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Talk to an expert <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
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
    <div className="relative mx-auto flex w-full max-w-[460px] items-end justify-center gap-4">
      <div className="w-[230px] rounded-[38px] border-[8px] border-[var(--color-ink)] bg-[var(--color-surface)] p-3 text-[var(--color-ink)] shadow-[var(--shadow-lg)]">
        <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-[var(--color-ink)]" />
        <div className="rounded-2xl bg-[var(--color-brand)] p-4 text-white">
          <p className="text-[11px] opacity-80">Your app</p>
          <p className="font-display text-xl font-extrabold">{HERO.app}</p>
        </div>
        <div className="mt-3 space-y-2">
          {HERO.screens.map((s, i) => (
            <div key={s} className="sx-rise flex items-center gap-2 rounded-xl bg-white p-2.5 text-[11px] font-semibold shadow-[var(--shadow-sm)]" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><Check size={12} /></span>{s}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-around border-t border-[var(--color-border)] pt-3">{[0, 1, 2, 3].map((i) => <span key={i} className={`h-1.5 w-6 rounded-full ${i === 0 ? "bg-[var(--color-brand)]" : "bg-black/15"}`} />)}</div>
      </div>
      <div className="sx-pop mb-24 hidden w-[170px] rounded-2xl bg-white p-3 text-[var(--color-ink)] shadow-[var(--shadow-lg)] sm:block">
        <p className="flex items-center gap-1.5 text-[11px] font-bold"><Bell size={12} className="text-[var(--color-brand)]" /> Notification</p>
        <p className="mt-1 text-[11px] text-[var(--color-text-muted)]">{HERO.screens[0]}</p>
      </div>
    </div>
  );
}
