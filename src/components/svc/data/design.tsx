import { SwatchMock } from "../mocks";
import type { Svc } from "../kit";

const REL = [
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "Logo Design", href: "/logo-design" },
  { label: "Brochure Design", href: "/brochure-design" },
  { label: "Newsletter Design", href: "/newsletter-design" },
  { label: "Packaging Design", href: "/product-packaging-design" },
  { label: "Web Design", href: "/custom-web-design" },
];
const rel = (slug: string) => REL.filter((r) => r.href !== `/${slug}`).slice(0, 5);
const mk = (o: Partial<Svc> & Pick<Svc, "slug">): Svc => o as Svc;
const ST: [string, string][] = [["Custom", "Original concepts"], ["Revisions", "Included"], ["Print", "& digital files"], ["Brand", "Consistent look"]];

export const graphic: Svc = mk({
  slug: "graphic-design", statsStyle: "tiles", offerLayout: "grid", processLayout: "steps", ctaStyle: "light", metaTitle: "Graphic Design Services | Creative Design for Brands",
  metaDesc: "Professional graphic design for brands: logos, brochures, social media creatives, packaging and marketing material.",
  title: "Graphic Design That Makes Your Brand Memorable", eyebrow: "Graphic Design",
  tagline: "Clear, creative design for everything your business puts in front of customers, from social posts to print and packaging.",
  accent: "#e11d48", heroStyle: "visual", heroVisual: <SwatchMock name="Brand" colors={["#e11d48", "#0a0e17", "#f59e0b", "#e2e8f0"]} />, formTitle: "Start your design project",
  points: ["Original concepts, never stock templates", "Consistent brand look across channels", "Print-ready and web-ready files", "Revisions until you are happy"], stats: ST,
  offersHead: { title: "Design for every touchpoint", sub: "One creative team for all your brand material." },
  offers: [
    { icon: "sparkles", t: "Logo & identity", b: "Marks, colours, typography and guidelines that define your brand." },
    { icon: "file", t: "Print design", b: "Brochures, flyers, catalogues, business cards and stationery." },
    { icon: "users", t: "Social media creatives", b: "Posts, stories, banners and ad creatives made to fit each platform." },
    { icon: "cart", t: "Packaging", b: "Labels and boxes that catch attention on the shelf." },
    { icon: "layers", t: "Presentations", b: "Pitch decks and company profiles that look sharp." },
    { icon: "eye", t: "Brand refresh", b: "Modernise your look while keeping what customers recognise." },
  ],
  hl: { eyebrow: "Creative with purpose", title: "Design that looks good and does its job", body: "Every piece starts with a clear goal and audience, then we find the simplest, strongest way to express it.", bullets: ["Briefing call to understand your brand", "Two or three concepts to choose from", "Final files in every format you need"] },
  visual: <SwatchMock name="Studio" colors={["#e11d48", "#7c3aed", "#0a0e17", "#e2e8f0"]} />,
  processHead: "Our design process",
  process: [{ t: "Brief", b: "Goals, audience, style references." }, { t: "Concepts", b: "Initial design directions." }, { t: "Refine", b: "Revisions based on your feedback." }, { t: "Deliver", b: "Final files and usage guide." }],
  faqs: [
    { q: "How many revisions do I get?", a: "Each project includes revision rounds, which are listed in the proposal." },
    { q: "Which file formats will I receive?", a: "AI, PDF, PNG, JPG and SVG as needed, with print-ready versions where relevant." },
    { q: "Can you match an existing brand style?", a: "Yes. Share your guidelines or sample files and we will follow them." },
    { q: "How long does a project take?", a: "Small items take days; larger identity projects take a few weeks." },
  ],
  related: rel("graphic-design"),
});

