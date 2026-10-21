import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: H
const d: PageData = {
  "slug": "website-maintenance-support",
  "title": "Website Maintenance & Support",
  "eyebrow": "Support & Integration",
  "tagline": "Ongoing updates, backups and fixes so your site stays healthy.",
  "intro": "Ongoing updates, backups and fixes so your site stays healthy. Hover Business Services LLP handles Website Maintenance & Support from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Website Maintenance & Support | Hover Business Services LLP",
  "metaDesc": "Ongoing updates, backups and fixes so your site stays healthy. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Clean, scalable code",
      "b": "Built to be fast, secure and easy to extend later."
    },
    {
      "t": "Mobile-first",
      "b": "Every page is tested on phones, tablets and desktops."
    },
    {
      "t": "You own everything",
      "b": "Code, hosting and domains stay in your name."
    },
    {
      "t": "Support after launch",
      "b": "Maintenance and fixes are available on a monthly plan."
    }
  ],
  "includes": [
    "Updates and backups",
    "Security monitoring",
    "Monthly support hours",
    "Mobile-friendly, tested build",
    "Security and speed checks",
    "Post-launch support"
  ],
  "process": [
    {
      "t": "Discover",
      "b": "We confirm scope, users and features before design starts."
    },
    {
      "t": "Build",
      "b": "We develop in short stages so you can review progress early."
    },
    {
      "t": "Launch and support",
      "b": "We test, launch and stay on hand for fixes and upgrades."
    }
  ],
  "faqs": [
    {
      "q": "Who owns the code and accounts?",
      "a": "You do. Code, hosting and domains stay in your name from day one."
    },
    {
      "q": "How long does a project take?",
      "a": "Small sites take 3 to 6 weeks. Stores and custom apps are timed after a short discovery."
    },
    {
      "q": "Do you offer support after launch?",
      "a": "Yes. Maintenance and support plans are available monthly."
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
      "label": "API Development & Integration",
      "href": "/api-development-integration"
    },
    {
      "label": "CRM Development",
      "href": "/crm-development"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="H" />;
}
