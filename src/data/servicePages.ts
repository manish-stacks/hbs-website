import { TOP, slugOf } from "./menu";
import type { InnerPage, PageFaq } from "./pages";

/** One line per service: "what it is | deliverable 1 | deliverable 2 | deliverable 3" */
const S: Record<string, string> = {
  // AI search
  "LLMO Services": "Large Language Model Optimisation makes your brand easy for AI assistants to find, understand and recommend.|Entity and brand-data clean-up|AI-friendly content structure|Mention tracking across AI tools",
  "AI Search Optimization": "Get your business cited in AI-powered search results such as AI Overviews, Copilot and Perplexity.|AI search visibility audit|Schema and answer-ready content|Citation and mention reporting",
  "Generative Engine Optimization": "GEO shapes your content so generative engines quote it as a trusted source.|Source-worthy content plan|Authority and E-E-A-T signals|Prompt and topic gap analysis",
  "Answer Engine Optimization": "AEO helps you win direct answers, featured snippets and voice results.|Question-led content|FAQ and how-to schema|Snippet and voice tracking",
  "AI Brand Visibility": "Know how AI tools describe your brand, and fix what they get wrong.|Brand perception audit|Fact and profile corrections|Monthly visibility score",
  // SEO
  "SEO Audit": "A full technical, content and link review that ends in a prioritised fix list.|Crawl and indexing report|On-page and content gaps|90-day action plan",
  "Local SEO": "Rank in the map pack and local results where nearby customers search.|Google Business Profile setup|Citations and local pages|Review and ranking tracking",
  "Ecommerce SEO": "Grow organic sales with category, product and technical SEO built for stores.|Category and product page SEO|Site speed and crawl fixes|Revenue-focused reporting",
  "Technical SEO": "Fix the crawling, speed and structure issues that hold rankings back.|Core Web Vitals fixes|Schema and site architecture|Log and index monitoring",
  "Small Business SEO": "Affordable, focused SEO that brings qualified local leads to growing businesses.|Keyword and competitor plan|On-page optimisation|Monthly lead and ranking report",
  // Content
  "Content Writing": "Clear, search-friendly content that informs buyers and supports rankings.|Content calendar|Blogs, landing and service pages|Editing and SEO review",
  "Link Building": "High-quality, relevant backlinks that build lasting authority.|Link gap analysis|Outreach and placements|Backlink quality reporting",
  "Blog Outreach": "Reach relevant blogs and publishers to earn mentions and links.|Prospect list building|Personalised pitches|Placement tracking",
  "Guest Posting": "Publish expert articles on trusted sites in your industry.|Topic and site selection|Original articles|Live link report",
  "Digital PR": "Earn press coverage and brand mentions that strengthen trust and search visibility.|Story angles and pitches|Journalist outreach|Coverage and link report",
  // Paid
  "Google Ads": "Search, display and video campaigns that turn intent into enquiries.|Account and keyword setup|Ad copy and landing-page advice|Conversion tracking",
  "PPC Management": "Ongoing pay-per-click management focused on lower cost per lead.|Bid and budget optimisation|A/B ad testing|Weekly performance review",
  "Performance Marketing": "Multi-channel paid campaigns measured by leads, sales and return on spend.|Funnel and channel plan|Creative and audience testing|ROAS dashboard",
  "Shopping Ads": "Product ads that put your catalogue in front of ready-to-buy shoppers.|Merchant Center feed set-up|Product grouping and bidding|Revenue reporting",
  "Lead Generation": "Predictable enquiries through ads, landing pages and follow-up.|Offer and landing page|Form and call tracking|Lead quality reporting",
  // Social
  "Social Media Optimisation": "Optimise your profiles and content so the right people find and follow you.|Profile and bio set-up|Hashtag and content strategy|Growth reporting",
  "Social Media Marketing": "Plan, post and grow your brand across the platforms your customers use.|Monthly content calendar|Posts, reels and stories|Engagement and reach report",
  "Facebook/Meta Ads": "Targeted Facebook and Instagram campaigns built to generate leads or sales.|Audience and pixel set-up|Creative testing|Cost-per-result optimisation",
  "Instagram Ads": "Visual ads in feed, stories and reels that drive action.|Creative concepts|Audience targeting|Ad performance reports",
  "YouTube Marketing": "Grow reach with channel strategy, video SEO and video ads.|Channel and content plan|Video SEO|YouTube Ads management",
  "Influencer Marketing": "Partner with creators who match your audience and goals.|Creator shortlisting|Campaign briefs and contracts|Results tracking",
  ORM: "Protect and improve how your brand appears in search and review sites.|Review management|Negative result suppression|Reputation monitoring",
  // Packages
  "SEO Packages": "Clear monthly SEO plans with fixed scope and pricing.|Defined keyword and page scope|Monthly deliverables list|Transparent reporting",
  "Local SEO Packages": "Fixed-scope plans to win local search for one or many locations.|Profile and citation management|Local content and links|Monthly ranking report",
  "Ecommerce SEO Packages": "Store-focused SEO plans sized to your catalogue.|Category and product optimisation|Technical fixes|Sales-linked reporting",
  "PPC Packages": "Simple paid-ads plans with management included.|Campaign build and management|Ad testing|Monthly reporting",
  "Social Media Packages": "Monthly social plans covering content, posting and reporting.|Creatives and captions|Scheduling and posting|Performance summary",
  "Digital Marketing Packages": "Bundled SEO, ads and social plans that work as one growth system.|Integrated channel plan|Dedicated account manager|Single monthly report",
  // Web
  "Custom Web Development": "Fast, secure websites and web apps built around your business workflow.|Requirement and design sign-off|Clean, scalable code|Testing and launch support",
  "Laravel Development": "Robust Laravel applications, portals and APIs.|Custom modules and dashboards|Secure authentication|Deployment and documentation",
  "PHP Development": "Reliable PHP development for new builds and legacy upgrades.|Custom PHP features|Database design|Performance and security hardening",
  "Next.js Development": "Modern, SEO-friendly React sites with server rendering and speed.|Component-based build|SEO-ready rendering|Hosting and CI set-up",
  "React Development": "Interactive React front-ends and single-page applications.|Reusable UI components|API integration|Responsive, tested builds",
  "Node.js": "Scalable Node.js back-ends, APIs and real-time features.|REST and GraphQL APIs|Database integration|Monitoring and logging",
  "Website Design": "Clean, conversion-focused website design that reflects your brand.|Wireframes and mock-ups|Responsive layouts|Brand-consistent UI",
  "Website Redesign": "Refresh an outdated site without losing rankings or leads.|Current-site audit|New design and structure|SEO-safe migration",
  "Landing Page Design": "High-converting landing pages built for a single campaign goal.|Message and layout plan|Fast, mobile-first build|Form and A/B test set-up",
  "Shopify Development": "Shopify stores, themes and custom features that sell.|Theme set-up or custom build|Payments and shipping|Product and app integration",
  "WooCommerce Development": "Flexible WooCommerce stores on WordPress.|Store set-up and design|Payment and tax set-up|Plugin customisation",
  Magento: "Enterprise-grade Magento stores for large catalogues.|Custom build or migration|Extension development|Performance tuning",
  "Custom Ecommerce": "Tailor-made online stores when platforms are not enough.|Bespoke catalogue and checkout|ERP and CRM integration|Scalable architecture",
  "Mobile App Development": "Mobile apps planned, designed and built for real users.|UX flows and prototypes|iOS and Android builds|Store submission support",
  "Android App Development": "Native Android apps that are fast and stable.|Kotlin/Java development|Play Store release|Crash and usage monitoring",
  "App Maintenance & Support": "Keep your app updated, secure and bug-free.|OS and library updates|Bug fixes|Performance monitoring",
  "API Development & Integration": "Connect your systems with secure, well-documented APIs.|REST API design|Third-party integrations|API documentation",
  "CRM Development": "Custom CRM tools that match how your team sells.|Lead and pipeline modules|Automation and reminders|Reports and dashboards",
  "Website Maintenance & Support": "Ongoing updates, backups and fixes so your site stays healthy.|Updates and backups|Security monitoring|Monthly support hours",
  // Creative
  "Video Editing": "Professional editing for ads, reels, explainers and corporate videos.|Cuts, colour and sound|Captions and motion graphics|Platform-ready formats",
  "Social Media Creatives": "Scroll-stopping posts, carousels and ad creatives.|Brand-aligned templates|Static and animated posts|Ad-size variations",
  "UI/UX Design": "User-friendly interfaces backed by research and testing.|User flows and wireframes|High-fidelity UI|Clickable prototype",
  // About
  "Our Team (Life @ Hover)": "Meet the people and culture behind Hover Business Services LLP.|Our teams|How we work|Life at the office",
  "Client Reviews": "What clients say about working with Hover Business Services LLP.|Verified feedback|Results in context|Long-term relationships",
};

