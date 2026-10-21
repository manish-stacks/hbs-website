import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: D
const d: PageData = {
  "slug": "website-design",
  "title": "Website Design",
  "eyebrow": "Website Design",
  "tagline": "Clean, conversion-focused website design that reflects your brand.",
  "intro": "Clean, conversion-focused website design that reflects your brand. Hover Business Services LLP handles Website Design from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Website Design | Hover Business Services LLP",
  "metaDesc": "Clean, conversion-focused website design that reflects your brand. Get a free quote from Hover Business Services LLP.",
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
    "Wireframes and mock-ups",
    "Responsive layouts",
    "Brand-consistent UI",
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
      "label": "Website Redesign",
      "href": "/website-redesign"
    },
    {
      "label": "Landing Page Design",
      "href": "/landing-page-design"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="C" />;
}
