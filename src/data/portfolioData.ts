export type ProjectCategory = "all" | "web" | "ecommerce" | "apps" | "seo" | "branding";

export interface ProjectMetric {
  value: string;
  label: string;
  trend?: "up" | "down";
}

export interface PortfolioProject {
  id: string;
  name: string;
  client: string;
  category: "web" | "ecommerce" | "apps" | "seo" | "branding";
  categoryLabel: string;
  sector: string;
  year: string;
  location: string;
  tagline: string;
  outcome: string;
  image: string;
  ratio?: string;
  accent: string;
  featured?: boolean;
  metrics: ProjectMetric[];
  scope: string[];
  techStack: string[];
  challenge: string;
  solution: string;
  keyDeliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  liveUrl?: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web & SaaS" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "apps", label: "Mobile Apps" },
  { id: "seo", label: "SEO & Growth" },
  { id: "branding", label: "Creative & Branding" },
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "efos",
    name: "EFOS Food Services",
    client: "EFOS International",
    category: "web",
    categoryLabel: "Web & Enterprise",
    sector: "Food Services & B2B Supply",
    year: "2025",
    location: "Delhi NCR / Pan-India",
    tagline: "Modern Web Platform & High-Intent SEO That Unlocked +240% In Corporate B2B Inquiries",
    outcome: "Rebuilt the entire digital architecture and dominated search for institutional catering and service-intent keywords.",
    image: "/images/company/efos.jpg",
    ratio: "aspect-[4/5]",
    accent: "#e5231b",
    featured: true,
    metrics: [
      { value: "+240%", label: "Organic B2B Inquiries", trend: "up" },
      { value: "1.2s", label: "Lighthouse Page Speed", trend: "up" },
      { value: "#1 Rank", label: "For 45+ Commercial Terms", trend: "up" },
    ],
    scope: ["Custom Web Platform", "Technical SEO Architecture", "Brand Identity", "Lead Routing Automation"],
    techStack: ["Next.js 16", "Tailwind CSS", "TypeScript", "Node.js REST API", "Schema Markup"],
    challenge:
      "EFOS operated with a legacy monolithic website suffering from slow 4.8s load times, a 68% mobile bounce rate, and virtually zero organic search presence for corporate cafeteria and institutional catering contracts.",
    solution:
      "We engineered an ultra-fast, responsive Next.js web application paired with dynamic multi-location landing pages, schema-optimized service catalogs, and an automated lead triage system routing inquiries instantly to sales reps on WhatsApp.",
    keyDeliverables: [
      "Custom responsive Next.js frontend with 99+ Core Web Vitals score",
      "Comprehensive B2B institutional menu & quote calculator",
      "Full technical SEO overhaul and localized keyword hierarchy",
      "Automated WhatsApp & CRM notification pipeline",
    ],
    testimonial: {
      quote:
        "HBS completely transformed how institutional buyers perceive EFOS. Within 90 days of launching the new site, our pipeline of corporate contracts grew more than twofold.",
      author: "Rajesh S.",
      role: "Managing Director, EFOS Services",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "printhutt",
    name: "PrintHutt Storefront",
    client: "PrintHutt India",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    sector: "D2C Custom Merchandise",
    year: "2025",
    location: "National D2C",
    tagline: "High-Speed Print Storefront & Funnel Engine Delivering 3.8x Monthly Orders and 4.2x ROAS",
    outcome: "Custom print-on-demand storefront with automated artwork preview and paid acquisition funnels tuned to high average order values.",
    image: "/images/company/printhutt.avif",
    ratio: "aspect-[4/3]",
    accent: "#f0562b",
    featured: true,
    metrics: [
      { value: "3.8x", label: "Monthly Order Volume", trend: "up" },
      { value: "4.2x", label: "Target Return On Ad Spend", trend: "up" },
      { value: "+185%", label: "Average Order Value (AOV)", trend: "up" },
    ],
    scope: ["Shopify Plus Build", "Custom Live Preview Tool", "Meta & Google Ads", "Conversion Rate Optimization"],
    techStack: ["Shopify Plus", "React", "Canvas API", "Google Shopping", "Meta Ads Manager"],
    challenge:
      "Customers abandoned customization mid-way due to clunky file uploads and a multi-step checkout. High cost-per-click on generic search ads was eroding merchant margins.",
    solution:
      "Constructed a frictionless 1-click live preview tool enabling shoppers to see customized prints in real-time, backed by high-intent Google Shopping product feeds and dynamic retargeting for cart abandoners.",
    keyDeliverables: [
      "Custom responsive Shopify storefront with sub-second page transitions",
      "Interactive 2D/3D print customizer supporting high-res raster & vector uploads",
      "Integrated payment gateway with UPI fast-checkout and abandon recovery funnels",
      "Data-backed performance ad creative matrix across Instagram and Google Search",
    ],
    testimonial: {
      quote:
        "Our previous agency was burning budget on vanity clicks. HBS stepped in, fixed our funnel friction, and scaled our monthly revenue to record levels.",
      author: "Amit V.",
      role: "Co-Founder, PrintHutt",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "oncohealthmart",
    name: "OncoHealthMart",
    client: "Onco Healthcare Group",
    category: "ecommerce",
    categoryLabel: "E-Commerce & SEO",
    sector: "Specialty Healthcare & Pharmacy",
    year: "2025",
    location: "Pan-India",
    tagline: "Converting a Static Catalogue into India's Most Trusted Specialty Oncology Pharmacy",
    outcome: "Transformed an informational catalog site into a transacting medical portal with verified patient trust signals.",
    image: "/images/company/onco.png",
    ratio: "aspect-square",
    accent: "#e5231b",
    featured: true,
    metrics: [
      { value: "+168%", label: "Product Page Traffic", trend: "up" },
      { value: "4.8 ★", label: "Google Verified Rating", trend: "up" },
      { value: "2.9x", label: "Monthly Repeat Orders", trend: "up" },
    ],
    scope: ["Secure E-Commerce Rebuild", "E-Commerce SEO", "Prescription Upload Flow", "Local Map Pack Optimization"],
    techStack: ["Next.js", "Tailwind CSS", "Encrypted Document Vault", "Healthcare Schema", "Google Maps API"],
    challenge:
      "A sensitive healthcare category required strict prescription compliance, utmost user trust, and clear guidance for rare oncology treatments that traditional e-commerce templates failed to satisfy.",
    solution:
      "Designed an empathetic, clean medical portal with encrypted prescription uploads, verified pharmacist review badges, real-time WhatsApp consultation, and extensive schema markup for certified pharmaceutical products.",
    keyDeliverables: [
      "HIPAA/patient-privacy compliant prescription ordering and verification workflow",
      "Structured data & schema integration for 1,200+ specialty medications",
      "Google Business Profile optimization across medical hubs in major metropolitan areas",
      "Streamlined WhatsApp live order desk handling over 350+ prescription requests daily",
    ],
    testimonial: {
      quote:
        "In oncology, trust is the only currency that matters. HBS designed a website where families feel supported, secure, and confident when purchasing critical medications.",
      author: "Dr. K. Sharma",
      role: "Chief Operating Officer, OncoHealthMart",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "dikshant",
    name: "Dikshant IAS Academy",
    client: "Dikshant Educational Trust",
    category: "seo",
    categoryLabel: "SEO & Growth",
    sector: "Education & EdTech",
    year: "2025",
    location: "Delhi / North India",
    tagline: "Omnichannel Admission Funnels Delivering 3.4x Student Enrollments at ₹390 CPL",
    outcome: "High-conversion course landing pages and automated counselling lead routing engineered for peak admission seasons.",
    image: "/images/company/dikshant.avif",
    ratio: "aspect-[4/5]",
    accent: "#b98a2f",
    featured: true,
    metrics: [
      { value: "3.4x", label: "Admission Enquiries", trend: "up" },
      { value: "₹390", label: "Cost Per Lead (Down 62%)", trend: "down" },
      { value: "+214%", label: "Organic Search Growth", trend: "up" },
    ],
    scope: ["Course Landing Page Architecture", "Admission Lead Funnel", "WhatsApp Automation", "Google & YouTube Ads"],
    techStack: ["React", "Next.js", "Google Ads Engine", "YouTube Video SEO", "WhatsApp Webhook API"],
    challenge:
      "Student registrations were heavily dependent on offline walk-ins at coaching hubs in Mukherjee Nagar & Karol Bagh, leaving the institute vulnerable to seasonal slumps and digital competitors.",
    solution:
      "Deployed high-converting syllabus breakdown landing pages, video-first testimonial showcases of UPSC rank holders, and an intelligent WhatsApp chatbot that qualifies prospective aspirants before counselor calls.",
    keyDeliverables: [
      "Interactive syllabus and exam preparation planner landing pages",
      "Automated lead qualification flow filtering serious aspirants 24/7",
      "Targeted Google Search campaigns winning top ad positions for key civil service terms",
      "Comprehensive performance analytics dashboard tracking cost-per-enrolment",
    ],
    testimonial: {
      quote:
        "The admission season was our most successful to date. HBS reduced our lead acquisition cost by over 60% while dramatically improving the quality of student inquiries.",
      author: "P. Singhania",
      role: "Director of Admissions, Dikshant IAS",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "becho-gadi",
    name: "Becho Gadi Marketplace",
    client: "Becho Gadi Auto Pvt. Ltd.",
    category: "apps",
    categoryLabel: "Web & Mobile App",
    sector: "Automotive Marketplace",
    year: "2025",
    location: "National Marketplace",
    tagline: "Instant Vehicle Valuation Engine Powering 45,000+ Verified Car Seller Submissions",
    outcome: "Built an intuitive 3-step appraisal engine that minimized drop-offs and scaled buyer-seller transactions.",
    image: "/images/company/becho-gadi.webp",
    ratio: "aspect-[4/3]",
    accent: "#10b981",
    featured: true,
    metrics: [
      { value: "45K+", label: "Valuation Submissions", trend: "up" },
      { value: "+320%", label: "Active Seller Listings", trend: "up" },
      { value: "-54%", label: "Form Drop-off Rate", trend: "down" },
    ],
    scope: ["Interactive Web Application", "Dynamic Pricing Engine", "WhatsApp Inspection Booking", "Dealer Portal"],
    techStack: ["Next.js", "Node.js", "Redis Cache", "PostgreSQL", "Cloudflare Workers"],
    challenge:
      "Lengthy, cumbersome vehicle condition questionnaires caused an 82% abandonment rate, choking the supply of verified pre-owned cars needed for participating dealerships.",
    solution:
      "Created a progressive 3-step valuation wizard utilizing license plate and make/model autocomplete, delivering instant algorithmic price estimates and offering 1-click home inspection bookings.",
    keyDeliverables: [
      "Ultra-fast valuation wizard optimized for mobile users on low-bandwidth networks",
      "Algorithmic valuation engine trained on regional used car market transactions",
      "Automated WhatsApp confirmation and live GPS inspection tracking",
      "Real-time dealership dashboard with instant auction bidding feeds",
    ],
    testimonial: {
      quote:
        "The valuation flow built by HBS gave us an unmatched edge. Car owners love how effortless it is to get a transparent price quote within seconds.",
      author: "Rohan M.",
      role: "VP of Operations, Becho Gadi",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "apto-solutions",
    name: "Apto SaaS Platform",
    client: "Apto Technologies",
    category: "web",
    categoryLabel: "Web & SaaS",
    sector: "B2B Enterprise Software",
    year: "2025",
    location: "India / North America",
    tagline: "Product-Led Growth Architecture Driving 12,500+ Active B2B SaaS Signups",
    outcome: "Scalable interactive product marketing platform with live sandbox demos and self-serve onboarding.",
    image: "/images/services/web-design.png",
    ratio: "aspect-[4/5]",
    accent: "#b8140e",
    featured: false,
    metrics: [
      { value: "12.5K+", label: "Product Trial Signups", trend: "up" },
      { value: "18.4%", label: "Trial-to-Paid Conversion", trend: "up" },
      { value: "5.2x", label: "Pipeline Velocity", trend: "up" },
    ],
    scope: ["Product Marketing Website", "Interactive Feature Sandbox", "Product Hunt Launch", "CRM Lead Routing"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe Billing", "HubSpot API"],
    challenge:
      "The SaaS product offered deep enterprise capabilities, but prospective customers were abandoning the site because static screenshots failed to explain the software's true power.",
    solution:
      "Built an interactive sandbox showcase allowing buyers to test-drive features directly inside the browser without entering a credit card, paired with clear pricing and comparison tables.",
    keyDeliverables: [
      "Interactive in-browser feature simulation module",
      "Multi-currency dynamic pricing table with monthly/annual switch",
      "SOC-2 compliance security trust center section",
      "Seamless bi-directional HubSpot CRM synchronization",
    ],
    testimonial: {
      quote:
        "Our trial signups doubled within two weeks of launch. The interactive demo explains our product better than any 30-minute sales pitch.",
      author: "Siddharth N.",
      role: "Chief Product Officer, Apto",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "grand-masala",
    name: "Grand Masala Hospitality",
    client: "Grand Masala Culinary Group",
    category: "branding",
    categoryLabel: "Branding & Web",
    sector: "Luxury Hospitality & Dining",
    year: "2024",
    location: "Auckland / Delhi",
    tagline: "Complete Visual Rebrand & Local Map Dominance Filling Tables Across 6 Venues",
    outcome: "Unified brand aesthetics and an intuitive online reservation system that skyrocketed weekend bookings.",
    image: "/images/services/creative-design.png",
    ratio: "aspect-[4/3]",
    accent: "#d97706",
    featured: false,
    metrics: [
      { value: "+280%", label: "Direct Table Bookings", trend: "up" },
      { value: "#1 Rank", label: "Google Maps Local 3-Pack", trend: "up" },
      { value: "4.9 ★", label: "Across 3,200+ Reviews", trend: "up" },
    ],
    scope: ["Brand Identity System", "Custom Restaurant Website", "Local SEO & GMB", "3D Menu Showcase"],
    techStack: ["Next.js", "OpenTable / Resy API", "Google Business Profile API", "WebGL"],
    challenge:
      "Aggressive physical expansion to 6 locations caused brand fragmentation and high commission costs from third-party delivery/booking apps.",
    solution:
      "Created an editorial-grade website with immersive food photography, instant table reservations, multi-venue private event booking, and automated review collection.",
    keyDeliverables: [
      "Comprehensive multi-venue restaurant portal with instant reservation engine",
      "Dynamic digital menus with allergen indicators and wine pairing recommendations",
      "Hyper-local Google Business Profile optimization across all 6 neighborhood branches",
      "Automated post-dining review reminder sequence generating steady 5-star ratings",
    ],
    testimonial: {
      quote:
        "Every single weekend our tables are fully committed. HBS created a digital presence that matches the elegance of our physical dining rooms.",
      author: "Vikram C.",
      role: "Executive Director, Grand Masala",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
  {
    id: "interra-decors",
    name: "Interra Decors Luxury Studio",
    client: "Interra Interior Architects",
    category: "branding",
    categoryLabel: "Branding & Creative",
    sector: "Architecture & Luxury Interiors",
    year: "2024",
    location: "Delhi NCR / Luxury Residences",
    tagline: "Magazine-Grade Editorial Portfolio That Won ₹15Cr+ in Turnkey Architecture Contracts",
    outcome: "Immersive architectural case studies highlighting bespoke spaces, bespoke materials, and private design bookings.",
    image: "/images/marketing-3d-showcase.png",
    ratio: "aspect-square",
    accent: "#10131a",
    featured: false,
    metrics: [
      { value: "₹15Cr+", label: "Turnkey Project Value Won", trend: "up" },
      { value: "4.2m", label: "Average Time On Site", trend: "up" },
      { value: "+190%", label: "High-Ticket Consultations", trend: "up" },
    ],
    scope: ["Editorial UI/UX Design", "Custom Portfolio System", "High-Net-Worth Lead Funnel", "Print & Digital Lookbook"],
    techStack: ["Next.js", "Tailwind CSS", "GSAP Parallax", "CDN Image Optimization", "Private Booking Calendar"],
    challenge:
      "A standard agency website couldn't convey the tactile luxury and multimillion-rupee scale of their bespoke penthouse and estate renovations.",
    solution:
      "Architected a minimalist editorial portfolio with generous white space, curated project photo galleries, material detail closeups, and an exclusive consultation application form.",
    keyDeliverables: [
      "Full-bleed high-definition architectural project showcases with fluid transitions",
      "Interactive material palette and floorplan reveal modules",
      "Private invitation-only consultation booking system with project budget qualifier",
      "Digital brochure generator for VIP prospective homeowners",
    ],
    testimonial: {
      quote:
        "Clients now walk into our design presentations already convinced of our caliber. The portfolio website establishes our authority before we even speak.",
      author: "Ananya M.",
      role: "Principal Architect, Interra Decors",
    },
    liveUrl: "https://hoverbusinessservices.com/contact-us",
  },
];

export const IMPACT_HIGHLIGHTS = [
  {
    metric: "₹50Cr+",
    label: "Client Revenue Generated",
    sub: "Directly attributable through search, custom web platforms and performance funnels",
    icon: "trending-up",
  },
  {
    metric: "1,500+",
    label: "Digital Projects Shipped",
    sub: "Websites, enterprise platforms, mobile applications and digital transformations",
    icon: "rocket",
  },
  {
    metric: "4.2x",
    label: "Average Client ROAS",
    sub: "Across Google Ads, Meta campaigns and conversion rate optimization engagements",
    icon: "target",
  },
  {
    metric: "98.4%",
    label: "Client Retention Rate",
    sub: "Long-term partnerships backed by transparent reporting and continuous growth",
    icon: "award",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Architectural Blueprint",
    tag: "Strategy First",
    body: "We audit your existing digital footprint, study competitor vulnerabilities, and define quantifiable commercial milestones before writing a single line of code.",
    bullets: ["Competitor & Keyword Intelligence", "Conversion Funnel Mapping", "Full Technical Architecture Scope"],
  },
  {
    number: "02",
    title: "High-Fidelity UI/UX & Prototyping",
    tag: "Design For Conversion",
    body: "Every interface is tailored from the ground up for maximum brand prestige, intuitive navigation, and high mobile conversion rates. No generic cookie-cutter templates.",
    bullets: ["Design System & Typography Hierarchy", "Interactive Figma Click-Throughs", "Mobile-First Usability Testing"],
  },
  {
    number: "03",
    title: "Clean-Code Modern Engineering",
    tag: "Performance Hardened",
    body: "Our in-house engineers build lightning-fast web and mobile solutions utilizing Next.js, React, secure APIs, and enterprise caching to guarantee sub-second load times.",
    bullets: ["Next.js & Server Components", "Sub-second Core Web Vitals (99+)", "Strict Security & Data Encryption"],
  },
  {
    number: "04",
    title: "Launch, Growth & Revenue Scale",
    tag: "Measurable Impact",
    body: "Launch is only day one. We turn on analytics tracking, deploy high-intent search optimization, and manage paid acquisition channels to compound business results.",
    bullets: ["Real-Time Conversion Tracking", "Dominant Search & Local Map SEO", "Iterative A/B Testing & Funnel Scale"],
  },
];