export const logo: Svc = mk({
  slug: "logo-design", offerLayout: "rows", processLayout: "cards", hlStyle: "band", faqStyle: "two", metaTitle: "Logo Design Services | Custom Logos for Your Business",
  metaDesc: "Custom logo design with original concepts, revisions and complete file packages for print and digital use.",
  title: "Logo Design That Captures Who You Are", eyebrow: "Logo Design",
  tagline: "A distinctive logo that works on a signboard, a website and a social profile, created from scratch for your business.",
  accent: "#d97706", heroStyle: "light", formTitle: "Get your custom logo", flip: true,
  points: ["Hand-built concepts, no clip-art", "Works in colour, black and white", "Full file package", "Revision rounds included"], stats: ST,
  offersHead: { title: "More than just a symbol", sub: "A logo is the start of your visual identity." },
  offers: [
    { icon: "search", t: "Research", b: "We study your market and competitors so your logo stands apart." },
    { icon: "sparkles", t: "Concepts", b: "Several original directions, explained so you can choose with confidence." },
    { icon: "eye", t: "Colour & type", b: "A palette and typefaces that suit your brand personality." },
    { icon: "layers", t: "Variations", b: "Horizontal, stacked, icon-only and one-colour versions." },
    { icon: "file", t: "File package", b: "Vector and image files for print, web and social media." },
    { icon: "shield", t: "Usage guide", b: "Simple rules for spacing, colour and sizing." },
  ],
  hl: { eyebrow: "Identity", title: "A logo you will not outgrow", body: "We design for simplicity and flexibility, so your logo stays effective as your business grows.", bullets: ["Concept presentation with rationale", "Tested at small sizes and on mockups", "Ownership of final artwork"] },
  visual: <SwatchMock name="Acme" colors={["#d97706", "#0a0e17", "#fef3c7", "#e2e8f0"]} />,
  processHead: "From brief to final logo",
  process: [{ t: "Brief", b: "Your story, audience and taste." }, { t: "Sketch & concept", b: "Initial logo directions." }, { t: "Refine", b: "Polish the chosen design." }, { t: "Final files", b: "Complete logo package." }],
  faqs: [
    { q: "Will my logo be unique?", a: "Yes. Every logo is created for you, and we check it against obvious look-alikes." },
    { q: "Do I own the logo?", a: "Yes, full rights transfer after final payment." },
    { q: "Can you redesign my old logo?", a: "Yes. We can refresh it or start over." },
    { q: "Can I get brand guidelines?", a: "Yes, as a short usage guide or a full brand book." },
  ],
  related: rel("logo-design"),
});

export const brochure: Svc = mk({
  slug: "brochure-design", heroBg: "diag", statsStyle: "tiles", offerLayout: "bento", processLayout: "timeline", ctaStyle: "light", metaTitle: "Brochure Design Services | Print & Digital Brochures",
  metaDesc: "Professional brochure design for companies, products and events: layouts, copy support and print-ready files.",
  title: "Brochure Design That Helps You Close the Sale", eyebrow: "Brochure Design",
  tagline: "Clear, well-structured brochures that present your company or products professionally, in print and as digital PDFs.",
  accent: "#0f766e", heroStyle: "dark", formTitle: "Get a brochure quote",
  points: ["Bi-fold, tri-fold and multi-page layouts", "Copy and structure guidance", "Print-ready files with bleed", "Matching digital PDF"], stats: ST,
  offersHead: { title: "Brochures that people keep", sub: "Good layout makes information easy to read and remember." },
  offers: [
    { icon: "file", t: "Layout design", b: "Clean grids, strong hierarchy and balanced use of space." },
    { icon: "sparkles", t: "Imagery & icons", b: "Photography direction, custom icons and charts." },
    { icon: "chat", t: "Copy guidance", b: "We help structure and tighten your message." },
    { icon: "layers", t: "Format choice", b: "Fold type, paper and finish suggestions for your budget." },
    { icon: "eye", t: "Brand consistency", b: "Colours and fonts that match your identity." },
    { icon: "settings", t: "Print coordination", b: "Files prepared to printer specifications." },
  ],
  hl: { eyebrow: "Print & PDF", title: "Make your offer easy to understand at a glance", body: "A brochure should answer your customer's questions quickly and leave a professional impression.", bullets: ["Content outline agreed before design", "Proof checks for colour and margins", "Editable source files on request"] },
  visual: <SwatchMock name="Corp" colors={["#0f766e", "#0a0e17", "#ccfbf1", "#e2e8f0"]} />,
  processHead: "How we design your brochure",
  process: [{ t: "Content", b: "Gather text, images and goals." }, { t: "Draft layout", b: "First design for review." }, { t: "Revise", b: "Feedback rounds." }, { t: "Print-ready", b: "Final PDF and press files." }],
  faqs: [
    { q: "Can you design a multi-page company profile?", a: "Yes. We design from two pages to large catalogues." },
    { q: "Do you help with printing?", a: "We prepare print-ready files and can advise on printers and paper." },
    { q: "Can you work with my copy?", a: "Yes, and we can also help edit or restructure it." },
    { q: "Do I get the editable files?", a: "Yes, on request after final payment." },
  ],
  related: rel("brochure-design"),
});

