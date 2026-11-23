import type { NextConfig } from "next";

const r2 = process.env.R2_PUBLIC_URL ? new URL(process.env.R2_PUBLIC_URL) : null;

// Domain that uploaded files (/uploads/...) are loaded from — see src/lib/media.ts
const media = (() => {
  try { return process.env.NEXT_PUBLIC_MEDIA_URL ? new URL(process.env.NEXT_PUBLIC_MEDIA_URL) : null; } catch { return null; }
})();
const mediaIsLocal = !!media && /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[?::1\]?$)/.test(media.hostname);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Speed up icon & animation imports to reduce bundle size
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "gsap"],
  },

  async redirects() {
    return [
      { source: "/shopify", destination: "/shopify-development", permanent: true },
      { source: "/woocommerce", destination: "/woocommerce-development", permanent: true },
      { source: "/woocomme", destination: "/woocommerce-development", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  images: {
    // lets next/image load uploads from a localhost / LAN media URL during development
    dangerouslyAllowLocalIP: mediaIsLocal,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "hoverbusinessservices.com", pathname: "/images/**" },
      { protocol: "https", hostname: "html.kodesolution.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      ...(media
        ? [
            {
              protocol: media.protocol.replace(":", "") as "http" | "https",
              hostname: media.hostname,
              ...(media.port ? { port: media.port } : {}),
              pathname: "/uploads/**",
            },
          ]
        : []),
      ...(r2
        ? [
            {
              protocol: r2.protocol.replace(":", "") as "http" | "https",
              hostname: r2.hostname,
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;
