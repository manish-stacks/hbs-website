import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

const d: PageData = {
  slug: "shopify-development",
  title: "Shopify & Shopify Plus Development Services",
  eyebrow: "Certified Shopify Agency",
  tagline:
    "High-converting, bespoke Shopify & Shopify Plus storefronts engineered to scale your direct-to-consumer revenue and international sales.",
  intro:
    "Building an exceptional ecommerce brand requires far more than installing a pre-made theme. Hover Business Services LLP crafts custom Shopify and Shopify Plus storefronts tailored to your unique brand identity and commercial goals. From bespoke Liquid theme architecture and private app development to headless Hydrogen builds and friction-free checkout customization, we turn your store into a conversion engine.",
  accent: "#e5231b",
  heroImage: "/images/services/ecommerce.png",
  metaTitle: "Shopify Development Agency | Custom Shopify Plus Stores | HBS",
  metaDesc:
    "Scale your D2C brand with certified Shopify & Shopify Plus development by Hover Business Services LLP. Custom themes, private apps, headless commerce, and speed optimization.",
  galleryTitle: "Shopify Storefronts & D2C Showcase",
  gallerySubtitle:
    "Explore bespoke Shopify and Shopify Plus storefronts engineered for high conversions and mobile-first speed.",
  gallery: [
    {
      title: "Direct-to-Consumer Fashion Storefront",
      category: "D2C Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      tag: "Shopify Plus",
      description:
        "Custom Liquid theme with multi-variant swatches, dynamic bundling, and 1-click upsells.",
    },
    {
      title: "Beauty & Skincare Mobile-First Experience",
      category: "Beauty & Cosmetics",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      tag: "Custom Theme",
      description:
        "Sub-second mobile loading, personalized routine quizzes, and automated recurring subscriptions.",
    },
    {
      title: "Luxury Home Living & Furniture Catalog",
      category: "Home & Decor",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      tag: "High-Volume Catalog",
      description:
        "Custom 3D model viewer, room visualizer integration, and high-volume freight shipping calculator.",
    },
  ],
  overviewParagraphs: [
    "Shopify powers over 10% of global ecommerce, but off-the-shelf templates and bloated third-party apps frequently lead to slow page load speeds, sluggish checkouts, and generic storefronts that fail to differentiate your brand.",
    "Hover Business Services LLP delivers bespoke Shopify engineering. We write clean, lightweight Liquid code and leverage modern Shopify Online Store 2.0 architecture to ensure your store scores 85+ on mobile Google PageSpeed Insights while giving your marketing team complete visual control.",
    "Whether launching your first flagship store, upgrading to Shopify Plus, or migrating from WooCommerce or Magento without losing organic search rankings, our certified engineers deliver a seamless build with zero downtime.",
  ],
  whyTitle: "Why Invest in Professional Shopify Development?",
  whySubtitle: "Maximize conversion velocity, mobile engagement, and operational efficiency.",
  whyPoints: [
    {
      title: "Bespoke Design Tailored to Your Brand",
      description:
        "We build pixel-perfect, custom-coded themes from Figma that elevate your brand equity and deliver unique shopping experiences.",
    },
    {
      title: "Blazing Fast Mobile Page Speed",
      description:
        "We write clean, lightweight code and minimize app bloat to ensure sub-2-second load times and 85+ Core Web Vitals scores.",
    },
    {
      title: "Shopify Online Store 2.0 Architecture",
      description:
        "Every page and section is built modularly with JSON templates, allowing your marketing team to customize banners and layouts effortlessly.",
    },
    {
      title: "Custom Private Apps & API Integrations",
      description:
        "Connect your proprietary ERP, CRM, custom warehouse software, or local shipping courier using private Shopify Apps and Webhooks.",
    },
    {
      title: "Shopify Plus Checkout Extensibility",
      description:
        "Customize the checkout pipeline with custom fields, 1-click post-purchase upsells, trust badges, and automated discounts.",
    },
    {
      title: "Flawless Migration with Zero SEO Loss",
      description:
        "Migrating from WooCommerce, Magento, or custom carts? We execute 100% 301 URL redirect mapping, data migration, and SEO preservation.",
    },
  ],
  deliverablesTitle: "What Our Shopify Development Services Include",
  deliverablesSubtitle: "Complete lifecycle engineering from theme development to enterprise scaling.",
  deliverables: [
    {
      title: "Bespoke Shopify Theme Build (OS 2.0)",
      description:
        "Custom-coded Liquid theme built from Figma mockups, fully responsive across all screen sizes with zero unnecessary code bloat.",
      features: [
        "Modular JSON sections & blocks",
        "Mobile-first responsive UX",
        "Custom product page layouts",
      ],
    },
    {
      title: "Shopify Plus & Enterprise Architecture",
      description:
        "Advanced capabilities for high-volume merchants including checkout extensions, Shopify Scripts, multi-currency, and expansion stores.",
      features: [
        "Shopify Functions & Checkout UI",
        "B2B Wholesale portal setup",
        "Multi-store internationalization",
      ],
    },
    {
      title: "Custom Shopify App & API Development",
      description:
        "Bespoke private apps built with Node.js/Remix to handle complex business rules, custom calculators, and third-party API sync.",
      features: [
        "ERP & CRM bi-directional sync",
        "Custom shipping & logistics APIs",
        "Secure webhook processing",
      ],
    },
    {
      title: "Shopify Speed & Core Web Vitals Optimization",
      description:
        "Auditing and removing bloated JavaScript, lazy loading assets, optimizing image formats, and ensuring green PageSpeed scores.",
      features: [
        "App script auditing & pruning",
        "Critical CSS extraction",
        "Sub-2-second Largest Contentful Paint",
      ],
    },
    {
      title: "Ecommerce Migration to Shopify",
      description:
        "Seamless migration of products, customer records, order history, and full SEO authority from Magento, WooCommerce, or BigCommerce.",
      features: [
        "100% historical data migration",
        "Comprehensive 301 redirect map",
        "Zero-downtime cutover strategy",
      ],
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Integrating high-converting features such as sticky add-to-cart bars, countdown urgency triggers, bundling, and smart search.",
      features: [
        "1-click upsells & cross-sells",
        "Smart predictive search filters",
        "Abandoned checkout automation",
      ],
    },
  ],
  detailedProcess: [
    {
      step: 1,
      title: "Discovery & Technical Roadmap",
      description:
        "We analyze your product catalog, app ecosystem requirements, payment gateway needs, and third-party integrations.",
    },
    {
      step: 2,
      title: "Custom UI/UX & Prototyping",
      description:
        "Our ecommerce designers craft conversion-driven desktop and mobile wireframes in Figma for your review.",
    },
    {
      step: 3,
      title: "Shopify Theme & App Engineering",
      description:
        "Our certified Shopify developers code the theme on a development store, integrate apps, and configure payment gateways.",
    },
    {
      step: 4,
      title: "Rigorous QA, Testing & Launch",
      description:
        "We execute end-to-end test transactions across all payment methods, verify inventory sync, and seamlessly flip your DNS.",
    },
  ],
  audiencesTitle: "Who We Build For",
  audiencesSubtitle: "Tailored solutions for scaling D2C brands, retailers, and high-volume merchants.",
  audiences: [
    {
      title: "Scaling D2C Brands",
      description:
        "Merchants looking to replace generic templates with a high-speed, branded shopping experience that drives repeat orders.",
    },
    {
      title: "Shopify Plus Enterprises",
      description:
        "High-volume retailers requiring custom checkout extensions, international multi-currency markets, and B2B portals.",
    },
    {
      title: "Brands Migrating from Legacy Platforms",
      description:
        "Businesses outgrowing WooCommerce or frustrated with Magento maintenance overhead seeking a reliable platform.",
    },
    {
      title: "Omnichannel Retailers",
      description:
        "Companies integrating physical retail outlets via Shopify POS with centralized online inventory and reporting.",
    },
  ],
  whyHbsTitle: "Why Choose Hover Business Services LLP for Shopify?",
  whyHbsSubtitle: "Certified expertise, transparent communication, and data-driven results.",
  whyHbsPoints: [
    {
      title: "Certified Shopify Engineers",
      description:
        "Our in-house team holds deep certifications across Liquid, Storefront API, Hydrogen, and Shopify Plus architecture.",
    },
    {
      title: "Speed-First Philosophy",
      description:
        "We never build bloated stores. We custom-code features instead of piling on 25 monthly paid apps that slow down your site.",
    },
    {
      title: "End-to-End Growth Partnership",
      description:
        "Beyond development, our SEO and paid media specialists ensure your newly launched store attracts high-intent buyers.",
    },
  ],
  benefits: [
    {
      t: "Higher Conversion Rates",
      b: "Frictionless mobile navigation and streamlined checkout pipelines that convert visitors into customers.",
    },
    {
      t: "Lower App Overhead",
      b: "Custom code replaces dozens of recurring monthly third-party app subscriptions.",
    },
    {
      t: "Rapid Time-to-Market",
      b: "Agile delivery sprints that get your new store or feature live without endless delays.",
    },
    {
      t: "Dedicated Monthly Support",
      b: "Ongoing technical maintenance, theme updates, and feature builds to keep you ahead of competitors.",
    },
  ],
  includes: [
    "Custom Liquid Theme (Online Store 2.0)",
    "Shopify Plus Checkout Customization",
    "Private App Development & API Integration",
    "Shopify Mobile PageSpeed Optimization",
    "Zero-Downtime Store Migration & 301 Redirects",
    "Ongoing Monthly Retainer & SLA Support",
  ],
  process: [
    { t: "Discovery & Sizing", b: "We map store features, app requirements, and payment setups." },
    { t: "Figma Prototyping", b: "We design high-converting desktop and mobile storefront mockups." },
    { t: "Liquid Coding", b: "Certified engineers build modular sections with clean, fast code." },
    { t: "QA & Cutover", b: "End-to-end checkout testing and zero-downtime DNS launch." },
  ],
  faqs: [
    {
      q: "How long does it take to develop a custom Shopify store?",
      a: "A custom Shopify store typically takes between 4 to 8 weeks, including custom Figma design, Liquid coding, app integrations, and quality assurance. Larger Shopify Plus builds with complex migrations may take 8 to 12 weeks.",
    },
    {
      q: "Can you build custom features without installing third-party apps?",
      a: "Yes! Wherever possible, we custom-code features directly into your theme (e.g. swatches, size charts, FAQ accordions, sticky add-to-cart, mega menus) to keep your store ultra-fast and save on monthly app subscription fees.",
    },
    {
      q: "Will our SEO rankings be protected during a migration to Shopify?",
      a: "Absolutely. We execute a strict 301 URL redirect map, preserve title tags, meta descriptions, and structured data, and audit all incoming search traffic to ensure zero loss of organic search visibility.",
    },
    {
      q: "Do you offer post-launch support and store maintenance?",
      a: "Yes. We offer dedicated monthly retainer plans covering technical updates, feature additions, promotional campaign banners, and conversion rate optimization.",
    },
  ],
  stats: [
    ["250+", "Shopify stores launched"],
    ["85+", "Mobile PageSpeed score"],
    ["2.4x", "Average conversion rate lift"],
  ],
  related: [
    { label: "WooCommerce Development", href: "/woocommerce-development" },
    { label: "Custom Ecommerce", href: "/custom-ecommerce" },
    { label: "Ecommerce SEO", href: "/ecommerce-seo" },
    { label: "UI/UX Design", href: "/ui-ux-design" },
  ],
};

export const metadata = pageMeta(d);

export default function Page() {
  return <PageView d={d} v="C" />;
}
