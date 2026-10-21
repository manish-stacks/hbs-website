"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  Code2,
  Target,
  ShoppingCart,
  Palette,
  Newspaper,
  Package,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Bot,
  Zap,
  Globe,
  Share2,
  Cpu,
  Layers,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

type ServiceTab = {
  id: string;
  label: string;
  icon: typeof Sparkles;
  badge?: string;
  headline: string;
  description: string;
  flagship: {
    title: string;
    href: string;
    tagline: string;
    description: string;
    metric: { value: string; label: string };
    deliverables: string[];
    tag: string;
  };
  gridServices: {
    title: string;
    href: string;
    description: string;
    tags: string[];
    icon: typeof Sparkles;
  }[];
  allLinks: { label: string; href: string }[];
};

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "ai-seo",
    label: "AI Search & SEO",
    icon: Sparkles,
    badge: "Dominance",
    headline: "Dominate Google Search, Maps & Generative AI Engines",
    description:
      "From emerging AI search visibility (LLMO, Perplexity, Copilot) to classic map packs and technical SEO, we ensure high-intent customers find your brand first.",
    flagship: {
      title: "LLMO & AI Search Optimization",
      href: "/llmo-services",
      tagline: "The Future of Search Visibility",
      description:
        "Large Language Model Optimisation (LLMO) and Generative Engine Optimisation (GEO) engineered so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite your company as the authoritative answer.",
      metric: { value: "#1 Cited", label: "AI Answer Engines" },
      deliverables: [
        "Brand Entity & Knowledge Graph Clean-up",
        "Schema & AI Answer-Ready Content Architecture",
        "Generative Search Gap Analysis & Tracking",
        "Voice & Conversational Snippet Optimization",
      ],
      tag: "Next-Gen Search",
    },
    gridServices: [
      {
        title: "SEO Services",
        href: "/seo-services",
        description: "Full-funnel search engine optimization driving compounding organic traffic, keyword rankings, and qualified inbound leads.",
        tags: ["Keyword Strategy", "On-Page SEO", "Authority"],
        icon: Search,
      },
      {
        title: "Local SEO & Google Maps",
        href: "/local-seo",
        description: "Dominate the Google 3-Pack and capture high-intent local buyers within your immediate service radius.",
        tags: ["Google Maps Pack", "GMB Optimization", "Citations"],
        icon: Globe,
      },
      {
        title: "Ecommerce SEO",
        href: "/ecommerce-seo",
        description: "Category and product page SEO engineered to capture ready-to-buy shoppers and lower customer acquisition costs.",
        tags: ["Product Schema", "Category Architecture", "Revenue Focus"],
        icon: ShoppingCart,
      },
      {
        title: "Technical SEO Audit",
        href: "/technical-seo",
        description: "Resolve indexation bottlenecks, crawl errors, and Core Web Vitals to unlock rapid ranking acceleration.",
        tags: ["Core Web Vitals", "Crawl Budget", "Schema Markup"],
        icon: Cpu,
      },
      {
        title: "Generative Engine Optimization",
        href: "/generative-engine-optimization",
        description: "Shape your digital footprint so generative AI engines reference your brand as the definitive industry authority.",
        tags: ["GEO Strategy", "Citation Network", "E-E-A-T Signals"],
        icon: Bot,
      },
      {
        title: "Small Business SEO",
        href: "/small-business-seo",
        description: "High-ROI, targeted SEO campaigns designed specifically for local and regional growing businesses.",
        tags: ["Cost-Effective", "Local Focus", "Lead Generation"],
        icon: Target,
      },
    ],
    allLinks: [
      { label: "LLMO Services", href: "/llmo-services" },
      { label: "AI Search Optimization", href: "/ai-search-optimization" },
      { label: "Generative Engine Optimization", href: "/generative-engine-optimization" },
      { label: "Answer Engine Optimization", href: "/answer-engine-optimization" },
      { label: "AI Brand Visibility", href: "/ai-brand-visibility" },
      { label: "SEO Services", href: "/seo-services" },
      { label: "Local SEO Service", href: "/local-seo-service" },
      { label: "Google Map SEO", href: "/google-map-seo" },
      { label: "E-Commerce SEO", href: "/e-commerce-seo" },
      { label: "Technical SEO", href: "/technical-seo" },
      { label: "SEO Audit", href: "/seo-audit" },
      { label: "SEO Packages", href: "/seo-packages" },
      { label: "Local SEO Packages", href: "/local-seo-packages" },
    ],
  },
  {
    id: "web-dev",
    label: "Web & App Engineering",
    icon: Code2,
    badge: "Full-Stack",
    headline: "High-Performance Modern Web, App & Software Builds",
    description:
      "We design and engineer lightning-fast digital products, Next.js web applications, and cross-platform mobile apps with sub-second speeds and flawless user experience.",
    flagship: {
      title: "Next.js & Custom Web Development",
      href: "/next-js-development",
      tagline: "Sub-Second Speed & Zero Friction",
      description:
        "Bespoke web applications built on Next.js 16, React, and server-driven architectures. Crafted with pixel precision, scalable database backends, and 99+ Core Web Vitals scores.",
      metric: { value: "< 1.2s", label: "Lighthouse Speed" },
      deliverables: [
        "Server-Side Rendered (SSR) & Static Next.js 16 Builds",
        "Headless CMS Integration & Custom Admin Dashboards",
        "API Architecture & Microservices Integration",
        "Enterprise Data Encryption & SOC-2 Compliance",
      ],
      tag: "Flagship Engineering",
    },
    gridServices: [
      {
        title: "Custom Web Development",
        href: "/custom-web-development",
        description: "Scalable, secure web platforms and portals built strictly around your custom business workflows.",
        tags: ["Clean Code", "Custom Portal", "High Scalability"],
        icon: Code2,
      },
      {
        title: "Mobile App Development",
        href: "/mobile-app-development",
        description: "Native and cross-platform Android & iOS apps engineered with intuitive UI and rock-solid stability.",
        tags: ["iOS & Android", "React Native", "Store Launch"],
        icon: Smartphone,
      },
      {
        title: "Website Design & Redesign",
        href: "/website-design",
        description: "Transform outdated websites into modern, high-converting digital storefronts without losing SEO rankings.",
        tags: ["UI/UX Prototype", "Conversion Lift", "SEO Safe"],
        icon: Layers,
      },
      {
        title: "WordPress Development",
        href: "/wordpress-development",
        description: "Custom lightweight WordPress builds with tailored Gutenberg blocks, custom post types, and zero bloat.",
        tags: ["Custom Themes", "Fast Loading", "Client Friendly"],
        icon: Globe,
      },
      {
        title: "React & Node.js Development",
        href: "/react-development",
        description: "Dynamic single-page applications and high-throughput Node.js microservices for real-time web experiences.",
        tags: ["React 19", "Node.js REST", "Real-Time APIs"],
        icon: Zap,
      },
      {
        title: "CRM & API Integration",
        href: "/crm-development",
        description: "Connect payment gateways, internal ERPs, WhatsApp Business, and custom CRMs into one unified ecosystem.",
        tags: ["REST/GraphQL", "Payment Flow", "Workflow Sync"],
        icon: Cpu,
      },
    ],
    allLinks: [
      { label: "Custom Web Development", href: "/custom-web-development" },
      { label: "Next.js Development", href: "/next-js-development" },
      { label: "React Development", href: "/react-development" },
      { label: "WordPress Development", href: "/wordpress-development" },
      { label: "Laravel Development", href: "/laravel-development" },
      { label: "PHP Development", href: "/php-development" },
      { label: "Node.js", href: "/node-js" },
      { label: "Website Design", href: "/website-design" },
      { label: "Website Redesign", href: "/website-redesign" },
      { label: "Landing Page Design", href: "/landing-page-design" },
      { label: "Mobile App Development", href: "/mobile-app-development" },
      { label: "Android App Development", href: "/android-app-development" },
      { label: "App Maintenance & Support", href: "/app-maintenance-support" },
      { label: "API Development & Integration", href: "/api-development-integration" },
      { label: "CRM Development", href: "/crm-development" },
      { label: "Website Maintenance & Support", href: "/website-maintenance-support" },
    ],
  },
  {
    id: "paid-ads",
    label: "Performance & Paid Ads",
    icon: Target,
    badge: "High ROAS",
    headline: "Paid Media Engineered For High-Intent Customer Acquisition",
    description:
      "We build, test, and scale Google, Meta, and multi-channel paid ad campaigns judged on return on ad spend (ROAS) and qualified inbound revenue—not vanity clicks.",
    flagship: {
      title: "Performance Marketing & ROAS Scaling",
      href: "/performance-marketing",
      tagline: "Return on Ad Spend Engineered For Profit",
      description:
        "Full-funnel paid media campaigns spanning Google Search, Shopping, YouTube, Instagram Reels, and Meta ads with advanced conversion API tracking and creative testing matrices.",
      metric: { value: "4.2x", label: "Average Client ROAS" },
      deliverables: [
        "Advanced Conversion API & Server-Side Pixel Tracking",
        "High-Intent Search & Shopping Feed Architecture",
        "Dynamic Video & Creative Retargeting Funnels",
        "Daily Bid & Cost-Per-Acquisition (CPA) Hardening",
      ],
      tag: "Revenue Engine",
    },
    gridServices: [
      {
        title: "Google Ads Management",
        href: "/google-ads",
        description: "Capture buyers at the exact moment they search for your service with precision search and call-only ads.",
        tags: ["Search Ads", "High Buyer Intent", "Negative Keywords"],
        icon: Search,
      },
      {
        title: "Facebook & Meta Ads",
        href: "/facebook-meta-ads",
        description: "Scroll-stopping social campaigns on Instagram and Facebook that generate steady leads and D2C sales.",
        tags: ["Lookalike Audiences", "Reels Creative", "Lead Forms"],
        icon: Share2,
      },
      {
        title: "Google Shopping Ads",
        href: "/shopping-ads",
        description: "Put your e-commerce product catalogue directly in front of active shoppers with optimized Merchant feeds.",
        tags: ["Merchant Center", "Product Bidding", "Feed Optimization"],
        icon: ShoppingCart,
      },
      {
        title: "Lead Generation Campaigns",
        href: "/lead-generation",
        description: "High-volume, qualified business inquiry funnels with instant CRM and WhatsApp notifications.",
        tags: ["Instant CRM Sync", "Lead Validation", "B2B & B2C"],
        icon: Target,
      },
      {
        title: "YouTube Marketing & Video Ads",
        href: "/youtube-marketing",
        description: "High-impact video advertising that builds brand recall and drives massive retargeting conversions.",
        tags: ["TrueView Ads", "Video SEO", "Audience Reach"],
        icon: Zap,
      },
      {
        title: "Paid Media Packages",
        href: "/ppc-packages",
        description: "Fixed transparent management packages covering end-to-end campaign creation, copy, and optimization.",
        tags: ["Fixed Monthly Fee", "No Hidden Costs", "Transparent ROAS"],
        icon: Package,
      },
    ],
    allLinks: [
      { label: "Google Ads", href: "/google-ads" },
      { label: "PPC Management", href: "/ppc-management" },
      { label: "Performance Marketing", href: "/performance-marketing" },
      { label: "Shopping Ads", href: "/shopping-ads" },
      { label: "Lead Generation", href: "/lead-generation" },
      { label: "Facebook/Meta Ads", href: "/facebook-meta-ads" },
      { label: "Instagram Ads", href: "/instagram-ads" },
      { label: "YouTube Marketing", href: "/youtube-marketing" },
      { label: "PPC Packages", href: "/ppc-packages" },
      { label: "Social Media Packages", href: "/social-media-packages" },
      { label: "Digital Marketing Packages", href: "/digital-marketing-packages" },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce Solutions",
    icon: ShoppingCart,
    badge: "Scale",
    headline: "Storefronts & Funnels Engineered For Maximum Average Order Value",
    description:
      "Whether scaling on Shopify Plus, WooCommerce, or bespoke headless architectures, we build e-commerce systems that load fast, convert visitors, and drive repeat buyers.",
    flagship: {
      title: "Shopify Plus & Custom Stores",
      href: "/shopify-development",
      tagline: "High-Converting D2C & B2B Storefronts",
      description:
        "Bespoke Shopify and custom e-commerce experiences with 1-click checkout, automated inventory sync, custom product customizers, and high-converting cart slide-outs.",
      metric: { value: "+185%", label: "Average Order Value" },
      deliverables: [
        "Custom Liquid & Headless React Storefront Architecture",
        "Mobile-First 1-Click Fast Checkout with UPI & Cards",
        "Automated Cart Abandonment & Upsell Modules",
        "Omnichannel Inventory & Courier Shipping Integrations",
      ],
      tag: "D2C Powerhouse",
    },
    gridServices: [
      {
        title: "WooCommerce Development",
        href: "/woocommerce-development",
        description: "Flexible, self-hosted WordPress e-commerce stores with total ownership and bespoke plugins.",
        tags: ["No Monthly Fees", "Custom Workflows", "Stripe & Razorpay"],
        icon: Code2,
      },
      {
        title: "Custom Ecommerce Development",
        href: "/custom-ecommerce",
        description: "Tailored multi-vendor marketplaces, wholesale B2B pricing portals, and enterprise store architectures.",
        tags: ["B2B Wholesale", "Tiered Pricing", "Enterprise Scalability"],
        icon: Layers,
      },
      {
        title: "Magento Development",
        href: "/magento",
        description: "Enterprise e-commerce builds for complex multi-store catalogues, multi-currency, and global logistics.",
        tags: ["Large Catalogues", "Multi-Storefront", "ERP Integration"],
        icon: Cpu,
      },
      {
        title: "E-Commerce SEO",
        href: "/ecommerce-seo",
        description: "Dominate search for thousands of commercial product and category keywords with deep schema.",
        tags: ["Category Rank", "Product Schema", "Organic Revenue"],
        icon: Search,
      },
      {
        title: "Product Packaging Design",
        href: "/product-packaging-design",
        description: "Eye-catching D2C packaging, unboxing experiences, and 3D renders that stand out on retail shelves and feeds.",
        tags: ["3D Mockups", "Print Ready", "Retail Standards"],
        icon: Palette,
      },
      {
        title: "Ecommerce SEO Packages",
        href: "/ecommerce-seo-packages",
        description: "Comprehensive monthly organic growth packages tailored to store catalogue size and competitive niche.",
        tags: ["Monthly Deliverables", "Revenue Reports", "Catalogue Scale"],
        icon: Package,
      },
    ],
    allLinks: [
      { label: "Shopify Development", href: "/shopify-development" },
      { label: "WooCommerce Development", href: "/woocommerce-development" },
      { label: "Custom Ecommerce", href: "/custom-ecommerce" },
      { label: "Magento", href: "/magento" },
      { label: "Ecommerce SEO", href: "/ecommerce-seo" },
      { label: "Ecommerce Marketing", href: "/ecommerce-marketing" },
      { label: "Ecommerce SEO Packages", href: "/ecommerce-seo-packages" },
      { label: "Product Packaging Design", href: "/product-packaging-design" },
    ],
  },
  {
    id: "creative",
    label: "Creative & Branding",
    icon: Palette,
    badge: "Identity",
    headline: "Memorable Visual Identities & High-Performance Creatives",
    description:
      "Our in-house design studio translates your brand vision into distinct visual identity systems, high-converting ad creatives, video editing, and sleek UI/UX.",
    flagship: {
      title: "Brand Identity & UI/UX Design",
      href: "/ui-ux-design",
      tagline: "Visual Prestige Meets Usability",
      description:
        "Full brand guidelines, custom vector logomarks, typography hierarchies, and clickable Figma prototypes designed to position your company as the unquestioned market leader.",
      metric: { value: "100%", label: "Original In-House" },
      deliverables: [
        "Complete Brand Guidelines & Vector Design Systems",
        "High-Fidelity Figma Click-Through Prototypes",
        "Design Tokens, Icons & Custom Digital Assets",
        "Commercial Source Files Included (Figma, AI, SVG)",
      ],
      tag: "Studio Grade",
    },
    gridServices: [
      {
        title: "Logo Design",
        href: "/logo-design",
        description: "Timeless, versatile logos that establish instant credibility and look sharp across digital and print media.",
        tags: ["Vector Formats", "Full Copyright", "Brand Guidelines"],
        icon: Palette,
      },
      {
        title: "Graphic Design",
        href: "/graphic-design",
        description: "Marketing collaterals, digital banners, presentation decks, and marketing assets tailored to your brand.",
        tags: ["Fast Turnaround", "Social & Web", "Source Files"],
        icon: Layers,
      },
      {
        title: "Video Editing",
        href: "/video-editing",
        description: "Engaging short-form Reels, TikToks, YouTube cuts, and corporate brand films with motion typography.",
        tags: ["Reels & Shorts", "Motion Graphics", "Sound Design"],
        icon: Zap,
      },
      {
        title: "Social Media Creatives",
        href: "/social-media-creatives",
        description: "Monthly packs of high-engagement social posts, carousel decks, and story templates.",
        tags: ["Platform Tailored", "Consistent Look", "Monthly Content"],
        icon: Share2,
      },
      {
        title: "Brochure & Print Design",
        href: "/brochure-design",
        description: "Tangible marketing brochures, product catalogues, and corporate company profiles ready for press.",
        tags: ["CMYK Print Ready", "Luxury Layouts", "PDF & Print"],
        icon: Newspaper,
      },
      {
        title: "Landing Page Design",
        href: "/landing-page-design",
        description: "High-converting standalone landing pages designed around direct-response copy and psychological triggers.",
        tags: ["High Conversion", "Frictionless Forms", "A/B Ready"],
        icon: Target,
      },
    ],
    allLinks: [
      { label: "Logo Design", href: "/logo-design" },
      { label: "Graphic Design", href: "/graphic-design" },
      { label: "UI/UX Design", href: "/ui-ux-design" },
      { label: "Video Editing", href: "/video-editing" },
      { label: "Social Media Creatives", href: "/social-media-creatives" },
      { label: "Product Packaging Design", href: "/product-packaging-design" },
      { label: "Brochure Design", href: "/brochure-design" },
      { label: "Newsletter Design", href: "/newsletter-design" },
      { label: "Landing Page Design", href: "/landing-page-design" },
    ],
  },
  {
    id: "content-pr",
    label: "Content, Outreach & ORM",
    icon: Newspaper,
    badge: "Authority",
    headline: "Authority Content, High-Impact Link Building & Reputation Guard",
    description:
      "We publish search-led content that educates buyers, secure top-tier editorial backlinks, and protect your brand's digital reputation across review platforms.",
    flagship: {
      title: "Content Marketing & Digital PR",
      href: "/digital-pr",
      tagline: "Earning Real Authority & Editorial Backlinks",
      description:
        "High-value journalism-grade PR and data-driven articles placed on tier-1 industry publications, earning powerful domain authority and compounding referral leads.",
      metric: { value: "Top Tier", label: "Media Placements" },
      deliverables: [
        "Search-Intent Content Calendars & Editorial Writing",
        "High Domain-Authority (DA 50+) Editorial Placements",
        "Online Reputation Monitoring & Review Suppression",
        "Manual Outreach & Permanent Link Guarantee",
      ],
      tag: "Authority Engine",
    },
    gridServices: [
      {
        title: "Content Writing",
        href: "/content-writing",
        description: "Search-friendly, compelling blogs and service pages written with deep subject research and E-E-A-T signals.",
        tags: ["SEO Optimized", "Original Content", "Engaging Copy"],
        icon: Newspaper,
      },
      {
        title: "Link Building",
        href: "/link-building",
        description: "100% white-hat contextual backlinks earned on relevant industry authority websites.",
        tags: ["High DR/DA", "Safe & Lasting", "Competitor Gap"],
        icon: Globe,
      },
      {
        title: "Online Reputation (ORM)",
        href: "/orm",
        description: "Protect and elevate how your brand appears on Google Search, Glassdoor, and public review sites.",
        tags: ["Review Management", "Negative Suppression", "Trust Badges"],
        icon: ShieldCheck,
      },
      {
        title: "Guest Posting",
        href: "/guest-posting",
        description: "Publish thought-leadership articles on respected niche blogs to tap into existing customer communities.",
        tags: ["Niche Relevance", "Dofollow Links", "Thought Leadership"],
        icon: Target,
      },
      {
        title: "Blog Outreach",
        href: "/blog-outreach",
        description: "Manual, personalized outreach to established bloggers and editors to secure brand mentions and quotes.",
        tags: ["Manual Outreach", "No PBNs", "Verified Placements"],
        icon: Share2,
      },
      {
        title: "Social Media Optimization",
        href: "/social-media-optimisation",
        description: "Optimize all corporate social handles, bios, and hashtags for discovery and follower conversion.",
        tags: ["Profile SEO", "Hashtag Matrix", "Bio Optimization"],
        icon: Sparkles,
      },
    ],
    allLinks: [
      { label: "Content Writing", href: "/content-writing" },
      { label: "Link Building", href: "/link-building" },
      { label: "Blog Outreach", href: "/blog-outreach" },
      { label: "Guest Posting", href: "/guest-posting" },
      { label: "Digital PR", href: "/digital-pr" },
      { label: "Online Reputation (ORM)", href: "/orm" },
      { label: "Social Media Optimisation", href: "/social-media-optimisation" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
      { label: "Influencer Marketing", href: "/influencer-marketing" },
    ],
  },
];

export function AllServicesHub() {
  const fallback = SERVICE_TABS[0]!;
  const [activeTabId, setActiveTabId] = useState(fallback.id);
  const activeTab: ServiceTab = SERVICE_TABS.find((t) => t.id === activeTabId) ?? fallback;

  return (
    <section id="services-hub" className="section-space relative overflow-hidden bg-[var(--color-surface)] scroll-mt-12">
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-circuit"
        aria-hidden
      />
      <span className="pointer-events-none absolute -left-40 top-32 h-[450px] w-[450px] rounded-full bg-[var(--color-brand-soft)] opacity-70 blur-[140px]" />
      <span className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[var(--color-accent-soft)] opacity-70 blur-[140px]" />

      <div className="container-max relative">
        {/* Section Header */}
        <div className="mx-auto max-w-[72ch] text-center">
          <span className="pill">Full-Spectrum Capabilities</span>
          <h2 className="mt-4 font-display font-extrabold text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)" }}>
            Explore All Services & <span className="text-gradient-brand">Digital Solutions</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            From Next-Gen AI Search and custom engineering to high-ROAS paid media and brand systems. Select a discipline below to discover everything we build.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {SERVICE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-ink)] text-white shadow-lg ring-2 ring-[var(--color-ink)]"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                }`}
              >
                <Icon
                  size={14}
                  className={isActive ? "text-[var(--color-brand)]" : "text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)]"}
                />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-[var(--color-brand)] text-white"
                        : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Header */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-b border-[var(--color-border)] pb-6 sm:flex-row">
          <div>
            <h3 className="font-display text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
              {activeTab.headline}
            </h3>
            <p className="mt-1 max-w-[56ch] text-xs text-[var(--color-text-muted)] sm:text-sm">
              {activeTab.description}
            </p>
          </div>
          <Link
            href="/contact-us"
            className="btn btn-ghost text-xs shrink-0 py-2 h-9"
          >
            Get Custom Proposal <ArrowRight size={13} />
          </Link>
        </div>

        {/* Bento Showcase Layout */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Flagship Hero Card (Left 5 Cols) */}
          <div className="flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-ink)] p-8 text-white shadow-xl lg:col-span-5 relative">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(229,35,27,.45), transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(185,138,47,.35), transparent 70%)" }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)] border border-white/15">
                  {activeTab.flagship.tag}
                </span>
                <span className="text-xs font-semibold text-white/50">Flagship Service</span>
              </div>

              <h4 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {activeTab.flagship.title}
              </h4>
              <p className="mt-1.5 text-xs font-semibold text-[var(--color-accent)]">
                {activeTab.flagship.tagline}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                {activeTab.flagship.description}
              </p>

              {/* Metric Card */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-md">
                <p className="text-gradient-brand font-display text-3xl font-extrabold">
                  {activeTab.flagship.metric.value}
                </p>
                <p className="text-xs font-semibold leading-tight text-white/80">
                  {activeTab.flagship.metric.label}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                  What We Deliver:
                </p>
                <ul className="mt-3 space-y-2">
                  {activeTab.flagship.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 size={14} className="text-[var(--color-brand)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/15">
              <Link
                href={activeTab.flagship.href}
                className="btn btn-brand w-full justify-between"
              >
                <span>Learn More About {activeTab.flagship.title}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Sub-Services Grid (Right 7 Cols) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {activeTab.gridServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/60 hover:shadow-[var(--shadow-md)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-ink)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                        <ServiceIcon size={20} />
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-brand)]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)] line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="mt-5 border-t border-[var(--color-border)] pt-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-[var(--color-surface-2)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Complete Directory Quick-Link Pills Strip */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 sm:p-7 shadow-[var(--shadow-sm)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--color-border)] pb-4">
            <p className="font-display text-sm font-bold text-[var(--color-ink)]">
              All Related Pages & Specialized Solutions in <span className="text-[var(--color-brand)]">{activeTab.label}</span>
            </p>
            <span className="text-xs text-[var(--color-text-muted)]">
              {activeTab.allLinks.length} Dedicated Hubs
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {activeTab.allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-brand)] hover:bg-white hover:text-[var(--color-brand)] hover:shadow-sm"
              >
                <span>{link.label}</span>
                <ArrowRight size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

