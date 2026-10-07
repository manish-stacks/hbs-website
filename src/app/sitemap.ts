import type { MetadataRoute } from "next";
import { getSeo } from "@/lib/site";
import { productSlugs } from "@/data/products";
import { listSlugs } from "@/lib/content";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = (await getSeo()).siteUrl;
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  const dynamic = await listSlugs();

  return [
    entry("", 1, "weekly"),
    ...["/about-us", "/products", "/portfolio", "/blog", "/career", "/free-website-audit", "/contact-us"].map((p) => entry(p, 0.8, "monthly")),
    ...dynamic.filter((e) => e.type !== "blog").map((e) => entry(`/${e.slug}`, 0.7, "monthly")),
    ...productSlugs.map((s) => entry(`/products/${s}`, 0.7, "monthly")),
    ...dynamic.filter((e) => e.type === "blog").map((e) => entry(`/blog/${e.slug}`, 0.6, "monthly")),
  ];
}
