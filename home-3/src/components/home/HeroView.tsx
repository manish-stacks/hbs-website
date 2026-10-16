"use client";

import type { Company } from "@/lib/settings";
import type { Defaults } from "@/lib/defaults";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, BadgeCheck, Phone, Star, TrendingUp, Zap } from "lucide-react";
import { gsap } from "@/lib/gsap";

const WORDS = ["SEO", "Performance Ads", "Web Design", "Social Media", "E-commerce", "AI Automation", "App Development", "Branding"];

export function HeroView({ company, hero }: { company: Company; hero: Defaults["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const lines = hero.headline2.split("|").map((s) => s.trim()).filter(Boolean);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-in", { y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
      gsap.from(".hero-visual", { y: 40, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-chip", { scale: 0.7, opacity: 0, duration: 0.6, stagger: 0.12, delay: 0.8, ease: "back.out(2)" });
      gsap.to(".chip-a", { y: -8, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".chip-b", { y: 8, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".chip-c", { y: -6, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  const row = [...WORDS, ...WORDS];

  return (
    <section ref={root} className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[var(--sun)]/40 blur-[110px]" aria-hidden />

      <div className="container-max relative grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <span className="hero-in tag">{hero.badge}</span>

          <h1 className="hero-in mt-6" style={{ fontSize: "clamp(2.4rem, 1.3rem + 4.4vw, 5rem)", lineHeight: 1.02 }}>
            <span className="text-[var(--color-brand)]">{hero.headline1}</span>
            {lines.map((t) => <span key={t} className="block">{t}</span>)}
          </h1>

          <p className="hero-in mt-6 max-w-[50ch] text-[var(--fs-xl)] font-semibold leading-snug">{hero.sub}</p>
          <p className="hero-in mt-3 max-w-[58ch] text-[var(--color-text-muted)]">{hero.intro}</p>

          <div className="hero-in mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact-us" className="btn btn-brand !min-h-[54px] !px-7">{hero.cta1} <ArrowRight size={18} /></Link>
            <a href={`tel:${company.phone}`} className="btn btn-ghost !min-h-[54px] !px-7"><Phone size={16} /> {hero.cta2}</a>
          </div>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t-2 border-[#111]/10 pt-7">
            <div>
              <p className="font-display text-4xl font-extrabold leading-none">{hero.stat1Value}</p>
              <p className="mt-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{hero.stat1Label}</p>
            </div>
            <span className="hidden h-12 w-px bg-[#111]/15 sm:block" />
            <div>
              <p className="font-display text-4xl font-extrabold leading-none">{hero.stat2Value}</p>
              <p className="mt-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{hero.stat2Label}</p>
            </div>
            <span className="hidden h-12 w-px bg-[#111]/15 sm:block" />
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} className="fill-[var(--color-star)] text-[var(--color-star)]" />)}
              </div>
              <p className="mt-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{hero.rating}</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual relative mx-auto w-full max-w-[600px]">
          <div className="pop-lg overflow-hidden rounded-[28px] bg-white p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)]">
              <Image src="/images/marketing-3d-showcase.png" alt="Growth dashboard showing rankings, leads and revenue" width={584} height={440} priority sizes="(max-width:1024px) 90vw, 560px" className="h-auto w-full" />
            </div>
          </div>

          <div className="hero-chip chip-a absolute -left-3 top-8 hidden sm:block lg:-left-8">
            <span className="pop flex items-center gap-2.5 rounded-xl bg-[var(--sun)] px-4 py-2.5 text-[var(--fs-sm)] font-extrabold">
              <TrendingUp size={17} /> {hero.chip1}
            </span>
          </div>
          <div className="hero-chip chip-b absolute -right-3 top-1/2 hidden sm:block lg:-right-6">
            <span className="pop flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-[var(--fs-sm)] font-extrabold">
              <Zap size={17} className="text-[var(--color-brand)]" /> {hero.chip2}
            </span>
          </div>
          <div className="hero-chip chip-c absolute -bottom-5 left-8 hidden sm:block">
            <span className="pop flex items-center gap-2.5 rounded-xl bg-[var(--color-brand)] px-4 py-2.5 text-[var(--fs-sm)] font-extrabold text-white">
              <BadgeCheck size={17} /> {hero.chip3}
            </span>
          </div>
        </div>
      </div>

      <div className="ticker-wrap band overflow-hidden bg-[#111] py-4 text-white">
        <div className="ticker" style={{ ["--dur" as string]: "36s" }}>
          {row.map((w, i) => (
            <span key={i} className="mx-6 flex items-center gap-12 font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
              {w} <span className="text-[var(--sun)]">&#10033;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
