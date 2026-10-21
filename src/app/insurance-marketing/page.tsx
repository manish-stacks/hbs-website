import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: D
const d: PageData = {
  "slug": "insurance-marketing",
  "title": "Digital Marketing for Insurance",
  "eyebrow": "Professional Services",
  "tagline": "Marketing that focuses on quote requests and long-term policyholder trust.",
  "intro": "Hover Business Services LLP helps insurance brands grow online with SEO, paid ads, social media and websites that match how their customers search and buy.",
  "accent": "#e5231b",
  "metaTitle": "Digital Marketing for Insurance | Hover Business Services LLP",
  "metaDesc": "Marketing that focuses on quote requests and long-term policyholder trust. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Sector knowledge",
      "b": "We plan around how customers in this sector search and decide."
    },
    {
      "t": "Full-funnel approach",
      "b": "SEO, ads, social and web working together."
    },
    {
      "t": "Trust-building content",
      "b": "Reviews, case studies and clear service pages."
    },
    {
      "t": "Measured results",
      "b": "Leads and sales tracked month by month."
    }
  ],
  "includes": [
    "Industry and competitor audit",
    "Channel plan with clear goals",
    "Campaign set-up and management",
    "Monthly reporting and review"
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
      "q": "Do you have experience in this sector?",
      "a": "Yes. We plan campaigns around how customers in this sector search, compare and decide."
    },
    {
      "q": "Which services work best?",
      "a": "We start with an audit and recommend the mix of SEO, ads, social and web that fits your goals."
    },
    {
      "q": "Can you work with my existing team?",
      "a": "Yes. We can run everything or support your in-house team."
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
      "label": "Law Firms",
      "href": "/law-firms-marketing"
    },
    {
      "label": "Accounting & Finance",
      "href": "/accounting-finance-marketing"
    },
    {
      "label": "Consulting",
      "href": "/consulting-marketing"
    },
    {
      "label": "Business Services",
      "href": "/business-services-marketing"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="D" />;
}
