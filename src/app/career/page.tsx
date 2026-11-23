import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Clock, Laptop, Phone, TrendingUp, Users, Wrench } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany, getSetting } from "@/lib/site";
import { JobBoard } from "./JobBoard";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Careers",
    description: "Open roles at Hover Business Services LLP — SEO, performance marketing, development and design jobs in Delhi NCR.",
    path: "/career",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Numbers come from Admin → Career page numbers. Roles from Admin → Job openings. */

const HERO = {
  title: "Do work that clients actually use.",
  tagline: "We are 80+ people across four offices, hiring across marketing, engineering and design. Small teams, real ownership, live projects from week one.",
};

const PERKS = [
  { icon: Laptop, title: "Work that ships", body: "Live client accounts from week one, not months of shadowing." },
  { icon: BookOpen, title: "Learning budget", body: "Courses, certifications and conference passes every year." },
  { icon: Clock, title: "Flexible hours", body: "Core hours overlap; the rest you structure sensibly." },
  { icon: TrendingUp, title: "Clear growth path", body: "Reviews every six months with written criteria." },
  { icon: Wrench, title: "Own the tools", body: "We build our own SaaS, so engineers get real product work." },
  { icon: Users, title: "Small teams", body: "Pods of four to six people, so your work is visible." },
];

const STEPS = [
  { title: "Apply", body: "Send your CV and links to work you actually did." },
  { title: "Screening call", body: "A 20-minute chat about your experience and goals." },
  { title: "Practical task", body: "A short task close to the real job." },
  { title: "Offer", body: "Written offer with scope, pay and review criteria." },
];

/* ============================== Page ============================== */

export default async function CareerPage() {
  const [co, c, jobs] = await Promise.all([getCompany(), getSetting("career"), getSetting("jobs")]);
  const openings = jobs.items.map((j) => ({ ...j, points: (j.points ?? []).filter(Boolean) }));
  const roles = openings.map((o) => o.role);

  return (
    <div className="cp text-[var(--color-ink)]">
      <style>{`
        .cp h1,.cp h2,.cp h3{color:inherit}
        @keyframes cp-up{to{transform:translateY(-50%)}}
        @keyframes cp-blink{50%{opacity:.25}}
        .cp-up{animation:cp-up ${Math.max(roles.length, 3) * 2.4}s linear infinite}
        .cp-blink{animation:cp-blink 1.4s ease-in-out infinite}
        @media (prefers-reduced-motion:reduce){.cp-up,.cp-blink{animation:none}}
      `}</style>

      {/* HERO — rolling list of open roles */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-20">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-soft)] px-3.5 py-1.5 text-sm font-bold text-[var(--color-brand-dark)]">
              <span className="cp-blink h-2 w-2 rounded-full bg-[var(--color-brand)]" /> We are hiring
            </p>
            <h1 className="mt-6 font-display font-extrabold" style={{ fontSize: "clamp(2.7rem,6vw,5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[52ch] text-lg text-[var(--color-text-muted)]">{HERO.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#openings" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-bold text-white">See open roles <ArrowDown size={16} /></a>
              <a href="#apply" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3.5 text-sm font-bold">Send open application</a>
            </div>
          </div>
          {roles.length > 0 && (
            <div className="relative h-[360px] overflow-hidden rounded-[36px] bg-[var(--color-ink)] p-6 text-white [mask-image:linear-gradient(transparent,#000_18%,#000_82%,transparent)]">
              <ul className="cp-up space-y-3">
                {[...roles, ...roles].map((r, i) => (
                  <li key={i} className={`flex items-center justify-between rounded-2xl px-5 py-4 font-display text-lg font-bold ${i % 3 === 0 ? "bg-[var(--color-brand)]" : "bg-white/[.06]"}`}>
                    {r}<ArrowRight size={18} className="opacity-60" />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container-max grid grid-cols-2 lg:grid-cols-4">
          {c.numbers.map((n, i) => (
            <div key={n.label} className={`px-4 py-8 ${i > 0 ? "border-l border-[var(--color-border)]" : ""}`}>
              <p className="font-display text-4xl font-extrabold">{n.value}</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERKS — bento */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="max-w-[18ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">Small teams. Real ownership.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PERKS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className={`rounded-[28px] p-7 ${i === 0 ? "bg-[var(--color-brand)] text-white md:row-span-2 md:flex md:flex-col md:justify-end" : i === 5 ? "border border-[var(--color-border)] bg-[var(--color-surface)] md:col-span-3 md:flex md:items-center md:gap-6" : i === 4 ? "bg-[var(--color-ink)] text-white" : "border border-[var(--color-border)] bg-white"}`}>
                <Icon size={i === 0 ? 40 : 26} strokeWidth={1.6} className={i === 0 || i === 4 ? "" : "text-[var(--color-brand)]"} />
                <h3 className={`mt-4 font-display font-bold ${i === 0 ? "text-3xl" : "text-lg"} ${i === 5 ? "md:mt-0" : ""}`}>{title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 5 ? "md:mt-0 " : ""}${i === 0 ? "text-white/85" : i === 4 ? "text-white/65" : "text-[var(--color-text-muted)]"}`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES + APPLY */}
      <div className="bg-[var(--color-surface)]"><JobBoard openings={openings} /></div>

      {/* HIRING PROCESS */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-extrabold tracking-tight">Four steps, about two weeks</h2>
            <p className="text-[var(--color-text-muted)]">No endless rounds. You hear back at every step.</p>
          </div>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-[var(--color-border)] md:block" />
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-full font-display font-extrabold ${i === STEPS.length - 1 ? "bg-[var(--color-brand)] text-white" : "border-2 border-[var(--color-ink)] bg-white"}`}>{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="grid items-center gap-6 rounded-[36px] border-2 border-[var(--color-ink)] p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Prefer to talk before applying?</h2>
              <p className="mt-2 text-[var(--color-text-muted)]">Call us and we will tell you honestly what the role involves day to day.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white"><Phone size={15} /> {co.phone}</a>
              <Link href="/life-at-hover" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3.5 text-sm font-semibold">Life at Hover</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
