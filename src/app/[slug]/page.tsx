import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, Plus } from "lucide-react";
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
  return page ? { title: page.title, description: page.tagline } : {};
}

const processSteps = [
  { n: "01", t: "Audit & discovery", b: "We map where you stand today against the competitors already winning." },
  { n: "02", t: "Strategy & scope", b: "A written plan: what we will do, in what order, and what it should produce." },
  { n: "03", t: "Execution", b: "Work ships in weekly increments — nothing disappears into a black box." },
  { n: "04", t: "Report & scale", b: "Monthly numbers in plain language, then budget moves to what is working." },
];

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageMap.get(slug);
  if (!page) notFound();

  const siblings = innerPages.filter((p) => p.kind === "service" && p.slug !== page.slug).slice(0, 8);
  const isLegal = page.kind === "legal";

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        tagline={page.tagline}
        crumbs={[{ label: page.title, href: `/${page.slug}` }]}
      />

      {isLegal ? (
        <section className="section-space">
          <div className="container-max">
            <Reveal className="mx-auto flex max-w-[78ch] flex-col gap-8">
              <p className="text-[var(--fs-lg)] leading-relaxed text-[var(--color-ink)]">{page.intro}</p>
              {page.sections?.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-[var(--fs-xl)] font-bold">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
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
          {/* main + sidebar */}
          <section className="section-space">
            <div className="container-max grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-12">
              <div>
                <Reveal>
                  <span className="pill">Overview</span>
                  <h2 className="relative mt-4 inline-block" style={{ fontSize: "var(--fs-2xl)" }}>
                    {page.tagline}
                    <Underline className="absolute -bottom-2 left-0 h-3 w-[46%] min-w-[120px]" />
                  </h2>
                  <p className="mt-7 text-[var(--fs-lg)] leading-relaxed text-[var(--color-text-muted)]">
                    {page.intro}
                  </p>
                </Reveal>

                {page.children ? (
                  <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                    {page.children.map((c) => (
                      <Link key={c.title} href={c.href} className="card group flex flex-col p-5">
                        <h3 className="font-display text-[var(--fs-base)] font-bold transition-colors group-hover:text-[var(--color-brand)]">
                          {c.title}
                        </h3>
                        <p className="mt-2 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                          {c.body}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[var(--fs-xs)] font-bold uppercase tracking-[0.1em] transition-all group-hover:gap-3 group-hover:text-[var(--color-brand)]">
                          View <ArrowRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </Reveal>
                ) : null}

                {page.points ? (
                  <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                    {page.points.map((p, i) => (
                      <div key={p.title} className="card p-6">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] font-display font-extrabold text-[var(--color-brand)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{p.title}</h3>
                        <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                          {p.body}
                        </p>
                      </div>
                    ))}
                  </Reveal>
                ) : null}

                {page.deliverables ? (
                  <Reveal className="mt-12">
                    <h2 style={{ fontSize: "var(--fs-2xl)" }}>What is included</h2>
                    <p className="mt-3 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                      Scope is agreed in writing before work starts, so there are no surprises on
                      either side.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {page.deliverables.map((d) => (
                        <div
                          key={d}
                          className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white p-4"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-[var(--color-brand)]">
                            <Check size={13} strokeWidth={3} />
                          </span>
                          <span className="text-[var(--fs-sm)]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ) : null}
              </div>

              <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
                <Reveal className="card p-6">
                  <h3 className="font-display text-[var(--fs-lg)] font-bold">All services</h3>
                  <ul className="mt-4 flex flex-col">
                    {siblings.map((s) => (
                      <li key={s.slug} className="border-b border-[var(--color-border)] last:border-0">
                        <Link
                          href={`/${s.slug}`}
                          className="flex items-center justify-between gap-3 py-3 text-[var(--fs-sm)] transition-colors hover:text-[var(--color-brand)]"
                        >
                          {s.title}
                          <ArrowRight size={15} className="shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={0.06}
                  y={20}
                  className="overflow-hidden rounded-[var(--radius-lg)]"
                >
                  <div
                    className="p-6"
                    style={{ background: "linear-gradient(140deg, #0b0d12, #1d232f 60%, #331b17)" }}
                  >
                    <h3 className="font-display text-[var(--fs-lg)] font-bold text-white">
                      Not sure where to start?
                    </h3>
                    <p className="mt-2 text-[var(--fs-sm)] text-white/60">
                      Get a free audit of your current visibility, funnel and competitors — no
                      obligation.
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

          {/* process */}
          <section className="section-space bg-[var(--color-surface)]">
            <div className="container-max">
              <Reveal className="mx-auto max-w-[56ch] text-center">
                <span className="pill">How we work</span>
                <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
                  A process you can follow from the outside
                </h2>
              </Reveal>

              <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((s) => (
                  <div key={s.n} className="card p-6">
                    <span className="font-display text-3xl font-extrabold text-[var(--color-brand)]">
                      {s.n}
                    </span>
                    <h3 className="mt-4 font-display text-[var(--fs-base)] font-bold">{s.t}</h3>
                    <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                      {s.b}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>
          </section>

          {/* stats strip */}
          <section className="py-12">
            <div className="container-max">
              <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white px-6 py-8 text-center">
                    <p className="font-display text-4xl font-extrabold text-[var(--color-ink)]">
                      {s.value.toLocaleString("en-IN")}
                      <span className="text-[var(--color-brand)]">{s.suffix}</span>
                    </p>
                    <p className="mt-1.5 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {page.faqs ? (
        <section className="section-space bg-[var(--color-surface)]">
          <div className="container-max">
            <Reveal className="mx-auto max-w-[56ch] text-center">
              <span className="pill">FAQs</span>
              <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
                Common questions
              </h2>
            </Reveal>

            <Reveal stagger className="mx-auto mt-10 grid max-w-[980px] gap-4 lg:grid-cols-2">
              {page.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display font-bold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus
                      size={18}
                      className="shrink-0 transition-transform duration-300 group-open:rotate-45 group-open:text-[var(--color-brand)]"
                    />
                  </summary>
                  <p className="mt-3 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                    {f.a}
                  </p>
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
