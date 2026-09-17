export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  tag: string;
  date: { d: string; m: string; full: string };
  readTime: string;
  image: string;
  body: { heading?: string; text: string }[];
};

export const blogPosts: Post[] = [
  {
    slug: "web-development-essentials",
    title: "Web development essentials every business should get right",
    excerpt:
      "Speed, structure and clean tracking decide whether a site earns traffic or just holds it. Here is the checklist we run on every build.",
    author: "HBS Editorial",
    tag: "Web Development",
    date: { d: "03", m: "Jun", full: "3 June 2026" },
    readTime: "6 min read",
    image: "/images/art/post-1.svg",
    body: [
      {
        text: "Most business websites are not slow because of the framework they were built on. They are slow because of everything that got bolted on afterwards — four analytics scripts, an unused slider library, hero images exported straight out of a camera. The fix is almost always subtraction.",
      },
      {
        heading: "Start with the page that actually matters",
        text: "Before optimising anything, pull up your analytics and find the three pages that generate enquiries. Those are the pages worth obsessing over. A homepage redesign rarely moves revenue as much as fixing the service page that already ranks.",
      },
      {
        heading: "Structure beats decoration",
        text: "A clear heading hierarchy, descriptive internal links and semantic markup do more for both users and search engines than any animation. If someone reading only your H2s cannot work out what you sell, the page needs restructuring, not more design.",
      },
      {
        heading: "Make performance a budget, not a goal",
        text: "Set a limit — for example, under 200KB of JavaScript and a Largest Contentful Paint below 2.5 seconds — and treat anything that breaks it as a decision to justify. Budgets survive handovers; good intentions do not.",
      },
      {
        heading: "Tracking you can trust",
        text: "Conversion tracking should be set up before launch, not after the first month of confusion. Server-side events, clean UTM conventions and a single agreed definition of a lead will save more money than most optimisation work.",
      },
      {
        text: "None of this is exotic. It is the difference between a site that quietly compounds and one that needs rebuilding every two years.",
      },
    ],
  },
  {
    slug: "ai-changing-search",
    title: "How AI is changing search — and what to do about it now",
    excerpt:
      "AI answers are pushing classic blue links down the page. The brands winning are the ones structuring content for both crawlers and models.",
    author: "HBS Editorial",
    tag: "AI & Search",
    date: { d: "02", m: "Jun", full: "2 June 2026" },
    readTime: "7 min read",
    image: "/images/art/post-2.svg",
    body: [
      {
        text: "Search results now open with a generated answer more often than not. That answer is assembled from sources the model considers clear, consistent and credible — which is a different bar from ranking first for a keyword.",
      },
      {
        heading: "Write answers, not just pages",
        text: "Pages that state a claim plainly in the opening lines get quoted. Pages that build up to a conclusion over 800 words of throat-clearing do not. Lead with the answer, then justify it.",
      },
      {
        heading: "Consistency across the web",
        text: "Models cross-check. If your pricing, service area or founding year differs between your site, your Google Business Profile and a directory listing, you become a less reliable source. Auditing that consistency is unglamorous and highly effective.",
      },
      {
        heading: "Structured data still matters",
        text: "Organisation, Product, FAQ and LocalBusiness schema give machines an unambiguous version of what your page says. It is the cheapest clarity you can buy.",
      },
      {
        heading: "Measure differently",
        text: "Impressions may fall while qualified traffic holds steady. Track branded search volume, direct traffic and assisted conversions alongside rankings, or you will misread what is actually happening.",
      },
      {
        text: "The underlying work has not changed as much as the headlines suggest. Be clear, be consistent, be genuinely useful — the systems reading your site are just better at noticing when you are not.",
      },
    ],
  },
  {
    slug: "local-seo-map-pack",
    title: "Local SEO: getting into the map pack in a competitive city",
    excerpt:
      "Reviews, proximity and category relevance carry most of the weight. Here is how we structure a profile that keeps ranking.",
    author: "HBS Editorial",
    tag: "Local SEO",
    date: { d: "01", m: "Jun", full: "1 June 2026" },
    readTime: "5 min read",
    image: "/images/art/post-3.svg",
    body: [
      {
        text: "Three businesses get shown in the map pack. In a city like Delhi, that is three out of several hundred competing for the same phrase. Getting there is less about tricks and more about being unambiguously the best match nearby.",
      },
      {
        heading: "Categories decide the game",
        text: "Your primary category has more influence than almost anything else you control. Check what the businesses currently ranking use, and match the intent — not a broader category you think sounds better.",
      },
      {
        heading: "Reviews at a steady rate",
        text: "A burst of twenty reviews in a week looks worse than two a week for six months. Build asking into the job — after delivery, on invoice, in the follow-up message — and reply to every one.",
      },
      {
        heading: "Proximity you cannot change, prominence you can",
        text: "You will not outrank someone standing next to the searcher. You can outrank them everywhere else by having more citations, better content on your site and stronger engagement signals.",
      },
      {
        heading: "Keep the profile alive",
        text: "Weekly posts, fresh geo-tagged photos and seeded Q&A entries tell Google the listing belongs to a working business. Dormant profiles slide quietly.",
      },
      {
        text: "Track with a grid, not a single ranking. Average position hides the fact that you may be first outside your own street and invisible three kilometres away.",
      },
    ],
  },
];

export const postMap = new Map(blogPosts.map((p) => [p.slug, p]));
export const postSlugs = blogPosts.map((p) => p.slug);
