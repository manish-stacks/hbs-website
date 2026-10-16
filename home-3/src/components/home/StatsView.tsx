"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function StatsView({ stats }: { stats: { value: string; suffix: string; label: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const end = Number(el.dataset.value || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString("en-IN"); },
        });
      });
    }, ref);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="band bg-[var(--sun)]">
      <div className="container-max grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-3 py-9 sm:px-8 sm:py-12 ${i % 2 === 1 ? "border-l-2" : ""} ${i > 1 ? "border-t-2 lg:border-t-0" : ""} ${i > 0 ? "lg:border-l-2" : ""} border-[#111]`}>
            <p className="font-display font-extrabold leading-none text-[#111]" style={{ fontSize: "clamp(2.6rem, 1.4rem + 4vw, 5rem)" }}>
              <span className="stat-num" data-value={s.value}>0</span>{s.suffix}
            </p>
            <p className="mt-3 text-[var(--fs-sm)] font-bold uppercase tracking-wider text-black/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
