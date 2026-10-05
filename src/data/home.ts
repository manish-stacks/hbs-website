export const company = {
  name: "Hover Business Services LLP",
  phone: "+91-9311673565",
  phoneAlt: "+91-8800239793",
  phoneNz: "+64-211290774",
  whatsapp: "https://wa.me/919899691389",
  email: "info@hovermedia.in",
  support: "support@hovermedia.in",
  addressIn: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi-110034",
  crm: "https://web-crm.hoverbusinessservices.com/login",
  pay: "https://razorpay.me/@hoverbusinessservices",
  social: {
    facebook: "https://www.facebook.com/hoverbusinessservicesllp/",
    instagram: "https://www.instagram.com/hoverbusinessservicesllp/",
    linkedin: "https://www.linkedin.com/in/hover-business-services-40264524a/",
    twitter: "https://twitter.com/media_hover",
    youtube: "https://www.youtube.com/@HoverBusinessServicesLLP",
  },
};

export type NavItem = {
  label: string;
  href: string;
  groups?: { heading: string; links: [string, string][] }[];
};

export const nav: NavItem[] = [
  {
    label: "Digital Marketing",
    href: "/digital-marketing",
    groups: [
      {
        heading: "SEO Services",
        links: [
          ["SEO Service", "/seo-service"],
          ["Local SEO Service", "/local-seo-service"],
          ["Google Map SEO", "/google-map-seo"],
          ["E-commerce SEO", "/e-commerce-seo"],
          ["ORM Service", "/orm-service"],
        ],
      },
      {
        heading: "Paid & Social",
        links: [
          ["PPC Service", "/ppc-service"],
          ["Social Media Marketing", "/social-media-marketing"],
          ["Facebook Promotion", "/facebook-promotion"],
          ["Online Marketing", "/online-marketing"],
        ],
      },
      {
        heading: "Email Marketing",
        links: [
          ["Email Marketing Software", "/email-marketing-software"],
          ["Email Marketing Automation", "/email-marketing-automation"],
          ["Email Marketing Services", "/email-marketing-services"],
        ],
      },
      {
        heading: "WhatsApp Marketing",
        links: [
          ["WhatsApp Marketing Software", "/whatsapp-marketing-software"],
          ["WhatsApp Marketing Automation", "/whatsapp-marketing-automation"],
          ["WhatsApp Marketing Services", "/whatsapp-marketing-services"],
        ],
      },{
        heading: "Lead Generation",
        links: [
          ["Lead Generation Services", "/lead-generation-services"],
          ["Lead Generation Software", "/lead-generation-software"],
          ["Lead Generation Automation", "/lead-generation-automation"],
        ],
      }
    ],
  },
  {
    label: "Web & App",
    href: "/website-development",
    groups: [
      {
        heading: "Web Design & Development",
        links: [
          ["Custom Web Design", "/custom-web-design"],
          ["Website Development", "/website-development"],
          ["WordPress Development", "/wordpress-development"],
          ["E-commerce Web Designing", "/e-commerce-web-designing"],
          ["Website Maintenance", "/website-maintenance"],
        ],
      },
      {
        heading: "Apps & Software",
        links: [
          ["Software & App Development", "/software-app-development"],
          ["Android App Development", "/software-app-development"],
          ["iOS App Development", "/software-app-development"],
          ["React Native Apps", "/software-app-development"],
        ],
      },
      {
        heading: "Digital Marketing",
        links: [
          ["Digital Marketing Services", "/digital-marketing-services"],
          ["Digital Marketing Automation", "/digital-marketing-automation"],
          ["Digital Marketing Software", "/digital-marketing-software"],
        ],
      },
      {
        heading: "Lead Generation",
        links: [
          ["Lead Generation Services", "/lead-generation-services"],
          ["Lead Generation Software", "/lead-generation-software"],
          ["Lead Generation Automation", "/lead-generation-automation"],
        ],
      },
      {
        heading: "Email Marketing",
        links: [
          ["Email Marketing Software", "/email-marketing-software"],
          ["Email Marketing Automation", "/email-marketing-automation"],
          ["Email Marketing Services", "/email-marketing-services"],
        ],
      }
    ],
  },
  {
    label: "Creative",
    href: "/graphic-design",
    groups: [
      {
        heading: "Creative Communication",
        links: [
          ["Graphic Design", "/graphic-design"],
          ["Logo Design", "/logo-design"],
          ["Brochure Design", "/brochure-design"],
          ["Newsletter Design", "/newsletter-design"],
          ["Product Packaging Design", "/product-packaging-design"],
        ],
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export const heroMetrics = [
  { label: "Boosting revenue", value: "2X–6X", note: "Proven growth results" },
  { label: "Improved leads", value: "3X–8X", note: "Quality lead generation" },
  { label: "Social engagement", value: "4X–8X", note: "Enhanced audience reach" },
  { label: "Brand exposure", value: "100–1000%", note: "Massive visibility boost" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years in business" },
  { value: 80, suffix: "+", label: "Team members" },
  { value: 1500, suffix: "+", label: "Happy clients" },
  { value: 24, suffix: "/7", label: "Support available" },
];

export const clients = [
  "/images/company/becho-gadi.webp","/images/company/dikshant.avif","/images/company/efos.jpg", "/images/company/onco.png", "/images/company/printhutt.avif",
  "/images/company/becho-gadi.webp","/images/company/dikshant.avif","/images/company/efos.jpg", "/images/company/onco.png", "/images/company/printhutt.avif",
];

export type Service = {
  n: string;
  title: string;
  body: string;
  badge?: string;
  tags: string[];
  href: string;
  image: string;
};

export const services: Service[] = [
  {
    n: "01",
    title: "SEO & Local Search",
    body: "Rank higher on Google Search and Maps, and bring buyers closer to your business with technical, local and e-commerce SEO.",
    badge: "Most requested",
    tags: ["SEO Service", "Local SEO", "Google Map SEO", "E-commerce SEO", "ORM"],
    href: "/seo-service",
    image: "/images/services/seo-new.png",
  },
  {
    n: "02",
    title: "Performance & Paid Media",
    body: "Google and Meta campaigns engineered for return on ad spend and real-time, high-intent leads — not vanity clicks.",
    badge: "High ROI",
    tags: ["PPC Service", "Google Ads", "Lead Generation", "Shopping Ads"],
    href: "/ppc-service",
    image: "/images/services/performance-marketing.png",
  },
  {
    n: "03",
    title: "Web Development",
    body: "We turn ideas into fast, functional, high-performing websites — UI/UX, React, PHP and WordPress builds that convert.",
    tags: ["UI/UX", "React", "PHP", "WordPress"],
    href: "/website-development",
    image: "/images/services/web-design.png",
  },
  {
    n: "04",
    title: "Software & App Development",
    body: "Cutting-edge product engineering for iOS, Android and cross-platform, designed to scale as your business scales.",
    tags: ["iOS", "Android", "React Native"],
    href: "/software-app-development",
    image: "/images/services/mobile-app-development.png",
  },
  {
    n: "05",
    title: "eCommerce Development",
    body: "Custom stores and online catalogues built by developers, designers and strategists who understand retail margins.",
    tags: ["Shopify", "Magento", "WooCommerce"],
    href: "/e-commerce-web-designing",
    image: "/images/services/ecommerce.png",
  },
  {
    n: "06",
    title: "Graphic & Branding",
    body: "Designers and brand strategists who translate your vision into identity — logo, packaging, banners and 3D mockups.",
    tags: ["Logo", "Brochure", "Packaging", "3D Mockup"],
    href: "/graphic-design",
    image: "/images/services/creative-design.png",
  },
];

export const problems = [
  {
    n: "01",
    title: "Not getting results from your marketing",
    body: "You are running campaigns and boosting ads, but traffic is not turning into leads or sales. We fix the gaps that stop marketing from performing.",
    tag: "Better ROI",
  },
  {
    n: "02",
    title: "Getting traffic, but not leads",
    body: "Visitors arrive and leave. We optimise the funnel — pages, offers and follow-up — so interest turns into qualified enquiries.",
    tag: "3x conversions",
  },
  {
    n: "03",
    title: "No clear digital strategy",
    body: "SEO, social and ads without a plan waste budget. We build a data-driven, goal-first roadmap for long-term growth.",
    tag: "Strategic clarity",
  },
  {
    n: "04",
    title: "Weak local & map visibility",
    body: "If your business does not show up in local search and Google Maps, nearby customers never find you. We make sure they do.",
    tag: "Local first",
  },
];

export const results = [
  {
    industry: "Education",
    client: "Coaching institute · Delhi NCR",
    challenge:
      "Enquiries depended entirely on walk-ins and referrals, with almost no organic visibility for course keywords.",
    solution:
      "Course-intent SEO, location landing pages and admission-season ad funnels with WhatsApp lead routing.",
    metrics: [
      ["+214%", "Organic traffic"],
      ["₹390", "Cost per lead"],
      ["3.4x", "Admission enquiries"],
    ],
  },
  {
    industry: "Healthcare",
    client: "Oncology pharmacy · India",
    challenge:
      "A catalogue site with no transactions, weak product visibility and low trust signals in a sensitive category.",
    solution:
      "E-commerce SEO, structured product data, Maps and review strategy plus a rebuilt checkout experience.",
    metrics: [
      ["4.8★", "Review rating"],
      ["+168%", "Product page traffic"],
      ["2.9x", "Monthly orders"],
    ],
  },
  {
    industry: "Travel",
    client: "Tour operator · North India",
    challenge:
      "Heavy dependence on OTA listings and high commissions, with seasonal swings and unpredictable revenue.",
    solution:
      "Destination-based content, high-conversion package pages and retargeting across Google and Meta.",
    metrics: [
      ["+189%", "Direct enquiries"],
      ["4.1x", "Paid ROAS"],
      ["-42%", "OTA dependency"],
    ],
  },
];

export const industries = [
  "Real Estate", "Tour & Travels", "Education", "Transport", "Event",
  "eCommerce", "Gaming", "Healthcare", "Finance", "Restaurant",
  "On-Demand", "Grocery", "Manufacturing", "Professional Services", "D2C Brands",
];

export const whyUs = [
  {
    title: "Reliable service",
    body: "Open, honest communication — you always know what is happening on your account and why.",
  },
  {
    title: "Trusted by people like you",
    body: "1500+ businesses across India and New Zealand have chosen HBS to grow their revenue.",
  },
  {
    title: "Complete technical depth",
    body: "SEO, ads, development and design handled in-house by 80+ specialists, not outsourced.",
  },
  {
    title: "Effective & continuous",
    body: "Momentum matters. We keep optimising long after the launch week is over.",
  },
];


export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Director, Education Group",
    text: "Our admission enquiries went up within the first two months. The team is responsive, and the reporting is clear enough that we always know where the money is going.",
  },
  {
    name: "Anita Verma",
    role: "Founder, D2C Brand",
    text: "They rebuilt our store and took over performance marketing. The site is fast, the creatives are good, and our cost per order dropped substantially.",
  },
  {
    name: "Michael Turner",
    role: "Owner, Auckland Services",
    text: "Working across time zones was never an issue. Local SEO put us in the map pack for our main service area, and the calls have been steady since.",
  },
];

export const faqs = [
  {
    q: "How do I get started with Hover Business Services?",
    a: "Share your website and goals through the enquiry form or call us directly. We run a free audit of your current visibility, funnel and competitors, then come back with a scope, timeline and expected outcomes.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Technical and on-page fixes usually show movement within 4–8 weeks. Competitive keywords and authority building typically take 4–6 months to produce steady, compounding traffic.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. A large part of our client base is small and mid-sized businesses. We scope packages to the budget available and prioritise the channels most likely to produce leads first.",
  },
  {
    q: "Can you handle both the website and the marketing?",
    a: "That is our most common engagement. The same team builds the site and runs the campaigns, so there is no finger-pointing between developer and marketer when numbers need fixing.",
  },
  {
    q: "What does digital marketing cost?",
    a: "It depends on scope, competition and city. We publish package tiers for SEO, PPC and social, and we will tell you plainly if a budget is not enough to win a particular keyword set.",
  },
  {
    q: "Do you serve clients outside India?",
    a: "Yes. Alongside our Delhi head office we operate from Auckland, New Zealand, and work with clients across the US, UK and Gulf region.",
  },
];

/* ------------------------------------------------------------------ *
 * Homepage art — all local SVGs in /public/images/art, so nothing is
 * hot-linked and there is no third-party licence attached.
 * To use the original template PNG/JPGs instead, run:
 *     bash scripts/fetch-art.sh
 * then point these paths at /images/art/<downloaded file>.
 * ------------------------------------------------------------------ */

export const art = {
  heroBg: "/images/art/hero-bg.svg",
  stepIcon: "/images/art/icon-step.svg",
  ctaIcon: "/images/art/icon-cta.svg",
  contactBg: "/images/art/contact-bg.svg",
  officeIcons: [
    "/images/art/icon-office-1.svg",
    "/images/art/icon-office-2.svg",
    "/images/art/icon-office-3.svg",
    "/images/art/icon-office-4.svg",
  ],
  footerIcon: "/images/art/icon-cta.svg",
};

export const googleReview = {
  rating: "4.9/5",
  count: "2500+ reviews",
};

/* TODO: replace the two placeholder branches with your real addresses. */
export const offices = [
  {
    city: "Delhi — Head Office",
    country: "India",
    address: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi-110034",
    phone: "+91-9311673565",
  },
  {
    city: "Delhi — Registered Office",
    country: "India",
    address: "House No. 32, 2nd Floor, Aram Park, Shahdara, Delhi-110051",
    phone: "+91-8800239793",
  },
  {
    city: "Noida",
    country: "India",
    address: "Update this branch address in src/data/home.ts",
    phone: "+91-9899691389",
  },
  {
    city: "Auckland",
    country: "New Zealand",
    address: "529 Great South Road, Manukau City Centre, Auckland 2025",
    phone: "+64-211290774",
  },
];

export const posts = [
  {
    title: "Web development essentials every business should get right",
    excerpt:
      "Speed, structure and clean tracking decide whether a site earns traffic or just holds it. Here is the checklist we run on every build.",
    author: "HBS Editorial",
    tag: "Web Development",
    date: { d: "03", m: "Jun" },
    href: "/blog",
    image: "/images/art/post-1.svg",
  },
  {
    title: "How AI is changing search — and what to do about it now",
    excerpt:
      "AI answers are pushing classic blue links down the page. The brands winning are the ones structuring content for both crawlers and models.",
    author: "HBS Editorial",
    tag: "AI & Search",
    date: { d: "02", m: "Jun" },
    href: "/blog",
    image: "/images/art/post-2.svg",
  },
  {
    title: "Local SEO: getting into the map pack in a competitive city",
    excerpt:
      "Reviews, proximity and category relevance carry most of the weight. Here is how we structure a GMB profile that keeps ranking.",
    author: "HBS Editorial",
    tag: "Local SEO",
    date: { d: "01", m: "Jun" },
    href: "/blog",
    image: "/images/art/post-3.svg",
  },
];
