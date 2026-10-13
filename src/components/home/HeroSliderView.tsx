"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { image: string; mobile?: string; alt?: string; href?: string };

export function HeroSliderView({ slides, seconds }: { slides: Slide[]; seconds: number }) {
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  const x0 = useRef<number | null>(null);
  const n = slides.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (n < 2 || seconds <= 0 || hold) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), seconds * 1000);
    return () => clearInterval(t);
  }, [n, seconds, hold]);

  const pic = (s: Slide, k: number) => (
    <>
      {s.mobile ? <Image src={s.mobile} alt={s.alt || ""} width={900} height={900} priority={k === 0} sizes="100vw" className="h-auto w-full md:hidden" /> : null}
      <Image
        src={s.image} alt={s.alt || ""} width={1920} height={640} priority={k === 0} sizes="100vw"
        className={`h-auto w-full ${s.mobile ? "hidden md:block" : "min-h-[150px] object-cover"}`}
      />
    </>
  );

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-roledescription="carousel"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onTouchStart={(e) => { x0.current = e.touches[0]!.clientX; setHold(true); }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0]!.clientX - (x0.current ?? 0);
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        x0.current = null; setHold(false);
      }}
    >
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s, k) => (
          <div key={k} className="w-full shrink-0" aria-hidden={k !== i}>
            {s.href ? <Link href={s.href} tabIndex={k === i ? 0 : -1}>{pic(s, k)}</Link> : pic(s, k)}
          </div>
        ))}
      </div>

      {n > 1 ? (
        <>
          {([-1, 1] as const).map((d) => (
            <button
              key={d} type="button" onClick={() => go(d)} aria-label={d === 1 ? "Next slide" : "Previous slide"}
              className={`absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink)] shadow-lg transition hover:bg-[var(--color-brand)] hover:text-white md:flex ${d === 1 ? "right-4" : "left-4"}`}
            >
              {d === 1 ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          ))}
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {slides.map((_, k) => (
              <button key={k} type="button" onClick={() => setI(k)} aria-label={`Go to slide ${k + 1}`} className={`h-2.5 rounded-full transition-all ${k === i ? "w-7 bg-[var(--color-brand)]" : "w-2.5 bg-[var(--color-ink)]/30"}`} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
