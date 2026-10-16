import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkle } from "@/components/ui/Decor";
import { getSetting } from "@/lib/site";

export async function About() {
  const a = await getSetting("about");
  const points = a.points.filter(Boolean);
  return (
    <section className="section-space relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(20,20,40,.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 30% 50%, #000 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, #000 20%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-max relative grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* Visual */}
        <Reveal className="relative mx-auto w-full max-w-[540px]">
          <span className="absolute inset-0 -z-10 rotate-[5deg] rounded-[44px] bg-gradient-to-br from-[var(--color-brand-soft)] to-[var(--color-accent-soft)]" aria-hidden />
          <span className="absolute inset-0 -z-10 -rotate-[4deg] rounded-[44px] border-2 border-dashed border-[var(--color-brand)]/25" aria-hidden />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] border border-white bg-white/80 p-4 shadow-[0_40px_80px_-30px_rgba(20,20,60,.35)] backdrop-blur">
            <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 1024px) 100vw, 540px" className="object-contain p-6" />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-3xl border border-[var(--color-border)] bg-white px-6 py-4 shadow-[var(--shadow-lg)] sm:-left-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[#ff4d8d] text-white">
              <Sparkle className="h-6 w-6" />
            </span>
            <span>
              <span className="block font-display text-3xl font-extrabold leading-none text-[var(--color-ink)]">{a.badgeValue}</span>
              <span className="mt-1 block text-[var(--fs-xs)] font-semibold text-[var(--color-text-muted)]">{a.badgeLabel}</span>
            </span>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.08}>
          <span className="pill">{a.eyebrow}</span>
          <h2 className="mt-5 leading-[1.08]" style={{ fontSize: "var(--fs-3xl)" }}>
            {a.heading}{" "}
            <span className="bg-gradient-to-r from-[var(--color-brand)] to-[#ff4d8d] bg-clip-text text-transparent">{a.highlight}</span>
          </h2>
          <p className="mt-6 text-[var(--fs-lg)] leading-relaxed text-[var(--color-ink)]/80">{a.p1}</p>
          <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">{a.p2}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-[var(--fs-sm)] font-medium transition-colors hover:border-[var(--color-brand)]/40 hover:bg-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <Link href="/about-us" className="btn btn-primary group mt-9">
            {a.linkLabel} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
