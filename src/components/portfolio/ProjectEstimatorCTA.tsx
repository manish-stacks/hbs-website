"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Check, ShieldCheck, Zap, Code2, Users } from "lucide-react";

interface ProjectEstimatorCTAProps {
  company: {
    phone: string;
    whatsapp: string;
    email: string;
  };
}

const SCOPES = [
  { id: "web", label: "Web Platform / SaaS", icon: Code2 },
  { id: "ecommerce", label: "E-Commerce Storefront", icon: Zap },
  { id: "apps", label: "Mobile Application", icon: Zap },
  { id: "seo", label: "SEO & Growth Engine", icon: Zap },
  { id: "branding", label: "Brand Identity & UI/UX", icon: Users },
];

const TIMELINES = [
  "Immediate (Within 2 weeks)",
  "Next 30–60 Days",
  "Planning Phase",
];

export function ProjectEstimatorCTA({ company }: ProjectEstimatorCTAProps) {
  const [selectedScope, setSelectedScope] = useState("web");
  const [selectedTimeline, setSelectedTimeline] = useState("Immediate (Within 2 weeks)");

  const currentScopeLabel = SCOPES.find((s) => s.id === selectedScope)?.label ?? "Web Platform / SaaS";
  const whatsappUrl = `${company.whatsapp}?text=${encodeURIComponent(
    `Hello HBS team, I am looking to build a ${currentScopeLabel} project with a timeline of "${selectedTimeline}". Can we discuss the scope?`
  )}`;

  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-surface)]">
      <div className="container-max">
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Interactive Scope Estimator */}
            <div className="p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <span className="pill">Start Your Project</span>
              <h2 className="mt-4 font-display font-extrabold text-[var(--color-ink)]" style={{ fontSize: "var(--fs-2xl)" }}>
                Have A Project In Mind? Let&apos;s Build Something <span className="text-gradient-brand">Exceptional</span>.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                Tell us what you want to achieve. We will review your goals and return with a technical roadmap, timeline, and realistic cost breakdown.
              </p>

              {/* 1. Select Scope */}
              <div className="mt-8">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] block">
                  1. Select What You Need Built
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {SCOPES.map((scope) => {
                    const isSelected = selectedScope === scope.id;
                    return (
                      <button
                        key={scope.id}
                        type="button"
                        onClick={() => setSelectedScope(scope.id)}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[var(--color-ink)] text-white shadow-md ring-2 ring-[var(--color-ink)]"
                            : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-ink)]"
                        }`}
                      >
                        {isSelected && <Check size={14} className="text-[var(--color-brand)]" />}
                        <span>{scope.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Select Timeline */}
              <div className="mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] block">
                  2. Targeted Launch Timeline
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {TIMELINES.map((time) => {
                    const isSelected = selectedTimeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTimeline(time)}
                        className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[var(--color-brand)] text-white shadow-sm font-semibold"
                            : "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-ink)]"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--color-border)]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brand"
                >
                  <MessageSquare size={16} /> Discuss on WhatsApp
                </a>
                <Link
                  href={`/contact-us?scope=${selectedScope}`}
                  className="btn btn-ghost"
                >
                  Send Project RFP <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="btn border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                >
                  <Phone size={15} /> {company.phone}
                </a>
              </div>
            </div>

            {/* Right Column: Trust Proof & Guarantees */}
            <div className="flex flex-col justify-between bg-[var(--color-ink)] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12 relative overflow-hidden">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px]"
                style={{ background: "radial-gradient(circle, rgba(229,35,27,.4), transparent 70%)" }}
              />

              <div className="relative z-10">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  The HBS Guarantee
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  Why Leading Brands Trust Our Execution
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-emerald-400">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">100% In-House Delivery</p>
                      <p className="text-[11px] text-white/60">
                        80+ engineers, strategists, and designers under one roof. No freelance handoffs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-400">
                      <Zap size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Strict Enterprise NDA</p>
                      <p className="text-[11px] text-white/60">
                        Full IP rights, source code ownership, and data privacy guaranteed from day one.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[var(--color-brand)]">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Transparent Fixed Pricing</p>
                      <p className="text-[11px] text-white/60">
                        Detailed milestones with no hidden surprise costs or hourly scope creeps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder / Team Quote */}
              <div className="relative z-10 mt-8 border-t border-white/15 pt-6">
                <p className="text-xs italic text-white/75">
                  &ldquo;Every project we take on is engineered with one objective: to give our clients an unfair commercial advantage.&rdquo;
                </p>
                <p className="mt-2 text-[11px] font-bold text-[var(--color-accent)]">
                  Hover Business Services LLP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
