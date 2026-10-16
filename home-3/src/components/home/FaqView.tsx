"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

export function FaqView({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-space">
      <div className="container-max grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead center={false} pill="FAQs" title="Frequently asked questions" sub="Clear answers to help you understand how we work before you commit to anything." />
        </div>
        <Reveal className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`overflow-hidden rounded-2xl border-2 border-[#111] transition-all duration-300 ${isOpen ? "bg-[var(--sun)] shadow-[var(--pop)]" : "bg-white"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6">
                  <span className="flex-1 font-display text-[var(--fs-base)] font-extrabold sm:text-[var(--fs-lg)]">{f.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#111] transition-all duration-300 ${isOpen ? "rotate-45 bg-[#111] text-white" : "bg-[var(--sun)]"}`}>
                    <Plus size={17} strokeWidth={3} />
                  </span>
                </button>
                <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[var(--fs-sm)] leading-relaxed text-[#111]/80 sm:px-6">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
