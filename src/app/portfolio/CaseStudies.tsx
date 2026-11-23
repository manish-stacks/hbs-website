"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ExternalLink, MapPin, Quote, TrendingUp, X } from "lucide-react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS, type PortfolioProject } from "@/data/portfolioData";

type Work = { name: string; sector: string; scope: string[]; outcome: string; image: string; ratio?: string };
type Project = Omit<PortfolioProject, "metrics" | "techStack" | "challenge" | "solution" | "keyDeliverables"> & {
  metrics: PortfolioProject["metrics"];
  techStack: string[];
  challenge: string;
  solution: string;
  keyDeliverables: string[];
};

/** Admin "Work" items are shown when present. Rich details are added when a project matches the built-in case studies. */
function merge(cms?: Work[]): Project[] {
  if (!cms?.length) return PORTFOLIO_PROJECTS;
  return cms.map((item, idx) => {
    const n = (item.name || "").toLowerCase().trim();
    const slug = n.replace(/[^a-z0-9]+/g, "-");
    const m = PORTFOLIO_PROJECTS.find((p) => p.id === slug || p.name.toLowerCase() === n || p.name.toLowerCase().includes(n) || n.includes(p.name.toLowerCase()) || p.client.toLowerCase().includes(n));
    const base = {
      id: `work-${slug || "p"}-${idx}`,
      name: item.name,
      client: item.name,
      sector: item.sector || m?.sector || "Client project",
      image: item.image || m?.image || "/images/services/web-design.png",
      scope: item.scope?.length ? item.scope : m?.scope ?? [],
      outcome: item.outcome || m?.outcome || "",
      tagline: item.outcome || m?.tagline || "",
    };
    if (m) return { ...m, ...base };
    return {
      ...base, category: "web", categoryLabel: "Web & Digital", year: "", location: "", accent: "#e5231b",
      metrics: [], techStack: [], challenge: "", solution: "", keyDeliverables: base.scope,
    } as Project;
  });
}

export function CaseStudies({ cmsWork }: { cmsWork?: Work[] }) {
  const all = useMemo(() => merge(cmsWork), [cmsWork]);
  const cats = PORTFOLIO_CATEGORIES.filter((c) => c.id === "all" || all.some((p) => p.category === c.id));
  const [cat, setCat] = useState<string>("all");
  const [open, setOpen] = useState<Project | null>(null);
  const list = all.filter((p) => cat === "all" || p.category === cat);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {cats.map((c) => (
          <button key={c.id} role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c.id ? "bg-[var(--color-ink)] text-white" : "bg-[var(--color-surface-2)] hover:bg-[var(--color-border)]"}`}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {list.map((p, i) => (
          <button key={p.id} onClick={() => setOpen(p)} className={`group text-left ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
            <div className={`relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-12 transition-transform duration-700 group-hover:scale-[1.04] md:p-16" />
              <span className="absolute left-5 top-5 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-bold text-[var(--color-ink)]">{p.categoryLabel}</span>
              {p.metrics[0] && (
                <span className="absolute right-5 top-5 rounded-2xl bg-[var(--color-brand)] px-4 py-2 text-white">
                  <span className="block font-display text-xl font-extrabold leading-none">{p.metrics[0].value}</span>
                  <span className="text-[11px] opacity-85">{p.metrics[0].label}</span>
                </span>
              )}
              <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></span>
            </div>
            <div className="mt-5 px-1">
              <p className="text-sm text-[var(--color-text-muted)]">{p.sector}</p>
              <h3 className="mt-1 font-display text-2xl font-bold transition-colors group-hover:text-[var(--color-brand)]">{p.name}</h3>
              {p.tagline && <p className="mt-2 max-w-[60ch] text-[var(--color-text-muted)]">{p.tagline}</p>}
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(null)}>
          <div role="dialog" aria-modal="true" aria-label={open.name} onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[32px] bg-white text-[var(--color-ink)] sm:rounded-[32px]">
            <div className="relative aspect-[16/7] border-b border-[var(--color-border)] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={open.image} alt={open.name} className="h-full w-full object-contain p-10" />
              <button onClick={() => setOpen(null)} aria-label="Close case study" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[var(--shadow-md)]"><X size={20} /></button>
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <span className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 font-bold text-[var(--color-brand-dark)]">{open.categoryLabel}</span>
                <span>{open.sector}</span>
                {open.location && <span className="inline-flex items-center gap-1"><MapPin size={13} />{open.location}</span>}
                {open.year && <span>{open.year}</span>}
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">{open.name}</h2>
              {open.outcome && <p className="mt-3 text-lg text-[var(--color-text-muted)]">{open.outcome}</p>}

              {open.metrics.length > 0 && (
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {open.metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-[var(--color-ink)] p-5 text-white">
                      <p className="flex items-center gap-1.5 font-display text-3xl font-extrabold">{m.value}<TrendingUp size={18} className="text-[var(--color-brand)]" /></p>
                      <p className="mt-1 text-sm text-white/65">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {(open.challenge || open.solution) && (
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {open.challenge && <div><h3 className="font-display text-lg font-bold">The challenge</h3><p className="mt-2 text-[var(--color-text-muted)]">{open.challenge}</p></div>}
                  {open.solution && <div><h3 className="font-display text-lg font-bold">What we did</h3><p className="mt-2 text-[var(--color-text-muted)]">{open.solution}</p></div>}
                </div>
              )}

              {open.keyDeliverables.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-lg font-bold">Delivered</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {open.keyDeliverables.map((d) => <li key={d} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />{d}</li>)}
                  </ul>
                </div>
              )}

              {open.techStack.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {open.techStack.map((t) => <span key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold">{t}</span>)}
                </div>
              )}

              {open.testimonial && (
                <figure className="mt-8 rounded-3xl bg-[var(--color-surface)] p-6">
                  <Quote size={24} className="text-[var(--color-brand)]" />
                  <blockquote className="mt-3 leading-relaxed">{open.testimonial.quote}</blockquote>
                  <figcaption className="mt-4 text-sm"><b>{open.testimonial.author}</b> · {open.testimonial.role}</figcaption>
                </figure>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white">Start a similar project <ArrowRight size={16} /></Link>
                {open.liveUrl && /^https?:/.test(open.liveUrl) && (
                  <a href={open.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3.5 text-sm font-bold">Visit live site <ExternalLink size={15} /></a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
