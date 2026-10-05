import type { Metadata } from "next";

export const SITE_URL = "https://hoverbusinessservices.com";
export const SITE_NAME = "Hover Business Services LLP";
export const OG_IMAGE = { url: "/images/og-default.png", width: 1200, height: 630, alt: SITE_NAME };

type Args = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/** One helper so every page gets canonical, Open Graph and Twitter tags. */
export function buildMeta({ title, description, path, type = "website" }: Args): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title: full,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: full, description, images: [OG_IMAGE.url] },
  };
}
