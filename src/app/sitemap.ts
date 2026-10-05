import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { innerSlugs } from "@/data/pages";
import { postSlugs } from "@/data/blog";
import { productSlugs } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    ...["/about-us", "/products", "/portfolio", "/blog", "/career", "/free-website-audit", "/contact-us"].map((p) => entry(p, 0.8, "monthly")),
    ...innerSlugs.map((s) => entry(`/${s}`, 0.7, "monthly")),
    ...productSlugs.map((s) => entry(`/products/${s}`, 0.7, "monthly")),
    ...postSlugs.map((s) => entry(`/blog/${s}`, 0.6, "monthly")),
  ];
}
