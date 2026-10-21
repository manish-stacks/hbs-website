import { PROCESS_STEPS } from "@/data/portfolioData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectProcess() {
  return (
    <section className="section-space relative overflow-hidden bg-white border-t border-[var(--color-border)]">
      <div className="container-max">
        {/* Section Header */}
        <div className="mx-auto max-w-[62ch] text-center">
          <span className="pill">Execution Framework</span>
          <h2 className="mt-4" style={{ fontSize: "var(--fs-3xl)" }}>
            How We Take Projects From Concept To{" "}
            <span className="text-gradient-brand">Market Dominance</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            Our battle-tested, four-phase delivery framework eliminates guesswork, accelerates time-to-market, and guarantees high-performance standards at every milestone.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/60 hover:bg-white hover:shadow-[var(--shadow-md)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-[var(--color-brand)]">
                    {step.number}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] border border-[var(--color-border)]">
                    {step.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  {step.body}
                </p>
              </div>

              {/* Step Bullets */}
              <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                <ul className="space-y-2">
                  {step.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 text-[11px] text-[var(--color-text)]">
                      <CheckCircle2 size={13} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 sm:p-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-base font-bold text-[var(--color-ink)]">
              Looking for a dedicated team for your next major initiative?
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              We provide fixed-cost project contracts as well as dedicated agile squads.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="btn btn-primary text-xs shrink-0"
          >
            Schedule Discovery Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

