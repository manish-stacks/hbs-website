import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { productMap, productSlugs, products } from "@/data/products";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productMap.get(slug);
  return p ? buildMeta({ title: p.name, description: p.tagline, path: `/products/${slug}` }) : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productMap.get(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <>
      <PageHero
        eyebrow={p.category}
        title={p.name}
        tagline={p.tagline}
        crumbs={[
          { label: "Products", href: "/products" },
          { label: p.name, href: `/products/${p.slug}` },
        ]}
      />

      <section className="section-space">
        <div className="container-max grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <span className="pill">{p.status}</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              What it does
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">{p.summary}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {p.features.map((f) => (
                <div key={f.title} className="card p-5">
                  <h3 className="font-display text-[var(--fs-base)] font-bold">{f.title}</h3>
                  <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="card p-6 sm:p-7 lg:sticky lg:top-28">
            <h3 className="font-display text-[var(--fs-lg)] font-bold">Included with every plan</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[var(--fs-sm)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="btn btn-brand mt-7 w-full">
              Book a live demo <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* pricing */}
      <section className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Pricing</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Plans that scale with usage
            </h2>
            <p className="mt-4 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
              Billed monthly, cancel with 30 days&apos; notice. Prices exclude applicable taxes and
              any third-party platform fees.
            </p>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {p.pricing.map((tier) => (
              <div
                key={tier.plan}
                className={`relative flex flex-col rounded-[var(--radius-lg)] border bg-white p-6 sm:p-7 ${
                  tier.popular
                    ? "border-[var(--color-brand)] shadow-[var(--shadow-md)]"
                    : "border-[var(--color-border)]"
                }`}
              >
                {tier.popular ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                ) : null}

                <p className="font-display text-[var(--fs-lg)] font-bold">{tier.plan}</p>
                <p className="mt-3 font-display text-3xl font-extrabold text-[var(--color-ink)]">
                  {tier.price}
                </p>
                <p className="mt-1 text-[var(--fs-sm)] text-[var(--color-text-muted)]">{tier.note}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[var(--color-border)] pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[var(--fs-sm)]">
                      <Check size={15} strokeWidth={3} className="mt-1 shrink-0 text-[var(--color-brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us"
                  className={`btn mt-7 w-full ${tier.popular ? "btn-brand" : "btn-ghost"}`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* other products */}
      <section className="section-space">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[50ch] text-center">
            <span className="pill">More from HBS</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Other products
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="card group flex flex-col p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {o.category}
                </span>
                <h3 className="mt-3 font-display text-[var(--fs-lg)] font-bold transition-colors group-hover:text-[var(--color-brand)]">
                  {o.name}
                </h3>
                <p className="mt-2 flex-1 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                  {o.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[var(--fs-sm)] font-bold transition-all group-hover:gap-3 group-hover:text-[var(--color-brand)]">
                  Explore <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta title={`Want to see ${p.name} on your own data?`} />
    </>
  );
}
