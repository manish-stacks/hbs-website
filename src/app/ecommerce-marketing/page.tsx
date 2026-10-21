import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: F
const d: PageData = {
  "slug": "ecommerce-marketing",
  "title": "Digital Marketing for Ecommerce",
  "eyebrow": "Retail & Lifestyle",
  "tagline": "Marketing that focuses on traffic, conversion and repeat purchases.",
  "intro": "Hover Business Services LLP helps ecommerce brands grow online with SEO, paid ads, social media and websites that match how their customers search and buy.",
  "accent": "#e5231b",
  "metaTitle": "Digital Marketing for Ecommerce | Hover Business Services LLP",
  "metaDesc": "Marketing that focuses on traffic, conversion and repeat purchases. Get a free quote from Hover Business Services LLP.",
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
      "label": "Retail Stores",
      "href": "/retail-stores-marketing"
    },
    {
      "label": "Fashion & Apparel",
      "href": "/fashion-apparel-marketing"
    },
    {
      "label": "Jewellery",
      "href": "/jewellery-marketing"
    },
    {
      "label": "Home Decor",
      "href": "/home-decor-marketing"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="F" />;
}
