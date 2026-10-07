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
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-IN");
          },
        });
      });
    }, ref);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-14">
      <div className="container-max">
        <div
          className="grid gap-8 rounded-[var(--radius-lg)] px-8 py-12 sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: "linear-gradient(125deg, #10131a 0%, #22262f 55%, #3a2320 130%)" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="font-display text-5xl font-bold">
                <span className="stat-num" data-value={s.value}>0</span>
                <span>{s.suffix}</span>
              </p>
              <p className="mt-2 text-[var(--fs-sm)] text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
