import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getEntry } from "@/lib/content";
import { rows, str } from "@/lib/blocks";
import { buildMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

export const revalidate = 60;
const TYPES = ["page", "service"] as const;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = await getEntry([...TYPES], slug);
  if (!e) return {};
  return buildMeta({ title: e.seoTitle || e.title, description: e.seoDescription || e.excerpt || e.title, path: `/${slug}` });
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = await getEntry([...TYPES], slug);
  if (!e) notFound();

  const faqs = e.blocks.filter((b) => b.type === "faq").flatMap((b) => rows(b.items));
  const jsonLd =
    e.type === "service"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: e.title,
              description: e.excerpt || str(e.blocks.find((b) => b.type === "hero")?.tagline),
              url: `${SITE_URL}/${slug}`,
              areaServed: ["IN", "NZ"],
              provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            },
            ...(faqs.length
              ? [{ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]
              : []),
          ],
        }
      : null;

  return (
    <div className="theme-hbs">
      {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> : null}
      <BlockRenderer blocks={e.blocks} slug={slug} path={`/${slug}`} />
    </div>
  );
}
