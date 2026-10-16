"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { SectionHead } from "./SectionHead";

const FIRST = 6;

export function ServicesView({ services }: { services: { n: string; title: string; body: string; badge?: string; tags: string[]; href: string; image: string; alt: string }[] }) {
  const [all, setAll] = useState(false);
  const list = all ? services : services.slice(0, FIRST);

  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-surface)]">
      <span className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-brand-soft)] opacity-80 blur-[120px]" aria-hidden />
      <span className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[var(--color-accent-soft)] opacity-80 blur-[120px]" aria-hidden />

      <div className="container-max relative">
        <SectionHead
          pill="What we do"
          title="Digital growth solutions under one roof"
          sub="Search, paid media, development, e-commerce and branding — designed to work together and move your revenue forward."
        />

        <Reveal className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <Spotlight
                key={s.n}
                className="flex flex-col rounded-[28px] border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-brand)]/40 hover:shadow-[0_30px_60px_-28px_rgba(229,35,27,.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-[72px] w-[72px] shrink-0">
                    <span className="absolute inset-0 rotate-6 rounded-[22px] bg-gradient-to-br from-[var(--color-brand-soft)] to-[var(--color-accent-soft)] transition-transform duration-500 group-hover:rotate-12" />
                    <Image src={s.image} alt={s.alt} fill sizes="72px" className="relative object-contain p-2.5 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {s.badge ? (
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">{s.badge}</span>
                  ) : (
                    <span className="font-display text-4xl font-black leading-none text-[var(--color-ink)]/[0.07]">{s.n}</span>
                  )}
                </div>

                <h3 className="mt-6 text-[var(--fs-xl)]">{s.title}</h3>
                <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>

                <ul className="mb-6 mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[12px] text-[var(--color-text-muted)]">{t}</li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-5">
                  <span className="text-[13px] font-bold uppercase tracking-wider text-[var(--color-ink)]">Explore</span>
                  <Link
                    href={s.href}
                    aria-label={`Explore ${s.title}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition-all duration-300 after:absolute after:inset-0 group-hover:rotate-45 group-hover:bg-[var(--color-brand)]"
                  >
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </Spotlight>
            ))}
          </div>
          {services.length > FIRST ? (
            <div className="mt-10 text-center">
              <button type="button" onClick={() => setAll((v) => !v)} className="btn btn-accent">{all ? "View less" : "View more"}</button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
