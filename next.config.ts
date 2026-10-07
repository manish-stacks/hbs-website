import type { NextConfig } from "next";

const r2 = process.env.R2_PUBLIC_URL ? new URL(process.env.R2_PUBLIC_URL) : null;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "hoverbusinessservices.com", pathname: "/images/**" },
      { protocol: "https", hostname: "html.kodesolution.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      ...(r2 ? [{ protocol: r2.protocol.replace(":", "") as "http" | "https", hostname: r2.hostname, pathname: "/**" }] : []),
    ],
  },
};

export default nextConfig;
