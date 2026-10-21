import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";

export type HubData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  title: string;
  tagline: string;
  accent: string;
  groups: { title: string; sub: string; items: { label: string; href: string; body: string }[] }[];
  why: { t: string; b: string }[];
};
export const hubMeta = (h: HubData) => buildMeta({ title: h.metaTitle, description: h.metaDesc, path: `/${h.slug}` });

const a = (h: HubData) => ({ "--a": h.accent }) as CSSProperties;
const num = (i: number) => String(i + 1).padStart(2, "0");

async function Bottom({ h, dark = false }: { h: HubData; dark?: boolean }) {
  const co = await getCompany();
  return (
    <>
      <section className={dark ? "bg-[#0b0e14] py-14 text-white" : "py-14"}><div className="container-max">
        <h2 className="font-display text-3xl font-black">Why Hover Business Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{h.why.map((w, i) => (<div key={w.t} className={`rounded-2xl p-6 ${dark ? "border border-white/10 bg-white/5" : "border border-[var(--color-border)] bg-white"}`}><span className="font-display text-sm font-bold text-[var(--a)]">{num(i)}</span><h3 className="mt-2 font-display text-lg font-bold">{w.t}</h3><p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-[var(--color-text-muted)]"}`}>{w.b}</p></div>))}</div>
      </div></section>
      <section className="py-10"><div className="container-max"><div className="flex flex-col items-start justify-between gap-5 rounded-[28px] bg-[var(--a)] p-8 text-white md:flex-row md:items-center md:p-12">
        <div><h2 className="font-display text-3xl font-black">Not sure what you need?</h2><p className="mt-2 text-white/80">Tell us your goal. We will recommend the right mix of services.</p></div>
        <div className="flex flex-wrap gap-3"><Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black">Talk to an expert <ArrowRight size={16} /></Link><a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold"><Phone size={15} />{co.phone}</a></div>
      </div></div></section>
    </>
  );
}

/* Digital Marketing: dark hero + channel cards */
export async function HubDigital({ h }: { h: HubData }) {
  return (
    <div className="theme-hbs pv text-[var(--color-ink)]" style={a(h)}><style>{".pv h1,.pv h2,.pv h3{color:inherit}"}</style>
      <section className="relative overflow-hidden bg-[#0b0e14] pb-20 pt-16 text-white md:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-40 blur-[110px]" style={{ background: "var(--a)" }} />
        <div className="container-max relative grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div><p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--a)]">{h.eyebrow}</p><h1 className="mt-4 font-display font-black" style={{ fontSize: "clamp(2.8rem,6.5vw,5.6rem)", lineHeight: 1, letterSpacing: "-0.035em" }}>{h.title}</h1></div>
          <p className="text-lg text-white/70">{h.tagline}</p>
        </div>
      </section>
      <section className="-mt-10 pb-14"><div className="container-max grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {h.groups.map((g, i) => (<div key={g.title} className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-md)]">
          <span className="font-display text-sm font-black text-[var(--a)]">{num(i)}</span>
          <h2 className="mt-1 font-display text-xl font-black">{g.title}</h2><p className="mt-1 text-sm text-[var(--color-text-muted)]">{g.sub}</p>
          <ul className="mt-5 divide-y divide-[var(--color-border)]">{g.items.map((it) => (<li key={it.href}><Link href={it.href} className="group flex items-center justify-between gap-3 py-2.5 text-[15px] font-semibold transition-colors hover:text-[var(--a)]">{it.label}<ArrowUpRight size={15} className="shrink-0 opacity-30 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" /></Link></li>))}</ul>
        </div>))}
      </div></section>
      <Bottom h={h} />
    </div>
  );
}

