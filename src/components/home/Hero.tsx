"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Megaphone,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

import { Sparkle, Underline } from "@/components/ui/Decor";
import { company, heroMetrics } from "@/data/home";

const icons = [TrendingUp, Target, Megaphone, Eye];

const SIDE_LEFT = "/images/hero-left.png";
const SIDE_RIGHT = "/images/hero-right.png";

export function Hero() {
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-left-img", {
        x: 22,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-right-img", {
        x: -22,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chip-growth", {
        y: -10,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chip-ai", {
        x: 14,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chip-rank", {
        x: -14,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <section className="mesh-hero relative overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[560px] w-[920px] -translate-x-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(229,35,27,.07), rgba(185,138,47,.09) 55%, transparent 72%)",
        }}
      />

      {/* LEFT IMAGE */}
      {!hideLeft && (
        <div className=" pointer-events-none absolute -left-[55px] top-[130px] z-[2] hidden w-[290px] lg:block lg:w-[340px] xl:-left-[35px] xl:w-[400px]">
          <img
            src={SIDE_LEFT}
            alt=""
            onError={() => setHideLeft(true)}
            className="hero-left-img h-auto w-full select-none object-contain"
          />
        </div>
      )}

      {/* RIGHT IMAGE */}
      {!hideRight && (
        <div
          className=" pointer-events-none absolute -right-[55px] top-[125px] z-[2] hidden w-[300px] lg:block lg:w-[360px] xl:-right-[35px] xl:w-[420px]">
          <img
            src={SIDE_RIGHT}
            alt=""
            onError={() => setHideRight(true)}
            className="hero-right-img h-auto w-full select-none object-contain"
          />
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="container-max relative z-20 pb-14 py-16 md:py-30">
        <div className="relative mx-auto max-w-[900px] text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/90 px-5 py-2 text-[var(--fs-xs)] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] shadow-sm backdrop-blur">
            <Sparkle className="h-3.5 w-3.5 text-[var(--color-brand)]" />
            5+ Years · 1500+ global clients
          </span>

          {/* Heading */}
          <h1
            className="mt-7"
            style={{
              fontSize: "var(--fs-4xl)",
              lineHeight: 1.06,
            }}
          >
            <span className="block text-gradient-brand">
              AI-Enabled
            </span>

            <span className="relative inline-block">
              Digital Marketing Agency

              <Underline className="absolute -bottom-2 left-[8%] h-3.5 w-[84%]" />
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="mx-auto mt-5 max-w-[46ch] font-display font-bold text-[var(--color-text-muted)]"
            style={{
              fontSize: "var(--fs-xl)",
            }}
          >
            Redefining growth with AI + human intelligence.
          </p>

          <p className="mx-auto mt-4 max-w-[62ch] text-[var(--color-text-muted)]">
            SEO, performance marketing, web and app engineering under one roof —
            run by 80+ specialists across Delhi and Auckland, measured on the
            numbers that actually move your revenue.
          </p>

          {/* BUTTONS */}
          <div className="relative z-30 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="btn btn-brand group !py-2 !pl-2 !pr-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={17} />
              </span>

              Get your free AI growth strategy
            </Link>

            <a
              href={`tel:${company.phone}`}
              className="btn btn-ghost"
            >
              Talk to an expert
            </a>
          </div>

          {/* Rating */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <p className="text-[var(--fs-sm)] font-semibold text-[var(--color-text-muted)]">
              Rated 5 stars based on 600+ client reviews
            </p>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[var(--color-star)] text-[var(--color-star)]"
                />
              ))}
            </div>
          </div>

          {/* LEFT CHIP */}
          <div className="chip-growth absolute -left-2 top-10 z-20 hidden md:flex lg:-left-8">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                <TrendingUp size={16} />
              </span>
              10x Growth
            </span>
          </div>

          {/* RIGHT CHIP */}
          <div className="chip-ai absolute -right-2 top-24 z-20 hidden md:flex lg:-right-8">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <BadgeCheck size={16} />
              </span>
              AI-Powered Results
            </span>
          </div>

          {/* BOTTOM CHIP */}
          <div className="chip-rank absolute -left-20 bottom-0 z-20 hidden lg:flex">
            <span className="chip-float">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-ink)]">
                <Star size={16} />
              </span>
              #1 Rank on Google
            </span>
          </div>

        </div>
      </div>

      {/* METRICS */}
      {/* <div className="container-max relative z-20 pb-16">
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((m, i) => {
            const Icon = icons[i] ?? TrendingUp;
            const brand = i === 0;

            return (
              <div
                key={m.label}
                className="card relative overflow-hidden px-6 py-4"
              >
                <span
                  className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full"
                  style={{
                    background: brand
                      ? "var(--color-brand-soft)"
                      : i % 2
                        ? "var(--color-accent-soft)"
                        : "var(--color-primary-soft)",
                  }}
                />

                <span
                  className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${brand
                    ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
                    : i % 2
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "bg-[var(--color-primary-soft)] text-[var(--color-ink)]"
                    }`}
                >
                  <Icon size={19} />
                </span>

                <p className="relative mt-5 text-[var(--fs-sm)] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                  {m.label}
                </p>

                <p className="relative mt-1.5 font-display text-xl font-extrabold text-[var(--color-ink)]">
                  {m.value}
                </p>

                <p className="relative mt-1 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                  {m.note}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}