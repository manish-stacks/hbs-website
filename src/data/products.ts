export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  features: { title: string; body: string }[];
  highlights: string[];
  pricing: { plan: string; price: string; note: string; features: string[]; popular?: boolean }[];
  status: "Live" | "Beta" | "Coming soon";
};

export const products: Product[] = [
  {
    slug: "email-marketing",
    name: "Hover Mailer",
    category: "Email marketing",
    status: "Live",
    tagline: "Campaigns, automation and deliverability in one dashboard.",
    summary:
      "A multi-tenant email marketing platform built for agencies and growing brands — segment your list, build campaigns visually, automate journeys and watch deliverability instead of guessing at it.",
    features: [
      { title: "Drag-and-drop builder", body: "Reusable blocks and templates that render correctly across every major client." },
      { title: "Automation journeys", body: "Welcome series, cart recovery, re-engagement and post-purchase flows on a visual canvas." },
      { title: "Smart segmentation", body: "Segment on behaviour, purchase history and engagement, not just tags." },
      { title: "Deliverability tools", body: "SPF, DKIM and DMARC checks, warm-up scheduling and bounce handling built in." },
    ],
    highlights: ["Unlimited contacts on higher tiers", "A/B subject testing", "Queue-based sending", "Open, click and revenue reporting"],
    pricing: [
      { plan: "Starter", price: "₹1,499/mo", note: "Up to 5,000 contacts", features: ["10,000 emails/month", "Templates & builder", "Basic automation", "Email support"] },
      { plan: "Growth", price: "₹3,999/mo", note: "Up to 25,000 contacts", popular: true, features: ["100,000 emails/month", "Full automation journeys", "A/B testing", "Deliverability monitoring", "Priority support"] },
      { plan: "Agency", price: "Custom", note: "Multi-brand accounts", features: ["Unlimited sub-accounts", "White-label sending domains", "API access", "Dedicated manager"] },
    ],
  },
  {
    slug: "gmb-posting",
    name: "Hover GMB Suite",
    category: "Google Business Profile",
    status: "Live",
    tagline: "AI-assisted Google Business posting, reviews and rank tracking.",
    summary:
      "Keep every Google Business Profile active without a human doing it manually. Schedule posts, generate on-brand copy, reply to reviews and track grid rankings across locations.",
    features: [
      { title: "Bulk scheduling", body: "Plan a month of posts across dozens of locations in one pass." },
      { title: "AI post writing", body: "On-brand offers, updates and event posts generated from your services." },
      { title: "Review management", body: "Alerts, suggested replies and sentiment tracking across locations." },
      { title: "Grid rank tracking", body: "See where you actually rank at street level, not just a single average." },
    ],
    highlights: ["Multi-location dashboard", "Auto-publish to Google", "Photo & Q&A management", "White-label client reports"],
    pricing: [
      { plan: "Single", price: "₹999/mo", note: "1 location", features: ["Unlimited scheduled posts", "AI copy generation", "Review alerts", "Monthly report"] },
      { plan: "Multi", price: "₹3,499/mo", note: "Up to 10 locations", popular: true, features: ["Bulk scheduling", "Grid rank tracking", "Review reply assistant", "Client-ready reports"] },
      { plan: "Agency", price: "Custom", note: "Unlimited locations", features: ["White-label portal", "Team roles", "API & webhooks", "Dedicated onboarding"] },
    ],
  },
  {
    slug: "whatsapp-marketing",
    name: "Hover WhatsApp",
    category: "WhatsApp Business API",
    status: "Live",
    tagline: "Broadcasts, chatbots and a shared team inbox on the official API.",
    summary:
      "Run WhatsApp as a real sales channel — approved template broadcasts, automated flows, a shared inbox for your team and CRM sync, all on the official Business API.",
    features: [
      { title: "Template broadcasts", body: "Segment your contacts and send approved templates at scale." },
      { title: "No-code chatbot", body: "Flow builder for FAQs, lead qualification and order updates." },
      { title: "Shared team inbox", body: "Assign chats, add notes and track response times across agents." },
      { title: "CRM & catalogue sync", body: "Push leads into your CRM and sell from a WhatsApp catalogue." },
    ],
    highlights: ["Official Meta Business API", "Green tick assistance", "Click-to-WhatsApp ad tracking", "Delivery & read reporting"],
    pricing: [
      { plan: "Basic", price: "₹1,999/mo", note: "1,000 conversations", features: ["Broadcast campaigns", "Single inbox", "Basic chatbot", "Contact import"] },
      { plan: "Pro", price: "₹4,999/mo", note: "5,000 conversations", popular: true, features: ["Multi-agent inbox", "Advanced flow builder", "CRM integration", "Catalogue & payments"] },
      { plan: "Enterprise", price: "Custom", note: "Unlimited volume", features: ["Dedicated BSP setup", "Custom integrations", "SLA support", "Onboarding & training"] },
    ],
  },
  {
    slug: "hover-crm",
    name: "Hover CRM",
    category: "Sales & HRM",
    status: "Beta",
    tagline: "Leads, meetings, attendance and payroll in one place.",
    summary:
      "The CRM we built to run our own agency — lead pipelines, meeting logs, attendance, payroll and reporting, with a mobile app for teams that work outside the office.",
    features: [
      { title: "Lead pipeline", body: "Stages, owners, reminders and a full activity trail per lead." },
      { title: "Field-ready mobile app", body: "Check in, log meetings and update deals from the phone." },
      { title: "Attendance & payroll", body: "Shifts, leaves and salary processing without a second system." },
      { title: "Reporting", body: "Team performance, conversion and revenue views for managers." },
    ],
    highlights: ["Web + Android/iOS apps", "Role-based access", "WhatsApp & email follow-ups", "Export to accounting"],
    pricing: [
      { plan: "Team", price: "₹299/user/mo", note: "Minimum 5 users", features: ["Lead & deal pipeline", "Mobile app", "Attendance", "Standard reports"] },
      { plan: "Business", price: "₹499/user/mo", note: "Minimum 10 users", popular: true, features: ["Payroll module", "Custom fields & stages", "Automations", "Advanced reporting"] },
      { plan: "Enterprise", price: "Custom", note: "Self-hosted option", features: ["On-premise deployment", "SSO", "Custom modules", "Priority SLA"] },
    ],
  },
];

export const productMap = new Map(products.map((p) => [p.slug, p]));
export const productSlugs = products.map((p) => p.slug);
