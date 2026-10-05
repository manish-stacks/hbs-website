import type { Metadata } from "next";
import { buildMeta, SITE_NAME, SITE_URL } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Layers, Phone, Plus, ShieldCheck, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { Underline } from "@/components/ui/Decor";
import { company, stats } from "@/data/home";
import { innerPages, innerSlugs, pageMap } from "@/data/pages";

export function generateStaticParams() {
  return innerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageMap.get(slug);
  return page ? buildMeta({ title: page.title, description: page.tagline, path: `/${slug}` }) : {};
}

const processSteps = [
  { n: "01", t: "Audit & discovery", b: "We map where you stand today against the competitors already winning." },
  { n: "02", t: "Strategy & scope", b: "A written plan: what we will do, in what order, and what it should produce." },
  { n: "03", t: "Execution", b: "Work ships in weekly increments — nothing disappears into a black box." },
  { n: "04", t: "Report & scale", b: "Monthly numbers in plain language, then budget moves to what is working." },
];

const pointIcons = [Target, TrendingUp, Layers, ShieldCheck, Zap, Sparkles];

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageMap.get(slug);
  if (!page) notFound();

  const siblings = innerPages.filter((p) => p.kind === "service" && p.slug !== page.slug).slice(0, 8);
  const isLegal = page.kind === "legal";

  const jsonLd = isLegal
    ? null
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: page.title,
            description: page.tagline,
            url: `${SITE_URL}/${page.slug}`,
            areaServed: ["IN", "NZ"],
            provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/${page.slug}` },
            ],
          },
          ...(page.faqs
            ? [
                {
                  "@type": "FAQPage",
                  mainEntity: page.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                },
              ]
            : []),
        ],
      };

  return (
    <>
      {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> : null}

      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        tagline={page.tagline}
        crumbs={[{ label: page.title, href: `/${page.slug}` }]}
      />

      {isLegal ? (
        <section className="section-space">
          <div className="container-max">
            <Reveal className="mx-auto flex max-w-[860px] flex-col gap-5">
              <p className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 text-[var(--fs-lg)] leading-relaxed text-[var(--color-ink)] sm:p-8">
                {page.intro}
              </p>
              {page.sections?.map((s, i) => (
                <div key={s.heading} className="flex gap-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] font-display font-extrabold text-[var(--color-brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-[var(--fs-xl)] font-bold">{s.heading}</h2>
                    <p className="mt-2 leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
                  </div>
                </div>
              ))}
              <p className="text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                Questions about this policy? Write to{" "}
                <a href={`mailto:${company.email}`} className="font-semibold text-[var(--color-brand)]">
                  {company.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      ) : (
        <>
          {/* overview + sidebar */}
          <section className="section-space">
            <div className="container-max grid gap-10 lg:grid-cols-[1fr_350px] lg:items-start lg:gap-14">
              <div>
                <Reveal>
                  <span className="pill">Overview</span>
                  <h2 className="relative mt-4 inline-block" style={{ fontSize: "var(--fs-2xl)" }}>
                    {page.tagline}
                    <Underline className="absolute -bottom-2 left-0 h-3 w-[46%] min-w-[120px]" />
                  </h2>
                  <p className="mt-7 text-[var(--fs-lg)] leading-[1.8] text-[var(--color-text-muted)]">{page.intro}</p>
                </Reveal>

                {page.children ? (
                  <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                    {page.children.map((c) => (
                      <Link
                        key={c.title}
                        href={c.href}
                        className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-[var(--shadow-md)]"
                      >
                        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink)] transition-all group-hover:bg-[var(--color-brand)] group-hover:text-white">
                          <ArrowUpRight size={16} />
                        </span>
                        <h3 className="pr-10 font-display text-[var(--fs-lg)] font-bold">{c.title}</h3>
                        <p className="mt-2 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{c.body}</p>
                      </Link>
                    ))}
                  </Reveal>
                ) : null}

                {page.points ? (
                  <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                    {page.points.map((p, i) => {
                      const Icon = pointIcons[i % pointIcons.length]!;
                      return (
                        <div
                          key={p.title}
                          className="group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
                        >
                          <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-[var(--color-ink)]/[.05] transition-colors group-hover:text-[var(--color-brand)]/15">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)] to-[#f0562b] text-white shadow-[0_10px_22px_rgba(229,35,27,.28)]">
                            <Icon size={21} />
                          </span>
                          <h3 className="mt-5 font-display text-[var(--fs-lg)] font-bold">{p.title}</h3>
                          <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{p.body}</p>
                        </div>
                      );
                    })}
                  </Reveal>
                ) : null}

                {page.deliverables ? (
                  <Reveal className="mt-12 rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 sm:p-8">
                    <h2 style={{ fontSize: "var(--fs-2xl)" }}>What is included</h2>
                    <p className="mt-3 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                      Scope is agreed in writing before work starts, so there are no surprises on either side.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {page.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[var(--shadow-sm)]">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="text-[var(--fs-sm)] font-medium">{d}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ) : null}
              </div>

              <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
                <Reveal className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)]">
                  <h3 className="font-display text-[var(--fs-lg)] font-bold">All services</h3>
                  <ul className="mt-3 flex flex-col">
                    {siblings.map((s) => (
                      <li key={s.slug} className="border-b border-[var(--color-border)] last:border-0">
                        <Link
                          href={`/${s.slug}`}
                          className="group flex items-center justify-between gap-3 py-3 text-[var(--fs-sm)] font-medium transition-colors hover:text-[var(--color-brand)]"
                        >
                          {s.title}
                          <ArrowRight size={15} className="shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.06} y={20} className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)]">
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[70px]"
                    style={{ background: "radial-gradient(circle, rgba(229,35,27,.5), transparent 70%)" }}
                  />
                  <div className="relative p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Sparkles size={19} />
                    </span>
                    <h3 className="mt-4 font-display text-[var(--fs-xl)] font-bold text-white">Not sure where to start?</h3>
                    <p className="mt-2 text-[var(--fs-sm)] text-white/60">
                      Get a free audit of your current visibility, funnel and competitors — no obligation.
                    </p>
                    <Link href="/contact-us" className="btn btn-brand mt-5 w-full">
                      Request free audit <ArrowRight size={16} />
                    </Link>
                    <a
                      href={`tel:${company.phone}`}
                      className="mt-3 flex items-center justify-center gap-2 text-[var(--fs-sm)] font-semibold text-white/80 hover:text-white"
                    >
                      <Phone size={15} /> {company.phone}
                    </a>
                  </div>
                </Reveal>
              </aside>
            </div>
          </section>

          {/* process timeline */}
          <section className="section-space bg-[var(--color-surface)]">
            <div className="container-max">
              <Reveal className="mx-auto max-w-[56ch] text-center">
                <span className="pill">How we work</span>
                <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
                  A process you can follow from the outside
                </h2>
              </Reveal>

              <div className="relative mt-12">
                <span className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent lg:block" style={{ backgroundColor: "var(--color-border)" }} />
                <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {processSteps.map((s) => (
                    <div key={s.n} className="relative text-center">
                      <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-ink)] font-display text-lg font-extrabold text-white ring-8 ring-[var(--color-surface)]">
                        {s.n}
                      </span>
                      <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)]">
                        <h3 className="font-display text-[var(--fs-base)] font-bold">{s.t}</h3>
                        <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{s.b}</p>
                      </div>
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>

          {/* stats */}
          <section className="py-14">
            <div className="container-max">
              <Reveal className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] px-6 py-10 sm:px-10">
                <span
                  className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
                  style={{ background: "radial-gradient(circle, rgba(229,35,27,.4), transparent 70%)" }}
                />
                <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-gradient-brand font-display text-4xl font-extrabold sm:text-5xl">
                        {s.value.toLocaleString("en-IN")}
                        {s.suffix}
                      </p>
                      <p className="mt-2 text-[var(--fs-xs)] font-semibold uppercase tracking-wider text-white/55">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {page.faqs ? (
        <section className="section-space bg-[var(--color-surface)]">
          <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <span className="pill">FAQs</span>
              <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
                Common questions
              </h2>
              <p className="mt-3 max-w-[40ch] text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                Cannot find what you are looking for? Our team replies within one working day.
              </p>
              <Link href="/contact-us" className="btn btn-primary group mt-6">
                Ask us anything <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <Reveal stagger className="flex flex-col gap-3">
              {page.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 transition-all open:border-[var(--color-brand)]/40 open:shadow-[var(--shadow-md)] sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] transition-all duration-300 group-open:rotate-45 group-open:bg-[var(--color-brand)] group-open:text-white">
                      <Plus size={16} />
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      {isLegal ? null : <PageCta />}
    </>
  );
}
