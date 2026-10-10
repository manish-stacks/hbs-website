"use client";

import type { Company } from "@/lib/settings";
import type { Defaults } from "@/lib/defaults";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, BadgeCheck, Star, TrendingUp, Zap } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Sparkle, Underline } from "@/components/ui/Decor";

const SPARKS = [
  "M0 28 C14 26 22 20 34 18 S54 10 66 8 S86 4 100 2",
  "M0 30 C12 24 24 26 36 18 S58 14 70 8 S88 6 100 3",
  "M0 26 C16 28 24 18 38 20 S58 8 70 10 S90 4 100 2",
  "M0 29 C14 25 26 22 38 16 S60 12 72 7 S90 5 100 1",
];

export function HeroView({ company, hero }: { company: Company; hero: Defaults["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const lines = hero.headline2.split("|").map((s) => s.trim()).filter(Boolean);
  const kpis = [
    { v: hero.stat1Value, l: hero.stat1Label },
    { v: hero.stat2Value, l: hero.stat2Label },
    { v: "1,250+", l: "Leads Generated" },
    { v: "320%", l: "ROI Increase" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-in", { y: 26, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-kpi", { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.5, ease: "power3.out" });
      gsap.to(".chip-a", { y: -10, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".chip-b", { y: 10, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".chip-c", { y: -8, duration: 2.9, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
        aria-hidden
      />

      <div className="container-max relative z-10 py-14 md:py-28">
        <div className="relative mx-auto max-w-[920px] text-center">
          <span className="hero-in inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-5 py-2 text-[var(--fs-xs)] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] shadow-sm backdrop-blur">
            <Sparkle className="h-3.5 w-3.5 text-[var(--color-brand)]" />
            {hero.badge}
          </span>

          <h1 className="hero-in mt-7" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1.06 }}>
            <span className="block text-gradient-brand">{hero.headline1}</span>
            {lines.map((t, i) => (
              <span key={t} className="relative mx-auto block w-fit">
                {t}
                {i === lines.length - 1 && <Underline className="absolute -bottom-2 left-0 h-3.5 w-full" />}
              </span>
            ))}
          </h1>

          <p className="hero-in mx-auto mt-6 max-w-[46ch] font-display font-bold text-[var(--color-text-muted)]" style={{ fontSize: "var(--fs-xl)" }}>
            {hero.sub}
          </p>
          <p className="hero-in mx-auto mt-4 max-w-[62ch] text-[var(--color-text-muted)]">{hero.intro}</p>

          <div className="hero-in relative z-30 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact-us" className="btn btn-brand group !py-2 !pl-2 !pr-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={17} />
              </span>
              {hero.cta1}
            </Link>
            <a href={`tel:${company.phone}`} className="btn btn-ghost bg-white/70 backdrop-blur">{hero.cta2}</a>
          </div>

          <div className="hero-in mt-7 flex flex-wrap items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--color-star)] text-[var(--color-star)]" />
              ))}
            </div>
            <p className="text-[var(--fs-sm)] font-semibold text-[var(--color-text-muted)]">{hero.rating}</p>
          </div>

          {/* Floating chips */}
          <div className="chip-a absolute -left-4 top-8 hidden lg:flex xl:-left-24">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><TrendingUp size={16} /></span>
              {hero.chip1}
            </span>
          </div>
          <div className="chip-b absolute -right-4 top-24 hidden lg:flex xl:-right-24">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]"><Zap size={16} /></span>
              {hero.chip2}
            </span>
          </div>
          <div className="chip-c absolute -left-2 bottom-24 hidden lg:flex xl:-left-16">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-ink)]"><BadgeCheck size={16} /></span>
              {hero.chip3}
            </span>
          </div>
        </div>

        {/* KPI glass strip */}
        {/* <div className="mx-auto mt-14 grid max-w-[1040px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <div key={k.l} className="hero-kpi rounded-2xl border border-white bg-white/75 p-4 shadow-[0_20px_50px_-22px_rgba(120,80,200,.40)] backdrop-blur-md sm:p-5">
              <p className="text-[var(--fs-xs)] font-semibold text-[var(--color-text-muted)]">{k.l}</p>
              <p className="mt-1 font-display text-3xl font-extrabold leading-none text-[var(--color-ink)] sm:text-4xl">{k.v}</p>
              <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="mt-3 h-8 w-full" aria-hidden>
                <defs>
                  <linearGradient id={`k${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#e5231b" stopOpacity=".22" />
                    <stop offset="1" stopColor="#e5231b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`${SPARKS[i]} V32 H0Z`} fill={`url(#k${i})`} />
                <path d={SPARKS[i]} fill="none" stroke="#e5231b" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}