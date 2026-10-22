import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  HelpCircle,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany } from "@/lib/site";
import { LeadForm } from "@/components/svc/LeadForm";

export type DeliverableItem = {
  title: string;
  description: string;
  features?: string[];
};

export type ProcessItem = {
  step?: string | number;
  title: string;
  description: string;
  details?: string[];
};

export type AudienceItem = {
  title: string;
  description: string;
};

export type WhyItem = {
  title: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  tag?: string;
  description?: string;
};

export type PageData = {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  accent: string;
  metaTitle: string;
  metaDesc: string;
  benefits: { t: string; b: string }[];
  includes: string[];
  process: { t: string; b: string }[];
  faqs: { q: string; a: string }[];
  stats: [string, string][];
  related: { label: string; href: string }[];

  // Rich extended sections from DOCX content
  overviewParagraphs?: string[];
  whyTitle?: string;
  whySubtitle?: string;
  whyPoints?: { title: string; description: string }[];
  deliverablesTitle?: string;
  deliverablesSubtitle?: string;
  deliverables?: DeliverableItem[];
  detailedProcess?: ProcessItem[];
  audiencesTitle?: string;
  audiencesSubtitle?: string;
  audiences?: AudienceItem[];
  whyHbsTitle?: string;
  whyHbsSubtitle?: string;
  whyHbsPoints?: WhyItem[];

  // Creative Studio Visual Showcase & Media Fields
  heroImage?: string;
  featureImage?: string;
  galleryTitle?: string;
  gallerySubtitle?: string;
  gallery?: GalleryItem[];
};

export type Variant = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export const pageMeta = (d: PageData) =>
  buildMeta({ title: d.metaTitle, description: d.metaDesc, path: `/${d.slug}` });

const H1: CSSProperties = { letterSpacing: "-0.03em", lineHeight: 1.05 };
const h2c = "font-display font-black text-[var(--color-ink)]";
const h2s: CSSProperties = { fontSize: "var(--fs-3xl)", lineHeight: 1.15, letterSpacing: "-0.02em" };
const pill =
  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em]";
const num = (i: number) => String(i + 1).padStart(2, "0");

type Co = Awaited<ReturnType<typeof getCompany>>;
type P = { d: PageData; co: Co };

/* ------------------------------------------------------------- */
/* Shared Helper Components                                      */
/* ------------------------------------------------------------- */

function Faq({ d, dark = false }: { d: PageData; dark?: boolean }) {
  if (!d.faqs || d.faqs.length === 0) return null;
  return (
    <div className={`divide-y ${dark ? "divide-white/10" : "divide-[var(--color-border)]"}`}>
      {d.faqs.map((f, idx) => (
        <details key={idx} className="group py-5 first:pt-0 last:pb-0" open={idx === 0}>
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-bold transition-colors ${
              dark
                ? "text-white hover:text-red-400"
                : "text-[var(--color-ink)] hover:text-[var(--color-brand)]"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100/70 text-[11px] font-black text-[var(--color-brand)]">
                Q
              </span>
              <span>{f.q}</span>
            </span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform group-open:rotate-180 ${
                dark ? "bg-white/10 text-white" : "bg-red-50 text-[var(--color-brand)]"
              }`}
            >
              <Plus size={16} className="group-open:hidden" />
              <Minus size={16} className="hidden group-open:block" />
            </span>
          </summary>
          <div
            className={`mt-4 pl-9 text-[15px] leading-relaxed ${
              dark ? "text-white/75" : "text-[var(--color-text-muted)]"
            }`}
          >
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

function Related({ d, dark = false }: { d: PageData; dark?: boolean }) {
  if (!d.related || !d.related.length) return null;
  return (
    <div className="flex flex-wrap gap-2.5">
      {d.related.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
            dark
              ? "border-white/20 bg-white/5 text-white/90 hover:bg-white hover:text-black"
              : "border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-sm"
          }`}
        >
          <span>{r.label}</span>
          <ArrowRight size={13} className="opacity-60" />
        </Link>
      ))}
    </div>
  );
}

