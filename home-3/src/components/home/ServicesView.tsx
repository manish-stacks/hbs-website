"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";

const FIRST = 6;

export function ServicesView({ services }: { services: { n: string; title: string; body: string; badge?: string; tags: string[]; href: string; image: string; alt: string }[] }) {
  const [all, setAll] = useState(false);
  const list = all ? services : services.slice(0, FIRST);

  return (
    <section className="section-space">
      <div className="container-max">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead center={false} pill="What we do" title="Digital growth solutions under one roof" sub="Search, paid media, development, e-commerce and branding, designed to work together and move your revenue forward." />
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Link key={s.n} href={s.href} className={`pop hover-lift group relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-7 ${["bg-white", "bg-[var(--sun)]", "bg-[var(--color-brand-soft)]"][i % 3]}`}>
                <span className="absolute -right-2 -top-4 font-display text-[110px] font-extrabold leading-none text-[#111]/[.07]">{s.n}</span>
                <div className="relative flex items-start justify-between gap-4">
                  <div className="relative h-20 w-20 shrink-0 rounded-2xl border-2 border-[#111] bg-white">
                    <Image src={s.image} alt={s.alt} fill sizes="80px" className="object-contain p-2.5" />
                  </div>
                  {s.badge ? <span className="rounded-full border-2 border-[#111] bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">{s.badge}</span> : null}
                </div>
                <h3 className="relative mt-6 text-[var(--fs-xl)]">{s.title}</h3>
                <p className="relative mt-3 text-[var(--fs-sm)] leading-relaxed text-[#111]/70">{s.body}</p>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => <li key={t} className="rounded-full border-2 border-[#111] bg-white/70 px-3 py-0.5 text-[12px] font-bold">{t}</li>)}
                </ul>
                <span className="relative mt-7 inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-wider">
                  Explore <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white transition-transform duration-300 group-hover:-rotate-45"><ArrowRight size={16} /></span>
                </span>
              </Link>
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
