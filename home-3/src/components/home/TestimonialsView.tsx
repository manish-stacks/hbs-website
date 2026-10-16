"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
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

  const bgs = ["bg-white", "bg-[var(--sun)]", "bg-[var(--color-brand-soft)]"];
  return (
    <section className="section-space band bg-[var(--color-surface)]">
      <div className="container-max">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="tag">Client reviews</span>
            <h2 className="mt-5" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1 }}>Your reviews <span className="text-[var(--color-brand)]">fuel us</span></h2>
            <p className="mt-4 max-w-[56ch] text-[var(--color-text-muted)]">Hear from the clients whose businesses have grown with Hover Business Services, 1500+ and counting.</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => step(-1)} aria-label="Previous reviews" className="btn btn-ghost !min-h-[50px] !w-[50px] !p-0"><ArrowLeft size={18} /></button>
            <Link href="/portfolio" className="btn btn-ghost !min-h-[50px]">View all</Link>
            <button type="button" onClick={() => step(1)} aria-label="Next reviews" className="btn btn-brand !min-h-[50px] !w-[50px] !p-0"><ArrowRight size={18} /></button>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div ref={track} data-lenis-prevent-wheel className="no-scrollbar -mx-3 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-3 pb-8 pt-2">
            {testimonials.map((t, i) => (
              <figure key={t.name} className={`pop flex shrink-0 basis-[88%] snap-start flex-col rounded-3xl p-7 sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)] ${bgs[i % 3]} ${i % 2 ? "lg:mt-5" : ""}`}>
                <div className="flex items-center justify-between">
                  <Quote size={42} className="fill-[#111] text-[#111]" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#111] bg-white"><FcGoogle size={22} /></span>
                </div>
                <blockquote className="mt-5 flex-1 text-[16px] font-medium leading-[1.75]">{t.text}</blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t-2 border-dashed border-[#111]/25 pt-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#111] font-display text-xl font-extrabold text-white" style={{ background: colors[i % colors.length] }}>{t.name[0]}</span>
                  <span>
                    <span className="block font-display text-[16px] font-extrabold">{t.name}</span>
                    <span className="flex items-center gap-1.5 text-[13px] text-[#111]/65">
                      <Star size={13} className="fill-[#111] text-[#111]" /> 5.0 · {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
