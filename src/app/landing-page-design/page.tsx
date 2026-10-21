import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: F
const d: PageData = {
  "slug": "landing-page-design",
  "title": "Landing Page Design",
  "eyebrow": "Website Design",
  "tagline": "High-converting landing pages built for a single campaign goal.",
  "intro": "High-converting landing pages built for a single campaign goal. Hover Business Services LLP handles Landing Page Design from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Landing Page Design | Hover Business Services LLP",
  "metaDesc": "High-converting landing pages built for a single campaign goal. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Brand-first thinking",
      "b": "Every design starts from your brand, audience and goals."
    },
    {
      "t": "Multiple concepts",
      "b": "You choose a direction before we refine it."
    },
    {
      "t": "Ready-to-use files",
      "b": "Print, web and social formats delivered together."
    },
    {
      "t": "Revisions included",
      "b": "Agreed revision rounds so the result matches your brief."
    }
  ],
  "includes": [
    "Message and layout plan",
    "Fast, mobile-first build",
    "Form and A/B test set-up",
    "Agreed revision rounds",
    "Source and final files",
    "Brand-consistent output"
  ],
  "process": [
    {
      "t": "Brief",
      "b": "We learn your brand, audience and goals."
    },
    {
      "t": "Design",
      "b": "You receive concepts, then refine them with us."
    },
    {
      "t": "Deliver",
      "b": "Final files are prepared for web, print or social."
    }
  ],
  "faqs": [
    {
      "q": "How many revisions are included?",
      "a": "Scope includes agreed revision rounds so the final result matches your brief."
    },
    {
      "q": "Do I receive the source files?",
      "a": "Yes. You receive final files and source files once the project is approved."
    },
    {
      "q": "How long does design take?",
      "a": "Most projects take 1 to 3 weeks, depending on size and feedback speed."
    }
  ],
  "stats": [
    [
      "5+",
      "Years in business"
    ],
    [
      "1500+",
      "Happy clients"
    ],
    [
      "24/7",
      "Support available"
    ]
  ],
  "related": [
    {
      "label": "Website Design",
      "href": "/website-design"
    },
    {
      "label": "Website Redesign",
      "href": "/website-redesign"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="C" />;
}
