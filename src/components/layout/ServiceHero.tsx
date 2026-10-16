import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, ClipboardCheck, Phone } from "lucide-react";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import type { SvcTheme } from "@/lib/serviceTheme";

export function ServiceHero({
  eyebrow, title, tagline, crumbs, theme, phone,
}: { eyebrow: string; title: string; tagline: string; crumbs: Crumb[]; theme: SvcTheme; phone: string }) {
  const words = title.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <style>{`
        @keyframes svc-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes svc-spin{to{transform:rotate(360deg)}}
      `}</style>
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-90" style={{ backgroundImage: "url(/images/hero-bg.webp)" }} aria-hidden />

      <div className="container-max grid items-center gap-10 pb-16 pt-8 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-14">
        {/* Content */}
        <div>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] font-semibold text-[var(--color-text-muted)]">
            <Link href="/" className="hover:text-[var(--color-brand)]">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="inline-flex items-center gap-1.5">
                <ChevronRight size={13} />
                <span className="text-[var(--color-ink)]">{c.label}</span>
              </span>
            ))}
          </nav>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/85 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-ink)] shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ background: theme.brand, boxShadow: `0 0 0 4px ${theme.brand}33` }} />
            {eyebrow || theme.label}
          </span>

          <h1 className="mt-6 max-w-[17ch] text-[var(--color-ink)]" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1.05 }}>
            {head ? `${head} ` : null}
            <span className="bg-gradient-to-r from-[#e5231b] to-[#ff4d8d] bg-clip-text text-transparent">{tail}</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-[var(--fs-lg)] leading-relaxed text-[var(--color-text-muted)]">{tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-7 text-sm font-bold text-white shadow-[0_14px_34px_-10px_rgba(229,35,27,.6)] transition-transform hover:-translate-y-0.5"
              style={{ background: theme.brand }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                <ArrowRight size={17} />
              </span>
              Get free proposal
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] backdrop-blur hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">
              <Phone size={15} /> Call us
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[var(--fs-sm)] font-semibold text-[var(--color-ink)]/80">
            {["Free proposal", "Free website audit"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-white" style={{ background: theme.brand }}>
                  <Check size={12} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center py-6">
          <span className="absolute inset-4 -z-10 rounded-full blur-3xl" style={{ background: `${theme.brand}26` }} aria-hidden />
          <span className="absolute inset-0 -z-10 rounded-full border border-dashed border-[var(--color-brand)]/30" style={{ animation: "svc-spin 40s linear infinite" }} aria-hidden />
          <span className="absolute inset-10 -z-10 rounded-full border border-[var(--color-brand)]/15" aria-hidden />

          <div style={{ animation: "svc-float 5s ease-in-out infinite" }}>
            <Image src={theme.image} alt={eyebrow || title} width={366} height={391} priority sizes="(max-width:1024px) 70vw, 380px" className="h-auto w-[300px] drop-shadow-[0_30px_40px_rgba(30,40,100,.25)] sm:w-[360px]" />
          </div>

          <span className="absolute left-0 top-6 inline-flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-4 py-2.5 text-[13px] font-bold text-[var(--color-ink)] shadow-xl backdrop-blur sm:-left-4" style={{ animation: "svc-float 6s ease-in-out infinite" }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: theme.brand }} />
            {theme.label}
          </span>
          <Link
            href="/free-website-audit"
            className="absolute bottom-4 right-0 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl backdrop-blur transition-transform hover:-translate-y-1 sm:-right-4"
            style={{ animation: "svc-float 7s ease-in-out infinite" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: theme.brand }}>
              <ClipboardCheck size={18} />
            </span>
            <span>
              <span className="block text-[13px] font-bold text-[var(--color-ink)]">Free website audit</span>
              <span className="block text-[11px] text-[var(--color-text-muted)]">Find what holds you back</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
