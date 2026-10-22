import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { art } from "@/data/home";
import { getSetting } from "@/lib/site";

export async function Offices() {
  const { items: offices } = await getSetting("offices");

  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Where we are"
          title="Four offices, one team"
          sub="Three in India and one in New Zealand — so there is always someone on your timezone."
        />

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => {
            const mapQuery = encodeURIComponent(
              `${o.city}, ${o.address}`.replace(/—/g, "-")
            );
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

            return (
              <div
                key={`${o.city}-${i}`}
                className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="relative h-12 w-12 shrink-0">
                    <Image
                      src={art.officeIcons[i] ?? art.officeIcons[0]!}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </span>

                  {/* Open Map Pill Button */}
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-bold text-[var(--color-ink)] transition-all hover:border-[var(--color-brand)] hover:bg-[#fdecea] hover:text-[var(--color-brand)]"
                    title={`Open ${o.city} on Google Maps`}
                  >
                    <MapPin size={12} className="text-[var(--color-brand)]" />
                    <span>Open Map</span>
                    <ArrowUpRight size={11} className="opacity-70" />
                  </a>
                </div>

                <p className="mt-5 font-display text-[var(--fs-lg)] font-bold text-[var(--color-ink)]">
                  {o.city}
                </p>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  {o.country}
                </p>

                <p className="mt-3 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {o.address}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <a
                    href={`tel:${o.phone}`}
                    className="inline-flex items-center gap-2 text-[var(--fs-sm)] font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
                  >
                    <Phone size={14} className="text-[var(--color-brand)]" />
                    <span>{o.phone}</span>
                  </a>

                  {/* Direct Map Icon Action */}
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-all hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white"
                    title={`View ${o.city} on Google Maps`}
                    aria-label={`Open ${o.city} location map`}
                  >
                    <MapPin size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
