export type PostSection = {
  heading?: string;
  id?: string;
  text: string;
  proTip?: string;
  points?: string[];
  subtext?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  tag: string;
  date: { d: string; m: string; full: string };
  readTime: string;
  image: string;
  keyTakeaways?: string[];
  body: PostSection[];
  checklist?: { title: string; desc: string }[];
};

export const blogPosts: Post[] = [
  {
    slug: "local-seo-map-pack",
    title: "Local SEO: Getting into the Map Pack in a Competitive City",
    excerpt:
      "Reviews, proximity, and category relevance carry most of the algorithmic weight. Here is our battle-tested framework to capture and hold top 3 Google Map rankings in high-density metros.",
    author: "HBS Search Strategy Team",
    authorRole: "Hyper-Local & Map SEO Specialists",
    authorBio:
      "Our SEO division specializes in multi-location Google Business Profile optimization, citation engineering, and algorithmic map ranking across competitive urban centers.",
    tag: "Local SEO",
    date: { d: "01", m: "Jun", full: "1 June 2026" },
    readTime: "8 min read",
    image: "/images/art/post-3.svg",
    keyTakeaways: [
      "The Google 3-Pack captures over 44% of all high-intent clicks on local commercial search queries.",
      "Primary category selection accounts for over 60% of foundational map pack relevance — never guess.",
      "Review velocity, recency, and customer sentiment matter significantly more than sheer volume alone.",
      "High-authority local citations and geo-targeted landing page content allow you to outrank competitors with closer proximity.",
      "A dormant profile will slowly slide down; consistent weekly updates and authentic geo-photos protect your rankings.",
    ],
    body: [
      {
        text: "Three businesses get shown in the Google Map Pack. In a high-density commercial metro like Delhi, Mumbai, or Bengaluru, that represents three coveted spots out of several hundred qualified businesses competing for the exact same transaction-ready search term. Getting there is not about exploiting fleeting hacks; it is about engineering your brand to be mathematically and unambiguously the best match nearby.",
        proTip:
          "Google's local algorithm is not searching for the 'largest' company; it calculates the most prominent, active, and mathematically relevant match within the searcher's physical radius.",
      },
      {
        heading: "1. Primary Category Matching: The 60% Algorithmic Weight",
        id: "primary-category-matching",
        text: "Your primary Google Business Profile category has more computational influence than almost any other single factor you control. Google treats the primary category as a binary qualifying filter. If you select a vague or tangential category — such as choosing 'Corporate Office' instead of 'Digital Marketing Agency' — you immediately forfeit eligibility for high-volume commercial keywords.",
        proTip:
          "Audit the top 3 ranking competitors in incognito mode using the Google Maps inspector. If all 3 share the exact same primary category, that is Google's declared intent benchmark for your region.",
        points: [
          "Match the primary category of the undisputed market leader in your metro area.",
          "Select 3 to 5 supporting secondary categories that describe your core billable services without diluting relevance.",
          "Never stuff extraneous keywords into your official GBP title unless they match your legal trade license or physical exterior signage.",
        ],
      },
      {
        heading: "2. Review Velocity, Recency & Sentiment Optimization",
        id: "review-velocity-sentiment",
        text: "An artificial burst of twenty reviews acquired within 48 hours followed by three months of total silence triggers algorithmic suspicion and review filtering. Google prioritizes review velocity and steady recency. Acquiring two to four authentic customer reviews consistently every single week will consistently outrank a dormant competitor holding 500 legacy reviews.",
        proTip:
          "Guide satisfied clients to naturally mention specific services and micro-locations in their reviews (e.g., 'HBS built our e-commerce platform in Pitampura'). Google's NLP engine indexes these contextual terms.",
        points: [
          "Embed automated WhatsApp review invitations into your post-delivery invoicing or sign-off workflow.",
          "Maintain a 100% owner response rate — answer every review within 24 hours with polite, context-rich notes.",
          "Encourage clients to upload genuine project or store photos alongside their 5-star ratings.",
        ],
      },
      {
        heading: "3. Proximity vs. Prominence: Beating Rivals Closer to the Searcher",
        id: "proximity-vs-prominence",
        text: "While you cannot physically alter your registered geographic coordinates, you can decisively beat competitors closer to the searcher by overwhelming them with Prominence. Prominence is Google's measure of how well-known, cited, and authoritative your entity is across the broader web.",
        proTip:
          "Even a minor variation like 'Suite 204' on one directory and '#204' on another introduces ambiguity into Google's Knowledge Graph entity resolution model. Keep your NAP 100% identical.",
        points: [
          "Maintain uniform NAP (Name, Address, Phone) citations across top-tier Indian directories (JustDial, IndiaMart, Sulekha, YellowPages).",
          "Build dedicated hyper-local landing pages on your website with Schema LocalBusiness structured data.",
          "Embed official Google Maps driving directions directly onto your contact page to reinforce geo-coordinates.",
        ],
      },
      {
        heading: "4. Active Signals: Geo-Tagged Photos & Weekly GBP Updates",
        id: "active-signals-photos",
        text: "Google favors living, thriving businesses. When a business profile sits untouched for months, the ranking algorithm gradually lowers its prominence score. Publishing weekly Google Updates, showcasing real team and client project photos, and maintaining an active Q&A section sends continuous vital signs to the crawler.",
        proTip:
          "Avoid using generic stock photos on your Google Business Profile. Google Cloud Vision AI scans images and can detect duplicated stock assets, devaluing your profile trust score.",
        points: [
          "Publish a weekly Google Post highlighting a case study, seasonal promo, or company milestone with a clear CTA button.",
          "Upload high-resolution, unedited photos of your office, team, and client deliveries with native metadata.",
          "Pre-seed the Google Q&A section with your most common customer inquiries and provide comprehensive answers.",
        ],
      },
      {
        heading: "5. Hyper-Local Grid Tracking & Continuous Maintenance",
        id: "grid-tracking-maintenance",
        text: "Single-point ranking trackers are dangerously misleading. An average ranking of '#2.1' fails to reveal that your business ranks #1 within 500 meters of your doorstep but vanishes completely just three kilometers away. Modern local SEO requires analyzing a 7x7 or 9x9 geo-grid to identify proximity boundaries and target expansion strategies.",
        proTip:
          "Inspect your grid for directional drop-offs. If your ranking weakens to the West, build targeted localized case studies and acquire localized citations in that specific suburb.",
        points: [
          "Track keyword rankings on a 500m to 5km radius grid twice every month.",
          "Identify and report fraudulent map listings (fake keyword-stuffed names) in your immediate radius.",
          "Audit incoming traffic weekly through Google Business Profile Performance Insights to monitor phone calls and driving direction requests.",
        ],
      },
    ],
    checklist: [
      {
        title: "Audit Primary Category Alignment",
        desc: "Ensure your primary category matches the top 3 ranking competitors in your specific city.",
      },
      {
        title: "Clean Up NAP Inconsistencies",
        desc: "Scan all web directories to ensure your business name, address, and phone number are 100% identical.",
      },
      {
        title: "Automate Weekly Review Collection",
        desc: "Implement a direct WhatsApp or SMS review invitation protocol to maintain steady review velocity.",
      },
      {
        title: "Upload 5 Real Workspace Photos",
        desc: "Add high-resolution, authentic photos of your team and office without watermarks or stock elements.",
      },
      {
        title: "Publish a Weekly Google Business Post",
        desc: "Share fresh updates with a direct 'Book Now' or 'Learn More' action link.",
      },
      {
        title: "Seed 10 Strategic Q&A Inquiries",
        desc: "Answer customer questions with natural service and location terms to capture long-tail search intent.",
      },
      {
        title: "Deploy 7x7 Geo-Grid Tracking",
        desc: "Measure multi-point rankings across a 5km radius to pinpoint geographic drop-offs.",
      },
    ],
  },
  {
    slug: "web-development-essentials",
    title: "Web Development Essentials Every Modern Business Should Get Right",
    excerpt:
      "Speed, clean structure, and server-side tracking decide whether a website earns high-intent traffic or just burns hosting costs. Here is the architectural checklist we enforce on every build.",
    author: "HBS Engineering Team",
    authorRole: "Full-Stack & Performance Architects",
    authorBio:
      "HBS Engineering designs high-speed Next.js web applications, headless commerce systems, and conversion-optimized corporate platforms.",
    tag: "Web Development",
    date: { d: "03", m: "Jun", full: "3 June 2026" },
    readTime: "6 min read",
    image: "/images/art/post-1.svg",
    keyTakeaways: [
      "Most corporate sites are slow not because of their underlying framework, but because of unoptimized third-party scripts.",
      "Fixing the top 3 conversion-generating service pages yields 5x the ROI of redesigning an aesthetic homepage.",
      "Semantic HTML and rigorous heading hierarchies outperform decorative animations in both UX and organic search.",
      "Server-side event tracking and unified UTM standards must precede launch to protect marketing attribution.",
    ],
    body: [
      {
        text: "Most business websites are not slow because of the modern framework they were engineered with. They are slow because of everything bolted on afterward — four redundant analytics snippets, an unoptimized carousel plugin, and multi-megabyte hero banners exported straight out of a DSLR camera without compression. The true secret of high performance is strategic subtraction.",
        proTip:
          "Enforce a strict JavaScript performance budget: aim for under 150KB initial JS bundle and a Largest Contentful Paint (LCP) under 1.8 seconds on 4G mobile devices.",
      },
      {
        heading: "1. Optimize the Pages That Actually Generate Revenue",
        id: "pages-that-matter",
        text: "Before spending weeks refining minor visual flourishes, pull up your analytics and identify the top three landing pages that originate qualified enquiries. Those are the pages worth obsessing over. A decorative homepage redesign rarely moves commercial revenue as much as fixing a high-traffic service page that already ranks on page one.",
        points: [
          "Prioritize high-intent service and pricing pages over low-intent informational pages.",
          "Ensure primary call-to-action buttons are immediately accessible above the digital fold.",
          "Streamline contact forms: reducing form fields from 7 to 4 routinely boosts submission rates by over 35%.",
        ],
      },
      {
        heading: "2. Structure Beats Decorative Noise",
        id: "structure-beats-decoration",
        text: "A clear heading hierarchy, descriptive internal anchor links, and clean semantic markup do far more for both real users and search crawlers than heavy decorative animations. If a potential customer reading only your H2 and H3 headings cannot immediately understand your offering, the page requires restructuring, not more animations.",
        points: [
          "Maintain a logical heading flow: never skip heading levels for visual styling.",
          "Use descriptive anchor text for internal links rather than generic 'click here' labels.",
          "Ensure interactive controls are fully keyboard and screen-reader accessible.",
        ],
      },
      {
        heading: "3. Conversion Tracking You Can Actually Trust",
        id: "conversion-tracking",
        text: "Conversion tracking must be verified in staging before launch, never after the first month of confused data. Server-side event tracking, clean UTM tagging conventions, and a unified definition of a qualified lead will save more marketing capital than months of speculative optimization.",
        proTip:
          "Client-side ad blockers routinely wipe out 20% to 35% of Google Ads conversion events. Moving to server-side Google Tag Manager protects your bidding algorithms.",
        points: [
          "Deploy server-side event tracking via Cloudflare or Google Cloud for accurate attribution.",
          "Standardize UTM campaign naming conventions across all paid and social channels.",
          "Verify that thank-you pages and webhook events fire only once per unique lead submission.",
        ],
      },
    ],
    checklist: [
      {
        title: "Compress Media Assets to WebP / AVIF",
        desc: "Convert all raster images to modern responsive formats with explicit width and height dimensions.",
      },
      {
        title: "Audit Third-Party Script Overhead",
        desc: "Remove unused tag managers, chat widgets, and analytics pixels slowing down the main thread.",
      },
      {
        title: "Implement Schema.org Structured Data",
        desc: "Validate Organization, Service, and BreadcrumbList markup with Google's Rich Results test tool.",
      },
      {
        title: "Test Form Submissions on Mobile Devices",
        desc: "Verify that input autocompletion, numeric keyboards, and button tap targets function smoothly.",
      },
    ],
  },
  {
    slug: "ai-changing-search",
    title: "How AI is Changing Search — And What to Do About It Now",
    excerpt:
      "AI Overviews and generative answers are pushing traditional blue links down the page. The brands winning are those structuring content for both search crawlers and large language models.",
    author: "HBS Editorial & AI Labs",
    authorRole: "Search Intelligence & AI Strategists",
    authorBio:
      "Analyzing how generative AI models, vector search, and entity extraction transform digital discoverability for scaling enterprises.",
    tag: "AI & Search",
    date: { d: "02", m: "Jun", full: "2 June 2026" },
    readTime: "7 min read",
    image: "/images/art/post-2.svg",
    keyTakeaways: [
      "AI Overviews synthesize answers from concise, highly authoritative sources rather than just highest keyword density.",
      "Leading with unambiguous answers in the first 100 words increases inclusion rate in Google AI Overviews by 60%.",
      "Large language models cross-reference entity facts across your website, Google Business Profile, and third-party citations.",
      "Tracking branded search volume and assisted conversions is now critical as raw organic impressions fluctuate.",
    ],
    body: [
      {
        text: "Search results now open with a generated AI answer more often than not. That answer is assembled from sources the underlying model considers clear, mathematically consistent, and authoritative — which is a radically different criteria from simply stuffing keywords to rank first for a single phrase.",
        proTip:
          "Format core answers in direct, definitive declarative sentences within the opening two sentences of every section.",
      },
      {
        heading: "1. Write Definite Answers, Not Just Keyword Pages",
        id: "write-definite-answers",
        text: "Pages that state a direct answer plainly in their opening lines get quoted by AI Overviews and ChatGPT search. Pages that build up to a vague conclusion over 800 words of introductory fluff get ignored. Lead with the core answer immediately, then follow with data, methodology, and practical examples.",
        points: [
          "State the solution in the very first paragraph beneath each major H2 heading.",
          "Use formatted bulleted lists for sequential steps, specifications, and comparative criteria.",
          "Provide concrete numerical data and benchmarks rather than abstract generalizations.",
        ],
      },
      {
        heading: "2. Absolute Entity Consistency Across the Digital Web",
        id: "entity-consistency",
        text: "Language models evaluate entity reliability through cross-validation. If your service offerings, company founding date, office address, or executive leadership differ between your website, your Google Business Profile, Crunchbase, and LinkedIn, your entity trust score drops.",
        points: [
          "Conduct a thorough digital footprint audit to align entity facts across all web platforms.",
          "Implement robust Organization, FAQPage, and SameAs schema to link your authoritative profiles.",
          "Claim and optimize knowledge graph entries on industry repositories and directories.",
        ],
      },
      {
        heading: "3. Redefining Digital Performance Metrics",
        id: "redefining-metrics",
        text: "Organic impressions on informational queries may fluctuate as AI answers resolve quick queries directly on the search engine results page. However, the traffic that does click through is substantially more qualified and conversion-ready. Success must be measured through branded search volume, qualified lead submissions, and pipeline value rather than vanity click counts.",
        points: [
          "Track branded search query growth in Google Search Console as a measure of topical authority.",
          "Monitor direct visits and high-intent conversion rate trends alongside raw organic sessions.",
          "Evaluate multi-touch attribution to assess the influence of top-of-funnel AI mentions.",
        ],
      },
    ],
    checklist: [
      {
        title: "Answer Queries Directly in First 50 Words",
        desc: "Provide clear, factual answers at the very top of each section to earn AI Overview citations.",
      },
      {
        title: "Implement Complete Organization Schema",
        desc: "Add comprehensive SameAs references to all official corporate social and directory profiles.",
      },
      {
        title: "Audit Facts Across Third-Party Directories",
        desc: "Eliminate discrepancies in pricing, address, services, and founding dates across the web.",
      },
      {
        title: "Track Branded Search Volume Shifts",
        desc: "Establish a dedicated dashboard to measure organic brand recall and commercial inquiries.",
      },
    ],
  },
];

export const postMap = new Map(blogPosts.map((p) => [p.slug, p]));
export const postSlugs = blogPosts.map((p) => p.slug);
