import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { art, offices } from "@/data/home";

export function Offices() {
  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Where we are"
          title="Four offices, one team"
          sub="Three in India and one in New Zealand — so there is always someone on your timezone."
        />

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => (
            <div key={o.city} className="card flex flex-col p-6">
              <span className="relative h-12 w-12">
                <Image
                  src={art.officeIcons[i] ?? art.officeIcons[0]!}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <p className="mt-5 font-display text-[var(--fs-lg)] font-bold">{o.city}</p>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                {o.country}
              </p>
              <p className="mt-3 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                {o.address}
              </p>
              <a
                href={`tel:${o.phone}`}
                className="mt-5 inline-flex items-center gap-2 border-t border-[var(--color-border)] pt-4 text-[var(--fs-sm)] font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
              >
                <Phone size={15} /> {o.phone}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
