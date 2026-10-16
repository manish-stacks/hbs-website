import type { MetadataRoute } from "next";
import { getSeo } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { siteUrl } = await getSeo();
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api/", "/thank-you"] }], sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl };
}
