import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { listBlog } from "@/lib/content";

export async function Blog({ limit = 3 }: { limit?: number }) {
  const [first, ...rest] = await listBlog(limit);
  if (!first) return null;

  return (
    <section className="section-space">
      <div className="container-max">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead center={false} pill="From the blog" title="News & articles" sub="What we are seeing in search, paid media and AI-driven discovery right now." />
          <Link href="/blog" className="btn btn-ghost">View all articles <ArrowRight size={16} /></Link>
        </div>

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="pop-lg hover-lift group relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden rounded-3xl bg-[#111]">
            <Image src={first.image} alt={first.imageAlt} fill sizes="(max-width:1024px) 100vw, 640px" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full border-2 border-[#111] bg-[var(--sun)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#111]">{first.tag}</span>
            <span className="absolute right-5 top-5 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border-2 border-[#111] bg-white text-[#111]">
              <span className="font-display text-xl font-extrabold leading-none">{first.date.d}</span>
              <span className="text-[10px] font-extrabold uppercase">{first.date.m}</span>
            </span>
            <div className="p-7 text-white sm:p-9">
              <div className="flex items-center gap-4 text-[var(--fs-xs)] text-white/75">
                <span className="inline-flex items-center gap-1.5"><User size={13} /> {first.author}</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {first.readTime}</span>
              </div>
              <h3 className="mt-3 text-[var(--fs-2xl)] leading-tight !text-white">
                <Link href={`/blog/${first.slug}`} className="after:absolute after:inset-0">{first.title}</Link>
              </h3>
              <p className="mt-3 max-w-[56ch] text-[var(--fs-sm)] leading-relaxed text-white/80">{first.excerpt}</p>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            {rest.map((p, i) => (
              <article key={p.slug} className={`pop hover-lift group relative flex flex-1 gap-4 overflow-hidden rounded-3xl p-4 sm:gap-5 sm:p-5 ${i % 2 ? "bg-[var(--color-brand-soft)]" : "bg-white"}`}>
                <div className="relative aspect-square w-[110px] shrink-0 overflow-hidden rounded-2xl border-2 border-[#111] sm:w-[150px]">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="150px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="w-fit rounded-full border-2 border-[#111] bg-[var(--sun)] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">{p.tag}</span>
                  <h3 className="mt-2 text-[var(--fs-base)] leading-snug">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0">{p.title}</Link>
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3 text-[var(--fs-xs)] font-semibold text-[#111]/65">
                    <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {p.readTime} · {p.date.d} {p.date.m}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-white transition-colors group-hover:bg-[var(--color-brand)]"><ArrowUpRight size={16} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
