import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGallery } from "@/components/portfolio/WorkGallery";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { results, stats } from "@/data/home";

export const metadata: Metadata = buildMeta({
  title: "Portfolio",
  description: "Selected client work and measurable results from Hover Business Services LLP.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Work we are happy to be judged on"
        tagline="Sites, stores and campaigns we have shipped — and what changed after launch."
        crumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      />

      {/* stats */}
      <section className="relative z-10 -mt-2 pb-4">
        <div className="container-max">
          <Reveal className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)] lg:grid-cols-4 lg:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-7 text-center sm:py-9">
                <p className="font-display text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
                  {s.value.toLocaleString("en-IN")}
                  <span className="text-[var(--color-brand)]">{s.suffix}</span>
                </p>
                <p className="mt-1 text-[var(--fs-xs)] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* work */}
      <section className="section-space">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <span className="pill">Selected work</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-3xl)" }}>
              Projects built to <span className="text-gradient-brand">perform</span>
            </h2>
          </Reveal>

          <div className="mt-10">
            <WorkGallery />
          </div>
        </div>
      </section>

      {/* case studies */}
      <section className="section-space relative overflow-hidden bg-[var(--color-ink)] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage: "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(229,35,27,.3), transparent 70%)" }}
        />

        <div className="container-max relative">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/80">
              Case studies
            </span>
            <h2 className="mt-4 text-white" style={{ fontSize: "var(--fs-3xl)" }}>
              What changed after we <span className="text-gradient-brand">took over</span>
            </h2>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {results.map((r) => (
              <article
                key={r.industry}
                className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[.04] transition-colors duration-300 hover:border-[var(--color-brand)]/50 hover:bg-white/[.07]"
              >
                <div className="grid grid-cols-3 gap-3 border-b border-white/10 bg-white/[.04] p-6">
                  {r.metrics.map(([v, l]) => (
                    <div key={l}>
                      <p className="text-gradient-brand font-display text-2xl font-extrabold sm:text-3xl">{v}</p>
                      <p className="mt-1 text-[11px] leading-tight text-white/55">{l}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[var(--color-brand)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ff8a82]">
                      {r.industry}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">{r.client}</span>
                  </div>

                  <h3 className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">The challenge</h3>
                  <p className="mt-1.5 text-[var(--fs-sm)] leading-relaxed text-white/70">{r.challenge}</p>

                  <h3 className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">What we did</h3>
                  <p className="mt-1.5 flex-1 text-[var(--fs-sm)] leading-relaxed text-white/70">{r.solution}</p>
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
