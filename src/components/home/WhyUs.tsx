import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { whyUs } from "@/data/home";

export function WhyUs() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <div className="container-max">
        <SectionHead
          pill="Why choose HBS"
          title="A straightforward, targeted way of working with you"
          sub="No jargon, no black boxes, no surprise invoices — just a team that reports honestly and keeps shipping."
        />

        <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <div key={w.title} className="card p-6 sm:p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] font-display text-lg text-[var(--color-primary)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[var(--fs-lg)] font-bold">{w.title}</h3>
              <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                {w.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
