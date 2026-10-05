"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const work = [
  { name: "EFOS", sector: "Food services", scope: ["Web platform", "SEO", "Branding"], outcome: "Rebuilt the site and search presence around service-intent keywords.", image: "/images/company/efos.jpg" },
  { name: "PrintHutt", sector: "E-commerce", scope: ["Store build", "Performance marketing"], outcome: "Custom print storefront with a paid funnel tuned to order value.", image: "/images/company/printhutt.avif" },
  { name: "OncoHealthMart", sector: "Healthcare", scope: ["E-commerce SEO", "Rebuild"], outcome: "Catalogue site turned into a transacting store with trust signals.", image: "/images/company/onco.png" },
  { name: "Dikshant", sector: "Education", scope: ["Website", "Admissions funnel"], outcome: "Course pages and lead routing built around the admission season.", image: "/images/company/dikshant.avif" },
  { name: "Becho Gadi", sector: "Marketplace", scope: ["Platform", "Lead generation"], outcome: "Listing marketplace with a qualified-seller acquisition engine.", image: "/images/company/becho-gadi.webp" },
];

const sectors = ["All", ...work.map((w) => w.sector)];

export function WorkGallery() {
  const [active, setActive] = useState("All");
  const shown = work.filter((w) => active === "All" || w.sector === active);
  const [first, ...rest] = shown;
  const featured = active === "All" ? first : null;
  const grid = active === "All" ? rest : shown;

  return (
    <div>
      <div role="tablist" aria-label="Filter projects by industry" className="flex flex-wrap justify-center gap-2">
        {sectors.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={active === s}
            onClick={() => setActive(s)}
            className={`rounded-full border px-5 py-2.5 text-[var(--fs-xs)] font-semibold transition sm:text-[var(--fs-sm)] ${active === s ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white shadow-[0_8px_20px_rgba(229,35,27,.25)]" : "border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-ink)]"}`}
          >
            {s}
          </button>
        ))}
      </div>

      {featured ? (
        <article className="group mt-10 grid overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)] lg:grid-cols-[1.25fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface-2)] lg:aspect-auto lg:min-h-[380px]">
            <Image src={featured.image} alt={`${featured.name} project`} fill priority sizes="(max-width:1024px) 100vw, 700px" className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="w-fit rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">Featured · {featured.sector}</span>
            <h3 className="mt-4 font-display text-[var(--fs-3xl)] font-extrabold">{featured.name}</h3>
            <p className="mt-3 text-[var(--fs-base)] leading-relaxed text-[var(--color-text-muted)]">{featured.outcome}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {featured.scope.map((t) => <li key={t} className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-[12px] font-medium">{t}</li>)}
            </ul>
            <Link href="/contact-us" className="mt-8 inline-flex items-center gap-2 text-[var(--fs-sm)] font-bold text-[var(--color-brand)]">
              Start a similar project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      ) : null}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((w) => (
          <article key={w.name} className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]">
              <Image src={w.image} alt={`${w.name} — ${w.sector} project`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 400px" className="object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,19,26,.75)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm">{w.sector}</span>
              <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-[var(--color-brand)] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[var(--fs-xl)] font-extrabold">{w.name}</h3>
              <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{w.outcome}</p>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-5">
                {w.scope.map((t) => <li key={t} className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-[12px] font-medium">{t}</li>)}
              </ul>
            </div>
          </article>
        ))}

        {active === "All" ? (
          <Link href="/contact-us" className="group relative flex min-h-[280px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-8 text-center text-white transition-transform duration-300 hover:-translate-y-1.5">
            <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[70px]" style={{ background: "radial-gradient(circle, rgba(229,35,27,.55), transparent 70%)" }} />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform group-hover:translate-x-1"><ArrowRight size={22} /></span>
            <p className="relative font-display text-[var(--fs-xl)] font-extrabold">Your brand here</p>
            <p className="relative max-w-[28ch] text-[var(--fs-sm)] text-white/60">Tell us what you are building and we will show you a plan.</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