/** Industry focus phrases */
const I: Record<string, string> = {
  Hospitals: "patient trust, local search and appointment bookings", "Dental Clinics": "local rankings, reviews and booked consultations",
  "Fitness & Wellness": "memberships, trials and community engagement", Pharmaceuticals: "compliant content, B2B reach and brand authority",
  "Law Firms": "high-intent enquiries and a credible online profile", "Accounting & Finance": "trust, local visibility and steady client enquiries",
  Insurance: "quote requests and long-term policyholder trust", Consulting: "thought leadership and qualified inbound leads",
  "Business Services": "B2B lead generation and clear service positioning", "Tax Consultants": "seasonal demand, local search and client trust",
  "Corporate Services": "compliance-led credibility and consistent enquiries", Schools: "admission enquiries and parent trust",
  "Colleges & Universities": "application growth and programme visibility", "Coaching Institutes": "enrolments, results proof and local reach",
  "Hotels & Resorts": "direct bookings and strong review profiles", "Travel & Tourism": "seasonal campaigns and booking enquiries",
  "Restaurants & Cafes": "local discovery, reviews and online orders", "Event Management": "portfolio showcase and enquiry-driven leads",
  "Real Estate": "property leads, project launches and local trust", Construction: "project enquiries and a professional portfolio",
  Manufacturing: "B2B visibility, catalogues and export leads", "Interior Design": "visual portfolios and design consultations",
  "Industrial Equipment": "technical content and B2B quotations", "Warehousing & Logistics": "B2B lead generation and service-area visibility",
  Ecommerce: "traffic, conversion and repeat purchases", "Retail Stores": "footfall, local search and online sales",
  "Fashion & Apparel": "visual social growth and seasonal campaigns", Jewellery: "trust, premium branding and showroom visits",
  "Home Decor": "visual storytelling and online orders", Furniture: "product visibility, showroom visits and online enquiries",
};