function CardDescription({
  text,
  dark = false,
}: {
  text?: string;
  dark?: boolean;
}) {
  if (!text) return null;

  // Check if text has numbered items like "1. ", "2. "
  const numbered = text.match(/(?:^|\s)(?:\d+\.\s+)(.*?)(?=(?:\s+\d+\.\s+)|$)/gs);
  if (numbered && numbered.length > 1) {
    return (
      <div className="mt-3 space-y-2">
        {numbered.map((item, i) => {
          const clean = item.trim().replace(/^\d+\.\s*/, "");
          const colonMatch = clean.match(/^([^:]+):\s*(.+)$/);
          return (
            <div
              key={i}
              className={`flex items-start gap-2 text-[12.5px] leading-relaxed ${
                dark ? "text-white/70" : "text-[#55504a]"
              }`}
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  dark ? "bg-white/10 text-white" : "bg-[#fdecea] text-[#e5231b]"
                }`}
              >
                {i + 1}
              </span>
              <span>
                {colonMatch ? (
                  <>
                    <strong className={dark ? "font-semibold text-white" : "font-semibold text-[var(--color-ink)]"}>
                      {colonMatch[1]}:{" "}
                    </strong>
                    {colonMatch[2]}
                  </>
                ) : (
                  clean
                )}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  // Check if text has multiple bullet-like sentences with colons (e.g. "Title: description. Other: description.")
  if (text.includes(": ") && text.length > 160) {
    const parts = text.split(/(?<=\.)\s+(?=[A-Z])/).filter(Boolean);
    if (parts.length > 1) {
      return (
        <div className="mt-2.5 space-y-2 text-sm leading-relaxed">
          {parts.map((p, idx) => {
            const colonMatch = p.match(/^([^:]+):\s*(.+)$/);
            if (colonMatch) {
              return (
                <div key={idx} className="flex items-start gap-2 text-[12.5px]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e5231b]" />
                  <span className={dark ? "text-white/75" : "text-[#55504a]"}>
                    <strong className={dark ? "font-semibold text-white" : "font-semibold text-[var(--color-ink)]"}>
                      {colonMatch[1]}:{" "}
                    </strong>
                    {colonMatch[2]}
                  </span>
                </div>
              );
            }
            return (
              <p key={idx} className={dark ? "text-white/70" : "text-[var(--color-text-muted)]"}>
                {p}
              </p>
            );
          })}
        </div>
      );
    }
  }

  return (
    <p
      className={`mt-2.5 text-sm leading-relaxed ${
        dark ? "text-white/70" : "text-[var(--color-text-muted)]"
      }`}
    >
      {text}
    </p>
  );
}

function Btns({ co, dark = false, d }: { co: Co; dark?: boolean; d?: PageData }) {
  const whatsappUrl = `${co.whatsapp}?text=${encodeURIComponent(
    `Hello Hover team, I am looking for ${d?.title || "your digital growth services"}. Can we discuss a proposal?`
  )}`;
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link
        href="/contact-us"
        className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-brand)] py-3 pl-6 pr-3 text-sm font-bold text-white shadow-[0_14px_30px_-10px_rgba(229,35,27,0.45)] transition-all hover:bg-[var(--color-brand-dark)] hover:-translate-y-0.5"
      >
        <span>Get Free Proposal</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45">
          <ArrowRight size={15} />
        </span>
      </Link>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
          dark
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
            : "border-emerald-600/30 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        WhatsApp Chat
      </a>
      <a
        href={`tel:${co.phone}`}
        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
          dark
            ? "border-white/20 text-white/90 hover:bg-white/10"
            : "border-[var(--color-border)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)]"
        }`}
      >
        <Phone size={14} className="text-[var(--color-brand)]" />
        <span>{co.phone}</span>
      </a>
    </div>
  );
}

function Cta({ d, co, tone = "ink" }: P & { tone?: "accent" | "ink" | "soft" }) {
  const bg =
    tone === "accent"
      ? "bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white"
      : tone === "ink"
      ? "bg-[#10131a] text-white"
      : "bg-red-50/80 border border-red-100 text-[var(--color-ink)]";

  const whatsappUrl = `${co.whatsapp}?text=${encodeURIComponent(
    `Hello Hover team, I am interested in ${d.title}. Can we discuss a proposal?`
  )}`;

  return (
    <section className="py-16">
      <div className="container-max">
        <div
          className={`relative overflow-hidden rounded-[32px] p-8 md:p-14 shadow-2xl ${bg}`}
        >
          {/* Subtle brand glow behind CTA */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-brand)] opacity-20 blur-[100px]"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[620px]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-300">
                <Sparkles size={13} />
                Hover Business Services LLP
              </span>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,1.4rem+1.8vw,2.8rem)] font-black leading-tight">
                Ready to accelerate your growth with {d.title}?
              </h2>
              <p className="mt-3 text-sm sm:text-base opacity-85 leading-relaxed">
                Connect with our senior digital strategists. We evaluate your current visibility, identify high-impact growth gaps, and deliver a tailored roadmap within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-400" /> 100% In-House Team
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" /> White-Hat & Guideline Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-emerald-400" /> Fast 24-Hour Proposal
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-brand-dark)]"
              >
                <span>Claim Free Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${co.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors"
              >
                <Phone size={15} />
                <span>{co.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- */
/* Layout Variant A — Flagship Comprehensive Service Layout       */
/* ------------------------------------------------------------- */
function A({ d, co }: P) {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-white pb-16 pt-12 md:pt-16 border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[var(--color-brand)] opacity-[0.05] blur-[120px]"
          aria-hidden
        />
        <div className="container-max grid items-start gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/90 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
              <Sparkles size={14} />
              <span>{d.eyebrow}</span>
            </div>

            <h1
              className="mt-5 font-display font-black text-[var(--color-ink)]"
              style={{ ...H1, fontSize: "clamp(2.3rem, 1.8rem + 2.5vw, 3.8rem)" }}
            >
              {d.title}
            </h1>

            <p className="mt-5 max-w-[58ch] text-[var(--fs-lg)] font-medium text-[var(--color-ink)]/90 leading-relaxed">
              {d.tagline}
            </p>

            <p className="mt-4 max-w-[58ch] text-base text-[var(--color-text-muted)] leading-relaxed">
              {d.intro}
            </p>

            <Btns co={co} d={d} />

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 max-w-[540px]">
              {d.stats.map(([v, l]) => (
                <div key={l} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-black text-[var(--color-brand)]">
                    {v}
                  </div>
                  <div className="text-[12px] font-semibold text-[var(--color-text-muted)] leading-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 sm:p-8 shadow-xl">
            <div className="mb-4">
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[var(--color-brand)]">
                Direct Consultation
              </span>
              <p className="font-display text-2xl font-black text-[var(--color-ink)]">
                Request a Free Quote
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                We review your site and reply with a tailored strategy within 24 hours.
              </p>
            </div>
            <LeadForm service={d.title} title={d.title} />
          </div>
        </div>
      </section>

      {/* 2. Overview Section: Detailed Concept & Technology */}
      {d.overviewParagraphs && d.overviewParagraphs.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-b border-[var(--color-border)]">
          <div className="container-max">
            {d.featureImage || d.heroImage ? (
              <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                    Overview & Methodology
                  </span>
                  <h2 className={h2c} style={h2s}>
                    Understanding {d.title}
                  </h2>
                  <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[var(--color-ink)]/85">
                    {d.overviewParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={d.featureImage || d.heroImage}
                        alt={d.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          Verified HBS Practice
                        </span>
                        <p className="mt-1 font-display text-sm font-bold text-white/95 truncate">
                          {d.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div >
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                    Overview & Methodology
                  </span>
                  <h2 className={h2c} style={h2s}>
                    Understanding {d.title}
                  </h2>
                </div>
                <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 space-y-5 text-base sm:text-lg leading-relaxed text-[var(--color-ink)]/85">
                  {d.overviewParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Why Businesses Need This Service (Strategic Benefits) */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Business Value & Strategic Growth
            </span>
            <h2 className={h2c} style={h2s}>
              {d.whyTitle || `Why Invest in ${d.title}?`}
            </h2>
            {d.whySubtitle && (
              <p className="mt-3 text-lg text-[var(--color-text-muted)]">
                {d.whySubtitle}
              </p>
            )}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(d.whyPoints && d.whyPoints.length > 0
              ? d.whyPoints
              : d.benefits.map((b) => ({ title: b.t, description: b.b }))
            ).map((point, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[var(--color-brand)] font-bold text-sm mb-4">
                  {num(idx)}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] leading-snug">
                  {point.title}
                </h3>
                <CardDescription text={point.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Deliverables / Scope of Work */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                Scope of Work & Deliverables
              </span>
              <h2 className={h2c} style={h2s}>
                {d.deliverablesTitle || `What Our ${d.title} Includes`}
              </h2>
              <p className="mt-3 text-base text-[var(--color-text-muted)]">
                {d.deliverablesSubtitle ||
                  "Every engagement includes hands-on optimization, continuous analysis, and end-to-end execution."}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)] bg-red-50/50 px-5 py-2.5 text-xs font-bold text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
              >
                <span>Request Detailed Scope</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {d.deliverables && d.deliverables.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {d.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all hover:bg-white hover:border-[var(--color-brand)]/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      <CheckCircle2 size={18} className="text-emerald-600" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <CardDescription text={item.description} />
                  </div>
                  {item.features && item.features.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4 text-xs font-medium text-[var(--color-ink)]">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.includes.map((inc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-[var(--color-brand)]">
                    <Check size={14} />
                  </span>
                  <span className="font-semibold text-sm text-[var(--color-ink)]">{inc}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4.5 Creative Studio Work & Portfolio Gallery */}
      {d.gallery && d.gallery.length > 0 && (
        <section className="py-20 bg-white border-b border-[var(--color-border)]">
          <div className="container-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                  Creative Studio Showcase
                </span>
                <h2 className={h2c} style={h2s}>
                  {d.galleryTitle || `Recent ${d.title} Work & Concepts`}
                </h2>
                <p className="mt-3 text-base text-[var(--color-text-muted)]">
                  {d.gallerySubtitle ||
                    "Explore our recent design systems, brand identities, packaging prototypes, and creative productions."}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-xs font-bold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                >
                  <span>View All Case Studies</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {d.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/40 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/75 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                    {item.tag && (
                      <div className="absolute top-3 right-3">
                        <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Step-by-Step Implementation Process */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Execution Roadmap
            </span>
            <h2 className={h2c} style={h2s}>
              Our Step-by-Step Implementation Process
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)]">
              A structured, transparent methodology ensuring every optimization is grounded in data and business goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(d.detailedProcess && d.detailedProcess.length > 0
              ? d.detailedProcess
              : d.process.map((p, i) => ({
                  step: i + 1,
                  title: p.t,
                  description: p.b,
                }))
            ).map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl font-black text-red-500/30">
                    {num(idx)}
                  </span>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-[var(--color-brand)]">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Target Audience / Who Benefits */}
      {d.audiences && d.audiences.length > 0 && (
        <section className="py-16 bg-white border-b border-[var(--color-border)]">
          <div className="container-max">
            <div className="max-w-2xl mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                Audience & Applicability
              </span>
              <h2 className={h2c} style={h2s}>
                {d.audiencesTitle || "Who Can Benefit From This Service?"}
              </h2>
              {d.audiencesSubtitle && (
                <p className="mt-3 text-base text-[var(--color-text-muted)]">
                  {d.audiencesSubtitle}
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {d.audiences.map((aud, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-[var(--color-brand)] mb-3">
                    <Target size={20} />
                  </div>
                  <h3 className="font-display text-base font-bold text-[var(--color-ink)]">
                    {aud.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {aud.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Why Choose Hover Business Services LLP */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                Agency Advantage
              </span>
              <h2 className={h2c} style={h2s}>
                {d.whyHbsTitle || "Why Choose Hover Business Services LLP?"}
              </h2>
              <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
                {d.whyHbsSubtitle ||
                  "Hover Business Services LLP is a full-service digital agency with 80+ in-house specialists, delivering proven search, AI visibility, and web growth for over 1,500 clients worldwide."}
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    100% In-house engineers, content strategists, and SEO analysts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    Zero automation shortcuts or black-hat methods
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={14} />
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    Transparent monthly reporting with real commercial KPIs
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 font-display text-sm font-bold text-[var(--color-brand)] hover:underline"
                >
                  <span>Learn more about our agency</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(d.whyHbsPoints && d.whyHbsPoints.length > 0
                ? d.whyHbsPoints
                : [
                    {
                      title: "Cross-Disciplinary Strategy",
                      description:
                        "We unite technical SEO, generative engine optimization, content architecture, and digital PR into one compounding engine.",
                    },
                    {
                      title: "Factual & Authoritative Content",
                      description:
                        "Human-reviewed editorial standards ensuring your brand builds genuine trust with both search algorithms and human buyers.",
                    },
                    {
                      title: "Customized Growth Campaigns",
                      description:
                        "No cookie-cutter packages. Every strategy is built around your specific margins, competitors, and growth objectives.",
                    },
                    {
                      title: "Proactive Communication",
                      description:
                        "Dedicated account management, bi-weekly progress updates, and rapid response times on WhatsApp, email, and phone.",
                    },
                  ]
              ).map((pt, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-base font-bold text-[var(--color-ink)]">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions Accordion */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Got Questions?
            </span>
            <h2 className={h2c} style={h2s}>
              Frequently Asked Questions About {d.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Clear, transparent answers to help you make an informed decision.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 shadow-sm">
            <Faq d={d} />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
              Explore Related Services
            </p>
            <div className="flex justify-center">
              <Related d={d} />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final High-Converting CTA */}
      <Cta d={d} co={co} tone="ink" />
    </>
  );
}

/* ------------------------------------------------------------- */
/* Layout Variant B — Dark Mode Executive Service Presentation   */
/* ------------------------------------------------------------- */
function B({ d, co }: P) {
  return (
    <div className="bg-[#10131a] text-white">
      <section className="relative overflow-hidden pb-16 pt-16 text-center md:pt-24 border-b border-white/10">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
          style={{ background: "var(--color-brand)" }}
        />
        <div className="container-max relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400">
            <Sparkles size={13} />
            {d.eyebrow}
          </span>
          <h1
            className="mx-auto mt-6 max-w-[20ch] font-display font-black"
            style={{ ...H1, fontSize: "clamp(2.5rem, 5vw, 4.8rem)" }}
          >
            {d.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[62ch] text-lg text-white/80 leading-relaxed">
            {d.tagline}
          </p>
          <div className="flex justify-center">
            <Btns co={co} dark d={d} />
          </div>

          <div className="mx-auto mt-14 grid max-w-[860px] grid-cols-3 gap-3">
            {d.stats.map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="font-display text-3xl font-black text-[var(--color-brand)]">{v}</p>
                <p className="mt-1 text-xs text-white/60 font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      {d.overviewParagraphs && d.overviewParagraphs.length > 0 && (
        <section className="py-16 border-b border-white/10">
          <div className="container-max max-w-4xl">
            <h2 className="font-display text-2xl font-bold mb-6 text-white text-center">
              About {d.title}
            </h2>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 space-y-4 text-white/80 leading-relaxed">
              {d.overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-16 border-b border-white/10">
        <div className="container-max">
          <h2 className="font-display text-3xl font-black text-center mb-12">
            {d.whyTitle || "Key Growth Advantages"}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(d.whyPoints && d.whyPoints.length > 0
              ? d.whyPoints
              : d.benefits.map((b) => ({ title: b.t, description: b.b }))
            ).map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-[var(--color-brand)] transition-colors"
              >
                <span className="font-display text-2xl font-black text-[var(--color-brand)]">
                  {num(i)}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{b.title}</h3>
                <CardDescription text={b.description} dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 border-b border-white/10">
        <div className="container-max max-w-4xl">
          <h2 className="mb-8 font-display text-3xl font-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <Faq d={d} dark />
          </div>
          <div className="mt-8 flex justify-center">
            <Related d={d} dark />
          </div>
        </div>
      </section>

      <Cta d={d} co={co} tone="accent" />
    </div>
  );
}

/* ------------------------------------------------------------- */
/* Layout Variant C — Creative Studio & Visual Design Showcase    */
/* ------------------------------------------------------------- */
function C({ d, co }: P) {
  return (
    <>
      {/* 1. Creative Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white pb-16 pt-12 md:pt-16 border-b border-[var(--color-border)]">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[var(--color-brand)] opacity-[0.06] blur-[120px]"
          aria-hidden
        />
        <div className="container-max grid items-start gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-red-50/90 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
              <Sparkles size={14} />
              <span>Creative Studio — {d.eyebrow}</span>
            </div>

            <h1
              className="mt-5 font-display font-black text-[var(--color-ink)]"
              style={{ ...H1, fontSize: "clamp(2.4rem, 2rem + 2.5vw, 4rem)" }}
            >
              {d.title}
            </h1>

            <p className="mt-5 max-w-[56ch] text-[var(--fs-lg)] font-medium text-[var(--color-ink)]/90 leading-relaxed">
              {d.tagline}
            </p>

            <p className="mt-4 max-w-[56ch] text-base text-[var(--color-text-muted)] leading-relaxed">
              {d.intro}
            </p>

            <Btns co={co} d={d} />

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 max-w-[520px]">
              {d.stats.map(([v, l]) => (
                <div key={l} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-black text-[var(--color-brand)]">
                    {v}
                  </div>
                  <div className="text-[12px] font-semibold text-[var(--color-text-muted)] leading-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Quote Form */}
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 sm:p-8 shadow-xl">
            <div className="mb-4">
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[var(--color-brand)]">
                Creative Consultation
              </span>
              <p className="font-display text-2xl font-black text-[var(--color-ink)]">
                Start a Creative Project
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Tell us your vision. We deliver concepts, scopes, and estimates within 24 hours.
              </p>
            </div>
            <LeadForm service={d.title} title={d.title} />
          </div>
        </div>
      </section>

      {/* 2. Featured Creative Portfolio & Visual Showcase (Prominently Placed) */}
      {d.gallery && d.gallery.length > 0 && (
        <section className="py-20 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="container-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                  Featured Work & Concepts
                </span>
                <h2 className={h2c} style={h2s}>
                  {d.galleryTitle || `${d.title} Visual Showcase`}
                </h2>
                <p className="mt-3 text-base text-[var(--color-text-muted)]">
                  {d.gallerySubtitle ||
                    "A selection of brand systems, prototypes, and creative productions crafted by our studio."}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-xs font-bold text-[var(--color-ink)] shadow-sm transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                >
                  <span>Explore Master Portfolio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {d.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brand)]/50 hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="rounded-full bg-black/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10">
                        {item.category}
                      </span>
                    </div>
                    {item.tag && (
                      <div className="absolute top-3.5 right-3.5">
                        <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Design Philosophy & Technology Split with Featured Image */}
      {d.overviewParagraphs && d.overviewParagraphs.length > 0 && (
        <section className="py-20 bg-white border-b border-[var(--color-border)]">
          <div className="container-max">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                  Creative Philosophy & Execution
                </span>
                <h2 className={h2c} style={h2s}>
                  The Thinking Behind {d.title}
                </h2>
                <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[var(--color-ink)]/85">
                  {d.overviewParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold text-[var(--color-ink)]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-3.5 py-1 text-[var(--color-brand)]">
                    <CheckCircle2 size={14} /> 100% Original Vector Art
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-3.5 py-1 text-[var(--color-brand)]">
                    <CheckCircle2 size={14} /> Raw Editable Source Files
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-3.5 py-1 text-[var(--color-brand)]">
                    <CheckCircle2 size={14} /> Full Commercial Rights
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={d.featureImage || d.heroImage || "/images/services/creative-design.png"}
                      alt={d.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Hover Creative Studio
                      </span>
                      <p className="mt-1.5 font-display text-base font-bold text-white truncate">
                        {d.title} — Production Standards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Strategic Advantages */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Commercial Impact
            </span>
            <h2 className={h2c} style={h2s}>
              {d.whyTitle || `Why Great Design Matters`}
            </h2>
            {d.whySubtitle && (
              <p className="mt-3 text-lg text-[var(--color-text-muted)]">
                {d.whySubtitle}
              </p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(d.whyPoints && d.whyPoints.length > 0
              ? d.whyPoints
              : d.benefits.map((b) => ({ title: b.t, description: b.b }))
            ).map((point, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[var(--color-brand)] font-bold text-sm mb-4">
                  {num(idx)}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] leading-snug">
                  {point.title}
                </h3>
                <CardDescription text={point.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Capabilities & Deliverables */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                Scope & Capabilities
              </span>
              <h2 className={h2c} style={h2s}>
                {d.deliverablesTitle || `What Our ${d.title} Includes`}
              </h2>
              <p className="mt-3 text-base text-[var(--color-text-muted)]">
                {d.deliverablesSubtitle ||
                  "Precision crafted by our dedicated team of senior art directors, UI designers, and animators."}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)] bg-red-50/50 px-5 py-2.5 text-xs font-bold text-[var(--color-brand)] transition-colors hover:bg-[var(--color-brand)] hover:text-white"
              >
                <span>Request Creative Scope</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.deliverables?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all hover:bg-white hover:border-[var(--color-brand)]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <CardDescription text={item.description} />
                </div>
                {item.features && item.features.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4 text-xs font-medium text-[var(--color-ink)]">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Creative Workflow Process */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Creative Roadmap
            </span>
            <h2 className={h2c} style={h2s}>
              Our Creative Production Process
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)]">
              From briefing to final file delivery, our structured creative phases ensure alignment and zero surprises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(d.detailedProcess || d.process.map((p, i) => ({ step: i + 1, title: p.t, description: p.b }))).map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl font-black text-red-500/30">
                    {num(idx)}
                  </span>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-[var(--color-brand)]">
                    Phase {idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs Accordion */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Common Questions
            </span>
            <h2 className={h2c} style={h2s}>
              Frequently Asked Questions About {d.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Answers regarding file formats, revisions, intellectual property, and timelines.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 shadow-sm">
            <Faq d={d} />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
              Explore Sister Creative Services
            </p>
            <div className="flex justify-center">
              <Related d={d} />
            </div>
          </div>
        </div>
      </section>

      <Cta d={d} co={co} tone="ink" />
    </>
  );
}

/* ------------------------------------------------------------- */
/* Layout Variant D — Industry & B2B Vertical Specialist Layout   */
/* ------------------------------------------------------------- */
function D({ d, co }: P) {
  return (
    <>
      {/* 1. Industry Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pb-16 pt-12 md:pt-16 border-b border-[var(--color-border)]">
        <div className="container-max grid items-start gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
              <Target size={14} className="text-[var(--color-brand)]" />
              <span>Specialized Industry Practice</span>
            </div>

            <h1
              className="mt-5 font-display font-black text-[var(--color-ink)]"
              style={{ ...H1, fontSize: "clamp(2.3rem, 1.8rem + 2.4vw, 3.8rem)" }}
            >
              {d.title}
            </h1>

            <p className="mt-5 max-w-[58ch] text-[var(--fs-lg)] font-medium text-[var(--color-ink)]/90 leading-relaxed">
              {d.tagline}
            </p>

            <p className="mt-4 max-w-[58ch] text-base text-[var(--color-text-muted)] leading-relaxed">
              {d.intro}
            </p>

            <Btns co={co} d={d} />

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6 max-w-[540px]">
              {d.stats.map(([v, l]) => (
                <div key={l} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl font-black text-[var(--color-brand)]">
                    {v}
                  </div>
                  <div className="text-[12px] font-semibold text-[var(--color-text-muted)] leading-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Industry Inquiry Form */}
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 sm:p-8 shadow-xl">
            <div className="mb-4">
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[var(--color-brand)]">
                Sector Strategy Call
              </span>
              <p className="font-display text-2xl font-black text-[var(--color-ink)]">
                Request Sector Proposal
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Connect with our senior practice specialists for a tailored commercial roadmap.
              </p>
            </div>
            <LeadForm service={d.title} title={d.title} />
          </div>
        </div>
      </section>

      {/* 2. Industry Opportunity & Methodology Split with Image */}
      {d.overviewParagraphs && d.overviewParagraphs.length > 0 && (
        <section className="py-20 bg-white border-b border-[var(--color-border)]">
          <div className="container-max">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
                  Market Dynamics & Strategy
                </span>
                <h2 className={h2c} style={h2s}>
                  Navigating Growth in {d.title}
                </h2>
                <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-[var(--color-ink)]/85">
                  {d.overviewParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={d.featureImage || d.heroImage || "/images/about-businesswoman.jpg"}
                      alt={d.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        HBS Industry Practice
                      </span>
                      <p className="mt-1 font-display text-base font-bold text-white truncate">
                        Commercial Leadership in {d.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Strategic ROI & Business Drivers */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Commercial Impact
            </span>
            <h2 className={h2c} style={h2s}>
              {d.whyTitle || `Why Invest in Specialized Sector Marketing?`}
            </h2>
            {d.whySubtitle && (
              <p className="mt-3 text-lg text-[var(--color-text-muted)]">
                {d.whySubtitle}
              </p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(d.whyPoints || d.benefits.map((b) => ({ title: b.t, description: b.b }))).map((point, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:shadow-md hover:border-[var(--color-brand)]/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[var(--color-brand)] font-bold text-sm mb-4">
                  {num(idx)}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] leading-snug">
                  {point.title}
                </h3>
                <CardDescription text={point.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. End-to-End Scope */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Deliverables & Scope
            </span>
            <h2 className={h2c} style={h2s}>
              {d.deliverablesTitle || `Our ${d.title} Solutions`}
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)]">
              {d.deliverablesSubtitle || "Full-spectrum digital execution aligned with your sector's buying behaviors."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.deliverables?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all hover:bg-white hover:border-[var(--color-brand)]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand)] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <CardDescription text={item.description} />
                </div>
                {item.features && item.features.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-[var(--color-border)] pt-4 text-xs font-medium text-[var(--color-ink)]">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sector Process & Roadmap */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Execution Roadmap
            </span>
            <h2 className={h2c} style={h2s}>
              Step-by-Step Implementation
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)]">
              A structured, compliant process from initial audit to scaling qualified sector revenue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(d.detailedProcess || d.process.map((p, i) => ({ step: i + 1, title: p.t, description: p.b }))).map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl font-black text-red-500/30">
                    {num(idx)}
                  </span>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-[var(--color-brand)]">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">
              Common Questions
            </span>
            <h2 className={h2c} style={h2s}>
              Frequently Asked Questions About {d.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Specific answers addressing compliance, lead quality, timelines, and commercial results.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10 shadow-sm">
            <Faq d={d} />
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
              Explore Related Services
            </p>
            <div className="flex justify-center">
              <Related d={d} />
            </div>
          </div>
        </div>
      </section>

      <Cta d={d} co={co} tone="ink" />
    </>
  );
}

const E = A;
const F = A;
const G = A;
const H = A;

const MAP = { A, B, C, D, E, F, G, H } as const;

export async function PageView({ d, v }: { d: PageData; v?: Variant }) {
  const co = await getCompany();
  // Standardize accent to HBS brand red (#e5231b) if missing or non-brand
  const activeAccent =
    !d.accent ||
    d.accent === "#4f46e5" ||
    d.accent === "#8b5cf6" ||
    d.accent === "#6366f1" ||
    d.accent === "#7c3aed" ||
    d.accent === "#2563eb" ||
    d.accent === "#0284c7" ||
    d.accent === "#1d4ed8"
      ? "#e5231b"
      : d.accent;

  const L = v && MAP[v] ? MAP[v] : A;

  return (
    <div
      className="theme-hbs pv text-[var(--color-ink)] bg-white min-h-screen"
      style={
        {
          "--a": activeAccent,
          "--color-brand": "#e5231b",
          "--color-brand-dark": "#b8140e",
          "--color-brand-soft": "#fdecea",
        } as CSSProperties
      }
    >
      <style>{`.pv h1, .pv h2, .pv h3 { color: inherit; }`}</style>

      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-3 text-xs">
        <div className="container-max flex items-center justify-between">
          <nav className="flex items-center gap-2 text-[var(--color-text-muted)]">
            <Link href="/" className="hover:text-[var(--color-ink)] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/services" className="hover:text-[var(--color-ink)] transition-colors">
              Services
            </Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-[var(--color-text-muted)]">{d.eyebrow}</span>
            <ChevronRight size={12} className="opacity-40" />
            <span className="font-bold text-[var(--color-ink)] truncate max-w-[200px] sm:max-w-none">
              {d.title}
            </span>
          </nav>

          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-red-200/80 bg-red-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
            <ShieldCheck size={12} />
            Hover Certified Service
          </span>
        </div>
      </div>

      <L d={d} co={co} />
    </div>
  );
}

export type { ReactNode };
