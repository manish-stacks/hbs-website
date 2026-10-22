import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

const d: PageData = {
  slug: "custom-ecommerce",
  title: "Custom Ecommerce Development Services",
  eyebrow: "Bespoke Digital Commerce",
  tagline:
    "High-performance, scalable online stores engineered for complex catalogues, custom checkouts, and high transaction volume.",
  intro:
    "When off-the-shelf templates and rigid SaaS platforms constrain your business model, Hover Business Services LLP builds bespoke ecommerce architectures. From headless Next.js storefronts and multi-warehouse inventory systems to custom ERP integrations and sub-second checkout pipelines, we engineer digital retail platforms tailored for sustainable revenue growth.",
  accent: "#e5231b",
  heroImage: "/images/services/ecommerce.png",
  metaTitle: "Custom Ecommerce Development Agency | Bespoke Store Architecture | HBS",
  metaDesc:
    "Scalable custom ecommerce development by Hover Business Services LLP. Headless commerce, custom checkout flows, ERP/CRM integrations, and sub-second speed.",
  galleryTitle: "Bespoke Storefronts & Headless Architecture Showcase",
  gallerySubtitle:
    "Explore custom ecommerce platforms engineered for high-throughput transactions and sub-second catalog browsing.",
  gallery: [
    {
      title: "Headless Luxury Direct Storefront",
      category: "Fashion & Retail",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      tag: "Headless Next.js",
      description:
        "Sub-second catalog browsing, high-resolution fabric zoom, and dynamic bundle configurations.",
    },
    {
      title: "High-Conversion 1-Page Checkout Pipeline",
      category: "Fintech & Commerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e557224f?q=80&w=800&auto=format&fit=crop",
      tag: "Frictionless Pay",
      description:
        "Multi-gateway failover supporting UPI, international cards, and 1-click OTP checkout.",
    },
    {
      title: "B2B Wholesale Portal & Bulk Ordering System",
      category: "B2B Commerce",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tag: "Wholesale B2B",
      description:
        "Tiered wholesale pricing, custom company accounts, credit terms, and ERP inventory synchronization.",
    },
  ],
  overviewParagraphs: [
    "Modern commerce demands far more than basic product catalogs and rigid checkout limitations. Ambitious D2C brands and enterprise B2B distributors frequently hit structural roadblocks with plug-and-play platforms: slow page load speeds, inflexible API rate limits, rigid checkout workflows, and high transaction fee overhead.",
    "Hover Business Services LLP builds custom ecommerce engines engineered around your exact business model, supply chain, and customer acquisition funnels. Utilizing modern frameworks like Next.js, Node.js, and Laravel alongside microservices architecture, we deliver headless storefronts that load in under one second and turn traffic into buyers.",
    "Our senior in-house engineering team coordinates every layer of the build: database schema design, multi-currency payment gateway integrations, automated warehouse synchronization, and PCI-DSS compliance.",
  ],
  whyTitle: "Why Invest in Custom Ecommerce Development?",
  whySubtitle: "Unlock operational freedom, superior conversion rates, and limitless scalability.",
  whyPoints: [
    {
      title: "Zero Platform Constraints & Custom Business Logic",
      description:
        "Build complex wholesale pricing, tiered volume discounts, subscription models, and bespoke product builders without fragile plugin dependencies.",
    },
    {
      title: "Sub-Second Page Load Speeds",
      description:
        "Headless storefront architectures engineered with server-side rendering and edge caching ensure instant browsing and drastically lower bounce rates.",
    },
    {
      title: "Seamless ERP, WMS & CRM Integration",
      description:
        "Bi-directional real-time data sync with SAP, Oracle, Zoho, Salesforce, Microsoft Dynamics, and custom warehouse management systems.",
    },
    {
      title: "Complete IP & Database Ownership",
      description:
        "You own 100% of your source code, customer records, and infrastructure with zero platform lock-in or escalating revenue share fees.",
    },
    {
      title: "High-Converting Single-Page Checkouts",
      description:
        "Custom single-page checkouts, localized payment methods (UPI, Cards, BNPL, Net Banking, International), and automated abandoned cart recovery.",
    },
    {
      title: "Enterprise Peak-Traffic Scalability",
      description:
        "Engineered with auto-scaling cloud infrastructure to handle flash sales, festive surges, and high-velocity concurrent checkouts without timeouts.",
    },
  ],
  deliverablesTitle: "What Our Custom Ecommerce Solutions Include",
  deliverablesSubtitle: "End-to-end engineering from architectural discovery to post-launch scaling.",
  deliverables: [
    {
      title: "Bespoke Storefront & UI/UX Architecture",
      description:
        "Custom-crafted storefront design optimized for frictionless mobile navigation, quick-view interactions, and high-velocity purchasing.",
      features: [
        "Figma-to-code pixel fidelity",
        "Mobile-first responsive UX",
        "Interactive product configurators",
      ],
    },
    {
      title: "Headless Commerce & Microservices Engine",
      description:
        "Decoupled frontend powered by Next.js or React connected to robust API backends for blazing speed and multi-channel flexibility.",
      features: [
        "Server-side rendering (SSR)",
        "GraphQL & RESTful APIs",
        "Edge CDN caching",
      ],
    },
    {
      title: "Custom Checkout & Multi-Gateway Integration",
      description:
        "Streamlined checkout flows tailored to decrease drop-offs, supporting domestic payment processors and global multi-currency checkout.",
      features: [
        "1-click checkout options",
        "Multi-gateway failover",
        "Automated tax & shipping calculation",
      ],
    },
    {
      title: "B2B Wholesale Portals & Tiered Pricing",
      description:
        "Enterprise wholesale workflows including company account management, minimum order quantities (MOQ), and custom price lists.",
      features: [
        "Customer-specific pricing",
        "Net-30 / Credit terms support",
        "Bulk CSV order upload",
      ],
    },
    {
      title: "Warehouse & Multi-Inventory Synchronization",
      description:
        "Real-time inventory orchestration across multiple physical warehouses, retail stores, and online marketplaces.",
      features: [
        "Automated low-stock alerts",
        "Split-shipment routing",
        "ERP bi-directional sync",
      ],
    },
    {
      title: "Enterprise Security & Performance Audits",
      description:
        "Hardened architecture adhering to PCI-DSS compliance, DDoS mitigation, automated daily backups, and sub-second Core Web Vitals.",
      features: [
        "PCI-DSS compliance review",
        "DDoS protection & WAF",
        "Automated failover clustering",
      ],
    },
  ],
  detailedProcess: [
    {
      step: 1,
      title: "Technical Discovery & Architecture",
      description:
        "We map out your product catalog data structure, ERP connections, third-party logistics integrations, and business logic requirements.",
    },
    {
      step: 2,
      title: "Custom UI/UX & Interactive Prototypes",
      description:
        "Our design team creates conversion-optimized interactive wireframes and design systems in Figma tailored to your target audience.",
    },
    {
      step: 3,
      title: "Agile Development & API Engineering",
      description:
        "Our full-stack team builds the headless frontend, develops backend APIs, and connects payment processors in bi-weekly sprints.",
    },
    {
      step: 4,
      title: "Load Testing, Security & Launch",
      description:
        "We simulate high-concurrency flash sales, conduct end-to-end payment audits, and manage zero-downtime DNS deployment.",
    },
  ],
  audiencesTitle: "Who Benefits from Custom Ecommerce?",
  audiencesSubtitle: "Engineered for businesses that outgrow standard off-the-shelf software.",
  audiences: [
    {
      title: "Fast-Growing D2C Brands",
      description:
        "Brands needing custom subscription models, bespoke visual bundling, and sub-second page performance.",
    },
    {
      title: "B2B Manufacturers & Distributors",
      description:
        "Enterprises requiring account-specific wholesale pricing, bulk ordering, and bi-directional ERP integration.",
    },
    {
      title: "High-Volume Multi-Store Retailers",
      description:
        "Companies operating multiple physical outlets and needing centralized multi-location inventory synchronization.",
    },
    {
      title: "International Cross-Border Brands",
      description:
        "Merchants requiring localized currencies, automated international duties, and multi-lingual storefronts.",
    },
  ],
  whyHbsTitle: "Why Build Your Custom Store with HBS?",
  whyHbsSubtitle: "Enterprise full-stack engineering with a ruthless focus on commercial conversion rates.",
  whyHbsPoints: [
    {
      title: "Modern Jamstack & Headless Prowess",
      description:
        "We build with Next.js, Node.js, and TypeScript, delivering benchmark-shattering Core Web Vitals and SEO performance.",
    },
    {
      title: "Deep Payment & ERP Expertise",
      description:
        "Extensive experience integrating SAP, Zoho, Salesforce, Razorpay, Cashfree, Stripe, and Shiprocket.",
    },
    {
      title: "100% Code & Data Sovereignty",
      description:
        "You retain complete legal ownership of all code repositories, database schemas, and intellectual property.",
    },
  ],
  benefits: [
    {
      t: "Sub-Second Load Times",
      b: "Lightning-fast browsing that eliminates bounce rates and boosts search rankings.",
    },
    {
      t: "Zero Platform Fees",
      b: "Eliminate recurring revenue-share fees charged by SaaS ecommerce platforms.",
    },
    {
      t: "Frictionless Checkout",
      b: "Optimized single-page checkout funnels that maximize completed transactions.",
    },
    {
      t: "Limitless Extensibility",
      b: "Integrate any warehouse, accounting, or marketing tool without plugin limits.",
    },
  ],
  includes: [
    "Custom Next.js Headless Storefront",
    "1-Page Fast Checkout with UPI & Cards",
    "Multi-Warehouse Inventory & ERP Sync",
    "B2B Wholesale & Custom Pricing Portals",
    "Automated Tax, Invoicing & Logistics Sync",
    "24/7 Monitoring & Post-Launch Support",
  ],
  process: [
    { t: "Discovery & Architecture", b: "We map catalog schemas, ERP endpoints, and business rules." },
    { t: "Figma Prototyping", b: "We design high-converting Figma wireframes and mobile journeys." },
    { t: "Agile Engineering", b: "We build the headless frontend and backend APIs in agile sprints." },
    { t: "Load Testing & Launch", b: "End-to-end checkout stress testing and zero-downtime deployment." },
  ],
  faqs: [
    {
      q: "When should a business choose custom ecommerce over Shopify or WooCommerce?",
      a: "Custom ecommerce is the right choice when your business model requires custom checkout logic, complex B2B wholesale pricing, custom product configurators, multi-warehouse ERP sync, or when off-the-shelf platform transaction fees become excessive.",
    },
    {
      q: "What tech stack do you use for custom ecommerce development?",
      a: "We primarily build headless ecommerce platforms using Next.js / React on the frontend, Node.js or Laravel on the backend, PostgreSQL or MySQL for databases, and Redis for edge caching. We deploy on cloud infrastructure like AWS, Google Cloud, or Vercel.",
    },
    {
      q: "How long does a custom ecommerce build take?",
      a: "A typical custom ecommerce project takes between 8 to 16 weeks depending on the complexity of your product catalog, third-party ERP integrations, and custom business workflows.",
    },
    {
      q: "Do you provide post-launch maintenance and support?",
      a: "Yes. We offer comprehensive monthly maintenance and SLA support agreements covering security patches, server monitoring, feature enhancements, and conversion rate optimization.",
    },
  ],
  stats: [
    ["< 0.8s", "Average LCP load time"],
    ["+42%", "Average checkout conversion lift"],
    ["$50M+", "Online GMV processed"],
  ],
  related: [
    { label: "Shopify Development", href: "/shopify-development" },
    { label: "WooCommerce Development", href: "/woocommerce-development" },
    { label: "Ecommerce SEO", href: "/ecommerce-seo" },
    { label: "Custom Web Development", href: "/custom-web-development" },
  ],
};

export const metadata = pageMeta(d);

export default function Page() {
  return <PageView d={d} v="A" />;
}
