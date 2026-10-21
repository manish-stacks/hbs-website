import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: G
const d: PageData = {
  "slug": "seo-packages",
  "title": "SEO Packages",
  "eyebrow": "Packages",
  "tagline": "Clear monthly SEO plans with fixed scope and pricing.",
  "intro": "Clear monthly SEO plans with fixed scope and pricing. Hover Business Services LLP handles SEO Packages from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "SEO Packages | Hover Business Services LLP",
  "metaDesc": "Clear monthly SEO plans with fixed scope and pricing. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Built around leads",
      "b": "We measure calls, forms and sales, not vanity numbers."
    },
    {
      "t": "Senior review",
      "b": "A senior lead checks every campaign before it goes live."
    },
    {
      "t": "Transparent pricing",
      "b": "Fixed scope and clear costs, with no hidden fees."
    },
    {
      "t": "Fast communication",
      "b": "One account manager and replies within one working day."
    }
  ],
  "includes": [
    "Defined keyword and page scope",
    "Monthly deliverables list",
    "Transparent reporting",
    "Dedicated account manager",
    "Clear monthly reporting",
    "No hidden fees"
  ],
  "process": [
    {
      "t": "Audit and plan",
      "b": "We review your site, competitors and goals, then agree a clear plan."
    },
    {
      "t": "Execute",
      "b": "Our specialists carry out the plan with weekly progress updates."
    },
    {
      "t": "Measure and improve",
      "b": "Monthly reports show what worked and what we will do next."
    }
  ],
  "faqs": [
    {
      "q": "How soon will I see results?",
      "a": "Paid campaigns can produce leads within weeks. SEO and content usually compound over 3 to 6 months."
    },
    {
      "q": "Will I see what you are doing?",
      "a": "Yes. You get a clear monthly report with actions taken, key numbers and next steps."
    },
    {
      "q": "Is there a long lock-in?",
      "a": "No. After an initial set-up period we work month to month."
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
      "label": "Local SEO Packages",
      "href": "/local-seo-packages"
    },
    {
      "label": "Ecommerce SEO Packages",
      "href": "/ecommerce-seo-packages"
    },
    {
      "label": "PPC Packages",
      "href": "/ppc-packages"
    },
    {
      "label": "Social Media Packages",
      "href": "/social-media-packages"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="G" />;
}
