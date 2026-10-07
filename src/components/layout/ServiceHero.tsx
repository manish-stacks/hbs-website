import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import type { SvcTheme } from "@/lib/serviceTheme";

export function ServiceHero({
  eyebrow, title, tagline, crumbs, theme, phone,
}: { eyebrow: string; title: string; tagline: string; crumbs: Crumb[]; theme: SvcTheme; phone: string }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(125deg, ${theme.from} 0%, ${theme.to} 100%)` }}
    >
      <div className="absolute inset-0 bg-circuit opacity-[.1] invert" aria-hidden />
      <span className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full blur-[110px]" style={{ background: theme.brand, opacity: 0.45 }} />

      <div className="container-max relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <Breadcrumbs crumbs={crumbs} tone="dark" />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ background: theme.brand, boxShadow: `0 0 0 4px ${theme.brand}55` }} />
            {theme.label}
          </span>
          <h1 className="mt-5 max-w-[20ch] text-white" style={{ fontSize: "var(--fs-4xl)" }}>{title}</h1>
          <p className="mt-5 max-w-[56ch] text-[var(--fs-base)] leading-relaxed text-white/75">{tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: theme.brand }}>
              Get free proposal <ArrowRight size={16} />
            </Link>
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              <Phone size={15} /> Call us
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <span className="absolute -inset-3 rotate-3 rounded-[32px] border border-white/20" aria-hidden />
          <span className="absolute -inset-3 -rotate-3 rounded-[32px]" style={{ background: `${theme.brand}33` }} aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/25 bg-white/10 shadow-[0_30px_70px_rgba(0,0,0,.35)] backdrop-blur">
            <Image src={theme.image} alt={eyebrow} fill priority sizes="(max-width:1024px) 90vw, 520px" className="object-contain p-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
