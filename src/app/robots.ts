import type { MetadataRoute } from "next";
import { getSeo } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { siteUrl } = await getSeo();
  const base = (siteUrl || "https://hoverbusinessservices.com").replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/thank-you",
          "/_next/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/thank-you",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/*", "/uploads/*", "/_next/image*"],
        disallow: ["/admin/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/thank-you",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