/* Web & App: light hero, stacked rows with sticky intro */
export async function HubWeb({ h }: { h: HubData }) {
  return (
    <div className="theme-hbs pv text-[var(--color-ink)]" style={a(h)}><style>{".pv h1,.pv h2,.pv h3{color:inherit}"}</style>
      <section className="bg-[var(--color-surface)] py-16 md:py-24"><div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rounded-md bg-[var(--a)] px-3 py-1 font-mono text-xs font-bold text-white">{"</>"} {h.eyebrow}</span>
          <h1 className="mt-5 font-display font-black text-[var(--color-ink)]" style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>{h.title}</h1>
          <p className="mt-5 text-lg text-[var(--color-text-muted)]">{h.tagline}</p>
          <Link href="/contact-us" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-bold text-white">Discuss your project <ArrowRight size={16} /></Link>
        </div>
        <div className="space-y-10">{h.groups.map((g) => (<div key={g.title}>
          <div className="mb-3 flex items-baseline justify-between border-b-2 border-[var(--color-ink)] pb-2"><h2 className="font-display text-2xl font-black">{g.title}</h2><span className="text-xs text-[var(--color-text-muted)]">{g.items.length} services</span></div>
          {g.items.map((it) => (<Link key={it.href} href={it.href} className="group grid gap-1 border-b border-[var(--color-border)] py-4 transition-colors hover:bg-white md:grid-cols-[1fr_1.4fr_24px] md:items-center md:px-3"><span className="font-display font-bold group-hover:text-[var(--a)]">{it.label}</span><span className="text-sm text-[var(--color-text-muted)]">{it.body}</span><ArrowRight size={16} className="hidden text-[var(--a)] opacity-0 transition-opacity group-hover:opacity-100 md:block" /></Link>))}
        </div>))}</div>
      </div></section>
      <Bottom h={h} />
    </div>
  );
}

const TILE = ["#e5231b", "#10131a", "#b8140e", "#b98a2f", "#171a21", "#e5231b", "#27272a", "#b8140e"];
/* Creative & Design: colourful mosaic tiles */
export async function HubDesign({ h }: { h: HubData }) {
  const items = h.groups.flatMap((g) => g.items);
  return (
    <div className="theme-hbs pv text-[var(--color-ink)]" style={a(h)}><style>{".pv h1,.pv h2,.pv h3{color:inherit}"}</style>
      <section className="py-14 text-center md:py-20"><div className="container-max">
        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--a)]">{h.eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-[16ch] font-display font-black text-[var(--color-ink)]" style={{ fontSize: "clamp(2.8rem,7vw,6rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{h.title}</h1>
        <p className="mx-auto mt-5 max-w-[56ch] text-lg text-[var(--color-text-muted)]">{h.tagline}</p>
      </div></section>
      <section className="pb-14"><div className="container-max grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (<Link key={it.href} href={it.href} className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-6 text-white transition-transform hover:-translate-y-1 ${i % 5 === 0 ? "lg:col-span-2" : ""} ${i % 7 === 3 ? "lg:row-span-2" : ""}`} style={{ background: TILE[i % TILE.length] }}>
          <span className="pointer-events-none absolute -right-4 -top-8 font-display text-[9rem] font-black leading-none opacity-15">{it.label[0]}</span>
          <ArrowUpRight className="self-end opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          <div><h2 className="font-display text-xl font-black">{it.label}</h2><p className="mt-1 line-clamp-2 text-sm text-white/80">{it.body}</p></div>
        </Link>))}
      </div></section>
      <Bottom h={h} />
    </div>
  );
}

/* Industries: grouped sections with chip tiles */
export async function HubIndustries({ h }: { h: HubData }) {
  return (
    <div className="theme-hbs pv text-[var(--color-ink)]" style={a(h)}><style>{".pv h1,.pv h2,.pv h3{color:inherit}"}</style>
      <section className="bg-[var(--a)] py-16 text-white md:py-24"><div className="container-max grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div><p className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/70">{h.eyebrow}</p><h1 className="mt-3 font-display font-black" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>{h.title}</h1></div>
        <div><p className="text-lg text-white/85">{h.tagline}</p><div className="mt-5 flex flex-wrap gap-6 text-sm font-semibold"><span>{h.groups.length} sectors</span><span>{h.groups.reduce((n, g) => n + g.items.length, 0)} industries</span></div></div>
      </div></section>
      <section className="py-14"><div className="container-max space-y-12">
        {h.groups.map((g) => (<div key={g.title} className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <div><h2 className="font-display text-2xl font-black">{g.title}</h2><p className="mt-1 text-sm text-[var(--color-text-muted)]">{g.sub}</p></div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{g.items.map((it) => (<Link key={it.href} href={it.href} className="group flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--a)] hover:shadow-[var(--shadow-md)]"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--a)]/10 font-display font-black text-[var(--a)]">{it.label[0]}</span><span><span className="block font-display font-bold group-hover:text-[var(--a)]">{it.label}</span><span className="mt-0.5 block text-[13px] leading-snug text-[var(--color-text-muted)]">{it.body}</span></span></Link>))}</div>
        </div>))}
      </div></section>
      <Bottom h={h} />
    </div>
  );
}
