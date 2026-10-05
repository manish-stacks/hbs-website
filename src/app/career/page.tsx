import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { BookOpen, Clock, Laptop, TrendingUp, Users, Wrench } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { CareerBoard } from "@/components/career/CareerBoard";

export const metadata: Metadata = buildMeta({
  title: "Careers",
  description: "Open roles at Hover Business Services LLP — SEO, performance marketing, development and design jobs in Delhi NCR.",
  path: "/career",
});

const numbers = [["80+", "Team members"], ["4", "Offices"], ["1500+", "Clients served"], ["6 mo", "Review cycle"]];

const perks = [
  { icon: Laptop, title: "Work that ships", body: "Live client accounts from week one, not months of shadowing." },
  { icon: BookOpen, title: "Learning budget", body: "Courses, certifications and conference passes every year." },
  { icon: Clock, title: "Flexible hours", body: "Core hours overlap; the rest you structure sensibly." },
  { icon: TrendingUp, title: "Clear growth path", body: "Reviews every six months with written criteria." },
  { icon: Wrench, title: "Own the tools", body: "We build our own SaaS, so engineers get real product work." },
  { icon: Users, title: "Small teams", body: "Pods of four to six people, so your work is visible." },
];

const steps = [
  { n: "01", title: "Apply", body: "Send your CV and links to work you actually did." },
  { n: "02", title: "Screening call", body: "A 20-minute chat about your experience and goals." },
  { n: "03", title: "Practical task", body: "A short task close to the real job." },
  { n: "04", title: "Offer", body: "Written offer with scope, pay and review criteria." },
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things that clients actually use"
        tagline="We are 80+ people across four offices, hiring across marketing, engineering and design."
        crumbs={[{ label: "Careers", href: "/career" }]}
      />

      <section className="relative z-10 -mt-2 pb-4">
        <div className="container-max">
          <Reveal className="grid grid-cols-2 divide-x divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)] lg:grid-cols-4 lg:divide-y-0">
            {numbers.map(([v, l]) => (
              <div key={l} className="px-4 py-7 text-center">
                <p className="font-display text-3xl font-extrabold text-[var(--color-brand)]">{v}</p>
                <p className="mt-1 text-[var(--fs-xs)] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Why work here</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>Small teams, real ownership</h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <Icon size={34} strokeWidth={1.4} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CareerBoard />

      <section className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Hiring process</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>Four steps, about two weeks</h2>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-6">
                <span className="font-display text-4xl font-extrabold text-[var(--color-brand)]/20">{s.n}</span>
                <h3 className="mt-2 font-display text-[var(--fs-lg)] font-bold">{s.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta title="Prefer to talk before applying?" body="Reach out and we will tell you honestly what the role involves day to day." />
    </>
  );
}
