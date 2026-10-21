"use client";

import type { Company } from "@/lib/settings";
import type { Defaults } from "@/lib/defaults";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, ShieldCheck, Award, Sparkles, Phone } from "lucide-react";
import {
  SiYoutube,
  SiInstagram,
  SiFacebook,
  SiPinterest,
  SiGoogledrive,
  SiShopify,
  SiWordpress,
  SiNextdotjs,
  SiGoogleads,
  SiReact,
  SiLaravel,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { gsap } from "@/lib/gsap";

// col: grid cells from center (- = left, + = right), row: grid cells from top
const BRAND_TILES = [
  { Icon: SiWordpress, color: "#21759b", col: -9, row: 1, name: "WordPress" },
  { Icon: SiYoutube, color: "#e5231b", col: -13, row: 2, name: "YouTube" },
  { Icon: FaLinkedin, color: "#0a66c2", col: -10, row: 5, name: "LinkedIn" },
  { Icon: SiInstagram, color: "#e1306c", col: -13, row: 8, name: "Instagram" },
  { Icon: SiGoogledrive, color: "#0f9d58", col: -9, row: 10, name: "Google Drive" },
  { Icon: SiReact, color: "#000000", col: -12, row: 12, name: "TikTok" },

  { Icon: SiNextdotjs, color: "#000000", col: 9, row: 1, name: "Next.js" },
  { Icon: SiGoogleads, color: "#4285f4", col: 13, row: 2, name: "Google Ads" },
  { Icon: SiShopify, color: "#7ab55c", col: 9, row: 5, name: "Shopify" },
  { Icon: SiFacebook, color: "#1877f2", col: 12, row: 8, name: "Facebook" },
  { Icon: SiPinterest, color: "#bd081c", col: 10, row: 10, name: "Pinterest" },
  { Icon: SiLaravel, color: "#ff4f00", col: 15, row: 11, name: "Zapier" },

];

export function HeroView({ company, hero }: { company: Company; hero: Defaults["hero"] }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const movers = Array.from(el.querySelectorAll<HTMLElement>(".mover"));
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Mouse interaction: tiles drift toward / push away from cursor
    const onMove = (e: MouseEvent) => {
      const R = 280;
      movers.forEach((m, i) => {
        if (!m.offsetParent) return; // hidden on small screens
        const box = m.getBoundingClientRect();
        // use un-transformed center so tiles don't jitter
        const cx = box.left + box.width / 2 - (gsap.getProperty(m, "x") as number);
        const cy = box.top + box.height / 2 - (gsap.getProperty(m, "y") as number);
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const near = dist < R ? (R - dist) / R : 0;
        // far tiles drift gently toward cursor, near tiles get pushed away
        const depth = 0.03 + (i % 4) * 0.015;
        const push = near * 90;
        gsap.to(m, {
          x: dx * depth - (dx / dist) * push,
          y: dy * depth - (dy / dist) * push,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(m.firstElementChild, {
          scale: 1 + near * 0.25,
          rotation: (dx / dist) * near * -14,
          duration: 0.4,
          overwrite: "auto",
        });
      });
    };

    const onLeave = () => {
      gsap.to(movers, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, .5)", overwrite: "auto" });
      gsap.to(
        movers.map((m) => m.firstElementChild),
        { scale: 1, rotation: 0, duration: 0.5, overwrite: "auto" }
      );
    };

    if (canHover) {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    }

    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".tile", {
        scale: 0.4,
        opacity: 0,
        duration: 0.7,
        stagger: { each: 0.04, from: "random" },
        delay: 0.2,
        ease: "back.out(2)",
      });

      // Subtle idle float
      gsap.to(".tile", {
        y: "random(-6, 6)",
        x: "random(-4, 4)",
        duration: "random(3.5, 5.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.1, from: "random" },
        delay: 0.9,
      });
    }, root);

    return () => {
      ctx.revert();
      if (canHover) {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      }
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-[#faf8f6] pt-14 pb-16 md:pt-24 md:pb-28 [--cell:54px]"
    >
      {/* Grid backdrop (cell size matches tiles) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,40,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,40,.06) 1px, transparent 1px)",
          backgroundSize: "var(--cell) var(--cell)",
          backgroundPosition: "50% 0",
          maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 85%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(229,35,27,.12) 0%, rgba(185,138,47,.08) 50%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Floating brand tiles: snapped to grid, positioned from center */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {BRAND_TILES.map(({ Icon, color, col, row, name }) => (
          <span
            key={name}
            className={`mover absolute h-[var(--cell)] w-[var(--cell)] ${
              Math.abs(col) >= 12 ? "hidden 2xl:block" : "hidden xl:block"
            }`}
            style={{
              left: `calc(50% + var(--cell) * ${col - 0.5})`,
              top: `calc(var(--cell) * ${row})`,
            }}
          >
            <span
              title={name}
              className="tile flex h-full w-full items-center justify-center rounded-xl border border-black/[0.06] bg-white shadow-[0_8px_20px_-6px_rgba(20,20,40,0.12)]"
            >
              <Icon size={24} style={{ color }} />
            </span>
          </span>
        ))}
      </div>

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Eyebrow pill */}
          <div className="hero-anim inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
            <span>⭐ Rated 4.9/5 Across 2,500+ Clients · AI-Powered Growth Agency</span>
          </div>

          {/* Headline */}
          <h1
            className="hero-anim mx-auto mt-6 font-display font-black text-[var(--color-ink)]"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            We Engineer Digital <span className="text-gradient-brand">Growth Engines</span> That Multiply Revenue
          </h1>

          {/* Subtitle */}
          <p className="hero-anim mx-auto mt-5 max-w-[58ch] text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            Combining proprietary AI search intelligence with 80+ in-house engineers, performance marketers, and
            designers to build search dominance, custom Next.js platforms, and high-ROAS acquisition funnels.
          </p>

          {/* CTAs */}
          <div className="hero-anim mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link href="/free-website-audit" className="btn btn-brand shadow-lg hover:shadow-xl">
              <Sparkles size={16} /> Get Free AI Growth Audit
            </Link>
            <a href="#services-hub" className="btn btn-ghost">
              Explore All 80+ Services <ArrowRight size={15} />
            </a>
            
          </div>

          {/* Trust strip */}
          <div className="hero-anim mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              100% In-House Engineers & Marketers
            </span>
            <span className="hidden h-3 w-px bg-[var(--color-border)] sm:block" />
            <span className="flex items-center gap-1.5">
              <TrendingUp size={15} className="text-amber-600" />
              ₹50Cr+ Client Revenue Unlocked
            </span>
            <span className="hidden h-3 w-px bg-[var(--color-border)] sm:block" />
            <span className="flex items-center gap-1.5">
              <Award size={15} className="text-[var(--color-brand)]" />
              Offices in Delhi & Auckland
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}