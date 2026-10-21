"use client";

import { useEffect, useState } from "react";
import { ListFilter, ChevronRight } from "lucide-react";

export type TocItem = {
  id: string;
  title: string;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-90px 0% -60% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -96; // Offset for sticky navbar
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id);
  };

  if (!items.length) return null;

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_4px_20px_rgba(16,19,26,0.04)]">
      <div className="flex items-center justify-between pb-3.5 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fdecea] text-[#e5231b]">
            <ListFilter size={15} />
          </span>
          <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
            Table of Contents
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-brand)] bg-[#fdecea] px-2 py-0.5 rounded-full">
          {items.length} Sections
        </span>
      </div>

      <nav className="mt-3.5 flex flex-col gap-1 max-h-[340px] overflow-y-auto pr-1">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex items-start gap-2.5 text-left text-[13px] py-2 px-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#fdecea] text-[#e5231b] font-bold border-l-2 border-[#e5231b]"
                  : "text-[#6b6560] hover:bg-[#faf8f6] hover:text-[#10131a] font-medium"
              }`}
            >
              <span
                className={`mt-0.5 font-display text-[11px] font-bold tracking-tight shrink-0 ${
                  isActive ? "text-[#e5231b]" : "text-[#a09a93] group-hover:text-[#10131a]"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="leading-snug flex-1 line-clamp-2">{item.title}</span>
              <ChevronRight
                size={14}
                className={`mt-0.5 shrink-0 transition-transform ${
                  isActive
                    ? "text-[#e5231b] translate-x-0.5"
                    : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}

