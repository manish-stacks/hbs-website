import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: E
const d: PageData = {
  "slug": "website-redesign",
  "title": "Website Redesign",
  "eyebrow": "Website Design",
  "tagline": "Refresh an outdated site without losing rankings or leads.",
  "intro": "Refresh an outdated site without losing rankings or leads. Hover Business Services LLP handles Website Redesign from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Website Redesign | Hover Business Services LLP",
  "metaDesc": "Refresh an outdated site without losing rankings or leads. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Fresh, original work",
      "b": "No templates. Every piece is designed for you."
    },
    {
      "t": "Consistent look",
      "b": "One visual language across every channel."
    },
    {
      "t": "Quick turnaround",
      "b": "Most projects finish in one to three weeks."
    },
    {
      "t": "Source files included",
      "b": "You keep editable files once approved."
    }
  ],
  "includes": [
    "Current-site audit",
    "New design and structure",
    "SEO-safe migration",
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
      "label": "Landing Page Design",
      "href": "/landing-page-design"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="C" />;
}
