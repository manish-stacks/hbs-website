"use client";

import type { Company } from "@/lib/settings";
import type { Defaults } from "@/lib/defaults";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowRight, BarChart3, Camera, Code2, Globe, Mail, Megaphone, MessageCircle, Palette,
  Phone, Search, Share2, ShoppingCart, Smartphone, Star, Target, TrendingUp, type LucideIcon,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Underline } from "@/components/ui/Decor";

type Tile = { Icon: LucideIcon; color: string; x: string; y: string; show?: string };

const TILES: Tile[] = [
  { Icon: Search, color: "#e5231b", x: "15%", y: "8%" },
  { Icon: Share2, color: "#2563eb", x: "5%", y: "26%" },
  { Icon: Mail, color: "#f59e0b", x: "24%", y: "42%", show: "hidden lg:block" },
  { Icon: Palette, color: "#db2777", x: "11%", y: "56%" },
  { Icon: Code2, color: "#0f172a", x: "3%", y: "76%" },
  { Icon: Megaphone, color: "#7c3aed", x: "22%", y: "78%", show: "hidden lg:block" },
  { Icon: TrendingUp, color: "#16a34a", x: "40%", y: "84%", show: "hidden lg:block" },
  { Icon: BarChart3, color: "#0891b2", x: "58%", y: "86%", show: "hidden lg:block" },
  { Icon: Camera, color: "#ec4899", x: "30%", y: "10%", show: "hidden lg:block" },
  { Icon: Globe, color: "#2563eb", x: "70%", y: "9%", show: "hidden lg:block" },
  { Icon: Target, color: "#e5231b", x: "82%", y: "7%" },
  { Icon: ShoppingCart, color: "#ea580c", x: "92%", y: "24%" },
  { Icon: MessageCircle, color: "#16a34a", x: "76%", y: "42%", show: "hidden lg:block" },
  { Icon: Smartphone, color: "#4f46e5", x: "88%", y: "50%" },
  { Icon: Search, color: "#7c3aed", x: "78%", y: "78%", show: "hidden lg:block" },
  { Icon: Share2, color: "#e5231b", x: "93%", y: "74%" },
];

