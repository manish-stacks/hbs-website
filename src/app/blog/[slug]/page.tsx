import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CalendarDays, Clock, User } from "lucide-react";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { PageCta } from "@/components/layout/PageCta";
import { ServiceHero } from "@/components/layout/ServiceHero";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/home";
import { getEntry, listBlog, toPost } from "@/lib/content";
import { buildMeta } from "@/lib/seo";
import { serviceTheme } from "@/lib/serviceTheme";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = await getEntry(["blog"], slug);
  return e ? buildMeta({ title: e.seoTitle || e.title, description: e.seoDescription || e.excerpt || e.title, path: `/blog/${slug}`, type: "article" }) : {};
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = await getEntry(["blog"], slug);
  if (!e) notFound();
  const post = toPost(e);
  const more = await listBlog(3, slug);

  return (
    <div className="theme-hbs">
      <article>
        <ServiceHero
          eyebrow={post.tag}
          title={post.title}
          tagline={post.excerpt}
          crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${slug}` }]}
          theme={{ ...serviceTheme("custom-web-design"), image: post.image, label: post.tag }}
          phone={company.phone}
        />
        <div className="container-max pt-10">
          <div className="mx-auto flex max-w-[860px] flex-wrap items-center gap-x-6 gap-y-2 text-[var(--fs-sm)] text-[var(--color-text-muted)]">
            <span className="inline-flex items-center gap-2"><User size={15} className="text-[var(--color-brand)]" /> {post.author}</span>
            <span className="inline-flex items-center gap-2"><CalendarDays size={15} className="text-[var(--color-brand)]" /> {post.date.full}</span>
            <span className="inline-flex items-center gap-2"><Clock size={15} className="text-[var(--color-brand)]" /> {post.readTime}</span>
          </div>
        </div>
        <BlockRenderer blocks={e.blocks} slug={slug} path={`/blog/${slug}`} />
      </article>

      {more.length ? (
        <section className="section-space bg-[var(--color-surface)]">
          <div className="container-max">
            <h2 className="text-center" style={{ fontSize: "var(--fs-2xl)" }}>Keep reading</h2>
            <Reveal stagger className="mx-auto mt-10 grid max-w-[1100px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="360px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">{p.tag}</span>
                    <h3 className="mt-2 text-[var(--fs-lg)] font-bold leading-snug transition-colors group-hover:text-[var(--color-brand)]">{p.title}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[var(--fs-xs)] font-bold uppercase tracking-wider text-[var(--color-ink)]">Read <ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}
      <PageCta />
    </div>
  );
}
