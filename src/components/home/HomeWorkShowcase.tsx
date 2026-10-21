import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { Reveal } from "@/components/ui/Reveal";

export function HomeWorkShowcase() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <section className="section-space relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-circuit" aria-hidden />

      <div className="container-max relative">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-[68ch] text-center">
          <span className="pill">Proven Results</span>
          <h2 className="mt-4 font-display font-extrabold text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)" }}>
            Work We Are Proud To Be <span className="text-gradient-brand">Judged On</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            Real production digital platforms, high-converting e-commerce stores, and multi-channel growth systems. Here is what changed for our clients after launch.
          </p>
        </Reveal>

        {/* 4 Featured Projects Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((p, idx) => {
            const primaryMetric = p.metrics[0];
            return (
              <article
                key={p.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/60 hover:shadow-[var(--shadow-lg)]"
              >
                {/* Visual Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface-2)]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                  {/* Badges */}
                  <div className="absolute left-4 top-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)] shadow-sm backdrop-blur-sm">
                      {p.sector}
                    </span>
                    <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white/90 backdrop-blur-sm border border-white/20">
                      Case Study
                    </span>
                  </div>

                  {/* Metric Pill */}
                  {primaryMetric && (
                    <div className="absolute left-4 bottom-4 z-10">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-black/80 px-3.5 py-2 text-white shadow-xl backdrop-blur-md border border-white/20">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white">
                          <TrendingUp size={15} />
                        </span>
                        <div>
                          <p className="font-display text-sm font-extrabold leading-none text-white">
                            {primaryMetric.value}
                          </p>
                          <p className="mt-0.5 text-[10px] font-medium leading-none text-white/70">
                            {primaryMetric.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <span className="absolute right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-md transition-all group-hover:bg-[var(--color-brand)] group-hover:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                      {p.categoryLabel}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)] font-medium">
                      {p.year}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
                    {p.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.scope.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[var(--color-border)] pt-4 flex items-center justify-between">
                    <Link
                      href="/portfolio"
                      className="text-xs font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] inline-flex items-center gap-1.5 transition-colors"
                    >
                      Read Full Case Study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-semibold text-[var(--color-text-muted)]">
                      {p.location}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link href="/portfolio" className="btn btn-brand">
            Explore All 1,500+ Projects in Portfolio <ArrowRight size={16} />
          </Link>
          <Link href="/contact-us" className="btn btn-ghost">
            Discuss Your Project Scope
          </Link>
        </div>
      </div>
    </section>
  );
}