const T: Record<string, string> = { ORM: "Online Reputation Management (ORM)", "Node.js": "Node.js Development", Magento: "Magento Development", "Custom Ecommerce": "Custom Ecommerce Development" };

const faq = (q: string, a: string): PageFaq => ({ q, a });
const FAQ: Record<string, PageFaq[]> = {
  marketing: [
    faq("How soon will I see results?", "Paid campaigns can produce leads within weeks. SEO and content usually compound over 3 to 6 months."),
    faq("Will I see what you are doing?", "Yes. You get a clear monthly report with actions taken, key numbers and next steps."),
    faq("Is there a long lock-in?", "No. After an initial set-up period we work month to month."),
  ],
  dev: [
    faq("Who owns the code and accounts?", "You do. Code, hosting and domains stay in your name from day one."),
    faq("How long does a project take?", "Small sites take 3 to 6 weeks. Stores and custom apps are timed after a short discovery."),
    faq("Do you offer support after launch?", "Yes. Maintenance and support plans are available monthly."),
  ],
  design: [
    faq("How many revisions are included?", "Scope includes agreed revision rounds so the final result matches your brief."),
    faq("Do I receive the source files?", "Yes. You receive final files and source files once the project is approved."),
    faq("How long does design take?", "Most projects take 1 to 3 weeks, depending on size and feedback speed."),
  ],
  industry: [
    faq("Do you have experience in this sector?", "Yes. We plan campaigns around how customers in this sector search, compare and decide."),
    faq("Which services work best?", "We start with an audit and recommend the mix of SEO, ads, social and web that fits your goals."),
    faq("Can you work with my existing team?", "Yes. We can run everything or support your in-house team."),
  ],
};

