export type PageFaq = { q: string; a: string };

export type InnerPage = {
  slug: string;
  kind: "service" | "hub" | "legal";
  title: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  /** service/hub only */
  points?: { title: string; body: string }[];
  deliverables?: string[];
  faqs?: PageFaq[];
  /** hub only */
  children?: { title: string; href: string; body: string }[];
  /** legal only */
  sections?: { heading: string; body: string }[];
};

const seoFaqs: PageFaq[] = [
  {
    q: "How long before I see movement?",
    a: "Technical and on-page fixes usually show in 4–8 weeks. Competitive terms and authority building take 4–6 months to compound.",
  },
  {
    q: "Do I get to see what you actually did?",
    a: "Yes. Every month you get a task log, ranking movement, traffic and lead numbers in plain language — not a 40-page PDF nobody reads.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "We work on rolling monthly engagements after an initial ramp-up period. If the numbers do not move, you should be free to leave.",
  },
];

const buildFaqs: PageFaq[] = [
  {
    q: "Who owns the code and the accounts?",
    a: "You do. Repos, hosting, domains and ad accounts stay in your name from day one.",
  },
  {
    q: "How long does a typical build take?",
    a: "A marketing site is 3–6 weeks, an e-commerce store 6–10 weeks, and a custom app is scoped after discovery.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — maintenance, monitoring and iteration plans are available monthly, and support is reachable 24/7.",
  },
];

const service = (
  slug: string,
  title: string,
  tagline: string,
  intro: string,
  points: { title: string; body: string }[],
  deliverables: string[],
  faqs: PageFaq[],
  eyebrow = "Service"
): InnerPage => ({ slug, kind: "service", title, eyebrow, tagline, intro, points, deliverables, faqs });

