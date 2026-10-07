export type SvcTheme = { image: string; brand: string; from: string; to: string; label: string };

const T = {
  seo: { image: "/images/services/seo-new.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Search & Visibility" },
  ppc: { image: "/images/services/performance-marketing.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Paid Growth" },
  social: { image: "/images/services/social-media.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Social & Brand" },
  web: { image: "/images/services/web-design.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Web Development" },
  shop: { image: "/images/services/ecommerce.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "E-commerce" },
  design: { image: "/images/services/creative-design.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Creative Design" },
  app: { image: "/images/services/mobile-app-development.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Software & Apps" },
  base: { image: "/images/services/digital-growth-strategy.png", brand: "#e5231b", from: "#10131a", to: "#7a0f0b", label: "Digital Growth" },
} satisfies Record<string, SvcTheme>;

const map: Record<string, keyof typeof T> = {
  "seo-service": "seo", "local-seo-service": "seo", "google-map-seo": "seo", "orm-service": "seo",
  "e-commerce-seo": "shop", "e-commerce-web-designing": "shop",
  "ppc-service": "ppc",
  "social-media-marketing": "social", "facebook-promotion": "social", "online-marketing": "social",
  "custom-web-design": "web", "wordpress-development": "web", "website-maintenance": "web", "website-development": "web",
  "software-app-development": "app",
  "graphic-design": "design", "logo-design": "design", "brochure-design": "design", "newsletter-design": "design", "product-packaging-design": "design",
};

export const serviceTheme = (slug: string): SvcTheme => T[map[slug] ?? "base"];
