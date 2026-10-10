import { company, clients, faqs, industries, nav, offices, services, stats, testimonials, whyUs } from "@/data/home";
import type { FooterData, MenuItem } from "./settings";

const pairs = (l: [string, string][]) => l.map(([label, href]) => ({ label, href }));
const kv = (a: [string, string][]) => a.map(([value, label]) => ({ value, label }));

export const DEFAULTS = {
  general: {
    siteName: company.name, logo: "https://hoverbusinessservices.com/images/hbs-logo.png", logoAlt: "Hover Business Services logo", favicon: "",
    phone: company.phone, phoneAlt: company.phoneAlt, phoneNz: company.phoneNz, whatsapp: company.whatsapp, email: company.email,
    support: company.support, address: company.addressIn, crm: company.crm, pay: company.pay, ...company.social,
    googleRating: "4.9/5", googleReviews: "2500+ reviews", notifyEmail: company.email,
  },
  seo: {
    siteUrl: "https://hoverbusinessservices.com", defaultTitle: "Digital Marketing Agency in India | Hover Business Services LLP",
    titleTemplate: "%s | Hover Business Services LLP",
    description: "Hover Business Services is one of the best digital marketing agencies in India. SEO, PPC, social media, web and app development that generates leads and increases sales.",
    keywords: ["digital marketing agency India", "SEO services", "performance marketing", "GMB management", "email marketing software", "WhatsApp marketing", "AI automation", "web development Delhi"],
    ogImage: "/images/og-default.png", ogImageAlt: "Hover Business Services LLP", twitterHandle: "@media_hover", googleVerification: "", gaId: "",
    orgStreet: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura", orgCity: "Delhi", orgPostal: "110034", orgCountry: "IN",
  },
  pageSeo: { items: ["/", "/about-us", "/contact-us", "/portfolio", "/products", "/blog", "/career", "/free-website-audit"].map((path) => ({ path, title: "", description: "", image: "" })) },
  menu: {
    items: nav.map((n) => ({
      label: n.label, href: n.href,
      groups: (n.groups ?? []).map((g) => ({ heading: g.heading, links: pairs(g.links as [string, string][]) })),
    })) as MenuItem[],
  },
  footer: {
    about: "Hover Business Services trusts in good quality services, so that you get a real and broad return on everything you invest in growth.",
    copyright: "Hover Business Services LLP. All rights reserved.",
    columns: [
      { title: "Top Services", links: pairs([["SEO Service", "/seo-service"], ["Local SEO Service", "/local-seo-service"], ["Google Map SEO", "/google-map-seo"], ["PPC Service", "/ppc-service"], ["Social Media Marketing", "/social-media-marketing"], ["ORM Service", "/orm-service"]]) },
      { title: "Web & App", links: pairs([["Custom Web Design", "/custom-web-design"], ["Website Development", "/website-development"], ["WordPress Development", "/wordpress-development"], ["E-commerce Web Designing", "/e-commerce-web-designing"], ["Software & App Development", "/software-app-development"], ["Website Maintenance", "/website-maintenance"]]) },
      { title: "Company", links: pairs([["About Us", "/about-us"], ["Products", "/products"], ["Portfolio", "/portfolio"], ["Career", "/career"], ["Blog", "/blog"], ["Contact Us", "/contact-us"], ["Become Partner", "/contact-us"]]) },
    ],
    legal: pairs([["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms-conditions"], ["Refund & Cancellation", "/refunds-cancellations"], ["Shipping and Delivery", "/shipping-delivery"]]),
  } as FooterData,
  about: {
    eyebrow: "About us", heading: "One agency for visibility, leads and", highlight: "real revenue",
    p1: "Hover Business Services LLP is one of the best digital marketing agencies in India. More than 80 employees, each with deep experience in their own field, deliver 360° digital services — Pay-Per-Click, Search Engine Optimization, Social Media Optimization and much more.",
    p2: "In a world that has moved onto the internet, your online presence is no longer optional. If a business is going to survive, it has to exist in the virtual world too — and be found there first.",
    points: [
  "360° services: PPC, SEO, SMO, web, apps and branding",
  "80+ in-house specialists — nothing outsourced",
  "Offices in Delhi and Auckland, clients on four continents",
] as string[], image: "/images/ai-powered-growth.png", imageAlt: "AI-powered growth for your business",
    badgeValue: "1500+", badgeLabel: "Happy clients served", linkLabel: "Learn more about HBS",
  },
  stats: { items: stats.map((s) => ({ value: String(s.value), suffix: s.suffix, label: s.label })) },
  faqs: { items: faqs },
  offices: { items: offices },
  reviews: { items: testimonials },
  team: { items: [
  {
    name: "Wade Warren",
    role: "UX Designer, Research",
    image:
      "https://html.kodesolution.com/2025/digiplus-html/images/resource/team-h1-1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "UX Designer, Research",
    image:
      "https://html.kodesolution.com/2025/digiplus-html/images/resource/team-h1-2.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "UX Designer, Research",
    image:
      "https://html.kodesolution.com/2025/digiplus-html/images/resource/team-h1-3.jpg",
  }
] as { name: string; role: string; image: string; alt: string; facebook: string; twitter: string; instagram: string }[] },
  clients: { items: [...new Set(clients)].map((logo) => ({ name: (logo.split("/").pop() ?? "").split(".")[0] ?? "", logo, alt: `${(logo.split("/").pop() ?? "").split(".")[0]} client logo` })) },
  services: { items: services.map((s) => ({ title: s.title, body: s.body, badge: s.badge ?? "", tags: s.tags, href: s.href, image: s.image, alt: `${s.title} service` })) },
  whyUs: { items: whyUs },
  industries: { items: industries.map((name) => ({ name })) },
  work: { items: [
  { name: "EFOS", sector: "Food services", scope: ["Web platform", "SEO", "Branding"], outcome: "Rebuilt the site and search presence around service-intent keywords.", image: "/images/company/efos.jpg", ratio: "aspect-[4/5]" },
  { name: "PrintHutt", sector: "E-commerce", scope: ["Store build", "Performance marketing"], outcome: "Custom print storefront with a paid funnel tuned to order value.", image: "/images/company/printhutt.avif", ratio: "aspect-[4/3]" },
  { name: "OncoHealthMart", sector: "Healthcare", scope: ["E-commerce SEO", "Rebuild"], outcome: "Catalogue site turned into a transacting store with trust signals.", image: "/images/company/onco.png", ratio: "aspect-square" },
  { name: "Dikshant", sector: "Education", scope: ["Website", "Admissions funnel"], outcome: "Course pages and lead routing built around the admission season.", image: "/images/company/dikshant.avif", ratio: "aspect-[4/5]" },
  { name: "Becho Gadi", sector: "Marketplace", scope: ["Platform", "Lead generation"], outcome: "Listing marketplace with a qualified-seller acquisition engine.", image: "/images/company/becho-gadi.webp", ratio: "aspect-[4/3]" },
] as { name: string; sector: string; scope: string[]; outcome: string; image: string; alt: string; ratio: string }[] },

  hero: {
    badge: "5+ Years of Impact · 1500+ Global Clients", headline1: "AI-Powered", headline2: "Digital Marketing | That Drives Real Growth",
    sub: "Redefining growth with AI + human intelligence.",
    intro: "We combine AI technology with human creativity to build marketing strategies, websites and apps that get real results — more traffic, more leads and more revenue for your business.",
    cta1: "Get Your Free AI Growth Strategy", cta2: "Watch Our Work", rating: "Rated 5 stars based on 600+ client reviews",
    chip1: "10x Growth", chip2: "AI-Powered Results", chip3: "#1 Rank on Google",
    stat1Value: "10x", stat1Label: "Average Growth", stat2Value: "80+", stat2Label: "Marketing Specialists",
  },
  contactCta: { eyebrow: "Why Choose Us", heading: "Recognized As One\nOf The Leading\nCompany!", formKicker: "Contact Us", formTitle: "Get in Touch" },
  career: { numbers: [{"value": "80+", "label": "Team members"}, {"value": "4", "label": "Offices"}, {"value": "1500+", "label": "Clients served"}, {"value": "6 mo", "label": "Review cycle"}] },
  jobs: { items: [{"role": "SEO Executive", "team": "Digital Marketing", "type": "Full-time", "location": "Pitampura, Delhi", "exp": "1–3 years", "points": ["Run audits, keyword research and on-page optimisation", "Build and track link and content campaigns", "Report ranking and traffic growth to clients"]}, {"role": "Performance Marketing Specialist", "team": "Paid Media", "type": "Full-time", "location": "Pitampura, Delhi", "exp": "2–5 years", "points": ["Plan and optimise Google and Meta ad accounts", "Own budgets, tracking and conversion goals", "Test creatives and landing pages weekly"]}, {"role": "Next.js Developer", "team": "Engineering", "type": "Full-time", "location": "Delhi / Hybrid", "exp": "2–4 years", "points": ["Build fast, SEO-friendly websites and web apps", "Integrate APIs, CMS and payment systems", "Review code and improve performance"]}, {"role": "React Native Developer", "team": "Engineering", "type": "Full-time", "location": "Delhi / Remote", "exp": "2–4 years", "points": ["Ship Android and iOS apps from one codebase", "Work with REST APIs and push notifications", "Publish and maintain store releases"]}, {"role": "UI/UX Designer", "team": "Creative", "type": "Full-time", "location": "Pitampura, Delhi", "exp": "1–4 years", "points": ["Design user flows, wireframes and interfaces", "Create and maintain design systems in Figma", "Work closely with developers on handoff"]}, {"role": "Content Writer", "team": "Content", "type": "Full-time", "location": "Delhi / Hybrid", "exp": "0–2 years", "points": ["Write blogs, service pages and ad copy", "Research topics with search intent in mind", "Edit for clarity, tone and accuracy"]}, {"role": "Business Development Executive", "team": "Sales", "type": "Full-time", "location": "Pitampura, Delhi", "exp": "1–3 years", "points": ["Qualify inbound and outbound leads", "Run discovery calls and prepare proposals", "Build long-term client relationships"]}, {"role": "Graphic Design Intern", "team": "Creative", "type": "Internship", "location": "Pitampura, Delhi", "exp": "Fresher", "points": ["Create social media and ad creatives", "Support senior designers on live projects", "Learn brand and layout fundamentals"]}] },
};

export type Defaults = typeof DEFAULTS;