const STEPS: Record<string, [string, string][]> = {
  marketing: [["Audit and plan", "We review your site, competitors and goals, then agree a clear plan."], ["Execute", "Our specialists carry out the plan with weekly progress updates."], ["Measure and improve", "Monthly reports show what worked and what we will do next."]],
  dev: [["Discover", "We confirm scope, users and features before design starts."], ["Build", "We develop in short stages so you can review progress early."], ["Launch and support", "We test, launch and stay on hand for fixes and upgrades."]],
  design: [["Brief", "We learn your brand, audience and goals."], ["Design", "You receive concepts, then refine them with us."], ["Deliver", "Final files are prepared for web, print or social."]],
};
const COMMON: Record<string, string[]> = {
  marketing: ["Dedicated account manager", "Clear monthly reporting", "No hidden fees"],
  dev: ["Mobile-friendly, tested build", "Security and speed checks", "Post-launch support"],
  design: ["Agreed revision rounds", "Source and final files", "Brand-consistent output"],
};

const kindOf = (k: string) => (k === "dev" ? "dev" : k === "design" ? "design" : "marketing");
const SKIP = new Set(["logo-design", "graphic-design", "wordpress-development", "digital-marketing", "website-development", "about-us", "portfolio", "career", "seo-services", "social-media-marketing", "product-packaging-design"]);

export function generatedPages(): InnerPage[] {
  const out: InnerPage[] = [];
  const seen = new Set<string>();
  const industryChildren: { title: string; href: string; body: string }[] = [];
  for (const top of TOP) {
    for (const g of top.groups) {
      for (const label of g.l) {
        const slug = slugOf(g, label);
        if (!slug || SKIP.has(slug) || seen.has(slug)) continue;
        seen.add(slug);
        if (g.kind === "industry") {
          const focus = I[label] ?? "visibility and qualified enquiries";
          const title = `Digital Marketing for ${label}`;
          industryChildren.push({ title: label, href: `/${slug}`, body: `Marketing built around ${focus}.` });
          out.push({
            slug, kind: "service", title, eyebrow: "Industries",
            tagline: `Marketing that focuses on ${focus}.`,
            intro: `Hover Business Services LLP helps ${label.toLowerCase()} brands grow online with SEO, paid ads, social media and websites that suit how their customers search and buy. Our focus here is ${focus}.`,
            points: [{ title: "Search visibility", body: "SEO and local search so the right people find you first." }, { title: "Paid and social reach", body: "Ads and content that bring qualified enquiries." }, { title: "Website that converts", body: "Fast, clear pages that turn visits into leads." }],
            deliverables: ["Industry and competitor audit", "Channel plan with clear goals", "Campaign set-up and management", "Monthly reporting and review"],
            faqs: FAQ.industry,
          });
          continue;
        }
        const spec = S[label];
        if (!spec) continue;
        const [what = "", d1 = "", d2 = "", d3 = ""] = spec.split("|");
        const k = kindOf(g.kind) as "marketing" | "dev" | "design";
        const title = T[label] ?? label;
        out.push({
          slug, kind: "service", title, eyebrow: g.h, tagline: what,
          intro: `${what} Hover Business Services LLP handles ${title.toLowerCase()} from planning to delivery, with a clear scope, regular updates and one point of contact.`,
          points: (STEPS[k] ?? []).map(([t, b]) => ({ title: t, body: b })),
          deliverables: [d1, d2, d3, ...(COMMON[k] ?? [])].filter(Boolean),
          faqs: FAQ[k] ?? [],
        });
      }
    }
  }
  out.push({
    slug: "industries", kind: "hub", title: "Industries We Serve", eyebrow: "Industries",
    tagline: "Digital marketing and web solutions shaped around how each sector buys.",
    intro: "Hover Business Services LLP works with healthcare, professional services, education, real estate, retail and more. Pick your sector to see how we can help.",
    children: industryChildren,
  });
  return out;
}