export function HeroView({ company, hero }: { company: Company; hero: Defaults["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const lines = hero.headline2.split("|").map((s) => s.trim()).filter(Boolean);
  const stats = [
    { v: hero.stat1Value, l: hero.stat1Label },
    { v: hero.stat2Value, l: hero.stat2Label },
  ];

  useEffect(() => {
    const el = root.current;
    const movers = el ? Array.from(el.querySelectorAll<HTMLElement>(".mover")) : [];
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const onMove = (e: MouseEvent) => {
      const R = 190;
      movers.forEach((m, i) => {
        if (!m.offsetParent) return;
        const box = (m.offsetParent as HTMLElement).getBoundingClientRect();
        const cx = box.left + m.offsetLeft + m.offsetWidth / 2;
        const cy = box.top + m.offsetTop + m.offsetHeight / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const depth = 0.015 + (i % 4) * 0.012;
        const push = dist < R ? ((R - dist) / R) * 46 : 0;
        gsap.to(m, {
          x: dx * depth - (dx / dist) * push,
          y: dy * depth - (dy / dist) * push,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(m.firstElementChild, { scale: dist < R ? 1 + ((R - dist) / R) * 0.28 : 1, duration: 0.4, overwrite: "auto" });
      });
    };
    const onLeave = () => {
      gsap.to(movers, { x: 0, y: 0, duration: 1, ease: "elastic.out(1,.5)", overwrite: "auto" });
      gsap.to(movers.map((m) => m.firstElementChild), { scale: 1, duration: 0.5, overwrite: "auto" });
    };
    if (canHover && el) {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    }

    const ctx = gsap.context(() => {
      gsap.from(".hero-in", { y: 26, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
      gsap.from(".tile", { scale: 0.4, opacity: 0, duration: 0.7, stagger: { each: 0.05, from: "random" }, delay: 0.3, ease: "back.out(2)" });
      gsap.to(".tile", {
        y: "random(-14, 14)", x: "random(-6, 6)", rotation: "random(-6, 6)",
        duration: "random(3, 5)", repeat: -1, yoyo: true, ease: "sine.inOut",
        stagger: { each: 0.1, from: "random" }, delay: 1,
      });
    }, root);
    return () => {
      ctx.revert();
      el?.removeEventListener("mousemove", onMove);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={root} className="relative isolate overflow-hidden bg-[#fdfcfb]">
      {/* Grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,40,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,40,.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 35%, transparent 78%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-soft)] opacity-70 blur-[120px]" aria-hidden />

      {/* Floating tiles */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1500px]" aria-hidden>
        {TILES.map(({ Icon, color, x, y, show }, i) => (
          <span key={i} className={`mover absolute ${show ?? "hidden md:block"} h-14 w-14`} style={{ left: x, top: y }}>
            <span className="tile flex h-full w-full items-center justify-center rounded-2xl border border-black/[0.05] bg-white shadow-[0_10px_30px_-12px_rgba(20,20,40,.25)]">
              <Icon size={24} style={{ color }} />
            </span>
          </span>
        ))}
      </div>

      <div className="container-max relative pb-10 pt-20 text-center md:pt-28">
        <span className="hero-in inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-2 text-[var(--fs-xs)] font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
          {hero.badge}
        </span>

        <h1 className="hero-in mx-auto mt-7 max-w-[15ch] md:max-w-[17ch]" style={{ fontSize: "clamp(2.6rem, 7vw, 5.6rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
          <span className="block text-gradient-brand">{hero.headline1}</span>
          {lines.map((t, i) => (
            <span key={t} className="relative mx-auto block w-fit">
              {t}
              {i === lines.length - 1 && <Underline className="absolute -bottom-2 left-0 h-3.5 w-full" />}
            </span>
          ))}
        </h1>

        <p className="hero-in mx-auto mt-8 max-w-[44ch] font-display font-semibold text-[var(--color-ink)]/80" style={{ fontSize: "var(--fs-xl)" }}>
          {hero.sub}
        </p>
        <p className="hero-in mx-auto mt-3 max-w-[58ch] text-[var(--color-text-muted)]">{hero.intro}</p>

        {/* Email capture pill */}
        <form action="/contact-us" method="get" className="hero-in mx-auto mt-9 flex max-w-[640px] items-center gap-2 rounded-full border border-[var(--color-ink)]/20 bg-white p-1.5 pl-6 shadow-[0_18px_40px_-18px_rgba(20,20,40,.3)] focus-within:border-[var(--color-brand)]">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email..."
            aria-label="Your email"
            className="min-w-0 flex-1 bg-transparent py-3 text-[var(--fs-base)] outline-none placeholder:text-[var(--color-text-muted)]/70"
          />
          <button type="submit" className="btn btn-brand shrink-0 whitespace-nowrap !px-5 sm:!px-7">
            {hero.cta1} <ArrowRight size={16} />
          </button>
        </form>

        <div className="hero-in mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
          <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 font-semibold text-[var(--color-ink)] hover:text-[var(--color-brand)]">
            <Phone size={15} /> {hero.cta2}
          </a>
          <span className="hidden h-4 w-px bg-[var(--color-border)] sm:block" />
          <Link href="/free-website-audit" className="font-semibold hover:text-[var(--color-brand)]">Free website audit</Link>
        </div>

        {/* Proof strip */}
        <div className="hero-in relative mt-16 flex items-center gap-6 md:mt-20">
          <span className="h-px flex-1 bg-[var(--color-border)]" />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {stats.map((s) => (
              <p key={s.l} className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                <strong className="font-display text-lg font-extrabold text-[var(--color-ink)]">{s.v}</strong> {s.l}
              </p>
            ))}
            <span className="inline-flex items-center gap-2">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-[var(--color-star)] text-[var(--color-star)]" />
                ))}
              </span>
              <span className="text-[var(--fs-sm)] font-semibold text-[var(--color-text-muted)]">{hero.rating}</span>
            </span>
          </div>
          <span className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}
