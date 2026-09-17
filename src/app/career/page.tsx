import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/home";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Hover Business Services LLP — SEO, performance marketing, development and design jobs in Delhi NCR.",
};

const perks = [
  { title: "Work that ships", body: "Live client accounts from week one, not six months of shadowing." },
  { title: "Learning budget", body: "Courses, certifications and conference passes covered every year." },
  { title: "Flexible hours", body: "Core hours overlap; the rest is yours to structure sensibly." },
  { title: "Clear growth path", body: "Reviews every six months with written criteria, not vibes." },
  { title: "Own the tools", body: "We build our own SaaS — engineers get real product work too." },
  { title: "Small teams", body: "Pods of four to six people, so your work is visible." },
];

const openings = [
  { role: "SEO Executive", team: "Digital Marketing", type: "Full-time", location: "Pitampura, Delhi", exp: "1–3 years" },
  { role: "Performance Marketing Specialist", team: "Paid Media", type: "Full-time", location: "Pitampura, Delhi", exp: "2–5 years" },
  { role: "Next.js Developer", team: "Engineering", type: "Full-time", location: "Delhi / Hybrid", exp: "2–4 years" },
  { role: "React Native Developer", team: "Engineering", type: "Full-time", location: "Delhi / Remote", exp: "2–4 years" },
  { role: "UI/UX Designer", team: "Creative", type: "Full-time", location: "Pitampura, Delhi", exp: "1–4 years" },
  { role: "Content Writer", team: "Content", type: "Full-time", location: "Delhi / Hybrid", exp: "0–2 years" },
  { role: "Business Development Executive", team: "Sales", type: "Full-time", location: "Pitampura, Delhi", exp: "1–3 years" },
  { role: "Graphic Design Intern", team: "Creative", type: "Internship", location: "Pitampura, Delhi", exp: "Fresher" },
];

const steps = [
  { n: "01", title: "Apply", body: "Send your CV and, where relevant, links to work you actually did." },
  { n: "02", title: "Screening call", body: "A 20-minute conversation about your experience and what you want next." },
  { n: "03", title: "Practical task", body: "A short, paid or time-boxed task close to the real job." },
  { n: "04", title: "Offer", body: "Written offer with role scope, compensation and review criteria." },
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

      {/* perks */}
      <section className="section-space">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Why work here</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Small teams, real ownership
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="font-display text-[var(--fs-lg)] font-bold">{p.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {p.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* openings */}
      <section className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Open roles</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Current openings
            </h2>
            <p className="mt-4 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
              Nothing matching? Send your CV anyway — we keep good profiles on file.
            </p>
          </Reveal>

          <Reveal stagger className="mt-10 flex flex-col gap-4">
            {openings.map((o) => (
              <div
                key={o.role}
                className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-[var(--fs-lg)] font-bold">{o.role}</h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={13} className="text-[var(--color-brand)]" /> {o.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-[var(--color-brand)]" /> {o.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-[var(--color-brand)]" /> {o.type} · {o.exp}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(o.role)}`}
                  className="btn btn-ghost shrink-0"
                >
                  Apply now <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* hiring process */}
      <section className="section-space">
        <div className="container-max">
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <span className="pill">Hiring process</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
              Four steps, about two weeks
            </h2>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card p-6">
                <span className="font-display text-3xl font-extrabold text-[var(--color-brand)]">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{s.title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {s.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10 text-center">
            <a href={`mailto:${company.email}?subject=Open application`} className="btn btn-brand">
              Send an open application <ArrowRight size={17} />
            </a>
            <p className="mt-3 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
              Or write to{" "}
              <Link href={`mailto:${company.email}`} className="font-semibold text-[var(--color-brand)]">
                {company.email}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <PageCta title="Prefer to talk before applying?" body="Reach out and we will tell you honestly what the role involves day to day." />
    </>
  );
}
