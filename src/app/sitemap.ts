import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getSeo } from "@/lib/site";
import { productSlugs } from "@/data/products";
import { listSlugs } from "@/lib/content";

export const revalidate = 3600;

const LEGAL_SLUGS = new Set([
  "privacy-policy",
  "terms-conditions",
  "refunds-cancellations",
  "shipping-delivery",
]);

const EXCLUDE_DIRS = new Set([
  "admin",
  "api",
  "thank-you",
  "favicon.ico",
  "[slug]",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const seo = await getSeo();
  const siteUrl = (seo.siteUrl || "https://hoverbusinessservices.com").replace(/\/$/, "");
  const now = new Date();

  // Map to store unique entries keyed by clean path
  const urlMap = new Map<
    string,
    {
      url: string;
      lastModified: Date;
      changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
      priority: number;
    }
  >();

  const add = (
    pathname: string,
    priority: number,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    lastModified = now
  ) => {
    const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
    const fullUrl = `${siteUrl}${cleanPath}`;
    if (!urlMap.has(fullUrl)) {
      urlMap.set(fullUrl, {
        url: fullUrl,
        lastModified,
        changeFrequency,
        priority,
      });
    }
  };

  // 1. Homepage
  add("", 1.0, "daily");

  // 2. High-priority Core Pages
  const corePages = [
    { p: "/about-us", prio: 0.9, freq: "weekly" as const },
    { p: "/portfolio", prio: 0.9, freq: "weekly" as const },
    { p: "/free-website-audit", prio: 0.9, freq: "weekly" as const },
    { p: "/contact-us", prio: 0.9, freq: "weekly" as const },
    { p: "/blog", prio: 0.9, freq: "daily" as const },
    { p: "/products", prio: 0.8, freq: "weekly" as const },
    { p: "/industries", prio: 0.8, freq: "weekly" as const },
    { p: "/career", prio: 0.8, freq: "monthly" as const },
    { p: "/client-reviews", prio: 0.8, freq: "monthly" as const },
    { p: "/life-at-hover", prio: 0.7, freq: "monthly" as const },
  ];
  for (const { p, prio, freq } of corePages) {
    add(p, prio, freq);
  }

  // 3. Products
  for (const slug of productSlugs) {
    add(`/products/${slug}`, 0.8, "weekly");
  }

  // 4. Dynamic Pages and Services from CMS Database
  const dynamicEntries = await listSlugs();
  for (const entry of dynamicEntries) {
    const modDate = entry.updated_at ? new Date(entry.updated_at) : now;
    if (entry.type === "blog") {
      add(`/blog/${entry.slug}`, 0.7, "weekly", modDate);
    } else if (LEGAL_SLUGS.has(entry.slug)) {
      add(`/${entry.slug}`, 0.3, "monthly", modDate);
    } else {
      add(`/${entry.slug}`, 0.8, "weekly", modDate);
    }
  }

  // 5. File-system Static Pages auto-discovery
  try {
    const appDir = path.join(process.cwd(), "src", "app");
    if (fs.existsSync(appDir)) {
      const items = fs.readdirSync(appDir);
      for (const item of items) {
        if (EXCLUDE_DIRS.has(item) || item.startsWith(".") || item.startsWith("_")) {
          continue;
        }
        const itemPath = path.join(appDir, item);
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
          const pageFile = path.join(itemPath, "page.tsx");
          if (fs.existsSync(pageFile)) {
            const isLegal = LEGAL_SLUGS.has(item);
            add(
              `/${item}`,
              isLegal ? 0.3 : 0.8,
              isLegal ? "monthly" : "weekly",
              stat.mtime || now
            );
          }
        }
      }
    }
  } catch (e) {
    console.error("sitemap static page scan error:", e);
  }

  return Array.from(urlMap.values());
}
