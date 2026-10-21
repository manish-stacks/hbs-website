import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Lightbulb,
  Share2,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import { TableOfContents, type TocItem } from "@/components/blog/TableOfContents";
import { BlogShareBar } from "@/components/blog/BlogShareBar";
import { BlogSidebarAuditCard } from "@/components/blog/BlogSidebarAuditCard";
import { BlogAuthorCard } from "@/components/blog/BlogAuthorCard";
import { blogPosts, postMap } from "@/data/blog";
import { getEntry, listBlog, toPost } from "@/lib/content";
import { buildMeta } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = await getEntry(["blog"], slug);
  const fallback = postMap.get(slug);

  if (e) {
    return buildMeta({
      title: e.seoTitle || e.title,
      description: e.seoDescription || e.excerpt || e.title,
      path: `/blog/${slug}`,
      type: "article",
      canonical: e.canonical || undefined,
      noindex: e.noindex,
      image: e.image || undefined,
      imageAlt: e.imageAlt || undefined,
    });
  }

  if (fallback) {
    return buildMeta({
      title: `${fallback.title} | HBS Insights`,
      description: fallback.excerpt,
      path: `/blog/${slug}`,
      type: "article",
      image: fallback.image,
    });
  }

  return {};
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Attempt database entry first, then fallback to static data
  const e = await getEntry(["blog"], slug);
  const fallbackPost = postMap.get(slug);

  if (!e && !fallbackPost) {
    notFound();
  }

  // Unified post data structure
  const post = e
    ? toPost(e)
    : {
        slug: fallbackPost!.slug,
        title: fallbackPost!.title,
        excerpt: fallbackPost!.excerpt,
        author: fallbackPost!.author,
        tag: fallbackPost!.tag,
        date: fallbackPost!.date,
        readTime: fallbackPost!.readTime,
        image: fallbackPost!.image,
        imageAlt: fallbackPost!.title,
      };

  const richFallback = fallbackPost;
  const moreArticles = await listBlog(4, slug);

  // Build Table of Contents items
  const tocItems: TocItem[] = [];

  if (richFallback?.body) {
    richFallback.body.forEach((s, idx) => {
      if (s.heading) {
        const id = s.id || `section-${idx + 1}`;
        tocItems.push({
          id,
          title: s.heading.replace(/^\d+\.\s*/, ""),
        });
      }
    });
  }

  if (richFallback?.checklist && richFallback.checklist.length > 0) {
    tocItems.push({
      id: "action-checklist",
      title: "Implementation Checklist",
    });
  }

  // Previous and next article navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  return (
    <div className="theme-hbs min-h-screen bg-white">
      {/* Top Fixed Reading Progress Indicator */}
      <BlogReadingProgress />

      {/* Editorial Header / Hero */}
      <header className="relative border-b border-[var(--color-border)] bg-gradient-to-b from-[#faf8f6] via-white to-white pb-10 pt-12 lg:pb-14 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-circuit opacity-30" aria-hidden="true" />

        <div className="container-max relative">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-medium text-[#6b6560]">
            <Link href="/" className="transition-colors hover:text-[#e5231b]">Home</Link>
            <span className="text-[#c7bfb7]">/</span>
            <Link href="/blog" className="transition-colors hover:text-[#e5231b]">Blog</Link>
            <span className="text-[#c7bfb7]">/</span>
            <span className="max-w-[280px] truncate font-semibold text-[var(--color-ink)] sm:max-w-[420px]">
              {post.tag}
            </span>
          </nav>

          {/* Category Tag & Reading Stats */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#fdecea] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e5231b]">
              {post.tag}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6b6560]">
              <Clock size={13} className="text-[#e5231b]" />
              <span>{post.readTime}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6b6560]">
              <CalendarDays size={13} className="text-[#e5231b]" />
              <span>{post.date.full}</span>
            </span>
          </div>

          {/* Main Title (H1) */}
          <h1 className="mt-4 font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[var(--color-ink)] sm:text-[38px] lg:text-[46px] max-w-[960px]">
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-[#4a4540] sm:text-[18px]">
            {post.excerpt}
          </p>

          {/* Author & Editorial Integrity Bar */}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#e5231b] to-[#b8140e] font-display text-sm font-bold text-white shadow-sm">
                {post.author
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-display text-[14px] font-bold text-[var(--color-ink)]">
                  <span>{post.author}</span>
                  <span title="Verified Editorial">
                    <ShieldCheck size={15} className="text-[#12925a]" />
                  </span>
                </div>
                <p className="text-[12px] text-[#6b6560]">
                  {richFallback?.authorRole || "Search & Digital Growth Intelligence"}
                </p>
              </div>
            </div>

            {/* Compact Header Share */}
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold text-[#857f79] hidden sm:inline">Share:</span>
              <BlogShareBar title={post.title} compact />
            </div>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <main className="container-max py-10 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_390px] xl:gap-14">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Scrollable Blog Details & Rich Content       */}
          {/* ======================================================== */}
          <article className="min-w-0">
            {/* Executive Key Takeaways Card (TL;DR) */}
            {richFallback?.keyTakeaways && richFallback.keyTakeaways.length > 0 && (
              <div className="mb-10 overflow-hidden rounded-2xl border border-[#ebe6e1] bg-gradient-to-br from-[#faf8f6] via-white to-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(16,19,26,0.03)]">
                <div className="flex items-center gap-2 pb-3.5 border-b border-[#ebe6e1]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fdecea] text-[#e5231b]">
                    <Sparkles size={16} />
                  </span>
                  <h2 className="font-display text-[15px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                    Executive Summary: 30-Second Takeaways
                  </h2>
                </div>

                <ul className="mt-4 space-y-3">
                  {richFallback.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[#3a3530]">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5231b] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Featured Hero Visual Image */}
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#faf8f6] shadow-sm aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 840px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,19,26,0.35)] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px] font-medium backdrop-blur-md bg-black/30 px-4 py-2 rounded-xl">
                <span>HBS Research &amp; Tactical Blueprint</span>
                <span className="opacity-80">Updated for 2026 Algorithms</span>
              </div>
            </div>

            {/* Database Custom Block Content (If present) */}
            {e?.blocks && e.blocks.length > 0 && (
              <div className="mb-10">
                <BlockRenderer blocks={e.blocks} slug={slug} path={`/blog/${slug}`} />
              </div>
            )}

            {/* Rich Article Prose & Subsections */}
            {richFallback?.body && (
              <div className="space-y-10">
                {richFallback.body.map((section, idx) => {
                  const sectionId = section.id || `section-${idx + 1}`;
                  return (
                    <section
                      key={sectionId}
                      id={sectionId}
                      className="scroll-mt-28 space-y-4 pt-2"
                    >
                      {section.heading && (
                        <div className="group">
                          <h2 className="font-display text-[22px] font-bold leading-tight text-[var(--color-ink)] sm:text-[26px]">
                            {section.heading}
                          </h2>
                          <div className="mt-2.5 h-1 w-12 rounded-full bg-[#e5231b] transition-all duration-300 group-hover:w-20" />
                        </div>
                      )}

                      <p className="text-[16px] leading-[1.85] text-[#3e3934] sm:text-[17px]">
                        {section.text}
                      </p>

                      {/* Pro-Tip Highlight Box */}
                      {section.proTip && (
                        <div className="my-6 rounded-xl border-l-4 border-[#e5231b] bg-[#fdecea]/50 p-5 shadow-sm">
                          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#e5231b]">
                            <Lightbulb size={16} />
                            <span>HBS Field Pro-Tip</span>
                          </div>
                          <p className="mt-2 text-[14.5px] font-medium leading-relaxed text-[#10131a]">
                            {section.proTip}
                          </p>
                        </div>
                      )}

                      {/* Key Points List */}
                      {section.points && section.points.length > 0 && (
                        <div className="my-5 grid gap-2.5">
                          {section.points.map((pt, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[#faf8f6]/70 p-3.5 transition-colors hover:bg-white"
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5231b]/10 text-[#e5231b]">
                                <Check size={12} strokeWidth={3} />
                              </span>
                              <span className="text-[14px] leading-relaxed text-[#4a4540]">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            )}

            {/* Actionable Implementation Checklist */}
            {richFallback?.checklist && richFallback.checklist.length > 0 && (
              <section
                id="action-checklist"
                className="mt-14 scroll-mt-28 rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[#faf8f6] via-white to-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(16,19,26,0.04)]"
              >
                <div className="flex items-center gap-2.5 pb-4 border-b border-[var(--color-border)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e5231b] text-white shadow-sm">
                    <Compass size={18} />
                  </span>
                  <div>
                    <h2 className="font-display text-[18px] font-bold text-[var(--color-ink)] sm:text-[20px]">
                      7-Day Tactical Implementation Checklist
                    </h2>
                    <p className="text-[12px] text-[#6b6560]">
                      Systematic sequence to secure and defend local top-3 placement
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3.5">
                  {richFallback.checklist.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3.5 rounded-xl border border-[var(--color-border)] bg-white p-4 transition-all hover:border-[#e5231b]/40 hover:shadow-sm"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#e5231b]/40 bg-[#fdecea] font-display text-[11px] font-bold text-[#e5231b] group-hover:bg-[#e5231b] group-hover:text-white transition-colors">
                        {idx + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-[14.5px] font-bold text-[var(--color-ink)]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-[#6b6560]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Bio Sign-Off Box */}
            <div className="mt-14 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[#faf8f6] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e5231b] to-[#b8140e] font-display text-xl font-bold text-white shadow-md">
                  {post.author
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[17px] font-bold text-[var(--color-ink)]">
                      {post.author}
                    </h3>
                    <span className="rounded-full bg-[#12925a]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#12925a]">
                      Verified Strategist
                    </span>
                  </div>
                  <p className="text-[13px] font-medium text-[#e5231b]">
                    {richFallback?.authorRole || "Search & Digital Growth Intelligence"}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#6b6560]">
                    {richFallback?.authorBio ||
                      "Our search division specializes in local search visibility, Google Business Profile architecture, and scalable conversion infrastructure for growing enterprises."}
                  </p>
                </div>
              </div>
            </div>

            {/* Share & Feedback Bottom Banner */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-white p-5 sm:flex-row">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[#6b6560]">
                <Share2 size={16} className="text-[#e5231b]" />
                <span>Found this analysis helpful? Share it with your team:</span>
              </div>
              <BlogShareBar title={post.title} compact />
            </div>

            {/* Next / Previous Article Navigation */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all hover:border-[#e5231b] hover:shadow-sm"
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#857f79] group-hover:text-[#e5231b]">
                    <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
                    <span>Previous Article</span>
                  </span>
                  <h4 className="mt-2 font-display text-[14px] font-bold text-[var(--color-ink)] line-clamp-2 group-hover:text-[#e5231b] transition-colors">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-white p-5 text-right transition-all hover:border-[#e5231b] hover:shadow-sm"
                >
                  <span className="inline-flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#857f79] group-hover:text-[#e5231b]">
                    <span>Next Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <h4 className="mt-2 font-display text-[14px] font-bold text-[var(--color-ink)] line-clamp-2 group-hover:text-[#e5231b] transition-colors">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </article>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Fixed / Sticky Sidebar                     */}
          {/* ======================================================== */}
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start space-y-6 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
            {/* 1. Interactive Table of Contents */}
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}

            {/* 2. High-Converting Free Audit & Consultation Card */}
            <BlogSidebarAuditCard />

            {/* 3. Author Editorial Integrity Card */}
            <BlogAuthorCard
              author={post.author}
              role={richFallback?.authorRole}
              bio={richFallback?.authorBio}
            />

            {/* 4. Trending / Related Articles Widget */}
            {moreArticles.length > 0 && (
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_4px_20px_rgba(16,19,26,0.04)]">
                <div className="flex items-center justify-between pb-3.5 border-b border-[var(--color-border)]">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
                    Related Insights
                  </span>
                  <Link
                    href="/blog"
                    className="text-[11px] font-semibold text-[#e5231b] hover:underline"
                  >
                    View All
                  </Link>
                </div>

                <div className="mt-3.5 space-y-3">
                  {moreArticles.slice(0, 3).map((art) => (
                    <Link
                      key={art.slug}
                      href={`/blog/${art.slug}`}
                      className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-[#faf8f6]"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#faf8f6]">
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          sizes="60px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#e5231b]">
                          {art.tag}
                        </span>
                        <h4 className="font-display text-[13px] font-bold leading-snug text-[var(--color-ink)] line-clamp-2 transition-colors group-hover:text-[#e5231b]">
                          {art.title}
                        </h4>
                        <span className="text-[11px] text-[#857f79]">
                          {art.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 5. One-Click Social Share */}
            <BlogShareBar title={post.title} />
          </aside>
        </div>
      </main>

      {/* Keep Reading Section (Bottom 3-card grid) */}
      {moreArticles.length > 0 && (
        <section className="section-space border-t border-[var(--color-border)] bg-[#faf8f6]">
          <div className="container-max">
            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div>
                <span className="inline-block rounded-full bg-[#fdecea] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e5231b]">
                  More Intelligence
                </span>
                <h2 className="mt-2 font-display text-[26px] font-bold text-[var(--color-ink)] sm:text-[32px]">
                  Keep Reading HBS Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-wider text-[var(--color-ink)] transition-colors hover:border-[#e5231b] hover:text-[#e5231b]"
              >
                <span>Browse All Articles</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <Reveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreArticles.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e5231b]/40 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#faf8f6]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e5231b] shadow-sm backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[12px] text-[#857f79]">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} /> {p.readTime}
                      </span>
                      <span>•</span>
                      <span>{p.date.full}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-[17px] font-bold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[#e5231b]">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#6b6560]">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[12px] font-bold uppercase tracking-wider text-[var(--color-ink)] group-hover:text-[#e5231b] transition-colors">
                      <span>Read Analysis</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Global Page CTA */}
      <PageCta title="Ready to Scale Your Brand's Search & Commercial Footprint?" />
    </div>
  );
}
