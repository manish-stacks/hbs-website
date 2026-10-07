"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, CircleCheck, Quote, Star } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Reveal } from "@/components/ui/Reveal";

const GAP = 24;
const colors = ["#d94b2b", "#6d4aff", "#12925a", "#c2185b", "#0b84d4", "#b98a2f"];

export function TestimonialsView({ testimonials }: { testimonials: { name: string; role: string; text: string }[] }) {
  const track = useRef<HTMLDivElement>(null);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("figure");
    if (!el || !card) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    const atStart = el.scrollLeft <= 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
  };

  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="container-max">
        {/* Heading + controls */}
        <Reveal className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 style={{ fontSize: "var(--fs-3xl)" }}>Your Reviews Fuel Us!</h2>
            <p className="mt-2 max-w-[60ch] text-[var(--fs-sm)] text-[var(--color-text-muted)]">
              Hear from the clients whose businesses have grown with Hover Business Services — 1500+ and counting.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:bg-[var(--color-ink)] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <Link
              href="/portfolio"
              className="flex h-11 items-center rounded-full border border-[var(--color-border)] bg-white px-6 text-[var(--fs-sm)] font-semibold transition hover:bg-[var(--color-ink)] hover:text-white"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white transition hover:bg-[var(--color-ink)] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        {/* Track */}
        <Reveal className="mt-10">
          <div
            ref={track}
            className="no-scrollbar -mx-2 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto px-2 pb-4"
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="shrink-0 basis-[86%] snap-start sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
              >
                {/* Author */}
                <figcaption className="flex items-center gap-4">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-3xl font-medium text-white"
                    style={{ background: colors[i % colors.length] }}
                  >
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-[var(--color-ink)]">{t.name}</span>
                    <span className="mt-1 flex items-center gap-1.5">
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} size={14} className="fill-[var(--color-star)] text-[var(--color-star)]" />
                        ))}
                      </span>
                      <span className="text-[12px] font-semibold text-[var(--color-text-muted)]">5.0</span>
                    </span>
                  </span>
                </figcaption>

                {/* Card */}
                <div className="relative mt-5 rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <Quote size={34} className="fill-[var(--color-brand)]/20 text-[var(--color-brand)]/20" />
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
                      <FcGoogle size={24} />
                    </span>
                  </div>

                  <blockquote className="mt-4 text-[15px] leading-[1.9] text-[var(--color-ink)]">{t.text}</blockquote>

                  <p className="mt-5 flex items-center justify-center gap-2 text-[13px] text-[var(--color-text-muted)]">
                    <CircleCheck size={15} /> {t.role}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
