import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Award } from "lucide-react";

interface PortfolioHeroProps {
  stats?: { value: string; suffix: string; label: string }[];
}

export function PortfolioHero({ stats }: PortfolioHeroProps) {
  const displayStats = stats && stats.length >= 4 ? stats : [
    { value: "1500", suffix: "+", label: "Projects Shipped" },
    { value: "50", suffix: "Cr+", label: "Client Revenue" },
    { value: "4.2", suffix: "x", label: "Average ROAS" },
    { value: "98.4", suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] text-white">
      {/* Background glow & mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 -top-24 h-[480px] w-[480px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(229,35,27,.35), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(185,138,47,.25), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-max relative pt-16 pb-14 sm:pt-20 sm:pb-18 lg:pt-24 lg:pb-20 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)] backdrop-blur-md">
          <Sparkles size={14} className="text-[var(--color-accent)] animate-pulse" />
          <span>Proven Impact · 1,500+ Deployments</span>
        </div>

        {/* Master headline */}
        <h1
          className="mx-auto mt-6 max-w-[20ch] font-display font-extrabold tracking-tight text-white"
          style={{ fontSize: "var(--fs-4xl)", lineHeight: 1.1 }}
        >
          Work We Are Proud To Be{" "}
          <span className="text-gradient-brand">Judged On</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-[62ch] text-[var(--fs-base)] text-white/75 sm:text-[var(--fs-lg)] leading-relaxed">
          Explore production websites, high-converting stores, custom mobile apps, and multi-channel growth systems engineered to outrank competitors and compound revenue.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio-gallery"
            className="btn btn-brand"
          >
            Explore Projects <ArrowRight size={16} />
          </a>
          <Link
            href="/contact-us"
            className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
          >
            Start Your Project
          </Link>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 sm:gap-8">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-400" />
            100% In-House Engineering
          </span>
          <span className="inline-flex items-center gap-1.5">
            <TrendingUp size={16} className="text-amber-400" />
            Quantifiable ROI Reporting
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Award size={16} className="text-[var(--color-brand)]" />
            Enterprise-Grade SLA
          </span>
        </div>

        {/* High-Impact Quick Stats Strip */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[.04] backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {displayStats.slice(0, 4).map((s, idx) => (
              <div key={idx} className="p-5 sm:p-6 text-center transition-colors hover:bg-white/[.04]">
                <p className="font-display text-3xl font-extrabold sm:text-4xl text-white">
                  {s.value}
                  <span className="text-[var(--color-brand)]">{s.suffix}</span>
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Wave / Curve Divider */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute bottom-[-1px] left-0 h-[34px] w-full sm:h-[48px]"
      >
        <path d="M0 48h1440V0c-240 32-560 48-720 48S240 32 0 0v48z" fill="var(--color-background)" />
      </svg>
    </section>
  );
}

