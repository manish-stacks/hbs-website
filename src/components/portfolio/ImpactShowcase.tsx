import { Reveal } from "@/components/ui/Reveal";
import { TrendingUp, Award, Rocket, CheckCircle2, ArrowUpRight } from "lucide-react";
import { results } from "@/data/home";
import { IMPACT_HIGHLIGHTS } from "@/data/portfolioData";
import Link from "next/link";

export function ImpactShowcase() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "trending-up":
        return <TrendingUp className="text-[var(--color-brand)]" size={24} />;
      case "rocket":
        return <Rocket className="text-amber-400" size={24} />;
      case "award":
        return <Award className="text-emerald-400" size={24} />;
      default:
        return <CheckCircle2 className="text-[var(--color-brand)]" size={24} />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-20 sm:py-24 text-white">
      {/* Background Ambience & Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-48 top-12 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(229,35,27,.3), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-48 bottom-12 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(185,138,47,.25), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-max relative">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-[62ch] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] backdrop-blur">
            Measurable Outcomes
          </span>
          <h2
            className="mt-4 font-display font-extrabold text-white"
            style={{ fontSize: "var(--fs-3xl)" }}
          >
            The Numbers Behind Our <span className="text-gradient-brand">Track Record</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
            We don’t measure success by lines of code or vanity impressions. We judge ourselves on commercial acceleration, customer acquisition costs, and compounding revenue.
          </p>
        </Reveal>

        {/* 4 Impact Metric Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[.04] p-6 transition-all duration-300 hover:border-[var(--color-brand)]/50 hover:bg-white/[.07]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                  {getIcon(h.icon)}
                </div>
                <p className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                  {h.metric}
                </p>
                <p className="mt-1 text-sm font-bold text-white/95">{h.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{h.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Deep Dive: What Changed After HBS Took Over */}
        <div className="mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                Selected Deep Dives
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                Before & After Transformations
              </h3>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-[var(--color-brand)] transition-colors"
            >
              Request full audit <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {results.map((r, i) => (
              <article
                key={i}
                className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[.06]"
              >
                {/* 3 Metric Badges Header */}
                <div className="grid grid-cols-3 gap-2 border-b border-white/10 bg-white/[.03] p-5 text-center">
                  {r.metrics.map(([v, l], mi) => (
                    <div key={mi} className="px-1">
                      <p className="text-gradient-brand font-display text-xl font-extrabold sm:text-2xl leading-none">
                        {v}
                      </p>
                      <p className="mt-1 text-[10px] font-medium leading-tight text-white/55">
                        {l}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--color-brand)]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff8a82]">
                      {r.industry}
                    </span>
                    <span className="text-[11px] font-semibold text-white/50">{r.client}</span>
                  </div>

                  <div className="mt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-400">
                      The Obstacle
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{r.challenge}</p>
                  </div>

                  <div className="mt-5 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
                      The HBS Execution
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{r.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

