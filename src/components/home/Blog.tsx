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
    <section className="theme-hbs section-space relative overflow-hidden bg-[var(--color-surface)]">
      <div className="pointer-events-none absolute inset-0 bg-circuit opacity-50" aria-hidden />
      <div className="container-max relative">
        <SectionHead
          pill="From the blog"
          pillClass="!bg-[#fdecea] !text-[#e5231b]"
          title={<span style={{ color: "#10131a" }}>News &amp; articles</span>}
          sub="What we are seeing in search, paid media and AI-driven discovery right now."
        />

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          {/* featured */}
          <article className="group relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] shadow-[0_24px_60px_rgba(16,19,26,.25)]">
            <Image src={first.image} alt={first.imageAlt} fill sizes="(max-width:1024px) 100vw, 620px" className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(16,19,26,.97)] via-[rgba(16,19,26,.6)] to-[rgba(229,35,27,.15)]" />
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">{first.tag}</span>
            <span className="absolute right-5 top-5 flex h-[62px] w-[58px] flex-col items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white shadow-lg">
              <span className="font-display text-lg font-extrabold leading-none">{first.date.d}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{first.date.m}</span>
            </span>
            <div className="p-7 text-white sm:p-9">
              <div className="flex items-center gap-4 text-[var(--fs-xs)] text-white/70">
                <span className="inline-flex items-center gap-1.5"><User size={13} /> {first.author}</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {first.readTime}</span>
              </div>
              <h3 className="mt-3 text-[var(--fs-2xl)] font-bold leading-tight text-white">
                <Link href={`/blog/${first.slug}`} className="after:absolute after:inset-0">{first.title}</Link>
              </h3>
              <p className="mt-3 max-w-[56ch] text-[var(--fs-sm)] leading-relaxed text-white/75">{first.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[var(--fs-xs)] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                Read article <ArrowRight size={15} />
              </span>
            </div>
          </article>

          {/* list */}
          <div className="flex flex-col gap-5">
            {rest.map((p) => (
              <article key={p.slug} className="group relative flex gap-4 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-[var(--shadow-md)] sm:gap-5 sm:p-5">
                <div className="relative aspect-square w-[110px] shrink-0 overflow-hidden rounded-2xl sm:w-[150px]">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="150px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-2 top-2 rounded-lg bg-[var(--color-brand)] px-2 py-1 text-center text-white">
                    <span className="block font-display text-sm font-extrabold leading-none">{p.date.d}</span>
                    <span className="block text-[9px] font-bold uppercase">{p.date.m}</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="w-fit rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand)]">{p.tag}</span>
                  <h3 className="mt-2 text-[var(--fs-base)] font-bold leading-snug">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-[var(--color-brand)]">{p.title}</Link>
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3 text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                    <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {p.readTime}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white"><ArrowUpRight size={15} /></span>
                  </div>
                </div>
              </article>
            ))}
            <Link href="/blog" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3 text-[var(--fs-xs)] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white">
              View all articles <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
