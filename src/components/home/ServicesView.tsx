"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

const GAP = 24;

export function ServicesView({ services }: { services: { n: string; title: string; body: string; badge?: string; tags: string[]; href: string; image: string; alt: string }[] }) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("article");
    if (!el || !card) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    const atStart = el.scrollLeft <= 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current && !document.hidden) step(1);
    }, 3200);
    return () => clearInterval(id);
  }, [step]);

  const hold = (v: boolean) => () => { paused.current = v; };

  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="container-max">
        <SectionHead
          pill="What we do"
          title="Digital growth solutions under one roof"
          sub="Search, paid media, development, e-commerce and branding — designed to work together and move your revenue forward."
        />

        <Reveal className="mt-10">
          <div className="mb-2 flex justify-end gap-2">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => step(d)}
                aria-label={d === 1 ? "Next services" : "Previous services"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white"
              >
                {d === 1 ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
              </button>
            ))}
          </div>

          <div
            ref={track}
            onMouseEnter={hold(true)}
            onMouseLeave={hold(false)}
            onTouchStart={hold(true)}
            onTouchEnd={() => setTimeout(hold(false), 4000)}
            onFocus={hold(true)}
            onBlur={hold(false)}
            className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-4"
          >
            {services.map((s) => (
              <article
                key={s.n}
                className="group relative flex shrink-0 basis-[86%] snap-start flex-col rounded-[26px] border border-[var(--color-border)] bg-white p-7 pb-[78px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-20 w-20 shrink-0">
                    <span className="absolute inset-0 rounded-[22px] bg-[var(--color-primary-soft)]" />
                    <Image src={s.image} alt={s.alt} fill sizes="80px" className="relative object-contain p-2.5" />
                  </div>
                  {s.badge ? (
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                      {s.badge}
                    </span>
                  ) : (
                    <span className="font-display text-2xl text-[var(--color-border)]">{s.n}</span>
                  )}
                </div>

                <h3 className="mt-6 text-[var(--fs-xl)]">{s.title}</h3>
                <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[12px] text-[var(--color-text-muted)]">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-7 right-[90px] flex h-[65px] items-center">
                  <span className="h-px flex-1 bg-[var(--color-border)]" />
                  <Link href={s.href} className="ml-5 text-[12px] font-bold uppercase text-[var(--color-text-muted)]">More</Link>
                </div>

                <div className="absolute bottom-0 right-0 h-[82px] w-[82px] rounded-br-[28px] rounded-tl-[28px] bg-[var(--color-surface)]" />
                <Link
                  href={s.href}
                  aria-label={`Explore ${s.title}`}
                  className="absolute bottom-[8px] right-[8px] z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FFA90B] text-black transition-all duration-300 hover:rotate-90 hover:scale-105"
                >
                  <Plus size={25} strokeWidth={2.5} />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
