import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { products } from "@/data/products";

export function Products() {
  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Our own products"
          title="SaaS we built, and run our own agency on"
          sub="Not resold software. These are platforms our team built, uses daily, and licenses to clients across India."
        />

        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {products.map((p) => (
            <article key={p.slug} className="card group flex flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  {p.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    p.status === "Live"
                      ? "bg-[var(--color-brand-soft)] text-[var(--color-brand)]"
                      : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[var(--fs-xl)] font-extrabold">{p.name}</h3>
              <p className="mt-1.5 font-display text-[var(--fs-sm)] font-bold text-[var(--color-brand)]">
                {p.tagline}
              </p>
              <p className="mt-3 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                {p.summary}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {p.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-[var(--fs-sm)]">
                    <Check size={14} strokeWidth={3} className="mt-1 shrink-0 text-[var(--color-brand)]" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
                <span className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                  From <strong className="text-[var(--color-ink)]">{p.pricing[0]!.price}</strong>
                </span>
                <Link
                  href={`/products/${p.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--fs-sm)] font-bold text-[var(--color-ink)] transition-all group-hover:gap-3 group-hover:text-[var(--color-brand)]"
                >
                  View product <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
