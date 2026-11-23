import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Coffee, Heart, Lightbulb, MessageCircle, PartyPopper, Rocket } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getSetting } from "@/lib/site";
import { buildAlbums } from "@/lib/gallery";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Our Team (Life @ Hover) | Hover Business Services LLP",
    description: "Meet the people and culture behind Hover Business Services LLP — how we work, learn and celebrate together.",
    path: "/life-at-hover",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Photos come from Admin → Gallery, people from Admin → Team, numbers from Admin → Career page numbers. */

const HERO = {
  title: "Life @ Hover",
  line: "Work hard on real projects. Celebrate together. Keep learning.",
  tagline: "We are a team of marketers, developers and designers who like doing good work with good people. Here is what a regular week looks like.",
};

const VALUES = [
  { icon: Rocket, t: "Own your work", b: "You are trusted with real client accounts and real decisions from the first week." },
  { icon: Lightbulb, t: "Learn every week", b: "Weekly knowledge sessions, a learning budget and seniors happy to review your work." },
  { icon: MessageCircle, t: "Say it straight", b: "Honest feedback, both ways. Ideas are judged on merit, not job title." },
  { icon: Heart, t: "Look out for each other", b: "Small pods that help each other hit deadlines, and cover when life happens." },
];

const DAY = [
  { time: "9:30", t: "Team huddle", b: "A quick stand-up in each pod: priorities, blockers and who needs help." },
  { time: "10:00", t: "Deep work", b: "Campaigns, code and designs. Fewer meetings, more getting things done." },
  { time: "1:30", t: "Lunch together", b: "The longest table in the office, and the loudest conversations." },
  { time: "3:00", t: "Reviews and client calls", b: "Seniors review work before it goes out. Clients hear from the people doing it." },
  { time: "Friday", t: "Learning hour", b: "Someone shares what they learned this week: a tool, a test result, a mistake." },
];

const CELEBRATE = ["Diwali", "Holi", "Birthdays", "Annual day", "Team outings", "Project launches", "Work anniversaries", "Christmas"];

/* ============================== Page ============================== */

