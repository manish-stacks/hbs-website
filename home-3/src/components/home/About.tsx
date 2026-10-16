import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getSetting } from "@/lib/site";

export async function About() {
  const a = await getSetting("about");
  const points = a.points.filter(Boolean);

  return (
    <section className="section-space">
      <div className="container-max grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-5">
          <div className="pop-lg relative aspect-[4/5] -rotate-2 overflow-hidden rounded-[28px] bg-[var(--sun)]">
            <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
          </div>
          <div className="pop-lg absolute -bottom-6 right-0 rotate-3 rounded-2xl bg-[var(--color-brand)] px-6 py-4 text-white sm:-right-6">
            <p className="font-display text-5xl font-extrabold leading-none">{a.badgeValue}</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-white/85">{a.badgeLabel}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7 lg:pl-8">
          <span className="tag">{a.eyebrow}</span>
          <h2 className="mt-5" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1 }}>
            {a.heading}{" "}
            <span className="inline-block -rotate-1 border-2 border-[#111] bg-[var(--sun)] px-2.5 shadow-[var(--pop)]">{a.highlight}</span>
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <p className="text-[var(--color-text-muted)]">{a.p1}</p>
            <p className="text-[var(--color-text-muted)]">{a.p2}</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {points.map((p) => (
              <li key={p} className="pop flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-[var(--fs-sm)] font-bold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111] text-white"><Check size={13} strokeWidth={3.5} /></span>
                {p}
              </li>
            ))}
          </ul>
          <Link href="/about-us" className="btn btn-accent mt-10">
            {a.linkLabel} <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
