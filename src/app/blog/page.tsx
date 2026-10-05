import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Blog } from "@/components/home/Blog";

export const metadata: Metadata = buildMeta({
  title: "Blog",
  description: "Notes on SEO, paid media, AI-driven search and building websites that convert.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="From the blog"
        title="News & articles"
        tagline="What we are seeing in search, paid media and AI-driven discovery right now."
        crumbs={[{ label: "Blog", href: "/blog" }]}
      />
      <Blog />
      <PageCta title="Want this kind of thinking on your account?" />
    </>
  );
}
