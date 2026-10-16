import type { Field } from "./blocks";

export type Company = {
  name: string; logo: string; logoAlt: string; phone: string; phoneAlt: string; phoneNz: string; whatsapp: string;
  email: string; support: string; addressIn: string; crm: string; pay: string;
  social: { facebook: string; instagram: string; linkedin: string; twitter: string; youtube: string };
};
export type MenuLink = { label: string; href: string };
export type MenuItem = { label: string; href: string; groups?: { heading: string; icon?: string; links: MenuLink[] }[] };
export type FooterData = { about: string; copyright: string; columns: { title: string; links: MenuLink[] }[]; legal: MenuLink[] };

export type GroupKey =
  | "general" | "seo" | "pageSeo" | "menu" | "footer" | "about" | "stats" | "faqs" | "offices" | "reviews"
  | "hero" | "contactCta" | "career" | "jobs" | "team" | "clients" | "services" | "whyUs" | "industries" | "work";

export type Group = { label: string; section: "Site" | "Sections"; desc: string; fields: Field[] };

const t = (k: string, label: string, hint?: string): Field => ({ k, label, t: "text", hint });
const a = (k: string, label: string): Field => ({ k, label, t: "area" });
const im = (k: string, label: string): Field => ({ k, label, t: "image" });
const items = (k: string, label: string, sub: Field[]): Field => ({ k, label, t: "items", sub });
const link: Field[] = [t("label", "Label"), t("href", "Link")];

export const GROUPS: Record<GroupKey, Group> = {
  general: {
    label: "General & contact", section: "Site", desc: "Logo, phone numbers, email, address, social links.",
    fields: [
      t("siteName", "Site name"), im("logo", "Logo"), t("logoAlt", "Logo alt text"), im("favicon", "Favicon"),
      t("phone", "Phone"), t("phoneAlt", "Alternate phone"), t("phoneNz", "Second country phone"),
      t("whatsapp", "WhatsApp link"), t("email", "Email"), t("support", "Support email"), a("address", "Address"),
      t("crm", "Client login URL"), t("pay", "Payment URL"),
      t("facebook", "Facebook URL"), t("instagram", "Instagram URL"), t("linkedin", "LinkedIn URL"),
      t("twitter", "X / Twitter URL"), t("youtube", "YouTube URL"),
      t("googleRating", "Google rating"), t("googleReviews", "Google review count"),
      t("notifyEmail", "Lead notification email", "New contact form messages are emailed here (needs SMTP env)."),
    ],
  },
  seo: {
    label: "Global SEO", section: "Site", desc: "Default meta title, description, social image and analytics.",
    fields: [
      t("siteUrl", "Site URL", "e.g. https://example.com (no trailing slash)"),
      t("defaultTitle", "Default meta title"), t("titleTemplate", "Title template", "Use %s for the page title"),
      a("description", "Default meta description"), { k: "keywords", label: "Keywords (one per line)", t: "lines" },
      im("ogImage", "Default social share image"), t("ogImageAlt", "Social image alt text"),
      t("twitterHandle", "X / Twitter handle"), t("googleVerification", "Google Search Console verification code"),
      t("gaId", "Google Analytics ID (G-XXXX)"),
      t("orgStreet", "Business street address"), t("orgCity", "City"), t("orgPostal", "Postal code"), t("orgCountry", "Country code (IN)"),
    ],
  },
  pageSeo: {
    label: "Page SEO", section: "Site", desc: "Override meta title, description and image for built-in pages (path like /about-us).",
    fields: [items("items", "Pages", [t("path", "Page path", "URL path of the page, e.g. /about-us or /contact-us"), t("title", "Meta title"), a("description", "Meta description"), im("image", "Share image")])],
  },
  menu: {
    label: "Header menu", section: "Site", desc: "Categories, groups and links shown in the header.",
    fields: [items("items", "Menu items", [t("label", "Category label"), t("href", "Category link"),
      items("groups", "Groups", [t("heading", "Group heading"), { k: "icon", label: "Group icon", t: "icon" }, items("links", "Links", link)])])],
  },
  footer: {
    label: "Footer", section: "Site", desc: "Footer text, link columns and legal links.",
    fields: [a("about", "About text"), t("copyright", "Copyright text"),
      items("columns", "Link columns", [t("title", "Column title"), items("links", "Links", link)]),
      items("legal", "Legal links", link)],
  },
  about: {
    label: "About section", section: "Sections", desc: "About block on the home and about pages.",
    fields: [t("eyebrow", "Eyebrow"), t("heading", "Heading"), t("highlight", "Highlighted words"), a("p1", "Paragraph 1"), a("p2", "Paragraph 2"),
      { k: "points", label: "Bullet points (one per line)", t: "lines" }, im("image", "Image"), t("imageAlt", "Image alt text"),
      t("badgeValue", "Badge value"), t("badgeLabel", "Badge label"), t("linkLabel", "Link label")],
  },
  stats: { label: "Counters", section: "Sections", desc: "Animated numbers (years, clients, team...).",
    fields: [items("items", "Counters", [t("value", "Number"), t("suffix", "Suffix"), t("label", "Label")])] },
  faqs: { label: "FAQs", section: "Sections", desc: "Frequently asked questions.",
    fields: [items("items", "Questions", [t("q", "Question"), a("a", "Answer")])] },
  offices: { label: "Offices / branches", section: "Sections", desc: "Office cards.",
    fields: [items("items", "Offices", [t("city", "Name"), t("country", "Country"), a("address", "Address"), t("phone", "Phone")])] },
  reviews: { label: "Reviews", section: "Sections", desc: "Client testimonials.",
    fields: [items("items", "Reviews", [t("name", "Name"), t("role", "Role / company"), a("text", "Review")])] },
  hero: { label: "Home hero", section: "Sections", desc: "Main banner text on the home page.",
    fields: [t("badge", "Badge"), t("headline1", "Headline line 1"), t("headline2", "Headline line 2 (underlined)", "Use | for a line break. Only the last line is underlined."), t("sub", "Sub heading"), a("intro", "Intro text"),
      t("cta1", "Primary button"), t("cta2", "Phone button"), t("rating", "Rating text"), t("chip1", "Chip 1"), t("chip2", "Chip 2"), t("chip3", "Chip 3"),
      t("stat1Value", "Stat 1 value"), t("stat1Label", "Stat 1 label"), t("stat2Value", "Stat 2 value"), t("stat2Label", "Stat 2 label"), t("stat3Value", "Stat 3 value"), t("stat3Label", "Stat 3 label")] },
  contactCta: { label: "Contact form section", section: "Sections", desc: "Text around the contact form.",
    fields: [t("eyebrow", "Eyebrow"), a("heading", "Heading (new line = line break)"), t("formKicker", "Form kicker"), t("formTitle", "Form title")] },
  career: { label: "Career page numbers", section: "Sections", desc: "The four numbers at the top of the Careers page.",
    fields: [items("numbers", "Numbers", [t("value", "Value"), t("label", "Label")])] },
  jobs: { label: "Job openings", section: "Sections", desc: "Open roles on the careers page.",
    fields: [items("items", "Openings", [t("role", "Role"), t("team", "Team"), t("type", "Type"), t("location", "Location"), t("exp", "Experience"), { k: "points", label: "Points (one per line)", t: "lines" }])] },
  team: { label: "Team", section: "Sections", desc: "Team members.",
    fields: [items("items", "Members", [t("name", "Name"), t("role", "Role"), im("image", "Photo"), t("alt", "Photo alt text"),
      t("facebook", "Facebook URL"), t("twitter", "X URL"), t("instagram", "Instagram URL")])] },
  clients: { label: "Client logos", section: "Sections", desc: "Logo strip.",
    fields: [items("items", "Logos", [t("name", "Client name"), im("logo", "Logo"), t("alt", "Alt text")])] },
  services: { label: "Home service cards", section: "Sections", desc: "Service cards on the home page.",
    fields: [items("items", "Cards", [t("title", "Title"), a("body", "Text"), t("badge", "Badge"),
      { k: "tags", label: "Tags (one per line)", t: "lines" }, t("href", "Link (page slug path)"), im("image", "Image"), t("alt", "Image alt text")])] },
  whyUs: { label: "Why choose us", section: "Sections", desc: "Reason cards.",
    fields: [items("items", "Reasons", [t("title", "Title"), a("body", "Text")])] },
  industries: { label: "Industries", section: "Sections", desc: "Industry chips.",
    fields: [items("items", "Industries", [t("name", "Name")])] },
  work: { label: "Portfolio gallery", section: "Sections", desc: "Project cards on the portfolio page.",
    fields: [items("items", "Projects", [t("name", "Name"), t("sector", "Sector"), { k: "scope", label: "Scope (one per line)", t: "lines" },
      a("outcome", "Outcome"), im("image", "Image"), t("alt", "Image alt text"), t("ratio", "Shape", "aspect-[4/5], aspect-[4/3] or aspect-square")])] },
};

