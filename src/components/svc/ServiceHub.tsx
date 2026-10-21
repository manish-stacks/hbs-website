import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";
import { ICONS, type IconKey } from "./kit";

export type Hub = {
  slug: string; metaTitle: string; metaDesc: string; eyebrow: string; title: string; tagline: string; accent: string;
  groups: { title: string; sub: string; items: { icon: IconKey; t: string; b: string; href: string }[] }[];
  why: { t: string; b: string }[];
};

export const hubMeta = (h: Hub) => buildMeta({ title: h.metaTitle, description: h.metaDesc, path: `/${h.slug}` });

/** Overview page that links to a group of service pages. */
export async function ServiceHub({ h }: { h: Hub }) {
  const company = await getCompany();
  const floating = h.groups.flatMap((g) => g.items).slice(0, 8);
  return (
    <div className="theme-hbs" style={{ "--a": h.accent } as CSSProperties}>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[var(--a)]/10 via-white to-white pb-16 pt-14 text-center md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#000 1.5px,transparent 1.5px)", backgroundSize: "28px 28px", maskImage: "radial-gradient(ellipse at center,#000 30%,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center,#000 30%,transparent 75%)" }} aria-hidden />
        <div className="container-max">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] shadow-sm"><span className="h-2 w-2 rounded-full bg-[var(--a)]" />{h.eyebrow}</span>
          <h1 className="mx-auto mt-6 max-w-[20ch] text-[var(--color-ink)]" style={{ fontSize: "clamp(2.4rem,5.4vw,4.4rem)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>{h.title}</h1>
          <p className="mx-auto mt-5 max-w-[60ch] text-[var(--fs-lg)] text-[var(--color-text-muted)]">{h.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact-us" className="group inline-flex items-center gap-3 rounded-full bg-[var(--a)] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_14px_34px_-10px_var(--a)] transition hover:-translate-y-0.5">Get free proposal<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45"><ArrowRight size={16} /></span></Link>
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold hover:border-[var(--a)]"><Phone size={15} /> Call us</a>
          </div>
          <ul className="mx-auto mt-12 flex max-w-[760px] flex-wrap justify-center gap-3" aria-hidden>
            {floating.map((i) => { const I = ICONS[i.icon]; return <li key={i.href} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white text-[var(--a)] shadow-md"><I size={22} /></li>; })}
          </ul>
        </div>
      </section>

      {h.groups.map((g, gi) => (
        <section key={g.title} className={`py-14 md:py-16 ${gi % 2 ? "bg-[var(--color-surface)]" : ""}`}>
          <div className="container-max grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal className="lg:sticky lg:top-36 lg:self-start">
              <span className="font-display text-6xl font-black text-[var(--a)]/20">{String(gi + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 font-display font-black text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)", lineHeight: 1.1 }}>{g.title}</h2>
              <p className="mt-4 max-w-[40ch] text-[var(--color-text-muted)]">{g.sub}</p>
            </Reveal>
            <Reveal stagger className="grid gap-4 sm:grid-cols-2">
              {g.items.map((it) => { const I = ICONS[it.icon]; return (
                <Spotlight key={it.href} color={`${h.accent}22`} className="rounded-[26px] border border-[var(--color-border)] bg-white p-6 transition hover:-translate-y-1.5 hover:border-[var(--a)]/50 hover:shadow-[0_26px_56px_-28px_var(--a)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--a)]/10 text-[var(--a)] transition group-hover:bg-[var(--a)] group-hover:text-white"><I size={22} /></span>
                  <h3 className="mt-4 text-[var(--fs-lg)]">{it.t}</h3>
                  <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{it.b}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-[var(--color-ink)]">Learn more <ArrowUpRight size={15} /></span>
                  <Link href={it.href} aria-label={it.t} className="absolute inset-0" />
                </Spotlight>
              ); })}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-[#0a0e17] py-14 text-white md:py-16">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[640px] text-center"><h2 className="font-display font-black text-white" style={{ fontSize: "var(--fs-3xl)", lineHeight: 1.1 }}>Why work with us</h2></Reveal>
          <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {h.why.map((w, i) => (
              <div key={w.t} className="rounded-[26px] border border-white/10 bg-white/[.05] p-7">
                <span className="font-display text-4xl font-black text-[var(--a)]">{i + 1}</span>
                <h3 className="mt-3 text-[var(--fs-lg)] text-white">{w.t}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-white/60">{w.b}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
