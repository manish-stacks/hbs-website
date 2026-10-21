import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: A
const d: PageData = {
  "slug": "schools-marketing",
  "title": "Digital Marketing for Schools",
  "eyebrow": "Education & Hospitality",
  "tagline": "Marketing that focuses on admission enquiries and parent trust.",
  "intro": "Hover Business Services LLP helps schools brands grow online with SEO, paid ads, social media and websites that match how their customers search and buy.",
  "accent": "#e5231b",
  "metaTitle": "Digital Marketing for Schools | Hover Business Services LLP",
  "metaDesc": "Marketing that focuses on admission enquiries and parent trust. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Local and national reach",
      "b": "Visibility where your customers actually look."
    },
    {
      "t": "Compliant messaging",
      "b": "Clear, honest claims suited to your industry."
    },
    {
      "t": "Fast launch",
      "b": "First campaigns usually live within two weeks."
    },
    {
      "t": "Dedicated manager",
      "b": "One contact who knows your business."
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
      "label": "Colleges & Universities",
      "href": "/colleges-universities-marketing"
    },
    {
      "label": "Coaching Institutes",
      "href": "/coaching-institutes-marketing"
    },
    {
      "label": "Hotels & Resorts",
      "href": "/hotels-resorts-marketing"
    },
    {
      "label": "Travel & Tourism",
      "href": "/travel-tourism-marketing"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="A" />;
}
