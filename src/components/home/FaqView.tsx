"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

export function FaqView({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="container-max">
        <SectionHead
          pill="FAQs"
          title="Frequently asked questions"
          sub="Clear answers to help you understand how we work before you commit to anything."
        />

        <Reveal className="mt-12 grid gap-5 lg:grid-cols-2">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-4">
              {col.map((f, j) => {
                const i = c * half + j;
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`overflow-hidden rounded-[var(--radius-md)] border bg-white transition-colors duration-300 ${
                      isOpen ? "border-[var(--color-brand)]" : "border-[var(--color-border)]"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="font-display text-[var(--fs-base)] font-bold sm:text-[var(--fs-lg)]">
                        {f.q}
                      </span>
                      <Plus
                        size={19}
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-[var(--color-brand)]" : "text-[var(--color-ink)]"
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-400 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)] sm:px-6 sm:pb-6">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
