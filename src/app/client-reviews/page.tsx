import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Quote, Star } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getCompany, getSetting } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Client Reviews | Hover Business Services LLP",
    description: "What clients say about working with Hover Business Services LLP. Real feedback on SEO, ads, websites and apps.",
    path: "/client-reviews",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Reviews come from Admin → Reviews. Rating comes from Admin → General. */

const HERO = {
  title: "Don't take our word for it.",
  tagline: "Here is what business owners, founders and marketing heads say after working with our team.",
};

const LIKES = [
  { t: "Clear reporting", b: "Clients know where the money goes and what it brings back." },
  { t: "Fast responses", b: "One account manager and replies within a working day." },
  { t: "Results that last", b: "Rankings, leads and sales that keep growing after launch." },
];

const AVATAR = ["#e5231b", "#10131a", "#b98a2f", "#b8140e", "#27272a"];

/* ============================== Page ============================== */

export default async function ClientReviewsPage() {
  const [co, reviews, general, stats, clients] = await Promise.all([
    getCompany(), getSetting("reviews"), getSetting("general"), getSetting("stats"), getSetting("clients"),
  ]);
  const g = general as { googleRating?: string; googleReviews?: string };
  const rating = (g.googleRating || "4.9/5").split("/")[0];
  const revs = (reviews.items ?? []).filter((r) => r?.text);
  const [featured, ...rest] = revs;
  const logos = (clients.items ?? []).filter((c) => c?.logo);
  const initials = (n: string) => n.split(" ").map((x) => x[0]).slice(0, 2).join("").toUpperCase();
  const Stars = ({ size = 16 }: { size?: number }) => (
    <span className="flex text-[var(--color-star)]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={size} fill="currentColor" />)}</span>
  );

  return (
    <div className="cr text-[var(--color-ink)]">
      <style>{`
        .cr h1,.cr h2,.cr h3{color:inherit}
        @keyframes cr-star{0%{opacity:0;transform:scale(.4) rotate(-30deg)}100%{opacity:1;transform:none}}
        .cr-star>*{animation:cr-star .5s cubic-bezier(.2,.8,.2,1.3) both}
        .cr-star>*:nth-child(2){animation-delay:.08s}.cr-star>*:nth-child(3){animation-delay:.16s}.cr-star>*:nth-child(4){animation-delay:.24s}.cr-star>*:nth-child(5){animation-delay:.32s}
        @media (prefers-reduced-motion:reduce){.cr-star>*{animation:none}}
      `}</style>

      {/* HERO — the rating */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]"><Link href="/about-us" className="hover:underline">About us</Link><span>/</span><span className="text-[var(--color-ink)]">Client reviews</span></nav>
            <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[50ch] text-lg text-[var(--color-text-muted)]">{HERO.tagline}</p>
            <Link href="/contact-us" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(229,35,27,.28)]">Become our next success story <ArrowRight size={16} /></Link>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] rounded-[36px] bg-white p-10 text-center shadow-[var(--shadow-lg)]">
            <p className="font-display font-extrabold leading-none" style={{ fontSize: "clamp(6rem,12vw,9rem)", letterSpacing: "-0.06em" }}>{rating}</p>
            <div className="cr-star mt-4 flex justify-center gap-1 text-[var(--color-star)]">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={30} fill="currentColor" />)}</div>
            <p className="mt-4 font-semibold">Average Google rating</p>
            <p className="text-sm text-[var(--color-text-muted)]">{g.googleReviews || "2500+ reviews"}</p>
            <span className="absolute -right-4 -top-4 rotate-6 rounded-2xl bg-[var(--color-brand)] px-4 py-2 font-display text-sm font-bold text-white shadow-[var(--shadow-md)]">Trusted by {stats.items.find((s) => /client/i.test(s.label))?.value ?? "3200"}+ clients</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="py-16 md:py-24">
          <div className="container-max">
            <figure className="relative overflow-hidden rounded-[40px] bg-[var(--color-ink)] p-8 text-white md:p-16">
              <Quote className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-white/5" />
              <Stars size={20} />
              <blockquote className="relative mt-6 max-w-[34ch] font-display font-bold" style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] font-display text-lg font-extrabold">{initials(featured.name)}</span>
                <span><span className="block font-display text-lg font-bold">{featured.name}</span><span className="text-white/60">{featured.role}</span></span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* WALL */}
      {rest.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container-max">
            <h2 className="font-display text-4xl font-extrabold tracking-tight">More from our clients</h2>
            <div className="mt-10 columns-1 gap-4 md:columns-2 lg:columns-3">
              {rest.map((r, i) => (
                <figure key={r.name + i} className={`mb-4 break-inside-avoid rounded-3xl p-7 ${i % 4 === 1 ? "bg-[var(--color-brand-soft)]" : "border border-[var(--color-border)] bg-white"}`}>
                  <Stars />
                  <blockquote className="mt-4 leading-relaxed">{r.text}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-extrabold text-white" style={{ background: AVATAR[i % AVATAR.length] }}>{initials(r.name)}</span>
                    <span><span className="block font-display font-bold">{r.name}</span><span className="text-sm text-[var(--color-text-muted)]">{r.role}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
      {revs.length === 0 && (
        <section className="py-16"><div className="container-max"><p className="text-[var(--color-text-muted)]">Reviews will be added soon.</p></div></section>
      )}

      {/* WHAT THEY LIKE */}
      <section className="bg-[var(--color-surface)] py-16 md:py-20">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What clients mention most</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {LIKES.map((l) => (
              <div key={l.t} className="rounded-3xl bg-white p-6 shadow-[var(--shadow-sm)]">
                <span className="block h-1 w-10 rounded-full bg-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{l.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{l.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS + LOGOS */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.items.map((s) => (
              <div key={s.label} className="border-l-4 border-[var(--color-brand)] pl-5">
                <p className="font-display text-4xl font-extrabold">{s.value}{s.suffix}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
          {logos.length > 0 && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-8 border-t border-[var(--color-border)] pt-12">
              {[...new Map(logos.map((l) => [l.logo, l])).values()].map((c) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={c.logo} src={c.logo} alt={c.alt || c.name} className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="grid items-center gap-8 rounded-[36px] bg-[var(--color-brand)] p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-14">
            <h2 className="font-display text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: "-0.03em" }}>Want results like these?</h2>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-ink)]">Get a free plan <ArrowRight size={16} /></Link>
              <a href={`tel:${co.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 text-sm font-semibold"><Phone size={15} /> Call now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
