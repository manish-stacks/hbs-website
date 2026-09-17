import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Tag, User } from "lucide-react";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPosts, postMap, postSlugs } from "@/data/blog";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = postMap.get(slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        {/* header */}
        <header className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/art/page-banner.svg)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(9,11,16,.80), rgba(9,11,16,.88))" }}
            aria-hidden
          />
          <div className="container-max relative py-10 sm:py-14">
            <Breadcrumbs
              align="left"
              crumbs={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <span className="mt-5 inline-flex items-center rounded-full border border-white/15 bg-white/[.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)] backdrop-blur">{post.tag}</span>
            <h1 className="mt-4 max-w-[24ch] text-white" style={{ fontSize: "var(--fs-3xl)" }}>
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--fs-sm)] text-white/65">
              <span className="inline-flex items-center gap-2">
                <User size={15} className="text-[var(--color-brand)]" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Tag size={15} className="text-[var(--color-brand)]" /> {post.date.full}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={15} className="text-[var(--color-brand)]" /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* cover */}
        <div className="container-max -mt-2 pt-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[var(--radius-lg)]">
            <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>

        {/* body */}
        <div className="container-max py-10 sm:py-14">
          <Reveal className="mx-auto flex max-w-[72ch] flex-col gap-6">
            <p className="text-[var(--fs-lg)] font-medium leading-relaxed text-[var(--color-ink)]">
              {post.excerpt}
            </p>

            {post.body.map((b, i) => (
              <div key={i}>
                {b.heading ? (
                  <h2 className="mb-3 mt-4 text-[var(--fs-xl)] font-bold">{b.heading}</h2>
                ) : null}
                <p className="leading-relaxed text-[var(--color-text-muted)]">{b.text}</p>
              </div>
            ))}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
              <Link href="/blog" className="btn btn-ghost">
                <ArrowLeft size={16} /> All articles
              </Link>
              <Link href="/contact-us" className="btn btn-brand">
                Talk to a strategist <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* related */}
      <section className="section-space bg-[var(--color-surface)]">
        <div className="container-max">
          <h2 className="text-center" style={{ fontSize: "var(--fs-2xl)" }}>
            Keep reading
          </h2>
          <Reveal stagger className="mx-auto mt-10 grid max-w-[900px] gap-5 sm:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image src={p.image} alt={p.title} fill sizes="440px" className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand)]">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-[var(--fs-lg)] font-bold leading-snug transition-colors group-hover:text-[var(--color-brand)]">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
