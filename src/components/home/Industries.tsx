import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { industries } from "@/data/home";

export function Industries() {
  return (
    <section className="section-space ">
      <div className="container-max">
        <SectionHead
          pill="Industries we serve"
          title="Industry-focused digital expertise"
          sub="We understand the specific buying behaviour of each sector, and build campaigns around it instead of using one template for everyone."
        />

        <Reveal stagger className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span
              key={i}
              className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-[var(--fs-xs)] font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:px-6 sm:py-3 sm:text-[var(--fs-sm)]"
            >
              {i}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