export const innerPages: InnerPage[] = [
  /* ------------------------------ HUBS ------------------------------ */
  {
    slug: "digital-marketing",
    kind: "hub",
    eyebrow: "Digital marketing",
    title: "Digital marketing that is measured on revenue",
    tagline: "Search, paid media and social working as one system.",
    intro:
      "We run the whole demand side of your business — organic visibility, paid acquisition and social presence — with one team, one plan and one set of numbers everyone is judged on.",
    children: [
      { title: "SEO Service", href: "/seo-service", body: "Technical, content and authority work that compounds month over month." },
      { title: "Local SEO Service", href: "/local-seo-service", body: "Own the searches happening within a few kilometres of your business." },
      { title: "Google Map SEO", href: "/google-map-seo", body: "Get into the map pack and stay there with a tuned Business Profile." },
      { title: "E-commerce SEO", href: "/e-commerce-seo", body: "Category and product pages built to rank and to convert." },
      { title: "ORM Service", href: "/orm-service", body: "Control what shows up when someone searches your brand name." },
      { title: "PPC Service", href: "/ppc-service", body: "Google and Meta campaigns engineered for return on ad spend." },
      { title: "Social Media Marketing", href: "/social-media-marketing", body: "Content, community and paid social that actually sells." },
      { title: "Facebook Promotion", href: "/facebook-promotion", body: "Meta funnels from first impression to retargeted purchase." },
      { title: "Online Marketing", href: "/online-marketing", body: "A full-funnel plan when you are not sure where to start." },
    ],
    faqs: seoFaqs,
  },
  {
    slug: "website-development",
    kind: "hub",
    eyebrow: "Web & app",
    title: "Websites and apps built to perform",
    tagline: "Fast, accessible, search-ready builds — not templates.",
    intro:
      "Design, engineering and SEO sit in the same room, so what we ship loads fast, ranks well and is easy for your team to run after handover.",
    children: [
      { title: "Custom Web Design", href: "/custom-web-design", body: "Interfaces designed around your funnel, not a stock theme." },
      { title: "Website Development", href: "/website-development", body: "Next.js, PHP or WordPress builds with clean, maintainable code." },
      { title: "WordPress Development", href: "/wordpress-development", body: "Fast, secure WordPress your marketing team can actually edit." },
      { title: "E-commerce Web Designing", href: "/e-commerce-web-designing", body: "Shopify, WooCommerce and Magento stores built for margin." },
      { title: "Website Maintenance", href: "/website-maintenance", body: "Updates, backups, uptime monitoring and monthly improvements." },
      { title: "Software & App Development", href: "/software-app-development", body: "iOS, Android and cross-platform products that scale." },
    ],
    faqs: buildFaqs,
  },
  {
    slug: "graphic-design",
    kind: "hub",
    eyebrow: "Creative",
    title: "Brand and creative that gets remembered",
    tagline: "Identity, packaging and campaign assets under one roof.",
    intro:
      "Designers and brand strategists who translate positioning into something people recognise on a shelf, a feed and a search result.",
    children: [
      { title: "Logo Design", href: "/logo-design", body: "Marks that work at 16 pixels and on a building facade." },
      { title: "Brochure Design", href: "/brochure-design", body: "Sales collateral that carries the pitch when you are not there." },
      { title: "Newsletter Design", href: "/newsletter-design", body: "Email templates built to render everywhere and get clicked." },
      { title: "Product Packaging Design", href: "/product-packaging-design", body: "Packaging designed for the shelf and for the unboxing video." },
      { title: "Graphic Design", href: "/graphic-design", body: "Day-to-day creative for campaigns, social and print." },
    ],
    faqs: buildFaqs,
  },

  /* ---------------------------- SERVICES ---------------------------- */
  service(
    "seo-service",
    "SEO Service",
    "Rankings that turn into pipeline, not just screenshots.",
    "We fix what search engines struggle with, publish what your buyers search for, and build the authority that keeps those pages in position once they get there.",
    [
      { title: "Technical foundation", body: "Crawlability, Core Web Vitals, schema, indexation and site architecture." },
      { title: "Content that ranks", body: "Topic clusters mapped to real search demand and buying intent." },
      { title: "Authority building", body: "Digital PR and clean, relevant links — no networks, no shortcuts." },
      { title: "Conversion focus", body: "Traffic is judged on enquiries, not sessions." },
    ],
    ["Full technical audit", "Keyword & competitor map", "On-page optimisation", "Content calendar", "Link acquisition", "Monthly reporting"],
    seoFaqs
  ),
  service(
    "local-seo-service",
    "Local SEO Service",
    "Be the obvious choice within a few kilometres.",
    "Local buyers search, compare and call within minutes. We make sure your business shows up in that window with the right information, reviews and proof.",
    [
      { title: "Profile optimisation", body: "Categories, services, attributes and photos tuned for your area." },
      { title: "Citation clean-up", body: "Consistent name, address and phone across every directory that counts." },
      { title: "Review engine", body: "A repeatable way to ask for, monitor and respond to reviews." },
      { title: "Location pages", body: "Genuinely useful pages per area — not spun duplicates." },
    ],
    ["GMB optimisation", "Citation audit & fixes", "Review strategy", "Local landing pages", "Map pack tracking", "Call & direction reporting"],
    seoFaqs
  ),
  service(
    "google-map-seo",
    "Google Map SEO",
    "Get into the map pack and hold the position.",
    "Proximity, relevance and prominence decide the three businesses Google shows. We work all three, then keep the profile active so it does not slip.",
    [
      { title: "Category strategy", body: "Primary and secondary categories chosen against what actually ranks." },
      { title: "Posts & products", body: "A live profile signals an active business to both users and Google." },
      { title: "Photo & Q&A", body: "Geo-tagged media and seeded questions that answer buyer objections." },
      { title: "Spam fighting", body: "Reporting fake listings and keyword-stuffed competitors in your area." },
    ],
    ["Profile rebuild", "Weekly GMB posts", "Photo programme", "Q&A seeding", "Grid rank tracking", "Competitor monitoring"],
    seoFaqs
  ),
  service(
    "e-commerce-seo",
    "E-commerce SEO",
    "Category and product pages that earn their traffic.",
    "Most stores lose search to thin product copy, broken faceted navigation and missing structured data. We fix the platform-level issues first, then scale content.",
    [
      { title: "Faceted navigation", body: "Control what gets crawled so budget goes to pages that sell." },
      { title: "Product schema", body: "Price, stock and review markup so listings stand out in results." },
      { title: "Category content", body: "Buying-guide depth on the pages that carry commercial intent." },
      { title: "Merchandising", body: "Search data feeding what you stock and how you group it." },
    ],
    ["Platform audit", "Taxonomy plan", "Product data optimisation", "Content templates", "Internal linking", "Revenue attribution"],
    seoFaqs
  ),
  service(
    "orm-service",
    "ORM Service",
    "Own page one of your own brand name.",
    "When someone searches your company before buying, what they find decides the sale. We build and defend that first page.",
    [
      { title: "Sentiment audit", body: "Everything ranking for your brand, scored and prioritised." },
      { title: "Asset building", body: "Owned properties and profiles that legitimately outrank noise." },
      { title: "Review recovery", body: "Process to earn genuine positive reviews at volume." },
      { title: "Monitoring", body: "Alerts so a new negative result never surprises you." },
    ],
    ["Brand SERP audit", "Suppression strategy", "Profile creation", "Review programme", "Crisis playbook", "Monthly monitoring"],
    seoFaqs
  ),
  service(
    "ppc-service",
    "PPC Service",
    "Ad spend judged on cost per acquisition.",
    "We build campaigns around your margin, not around impressions — then cut what does not pay and scale what does.",
    [
      { title: "Account structure", body: "Clean campaigns built for signal, not for a pretty dashboard." },
      { title: "Creative testing", body: "Systematic angle and hook testing across search, display and social." },
      { title: "Landing pages", body: "Pages built for the ad, not your homepage doing double duty." },
      { title: "Tracking that holds", body: "Server-side events and offline conversion import where it matters." },
    ],
    ["Account audit", "Campaign build", "Ad creative", "Landing pages", "Conversion tracking", "Weekly optimisation"],
    seoFaqs
  ),
  service(
    "social-media-marketing",
    "Social Media Marketing",
    "Content and community that leads to sales.",
    "A posting schedule is not a strategy. We build content formats around what your audience saves and shares, then put budget behind what performs.",
    [
      { title: "Content system", body: "Repeatable formats so output does not depend on inspiration." },
      { title: "Community", body: "Comments and DMs handled as a sales channel, not a chore." },
      { title: "Paid amplification", body: "Organic winners promoted to cold and warm audiences." },
      { title: "Creator collabs", body: "Influencer partnerships briefed and measured properly." },
    ],
    ["Channel strategy", "Monthly content calendar", "Design & video", "Community management", "Paid social", "Performance reporting"],
    seoFaqs
  ),
  service(
    "facebook-promotion",
    "Facebook Promotion",
    "Meta funnels from first scroll to repeat purchase.",
    "Meta still delivers the cheapest qualified attention in most categories — provided the creative, audience and offer are matched properly.",
    [
      { title: "Offer design", body: "The hook carries more weight than any targeting setting." },
      { title: "Creative volume", body: "Enough variations for the algorithm to actually find a winner." },
      { title: "Retargeting", body: "Sequenced follow-up for viewers, visitors and cart abandoners." },
      { title: "Pixel & CAPI", body: "Clean event data so optimisation has something to learn from." },
    ],
    ["Account setup", "Audience architecture", "Creative production", "Campaign management", "CAPI implementation", "ROAS reporting"],
    seoFaqs
  ),
  service(
    "online-marketing",
    "Online Marketing",
    "A full-funnel plan when you are not sure where to start.",
    "We audit where demand already exists for your category, pick the two or three channels most likely to produce leads first, and build from there.",
    [
      { title: "Demand mapping", body: "Where your buyers already search, scroll and compare." },
      { title: "Channel selection", body: "Two channels done well beat six done half-heartedly." },
      { title: "Funnel build", body: "Pages, offers and follow-up designed as one journey." },
      { title: "Measurement", body: "One dashboard the whole team trusts." },
    ],
    ["Market & competitor research", "Channel plan", "Budget allocation", "Funnel build", "Tracking setup", "Quarterly strategy review"],
    seoFaqs
  ),
  service(
    "custom-web-design",
    "Custom Web Design",
    "Designed around your funnel, not a stock theme.",
    "We design in the browser against real content and real conversion goals, so what you approve is what actually ships.",
    [
      { title: "Research first", body: "Competitor teardown, user journeys and the objections to answer." },
      { title: "Design system", body: "Tokens and components so the site stays consistent as it grows." },
      { title: "Accessibility", body: "Contrast, focus states and semantics handled from the start." },
      { title: "Handover", body: "Figma files, components and documentation you keep." },
    ],
    ["Discovery workshop", "Wireframes", "Visual design", "Design system", "Prototype", "Developer handover"],
    buildFaqs,
    "Web design"
  ),
  service(
    "wordpress-development",
    "WordPress Development",
    "Fast, secure WordPress your team can actually edit.",
    "Most WordPress sites are slow because of what was bolted on, not because of WordPress. We build lean, with a page builder your marketers can use safely.",
    [
      { title: "Performance", body: "Caching, image pipeline and minimal plugin footprint." },
      { title: "Editor experience", body: "Reusable blocks so content updates do not break layouts." },
      { title: "Security", body: "Hardening, backups, updates and uptime monitoring." },
      { title: "SEO ready", body: "Clean markup, schema and redirects handled at launch." },
    ],
    ["Theme development", "Block library", "Migration", "Speed optimisation", "Security hardening", "Training session"],
    buildFaqs,
    "Web development"
  ),
  service(
    "e-commerce-web-designing",
    "E-commerce Web Designing",
    "Stores built by people who think about margin.",
    "Shopify, WooCommerce or Magento — we build the merchandising, checkout and post-purchase flow that decides whether a store is profitable.",
    [
      { title: "Conversion design", body: "PDP, cart and checkout optimised against real drop-off data." },
      { title: "Catalogue structure", body: "Collections and filters that help people find the thing." },
      { title: "Integrations", body: "Payments, logistics, ERP and marketing tools wired properly." },
      { title: "Retention", body: "Email, WhatsApp and review flows set up from day one." },
    ],
    ["Platform selection", "Store build", "Theme customisation", "Payment & shipping setup", "Product migration", "Launch & training"],
    buildFaqs,
    "E-commerce"
  ),
  service(
    "website-maintenance",
    "Website Maintenance",
    "Someone responsible when something breaks.",
    "Monthly care so your site stays fast, safe and current — plus a running list of small improvements instead of a redesign every three years.",
    [
      { title: "Monitoring", body: "Uptime, speed and error alerts before customers notice." },
      { title: "Updates", body: "Core, plugin and dependency updates tested on staging first." },
      { title: "Backups", body: "Automated, off-site and actually restore-tested." },
      { title: "Improvements", body: "A monthly block of hours for changes you want made." },
    ],
    ["24/7 uptime monitoring", "Weekly backups", "Security patching", "Speed checks", "Content updates", "Monthly report"],
    buildFaqs,
    "Support"
  ),
  service(
    "software-app-development",
    "Software & App Development",
    "Products engineered to scale with the business.",
    "From internal tools to customer-facing apps — React Native, Next.js and Node services, built with the operational side thought through.",
    [
      { title: "Discovery & scoping", body: "A written spec and estimate before anyone opens an editor." },
      { title: "Cross-platform", body: "One React Native codebase for iOS and Android where it fits." },
      { title: "API-first", body: "Clean backends so future integrations are not a rewrite." },
      { title: "Release support", body: "Store submissions, crash monitoring and iteration." },
    ],
    ["Product discovery", "UI/UX design", "App development", "Backend & APIs", "QA & testing", "Store launch & support"],
    buildFaqs,
    "Product engineering"
  ),
  service(
    "logo-design",
    "Logo Design",
    "A mark that works everywhere it has to live.",
    "Concepts grounded in your positioning, tested at favicon size and on a hoarding before anyone calls it final.",
    [
      { title: "Positioning first", body: "We agree what the brand should signal before sketching." },
      { title: "Multiple routes", body: "Distinct directions, not three versions of the same idea." },
      { title: "Full lockups", body: "Horizontal, stacked, icon-only and monochrome variants." },
      { title: "Usage guide", body: "Clear space, minimum sizes, colour values and misuse examples." },
    ],
    ["Brand discovery", "3 concept routes", "Refinement rounds", "Logo suite", "Colour & type system", "Brand guidelines PDF"],
    buildFaqs,
    "Branding"
  ),
  service(
    "brochure-design",
    "Brochure Design",
    "Collateral that carries the pitch for you.",
    "Company profiles, product catalogues and sales decks structured around how buyers actually read — skim first, detail second.",
    [
      { title: "Narrative structure", body: "A story arc, not a list of features." },
      { title: "Print-ready", body: "Bleed, colour profiles and prepress handled correctly." },
      { title: "Digital versions", body: "Interactive PDFs sized for email and WhatsApp." },
      { title: "Editable files", body: "Source files handed over so you can update prices yourself." },
    ],
    ["Content structuring", "Layout design", "Photography direction", "Print-ready artwork", "Digital PDF", "Source files"],
    buildFaqs,
    "Print & collateral"
  ),
  service(
    "newsletter-design",
    "Newsletter Design",
    "Emails that render everywhere and get clicked.",
    "Templates built and tested across clients, with a structure your team can refill every week without breaking anything.",
    [
      { title: "Bulletproof HTML", body: "Tested across Outlook, Gmail, Apple Mail and mobile." },
      { title: "Modular blocks", body: "Drop-in sections so new sends take minutes." },
      { title: "Deliverability", body: "SPF, DKIM and DMARC checked before the first campaign." },
      { title: "Performance", body: "Subject line and layout testing against open and click data." },
    ],
    ["Template design", "HTML build", "ESP setup", "Automation flows", "A/B testing", "Reporting"],
    buildFaqs,
    "Email"
  ),
  service(
    "product-packaging-design",
    "Product Packaging Design",
    "Designed for the shelf and the unboxing video.",
    "Packaging that reads in half a second at retail distance, survives print reality and photographs well for e-commerce listings.",
    [
      { title: "Shelf testing", body: "Designs judged at real distance against real competitors." },
      { title: "Compliance", body: "Statutory declarations, barcodes and legal marks handled." },
      { title: "Dieline accuracy", body: "Structural files built to your converter's specification." },
      { title: "Content-ready", body: "Renders and mockups for listings and campaigns." },
    ],
    ["Category research", "Structural dieline", "Graphic design", "Print specification", "3D mockups", "Vendor coordination"],
    buildFaqs,
    "Packaging"
  ),

  /* ----------------------------- LEGAL ------------------------------ */
  {
    slug: "privacy-policy",
    kind: "legal",
    eyebrow: "Legal",
    title: "Privacy Policy",
    tagline: "How we collect, use and protect your information.",
    intro:
      "This policy explains what we collect when you use our website or engage us as a client, why we collect it, and the choices available to you.",
    sections: [
      { heading: "Information we collect", body: "Contact details you submit through our forms (name, email, phone, company and message), plus standard analytics data such as pages visited, device type and referring source." },
      { heading: "How we use it", body: "To respond to enquiries, deliver contracted services, send service updates and improve our website. We do not sell personal data to third parties." },
      { heading: "Cookies", body: "We use essential cookies for the site to function and analytics cookies to understand usage. You can block cookies in your browser settings, though parts of the site may not work as intended." },
      { heading: "Data sharing", body: "We share data only with processors that help us operate — hosting, analytics, email and CRM providers — under contract and only to the extent required." },
      { heading: "Retention", body: "Enquiry data is retained for up to 24 months unless you ask us to remove it earlier. Client records are retained as long as required for contractual and tax obligations." },
      { heading: "Your rights", body: "You may request access to, correction of, or deletion of your personal data at any time by writing to info@hovermedia.in." },
    ],
  },
  {
    slug: "terms-conditions",
    kind: "legal",
    eyebrow: "Legal",
    title: "Terms & Conditions",
    tagline: "The terms that govern our services and this website.",
    intro:
      "By using this website or engaging Hover Business Services LLP, you agree to the terms set out below. Individual engagements are also governed by their signed proposal.",
    sections: [
      { heading: "Scope of work", body: "Deliverables, timelines and fees are defined in the proposal or statement of work for each engagement. Anything outside that scope is quoted separately before work begins." },
      { heading: "Payments", body: "Unless stated otherwise, engagements run on advance monthly billing. Invoices are payable within the period stated on the invoice; delayed payment may pause active work." },
      { heading: "Client responsibilities", body: "Timely access to accounts, content, approvals and a named point of contact. Delays in these areas move delivery dates accordingly." },
      { heading: "Intellectual property", body: "On full payment, ownership of final deliverables transfers to the client. We retain the right to display non-confidential work in our portfolio unless agreed otherwise." },
      { heading: "Limitation of liability", body: "Our liability for any engagement is limited to the fees paid for the service in question. We are not liable for indirect or consequential losses." },
      { heading: "Governing law", body: "These terms are governed by Indian law, with jurisdiction in Delhi." },
    ],
  },
  {
    slug: "refunds-cancellations",
    kind: "legal",
    eyebrow: "Legal",
    title: "Refund & Cancellation Policy",
    tagline: "How cancellations and refunds are handled.",
    intro:
      "We want the commercial side to be as clear as the work itself. This policy explains when a refund applies and how to cancel an engagement.",
    sections: [
      { heading: "Cancellation notice", body: "Monthly retainers may be cancelled with 30 days' written notice to info@hovermedia.in. Work continues and is billed through the notice period." },
      { heading: "Project work", body: "Fixed-scope projects are billed in milestones. Cancelling mid-project settles work completed and in progress up to the cancellation date." },
      { heading: "Refund eligibility", body: "Advance payments for work not yet started are refundable. Fees for delivered work, third-party costs and ad spend already committed are not refundable." },
      { heading: "Third-party spend", body: "Media budgets, licences, domains, hosting and stock assets are paid to third parties and are governed by their own refund terms." },
      { heading: "Processing", body: "Approved refunds are processed to the original payment method within 7–10 working days of confirmation." },
    ],
  },
  {
    slug: "shipping-delivery",
    kind: "legal",
    eyebrow: "Legal",
    title: "Shipping & Delivery Policy",
    tagline: "How and when our deliverables reach you.",
    intro:
      "Our services are delivered digitally. This policy covers delivery timelines, handover formats and the few cases where physical items are involved.",
    sections: [
      { heading: "Digital delivery", body: "Websites, applications, creative files and reports are delivered electronically via email, shared drive or repository access to the contacts named in the proposal." },
      { heading: "Timelines", body: "Delivery dates are stated in each proposal. Marketing sites typically take 3–6 weeks, e-commerce builds 6–10 weeks, and recurring reports are issued monthly." },
      { heading: "Physical items", body: "Where an engagement includes printed collateral or packaging, dispatch timelines and courier charges are quoted separately and confirmed before production." },
      { heading: "Delays", body: "Where delivery is delayed by pending approvals, content or third-party access, revised dates are communicated in writing." },
      { heading: "Support", body: "For any delivery query, write to support@hovermedia.in or call the office nearest to you." },
    ],
  },
];

export const pageMap = new Map(innerPages.map((p) => [p.slug, p]));
export const innerSlugs = innerPages.map((p) => p.slug);