export default async function LifeAtHoverPage() {
  const [cats, g, team, career, jobs] = await Promise.all([
    getSetting("galleryCategories"), getSetting("gallery"), getSetting("team"), getSetting("career"), getSetting("jobs"),
  ]);
  const albums = buildAlbums(cats.items, g.items);
  const photos = albums.flatMap((a) => a.media.filter((m) => m.image).map((m) => ({ src: m.image, alt: m.alt }))).slice(0, 7);
  const people = (team.items ?? []).filter((m) => m?.name);
  const openRoles = (jobs.items ?? []).length;

  return (
    <div className="lh text-[var(--color-ink)]">
      <style>{`
        .lh h1,.lh h2,.lh h3{color:inherit}
        @keyframes lh-marq{to{transform:translateX(-50%)}}
        @keyframes lh-in{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:none}}
        .lh-marq{animation:lh-marq 28s linear infinite}
        .lh-in{animation:lh-in .8s cubic-bezier(.2,.7,.2,1) both}
        @media (prefers-reduced-motion:reduce){.lh-marq,.lh-in{animation:none}}
      `}</style>

      {/* HERO — photo mosaic */}
      <section className="relative overflow-hidden pb-14 pt-12 md:pt-16">
        <div className="container-max">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <nav className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]"><Link href="/about-us" className="hover:underline">About us</Link><span>/</span><span className="text-[var(--color-ink)]">Life @ Hover</span></nav>
              <h1 className="mt-4 font-display font-extrabold" style={{ fontSize: "clamp(3.2rem,9vw,7.5rem)", lineHeight: 0.92, letterSpacing: "-0.05em" }}>
                {HERO.title}
              </h1>
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-snug">{HERO.line}</p>
              <p className="mt-3 text-[var(--color-text-muted)]">{HERO.tagline}</p>
            </div>
          </div>

          <div className="mt-12 grid h-[460px] grid-cols-2 grid-rows-2 gap-3 md:h-[520px] md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => {
              const p = photos[i];
              const span = i === 0 ? "col-span-2 md:row-span-2" : i === 3 ? "hidden md:block md:row-span-2" : "";
              return (
                <div key={i} className={`lh-in overflow-hidden rounded-[28px] ${span} ${!p ? (i % 2 ? "bg-[var(--color-ink)]" : "bg-[var(--color-brand)]") : "bg-[var(--color-surface-2)]"}`} style={{ animationDelay: `${i * 0.08}s` }}>
                  {p ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
                  ) : i === 0 ? (
                    <div className="flex h-full flex-col justify-end p-8 text-white"><PartyPopper size={44} /><p className="mt-3 font-display text-3xl font-extrabold">Every festival, together</p></div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CELEBRATIONS STRIP */}
      <div className="overflow-hidden bg-[var(--color-brand)] py-5 text-white">
        <div className="lh-marq flex w-max items-center gap-10 font-display text-2xl font-extrabold">
          {[...CELEBRATE, ...CELEBRATE].map((c, i) => (
            <span key={i} className="flex items-center gap-10">{c}<span className="h-2.5 w-2.5 rounded-full bg-white/50" /></span>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <h2 className="max-w-[18ch] font-display text-4xl font-extrabold tracking-tight md:text-5xl">What it is like to work here</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, t, b }, i) => (
              <div key={t} className={`rounded-[28px] p-7 ${i === 1 ? "bg-[var(--color-ink)] text-white" : i === 2 ? "bg-[var(--color-brand-soft)]" : "border border-[var(--color-border)]"}`}>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 1 ? "bg-[var(--color-brand)]" : "bg-white text-[var(--color-brand)] shadow-[var(--shadow-sm)]"}`}><Icon size={22} /></span>
                <h3 className="mt-5 font-display text-xl font-bold">{t}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "text-white/65" : "text-[var(--color-text-muted)]"}`}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A DAY AT HOVER */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container-max grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Coffee size={32} className="text-[var(--color-brand)]" />
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">A day at Hover</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">Roughly how a normal working day goes at our Delhi head office.</p>
          </div>
          <ol className="space-y-3">
            {DAY.map((d) => (
              <li key={d.t} className="grid grid-cols-[90px_1fr] items-start gap-5 rounded-3xl bg-white p-6 shadow-[var(--shadow-sm)]">
                <span className="font-display text-2xl font-extrabold text-[var(--color-brand)]">{d.time}</span>
                <div><h3 className="font-display text-lg font-bold">{d.t}</h3><p className="mt-1 text-sm text-[var(--color-text-muted)]">{d.b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="py-16">
        <div className="container-max grid grid-cols-2 gap-6 lg:grid-cols-4">
          {career.numbers.map((n) => (
            <div key={n.label} className="text-center">
              <p className="font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", lineHeight: 1 }}>{n.value}</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PEOPLE */}
      {people.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container-max">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-extrabold tracking-tight">Some of the faces you will meet</h2>
              <Link href="/team-members" className="inline-flex items-center gap-1.5 font-bold text-[var(--color-brand)]">Team leaders <ArrowUpRight size={16} /></Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {people.map((m, i) => (
                <figure key={m.name + i} className="group">
                  <div className="aspect-square overflow-hidden rounded-[28px] bg-[var(--color-surface-2)]">
                    {m.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.image} alt={m.alt || m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : null}
                  </div>
                  <figcaption className="mt-3"><p className="font-display font-bold">{m.name}</p><p className="text-sm text-[var(--color-text-muted)]">{m.role}</p></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALBUMS */}
      {albums.length > 0 && (
        <section className="bg-[var(--color-ink)] py-16 text-white md:py-24">
          <div className="container-max">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-extrabold tracking-tight">From our albums</h2>
              <Link href="/gallery" className="inline-flex items-center gap-1.5 font-bold text-white">Full gallery <ArrowUpRight size={16} className="text-[var(--color-brand)]" /></Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {albums.slice(0, 3).map((a) => (
                <Link key={a.slug} href={`/gallery/${a.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white/5">
                  {a.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.cover} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : <span className="flex h-full items-center justify-center"><Camera size={40} className="text-white/30" /></span>}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute inset-x-6 bottom-6">
                    <span className="block font-display text-2xl font-bold">{a.name}</span>
                    <span className="text-sm text-white/70">{a.photos + a.videos} memories</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[36px] bg-[var(--color-brand)] px-8 py-14 text-white md:px-14">
            <PartyPopper className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 text-white/10" />
            <h2 className="relative max-w-[18ch] font-display text-4xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Sounds like your kind of place?</h2>
            <p className="relative mt-3 text-white/85">{openRoles > 0 ? `${openRoles} roles are open right now.` : "Send us an open application."}</p>
            <Link href="/career" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">See careers <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
