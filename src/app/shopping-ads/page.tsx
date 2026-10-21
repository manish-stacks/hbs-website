import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: F
const d: PageData = {
  "slug": "shopping-ads",
  "title": "Shopping Ads",
  "eyebrow": "Paid Marketing",
  "tagline": "Product ads that put your catalogue in front of ready-to-buy shoppers.",
  "intro": "Product ads that put your catalogue in front of ready-to-buy shoppers. Hover Business Services LLP handles Shopping Ads from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Shopping Ads | Hover Business Services LLP",
  "metaDesc": "Product ads that put your catalogue in front of ready-to-buy shoppers. Get a free quote from Hover Business Services LLP.",
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
    "Merchant Center feed set-up",
    "Product grouping and bidding",
    "Revenue reporting",
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
      "label": "Google Ads",
      "href": "/google-ads"
    },
    {
      "label": "PPC Management",
      "href": "/ppc-management"
    },
    {
      "label": "Performance Marketing",
      "href": "/performance-marketing"
    },
    {
      "label": "Lead Generation",
      "href": "/lead-generation"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="F" />;
}
