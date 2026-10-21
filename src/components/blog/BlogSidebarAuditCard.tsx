import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { company } from "@/data/home";

export function BlogSidebarAuditCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[#fdecea]/40 via-white to-white p-6 shadow-[0_8px_30px_rgba(229,35,27,0.06)]">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#e5231b]/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fdecea] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e5231b]">
          <Sparkles size={12} />
          <span>Zero Obligation Audit</span>
        </div>

        <h3 className="mt-3.5 font-display text-[18px] font-bold leading-snug text-[var(--color-ink)]">
          Want to Rank in Your City&apos;s Local 3-Pack?
        </h3>

        <p className="mt-2 text-[13px] leading-relaxed text-[#6b6560]">
          Get an exhaustive 48-point diagnostic of your Google Business Profile, citations, and local competitor map grid.
        </p>

        <div className="mt-4 space-y-2 border-t border-[var(--color-border)]/80 pt-4">
          <div className="flex items-start gap-2 text-[12px] text-[#4a4540]">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#e5231b]" />
            <span>Profile category &amp; keyword gap check</span>
          </div>
          <div className="flex items-start gap-2 text-[12px] text-[#4a4540]">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#e5231b]" />
            <span>Citation consistency (NAP audit)</span>
          </div>
          <div className="flex items-start gap-2 text-[12px] text-[#4a4540]">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#e5231b]" />
            <span>Geo-grid 5km ranking radius analysis</span>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          <Link
            href="/free-website-audit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#e5231b] px-4 py-3 text-center text-[13px] font-bold text-white shadow-[0_6px_20px_rgba(229,35,27,0.25)] transition-all duration-200 hover:bg-[#b8140e] hover:shadow-[0_8px_25px_rgba(229,35,27,0.35)]"
          >
            <span>Claim Free Local Audit</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={`${company.whatsapp}?text=${encodeURIComponent("Hi HBS Team, I want to talk to an SEO specialist about ranking in Google Map Pack.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-center text-[12px] font-bold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#857f79]">
            <Phone size={12} className="text-[#e5231b]" />
            <span>Or call our specialists directly:</span>
            <a href={`tel:${company.phone}`} className="font-semibold text-[var(--color-ink)] hover:text-[#e5231b]">
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

