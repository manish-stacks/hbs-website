import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Camera, Play } from "lucide-react";
import { buildMeta } from "@/lib/seo";
import { getSetting } from "@/lib/site";
import { buildAlbums } from "@/lib/gallery";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Gallery",
    description: "Office memories from Hover Business Services LLP — events, celebrations, team outings and everyday moments.",
    path: "/gallery",
  });
}

/* ======================= Page content (edit here) ======================= */
/* Albums and photos come from Admin → Gallery categories and Gallery. */

const HERO = {
  title: "Our office memories",
  tagline: "Festivals, award nights, team outings and the everyday moments that make Hover feel like Hover.",
};

const TILT = ["-4deg", "3deg", "-2deg", "5deg", "-3deg", "2deg"];

/* ============================== Page ============================== */

export default async function GalleryPage() {
  const [cats, g] = await Promise.all([getSetting("galleryCategories"), getSetting("gallery")]);
  const albums = buildAlbums(cats.items, g.items);
  const photos = albums.reduce((n, a) => n + a.photos, 0);
  const videos = albums.reduce((n, a) => n + a.videos, 0);
  const strip = albums.flatMap((a) => a.media.filter((m) => m.image).map((m) => ({ src: m.image, alt: m.alt }))).slice(0, 6);

  return (
    <div className="gl text-[var(--color-ink)]">
      <style>{`
        .gl h1,.gl h2,.gl h3{color:inherit}
        @keyframes gl-drop{from{opacity:0;transform:translateY(-40px) rotate(0)}to{opacity:1;transform:rotate(var(--r))}}
        .gl-pol{transform:rotate(var(--r));animation:gl-drop .9s cubic-bezier(.2,.8,.2,1) both}
        @media (prefers-reduced-motion:reduce){.gl-pol{animation:none}}
      `}</style>

      {/* HERO — polaroid pile */}
      <section className="relative overflow-hidden bg-[var(--color-surface)] pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-max grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]"><Link href="/about-us" className="hover:underline">About us</Link><span>/</span><span className="text-[var(--color-ink)]">Gallery</span></nav>
            <h1 className="mt-5 font-display font-extrabold" style={{ fontSize: "clamp(2.8rem,6.4vw,5.4rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}>{HERO.title}</h1>
            <p className="mt-6 max-w-[48ch] text-lg text-[var(--color-text-muted)]">{HERO.tagline}</p>
            {albums.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2 text-sm font-bold">
                <span className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-white">{albums.length} album{albums.length === 1 ? "" : "s"}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2"><Camera size={14} /> {photos} photos</span>
                {videos ? <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-4 py-2 text-white"><Play size={12} fill="currentColor" /> {videos} videos</span> : null}
              </div>
            )}
          </div>
          <div className="relative mx-auto grid w-full max-w-[520px] grid-cols-3 gap-4">
            {(strip.length ? strip : Array.from({ length: 6 }, () => null)).map((p, i) => (
              <figure key={i} className="gl-pol rounded-md bg-white p-2 pb-6 shadow-[var(--shadow-md)]" style={{ "--r": TILT[i % TILT.length], animationDelay: `${i * 0.09}s` } as React.CSSProperties}>
                <div className="aspect-square overflow-hidden rounded-sm bg-[var(--color-surface-2)]">
                  {p ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.src} alt={p.alt} className="h-full w-full object-cover" />
                  ) : <div className={`h-full w-full ${i % 2 ? "bg-[linear-gradient(140deg,var(--color-brand),#7a0f0a)]" : "bg-[linear-gradient(140deg,var(--color-ink),#3a1714)]"}`} />}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ALBUMS */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          {albums.length === 0 ? (
            <p className="text-center text-[var(--color-text-muted)]">Our memories will be added soon.</p>
          ) : (
            <div className="space-y-6">
              {albums.map((a, i) => {
                const extras = a.media.filter((m) => m.image && m.image !== a.cover).slice(0, 2);
                return (
                <Link key={a.slug} href={`/gallery/${a.slug}`} className={`group grid overflow-hidden rounded-[36px] transition-shadow hover:shadow-[var(--shadow-lg)] md:grid-cols-[1.25fr_1fr] ${i % 3 === 1 ? "bg-[var(--color-ink)] text-white" : i % 3 === 2 ? "bg-[var(--color-brand-soft)]" : "bg-[var(--color-surface)]"}`}>
                  <div className={`relative grid aspect-[4/3] grid-cols-3 grid-rows-2 gap-1.5 overflow-hidden md:aspect-auto md:min-h-[340px] ${i % 2 ? "md:order-2" : ""}`}>
                    {a.cover ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={a.cover} alt={a.name} loading="lazy" className={`${extras.length ? "col-span-2" : "col-span-3"} row-span-2 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`} />
                    ) : <div className="col-span-3 row-span-2 flex items-center justify-center bg-[var(--color-surface-2)]"><Camera size={40} className="opacity-30" /></div>}
                    {extras.map((m) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={m.id} src={m.image} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
                    ))}
                  </div>
                  <div className="flex flex-col p-7 md:p-10">
                    {a.date && <p className={`inline-flex items-center gap-1.5 text-sm font-semibold ${i % 3 === 1 ? "text-white/60" : "text-[var(--color-text-muted)]"}`}><CalendarDays size={14} /> {a.date}</p>}
                    <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{a.name}</h2>
                    {a.description && <p className={`mt-3 ${i % 3 === 1 ? "text-white/70" : "text-[var(--color-text-muted)]"}`}>{a.description}</p>}
                    <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
                      {a.photos ? <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 ${i % 3 === 1 ? "bg-white/10" : "bg-white"}`}><Camera size={13} /> {a.photos} photo{a.photos === 1 ? "" : "s"}</span> : null}
                      {a.videos ? <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand)] px-3 py-1.5 text-white"><Play size={11} fill="currentColor" /> {a.videos} video{a.videos === 1 ? "" : "s"}</span> : null}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 font-bold">
                      Open album <ArrowUpRight size={18} className="text-[var(--color-brand)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-max">
          <div className="grid items-center gap-6 rounded-[36px] bg-[var(--color-brand)] p-8 text-white md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">Want to be in the next album?</h2>
              <p className="mt-2 text-white/85">We are hiring across marketing, engineering and design.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/career" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--color-ink)]">See open roles <ArrowRight size={16} /></Link>
              <Link href="/life-at-hover" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold">Life at Hover</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
