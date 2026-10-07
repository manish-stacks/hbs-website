import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Blob, Sparkle } from "@/components/ui/Decor";
import { getSetting } from "@/lib/site";


export async function About() {
  const a = await getSetting("about");
  const points = a.points.filter(Boolean);
  return (
    <section className="section-space relative overflow-hidden bg-white">
      <div className="container-max grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <Blob className="pointer-events-none absolute -left-10 -top-10 h-[115%] w-[115%] opacity-90" />
          <Blob
            className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 opacity-80"
            color="var(--color-accent-soft)"
          />
          <div className="relative aspect-[4/3]">
            <Image
              src={a.image}
              alt={a.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-contain"
            />
          </div>

          <div
            className="absolute bottom-2 left-2 flex items-center gap-3 rounded-[var(--radius-md)] bg-white px-5 py-4 sm:left-[-10px]"
            style={{ boxShadow: "var(--shadow-lg)", border: "1px solid var(--color-border)" }}
          >
            <Sparkle className="h-6 w-6 text-[var(--color-accent)]" />
            <span>
              <span className="block font-display text-2xl font-extrabold text-[var(--color-brand)]">
                {a.badgeValue}
              </span>
              <span className="block text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                {a.badgeLabel}
              </span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="pill">{a.eyebrow}</span>
          <h2 className="mt-4" style={{ fontSize: "var(--fs-3xl)" }}>
            {a.heading}{" "}
            <span className="relative whitespace-nowrap text-[var(--color-brand)]">
              {a.highlight}
            </span>
          </h2>
          <p className="mt-5 text-[var(--color-text-muted)]">{a.p1}</p>
          <p className="mt-4 text-[var(--color-text-muted)]">{a.p2}</p>

          <ul className="mt-7 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[var(--fs-sm)]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Check size={13} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <Link href="/about-us" className="btn btn-primary mt-9">
            {a.linkLabel} <ArrowRight size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
