import type { Metadata } from "next";
import { getSeo } from "./site";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hoverbusinessservices.com";
export const SITE_NAME = "Hover Business Services LLP";

type Args = {
  title?: string; description?: string; path: string; type?: "website" | "article";
  image?: string; imageAlt?: string; noindex?: boolean; canonical?: string;
};

/** One helper so every page gets canonical, Open Graph, Twitter and robots tags from admin settings. */
export async function buildMeta(a: Args): Promise<Metadata> {
  const seo = await getSeo();
  const o = seo.pages.find((p) => p.path === a.path);
  const title = o?.title || a.title;
  const description = o?.description || a.description || seo.description;
  const image = o?.image || a.image || seo.ogImage;
  const alt = a.imageAlt || a.title || seo.ogImageAlt || seo.siteName;
  const canonical = a.canonical || a.path;
  if (!title) return { alternates: { canonical }, ...(description && o?.description ? { description } : {}) };
  const full = seo.titleTemplate.replace("%s", title);
  const images = image ? [{ url: image, alt, width: 1200, height: 630 }] : undefined;
  return {
    title,
    description,
    alternates: { canonical },
    robots: a.noindex ? { index: false, follow: false } : undefined,
    openGraph: { type: a.type ?? "website", title: full, description, url: a.path, siteName: seo.siteName, locale: "en_IN", images },
    twitter: { card: "summary_large_image", title: full, description, images: image ? [image] : undefined, site: seo.twitterHandle || undefined },
  };
}
