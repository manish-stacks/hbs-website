import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { testimonials } from "@/data/home";

export function Testimonials() {
  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Client reviews"
          title="What our clients have to say"
          sub="We have worked with 1500+ clients, and we value every relationship."
        />

        <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6 sm:p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--color-star)] text-[var(--color-star)]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] font-display font-bold text-[var(--color-primary)]">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span>
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className="block text-[var(--fs-xs)] text-[var(--color-text-muted)]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
