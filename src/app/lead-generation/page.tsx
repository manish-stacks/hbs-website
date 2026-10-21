import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: G
const d: PageData = {
  "slug": "lead-generation",
  "title": "Lead Generation",
  "eyebrow": "Paid Marketing",
  "tagline": "Predictable enquiries through ads, landing pages and follow-up.",
  "intro": "Predictable enquiries through ads, landing pages and follow-up. Hover Business Services LLP handles Lead Generation from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Lead Generation | Hover Business Services LLP",
  "metaDesc": "Predictable enquiries through ads, landing pages and follow-up. Get a free quote from Hover Business Services LLP.",
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
    "Offer and landing page",
    "Form and call tracking",
    "Lead quality reporting",
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
      "label": "Shopping Ads",
      "href": "/shopping-ads"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="G" />;
}
