import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { results, stats } from "@/data/home";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected client work and measurable results from Hover Business Services LLP.",
};

const work = [
  {
    name: "EFOS",
    sector: "Food services",
    scope: ["Web platform", "SEO", "Branding"],
    outcome: "Rebuilt the site and search presence around service-intent keywords.",
    image: "/images/company/efos.jpg",
    featured: true,
  },
  {
    name: "PrintHutt",
    sector: "E-commerce",
    scope: ["Store build", "Performance marketing"],
    outcome: "Custom print storefront with a paid funnel tuned to order value.",
    image: "/images/company/printhutt.avif",
  },
  {
    name: "OncoHealthMart",
    sector: "Healthcare",
    scope: ["E-commerce SEO", "Rebuild"],
    outcome: "Catalogue site turned into a transacting store with trust signals.",
    image: "/images/company/onco.png",
  },
  {
    name: "Dikshant",
    sector: "Education",
    scope: ["Website", "Admissions funnel"],
    outcome: "Course pages and lead routing built around the admission season.",
    image: "/images/company/dikshant.avif",
  },
  {
    name: "Becho Gadi",
    sector: "Marketplace",
    scope: ["Platform", "Lead generation"],
    outcome: "Listing marketplace with a qualified-seller acquisition engine.",
    image: "/images/company/becho-gadi.webp",
  },
];

const filters = ["All", "E-commerce", "Healthcare", "Education", "Marketplace", "Food services"];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Work we are happy to be judged on"
        tagline="Sites, stores and campaigns we have shipped — and what changed after launch."
        crumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      />

      {/* stat strip */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-8">
        <div className="container-max grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold sm:text-4xl">
                {s.value.toLocaleString("en-IN")}
                <span className="text-[var(--color-brand)]">{s.suffix}</span>
              </p>
              <p className="mt-1 text-[var(--fs-xs)] text-[var(--color-text-muted)] sm:text-[var(--fs-sm)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* work grid */}
      <section className="section-space">
        <div className="container-max">
          <Reveal className="flex flex-wrap justify-center gap-2">
            {filters.map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-4 py-2 text-[var(--fs-xs)] font-semibold sm:text-[var(--fs-sm)] ${
                  i === 0
                    ? "bg-[var(--color-ink)] text-white"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)]"
                }`}
              >
                {f}
              </span>
            ))}
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <article
                key={w.name}
                className={`card group relative flex flex-col overflow-hidden ${
                  w.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${w.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(180deg, transparent 35%, rgba(11,13,18,.85))" }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)] backdrop-blur">
                    {w.sector}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-[var(--color-brand)] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ExternalLink size={16} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-[var(--fs-lg)] font-extrabold">{w.name}</h2>
                  <p className="mt-2 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                    {w.outcome}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {w.scope.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[12px] text-[var(--color-text-muted)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            {/* add-your-brand tile */}
            <Link
              href="/contact-us"
              className="group flex flex-col items-center justify-center gap-3 rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center transition-colors hover:border-[var(--color-brand)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                <ArrowRight size={20} />
              </span>
              <p className="font-display text-[var(--fs-lg)] font-bold">Your brand here</p>
              <p className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                Tell us what you are building and we will show you a plan.
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* case studies */}
      <section className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Case studies</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              What changed after we took over
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {results.map((r) => (
              <article key={r.industry} className="card flex flex-col p-6 sm:p-7">
                <span className="pill w-fit">{r.industry}</span>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                  {r.client}
                </p>
                <h3 className="mt-4 font-display text-[var(--fs-base)] font-bold">The challenge</h3>
                <p className="mt-1.5 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {r.challenge}
                </p>
                <h3 className="mt-4 font-display text-[var(--fs-base)] font-bold">What we did</h3>
                <p className="mt-1.5 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {r.solution}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-5">
                  {r.metrics.map(([v, l]) => (
                    <div key={l}>
                      <p className="font-display text-xl font-extrabold text-[var(--color-brand)]">{v}</p>
                      <p className="text-[11px] leading-tight text-[var(--color-text-muted)]">{l}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <Industries />
      <PageCta title="Want results like these on your account?" />
    </>
  );
}