export const newsletter: Svc = mk({
  slug: "newsletter-design", offerLayout: "cols", processLayout: "alt", hlStyle: "band", faqStyle: "two", metaTitle: "Newsletter & Email Design Services",
  metaDesc: "Email newsletter design that looks great on every device: responsive templates, clear layouts and tested HTML.",
  title: "Newsletter Design That Gets Opened and Read", eyebrow: "Newsletter Design",
  tagline: "Responsive email templates with clear layouts and strong calls to action, tested in major email apps.",
  accent: "#9333ea", heroStyle: "light", formTitle: "Get a newsletter design quote",
  points: ["Responsive across mobile and desktop", "Tested in Gmail, Outlook and Apple Mail", "Reusable templates", "Works with major email platforms"], stats: ST,
  offersHead: { title: "Email design built for inboxes", sub: "Email clients are tricky. We handle the details so your message looks right." },
  offers: [
    { icon: "mail", t: "Template design", b: "A branded newsletter layout you can reuse for every send." },
    { icon: "code", t: "HTML coding", b: "Clean, compatible HTML that renders correctly across email apps." },
    { icon: "target", t: "Call-to-action focus", b: "Buttons and layout that guide readers to act." },
    { icon: "eye", t: "Dark mode checks", b: "Designs tested so they stay readable in dark mode." },
    { icon: "settings", t: "Platform setup", b: "Templates loaded into your email service of choice." },
    { icon: "chart", t: "Testing", b: "Previews across devices before you send." },
  ],
  hl: { eyebrow: "Email that works", title: "Look professional in every inbox", body: "A consistent, readable newsletter builds trust and keeps subscribers engaged.", bullets: ["Plain text version included", "Image and link best practices applied", "Editable blocks for your team"] },
  visual: <SwatchMock name="News" colors={["#9333ea", "#0a0e17", "#f3e8ff", "#e2e8f0"]} />,
  processHead: "From idea to inbox",
  process: [{ t: "Plan", b: "Goals, content and audience." }, { t: "Design", b: "Newsletter layout for approval." }, { t: "Code & test", b: "Responsive HTML tested widely." }, { t: "Handover", b: "Template loaded into your platform." }],
  faqs: [
    { q: "Which email platforms do you support?", a: "Mailchimp, Brevo, Klaviyo, HubSpot and most others." },
    { q: "Can you design a one-off campaign?", a: "Yes, as a single email or a full template system." },
    { q: "Will it look right in Outlook?", a: "We test in Outlook and fix common rendering issues." },
    { q: "Can you write the content too?", a: "Yes, as an add-on." },
  ],
  related: rel("newsletter-design"),
});

export const packaging: Svc = mk({
  slug: "product-packaging-design", statsStyle: "tiles", offerLayout: "rows", processLayout: "steps", metaTitle: "Product Packaging Design Services",
  metaDesc: "Product packaging design: boxes, labels, pouches and bottles that stand out on shelf and online, with print-ready dielines.",
  title: "Packaging Design That Wins on the Shelf", eyebrow: "Packaging Design",
  tagline: "Packaging that tells your product's story at a glance, protects what is inside and looks great on shelf, online and in the hand.",
  accent: "#b45309", heroStyle: "visual", heroVisual: <SwatchMock name="Pack" colors={["#b45309", "#0a0e17", "#fde68a", "#e2e8f0"]} />, flip: true,
  formTitle: "Get a packaging design quote",
  points: ["Boxes, pouches, labels, bottles and sleeves", "Dielines and print-ready files", "Design for retail and e-commerce", "Regulatory text layout support"], stats: ST,
  offersHead: { title: "Design that sells before the first use", sub: "Packaging is often the first thing a customer experiences." },
  offers: [
    { icon: "cart", t: "Structural direction", b: "Advice on formats, materials and dielines suited to your product." },
    { icon: "sparkles", t: "Visual design", b: "Colour, typography and illustration that fit your brand and category." },
    { icon: "file", t: "Label & information layout", b: "Ingredients, usage and legal text arranged clearly." },
    { icon: "eye", t: "Mockups", b: "Realistic previews so you can judge the design before print." },
    { icon: "layers", t: "Range design", b: "A system that scales across flavours, sizes and variants." },
    { icon: "settings", t: "Print preparation", b: "Files prepared for your packaging supplier." },
  ],
  hl: { eyebrow: "Shelf impact", title: "Stand out, and make the benefits obvious", body: "Customers decide in seconds. We help your packaging communicate what the product is and why it is better.", bullets: ["Competitor shelf review", "Mockups for shelf and online listing", "Consistent system across your whole range"] },
  visual: <SwatchMock name="Pack" colors={["#b45309", "#7c2d12", "#fde68a", "#e2e8f0"]} />,
  processHead: "From concept to print",
  process: [{ t: "Brief", b: "Product, audience, market and constraints." }, { t: "Concepts", b: "Design directions and mockups." }, { t: "Refine", b: "Revisions and text layout." }, { t: "Prepress", b: "Dielines and print-ready artwork." }],
  faqs: [
    { q: "Do you provide dielines?", a: "We work from your supplier's dieline or create one if needed." },
    { q: "Can you design for a full product range?", a: "Yes. We create a system that scales across variants." },
    { q: "Will you handle regulatory text?", a: "We lay out the required text that you provide. Compliance content must be confirmed by you or your advisor." },
    { q: "Can you do packaging mockups for my website?", a: "Yes. We can supply product renders for online listings." },
  ],
  related: rel("product-packaging-design"),
});
