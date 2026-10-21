import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: D
const d: PageData = {
  "slug": "digital-marketing-packages",
  "title": "Digital Marketing Packages",
  "eyebrow": "Packages",
  "tagline": "Bundled SEO, ads and social plans that work as one growth system.",
  "intro": "Bundled SEO, ads and social plans that work as one growth system. Hover Business Services LLP handles Digital Marketing Packages from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Digital Marketing Packages | Hover Business Services LLP",
  "metaDesc": "Bundled SEO, ads and social plans that work as one growth system. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Strategy before spend",
      "b": "Every plan starts with an audit of your market, competitors and goals."
    },
    {
      "t": "Specialists, not generalists",
      "b": "Each channel is handled by a dedicated expert."
    },
    {
      "t": "Plain-English reporting",
      "b": "Monthly reports show what we did, what changed and what is next."
    },
    {
      "t": "No lock-in",
      "b": "Month-to-month work after the initial set-up, with full ownership of your accounts."
    }
  ],
  "includes": [
    "Integrated channel plan",
    "Dedicated account manager",
    "Single monthly report",
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
      "label": "SEO Packages",
      "href": "/seo-packages"
    },
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
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="D" />;
}
