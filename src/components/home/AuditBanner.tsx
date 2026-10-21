"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function AuditBanner() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    const cleanUrl = url.replace(/^https?:\/\//i, "").trim();
    router.push(`/free-website-audit?domain=${encodeURIComponent(cleanUrl)}`);
  };

  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-surface)]">
      <div className="container-max">
        <div
          className="relative overflow-hidden rounded-[var(--radius-lg)] p-8 sm:p-12 lg:p-14 text-white shadow-2xl"
          style={{ background: "linear-gradient(130deg, #10131a 0%, #1e222d 50%, #2f1715 100%)" }}
        >
          {/* Ambient Lighting */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(229,35,27,.45), transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(185,138,47,.35), transparent 70%)" }}
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-sm">
                <Sparkles size={13} /> Free 60-Second Performance Check
              </span>

              <h2 className="mt-4 font-display font-extrabold text-white" style={{ fontSize: "var(--fs-2xl)" }}>
                Want to know why your website isn&apos;t ranking or converting?
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-white/75 sm:text-sm max-w-[54ch]">
                Enter your website URL below. Our technical crawler will scan your page speed, mobile UX, Google indexing, and competitive keyword gaps — 100% free with no sales pressure.
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Core Web Vitals Check
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  SEO & Indexation Audit
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Mobile UX Analysis
                </span>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-5">
              <form
                onSubmit={handleAudit}
                className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/[.07] p-4 backdrop-blur-md sm:p-5 shadow-xl"
              >
                <label className="text-xs font-bold text-white/90">
                  Enter Your Website URL
                </label>
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="yourdomain.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 pl-9 pr-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-[var(--color-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-brand w-full justify-center text-xs sm:text-sm font-bold shadow-lg"
                >
                  <span>Audit My Website For Free</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-center text-white/50">
                  Instant diagnosis · No credit card required
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

