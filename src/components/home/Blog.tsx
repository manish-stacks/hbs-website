import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag, User } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { blogPosts } from "@/data/blog";

export function Blog({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="From the blog"
          title="News & articles"
          sub="What we are seeing in search, paid media and AI-driven discovery right now."
        />

        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, limit).map((p) => (
            <article key={p.slug} className="card group flex flex-col overflow-hidden">
              <Link href={`/blog/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-0 top-0 flex h-[62px] w-[58px] flex-col items-center justify-center bg-[var(--color-brand)] text-white">
                  <span className="font-display text-lg font-extrabold leading-none">{p.date.d}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">{p.date.m}</span>
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <User size={13} className="text-[var(--color-brand)]" /> {p.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag size={13} className="text-[var(--color-brand)]" /> {p.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-[var(--fs-lg)] font-bold leading-snug">
                  <Link href={`/blog/${p.slug}`} className="transition-colors group-hover:text-[var(--color-brand)]">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">
                  {p.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--fs-xs)] font-bold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
                  >
                    Read more <ArrowRight size={15} />
                  </Link>
                  <span className="inline-flex items-center gap-1.5 text-[var(--fs-xs)] text-[var(--color-text-muted)]">
                    <Clock size={13} /> {p.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
