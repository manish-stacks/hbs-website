import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Users } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany, getSetting } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Team Members",
    description: "Meet the team leaders of Hover Business Services LLP and the departments they lead.",
    path: "/team-members",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Leaders come from Admin → Team leaders. */

const HERO = {
  title: "The people who keep every project moving.",
  tagline: "Each department at Hover is led by someone who has done the work themselves. They plan it, review it and answer for the results.",
};

const PROMISE = [
  { t: "Senior review on everything", b: "A team leader checks every campaign, design and release before it reaches you." },
  { t: "One point of contact", b: "You always know who is responsible for your account and how to reach them." },
  { t: "Leaders who still do the work", b: "Our leads stay hands-on, so advice comes from current experience, not theory." },
];

/* ============================== Page ============================== */

export default async function TeamMembersPage() {
  const [co, leadersSetting] = await Promise.all([getCompany(), getSetting("leaders")]);
  const leaders = (leadersSetting.items ?? []).filter((m) => m?.name);
  const faces = leaders.filter((m) => m.image).slice(0, 6);
  const depts = [...new Set(leaders.map((m) => m.position).filter(Boolean))];
  const initials = (n: string) => n.split(" ").map((x) => x[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div className="tm text-[var(--color-ink)]">
      <style>{`
        .tm h1,.tm h2,.tm h3{color:inherit}
        @keyframes tm-pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}
        .tm-pop{animation:tm-pop .6s cubic-bezier(.2,.8,.2,1.2) both}
        @media (prefers-reduced-motion:reduce){.tm-pop{animation:none}}
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-ink)] pb-20 pt-12 text-white md:pt-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-[var(--color-brand)] opacity-25 blur-[120px]" />
        <div className="container-max relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-white/60"><Link href="/about-us" className="hover:underline">About us</Link><span>/</span><span className="text-white">Team leaders</span></nav>
            <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,5.6vw,4.6rem)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[52ch] text-lg text-white/70">{HERO.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div><p className="font-display text-4xl font-extrabold">{leaders.length}</p><p className="text-sm text-white/60">Team leaders</p></div>
              {depts.length > 0 && <div><p className="font-display text-4xl font-extrabold">{depts.length}</p><p className="text-sm text-white/60">Departments</p></div>}
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-3">
            {(faces.length ? faces : leaders.slice(0, 6)).map((m, i) => (
              <div key={m.name + i} className={`tm-pop aspect-square overflow-hidden rounded-[28px] bg-white/10 ${i % 3 === 1 ? "translate-y-6" : ""}`} style={{ animationDelay: `${i * 0.08}s` }}>
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.image} alt={m.alt || m.name} className="h-full w-full object-cover" />
                ) : <span className="flex h-full w-full items-center justify-center font-display text-3xl font-extrabold text-white/60">{initials(m.name)}</span>}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* DEPARTMENTS */}
      {depts.length > 0 && (
        <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-5">
          <div className="container-max flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-semibold text-[var(--color-text-muted)]">Departments</span>
            {depts.map((d) => <span key={d} className="rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-sm font-semibold">{d}</span>)}
          </div>
        </div>
      )}

      {/* LEADERS */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Meet our team leaders</h2>
          {leaders.length === 0 ? (
            <p className="mt-10 text-[var(--color-text-muted)]">Team leaders will be added soon.</p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leaders.map((m, i) => (
                <article key={m.name + i} className="group">
                  <div className={`relative aspect-[4/5] overflow-hidden rounded-[32px] ${i % 3 === 1 ? "bg-[var(--color-brand)]" : i % 3 === 2 ? "bg-[var(--color-ink)]" : "bg-[var(--color-surface-2)]"}`}>
                    {m.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.image} alt={m.alt || `${m.name}, ${m.designation}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <span className={`flex h-full w-full items-center justify-center font-display text-7xl font-extrabold ${i % 3 === 0 ? "text-[var(--color-ink)]/20" : "text-white/40"}`}>{initials(m.name)}</span>
                    )}
                    {m.position && <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold backdrop-blur">{m.position}</span>}
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4 px-1">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                      <p className="mt-0.5 text-[var(--color-text-muted)]">{m.designation}</p>
                    </div>
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[var(--color-brand)]" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROMISE */}
      <section className="bg-[var(--color-brand-soft)] py-16 md:py-20">
        <div className="container-max">
          <h2 className="max-w-[22ch] font-display text-3xl font-extrabold tracking-tight md:text-4xl">What working with our leaders means for you</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PROMISE.map((p) => (
              <div key={p.t} className="rounded-3xl bg-white p-7">
                <Users size={24} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-max grid gap-4 md:grid-cols-2">
          <div className="rounded-[32px] bg-[var(--color-ink)] p-8 text-white md:p-10">
            <h2 className="font-display text-3xl font-extrabold">Talk to a team leader</h2>
            <p className="mt-2 text-white/65">Get advice from the person who would actually run your project.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold">Book a call <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold"><Phone size={15} /> {co.phone}</a>
            </div>
          </div>
          <div className="rounded-[32px] border-2 border-[var(--color-ink)] p-8 md:p-10">
            <h2 className="font-display text-3xl font-extrabold">Want to join the team?</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">See open roles across marketing, engineering and design.</p>
            <Link href="/career" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3.5 text-sm font-bold">View careers <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
