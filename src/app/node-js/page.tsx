import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: C
const d: PageData = {
  "slug": "node-js",
  "title": "Node.js Development",
  "eyebrow": "Web Development",
  "tagline": "Scalable Node.js back-ends, APIs and real-time features.",
  "intro": "Scalable Node.js back-ends, APIs and real-time features. Hover Business Services LLP handles Node.js Development from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "Node.js Development | Hover Business Services LLP",
  "metaDesc": "Scalable Node.js back-ends, APIs and real-time features. Get a free quote from Hover Business Services LLP.",
  "benefits": [
    {
      "t": "Clear milestones",
      "b": "You review progress in short stages, not at the very end."
    },
    {
      "t": "Performance focus",
      "b": "Speed and Core Web Vitals are part of the brief."
    },
    {
      "t": "Secure by default",
      "b": "Updates, backups and security checks are built in."
    },
    {
      "t": "Documented hand-over",
      "b": "Simple guides so your team can manage content."
    }
  ],
  "includes": [
    "REST and GraphQL APIs",
    "Database integration",
    "Monitoring and logging",
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
      "label": "Custom Web Development",
      "href": "/custom-web-development"
    },
    {
      "label": "WordPress Development",
      "href": "/wordpress-development"
    },
    {
      "label": "Laravel Development",
      "href": "/laravel-development"
    },
    {
      "label": "PHP Development",
      "href": "/php-development"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="C" />;
}
