import type { MenuItem } from "@/lib/settings";

type G = { h: string; icon: string; kind: Kind; l: string[] };
export type Kind = "about" | "marketing" | "dev" | "design" | "industry" | "package";
export type Top = { label: string; href: string; groups: G[] };

export const slugify = (s: string) => s.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
export const slugOf = (g: G, label: string) => {
  if (g.kind === "about") return ({ "Company Overview": "about-us", "Our Team (Life @ Hover)": "life-at-hover", "Case Studies": "portfolio", "Client Reviews": "client-reviews", Careers: "career" } as Record<string, string>)[label]!;
  return slugify(label) + (g.kind === "industry" ? "-marketing" : "");
};

export const TOP: Top[] = [
  { label: "About", href: "/about-us", groups: [{ h: "About Us", icon: "users", kind: "about", l: ["Company Overview", "Our Team (Life @ Hover)", "Case Studies", "Client Reviews", "Careers"] }] },
  { label: "Digital Marketing", href: "/digital-marketing", groups: [
    { h: "AI Search & Visibility", icon: "sparkles", kind: "marketing", l: ["LLMO Services", "AI Search Optimization", "Generative Engine Optimization", "Answer Engine Optimization", "AI Brand Visibility"] },
    { h: "SEO Services", icon: "search", kind: "marketing", l: ["SEO Services", "Local SEO", "Ecommerce SEO", "Technical SEO", "Small Business SEO", "SEO Audit"] },
    { h: "Content & Link Building", icon: "newspaper", kind: "marketing", l: ["Content Writing", "Link Building", "Blog Outreach", "Guest Posting", "Digital PR"] },
    { h: "Paid Marketing", icon: "target", kind: "marketing", l: ["Google Ads", "PPC Management", "Performance Marketing", "Shopping Ads", "Lead Generation"] },
    { h: "Social Media", icon: "share", kind: "marketing", l: ["Social Media Optimisation", "Social Media Marketing", "Facebook/Meta Ads", "Instagram Ads", "YouTube Marketing", "Influencer Marketing", "ORM"] },
    { h: "Packages", icon: "package", kind: "package", l: ["SEO Packages", "Local SEO Packages", "Ecommerce SEO Packages", "PPC Packages", "Social Media Packages", "Digital Marketing Packages"] },
  ] },
  { label: "Web & App Development", href: "/website-development", groups: [
    { h: "Web Development", icon: "code", kind: "dev", l: ["Custom Web Development", "WordPress Development", "Laravel Development", "PHP Development", "Next.js Development", "React Development", "Node.js"] },
    { h: "Website Design", icon: "monitor", kind: "design", l: ["Website Design", "Website Redesign", "Landing Page Design"] },
    { h: "Ecommerce", icon: "cart", kind: "dev", l: ["Shopify Development", "WooCommerce Development", "Magento", "Custom Ecommerce"] },
    { h: "Mobile Apps", icon: "smartphone", kind: "dev", l: ["Mobile App Development", "Android App Development", "App Maintenance & Support"] },
    { h: "Support & Integration", icon: "tools", kind: "dev", l: ["API Development & Integration", "CRM Development", "Website Maintenance & Support"] },
  ] },
  { label: "Creative & Design", href: "/graphic-design", groups: [
    { h: "Creative Studio", icon: "palette", kind: "design", l: ["Logo Design", "Graphic Design", "Video Editing", "Social Media Creatives", "UI/UX Design", "Product Packaging Design"] },
  ] },
  { label: "Industries", href: "/industries", groups: [
    { h: "Healthcare & Wellness", icon: "heart", kind: "industry", l: ["Hospitals", "Dental Clinics", "Fitness & Wellness", "Pharmaceuticals"] },
    { h: "Professional Services", icon: "briefcase", kind: "industry", l: ["Law Firms", "Accounting & Finance", "Insurance", "Consulting", "Business Services", "Tax Consultants", "Corporate Services"] },
    { h: "Education & Hospitality", icon: "education", kind: "industry", l: ["Schools", "Colleges & Universities", "Coaching Institutes", "Hotels & Resorts", "Travel & Tourism", "Restaurants & Cafes", "Event Management"] },
    { h: "Real Estate & Industrial", icon: "factory", kind: "industry", l: ["Real Estate", "Construction", "Manufacturing", "Interior Design", "Industrial Equipment", "Warehousing & Logistics"] },
    { h: "Retail & Lifestyle", icon: "store", kind: "industry", l: ["Ecommerce", "Retail Stores", "Fashion & Apparel", "Jewellery", "Home Decor", "Furniture"] },
  ] },
  { label: "Contact", href: "/contact-us", groups: [] },
];

export const MENU: MenuItem[] = TOP.map((t) => ({
  label: t.label, href: t.href,
  groups: t.groups.map((g) => ({ heading: g.h, icon: g.icon, links: g.l.map((label) => ({ label, href: "/" + slugOf(g, label) })) })),
}));
