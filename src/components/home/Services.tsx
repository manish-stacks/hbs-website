import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { services } from "@/data/home";

export function Services() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="container-max">
        <SectionHead
          pill="What we do"
          title="Digital growth solutions under one roof"
          sub="Search, paid media, development, e-commerce and branding — designed to work together and move your revenue forward."
        />

        <Reveal
          stagger
          className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col rounded-[26px] border border-[var(--color-border)] bg-white p-7 pb-[78px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <span className="absolute inset-0 rounded-[22px] bg-[var(--color-primary-soft)]" />

                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="relative object-contain p-2.5"
                  />
                </div>

                {s.badge ? (
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    {s.badge}
                  </span>
                ) : (
                  <span className="font-display text-2xl text-[var(--color-border)]">
                    {s.n}
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-[var(--fs-xl)]">
                {s.title}
              </h3>

              <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                {s.body}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[12px] text-[var(--color-text-muted)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* Bottom */}
              <div className="absolute bottom-0 left-7 right-[90px] flex h-[65px] items-center">
                <span className="h-px flex-1 bg-[var(--color-border)]" />

                <Link
                  href={s.href}
                  className="ml-5 text-[12px] font-bold uppercase text-[var(--color-text-muted)]"
                >
                  More
                </Link>
              </div>

              {/* Bottom-right cutout */}
              <div
                className="
      absolute
      bottom-0
      right-0
      h-[82px]
      w-[82px]
      rounded-tl-[28px]
      rounded-br-[28px]
      bg-[var(--color-surface)]
    "
              />

              {/* Orange Plus */}
              <Link
                href={s.href}
                aria-label={`Explore ${s.title}`}
                className="
      absolute
      bottom-[8px]
      right-[8px]
      z-10
      flex
      h-[58px]
      w-[58px]
      items-center
      justify-center
      rounded-full
      bg-[#FFA90B]
      text-black
      transition-all
      duration-300
      hover:rotate-90
      hover:scale-105
    "
              >
                <Plus size={25} strokeWidth={2.5} />
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}