/** Where each settings group appears on the website (shown at the top of the editor). */
export const WHERE: Record<GroupKey, { where: string; url: string }> = {
  general: { where: "Header top bar, footer, contact sections, logo and favicon on every page.", url: "/" },
  seo: { where: "Default meta tags for the whole website (used when a page has no own SEO).", url: "/" },
  pageSeo: { where: "Meta title, description and share image of built-in pages. Pages, services and blog posts have their own SEO box inside their editor.", url: "/about-us" },
  menu: { where: "Top navigation (header) on every page.", url: "/" },
  footer: { where: "Footer on every page.", url: "/" },
  about: { where: "About block on the Home page and the About us page.", url: "/about-us" },
  stats: { where: "Counters on the Home, About us and Portfolio pages.", url: "/about-us" },
  faqs: { where: "FAQ section on the Home and Contact us pages.", url: "/contact-us" },
  offices: { where: "Offices section on the Home, About us and Contact us pages.", url: "/contact-us" },
  reviews: { where: "Reviews slider on the Home, About us and Portfolio pages.", url: "/about-us" },
  hero: { where: "Top banner of the Home page.", url: "/" },
  contactCta: { where: "Text around the contact form on the Contact us and About us pages.", url: "/contact-us" },
  career: { where: "The four numbers at the top of the Careers page.", url: "/career" },
  jobs: { where: "Open positions list and the application form on the Careers page.", url: "/career" },
  team: { where: "Team slider on the About us page.", url: "/about-us" },
  clients: { where: "Client logo strip on the Home page.", url: "/" },
  services: { where: "Service cards on the Home page.", url: "/" },
  whyUs: { where: "Why choose us section on the Home and About us pages.", url: "/about-us" },
  industries: { where: "Industries section on the Home and Portfolio pages.", url: "/portfolio" },
  work: { where: "Project gallery on the Portfolio page.", url: "/portfolio" },
};

export const GROUP_KEYS = Object.keys(GROUPS) as GroupKey[];
