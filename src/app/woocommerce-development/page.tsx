import { PageView, pageMeta, type PageData } from "@/components/pages/layouts";

// Edit the text below to change this page. Layout style: H
const d: PageData = {
  "slug": "woocommerce-development",
  "title": "WooCommerce Development",
  "eyebrow": "Ecommerce",
  "tagline": "Flexible WooCommerce stores on WordPress.",
  "intro": "Flexible WooCommerce stores on WordPress. Hover Business Services LLP handles WooCommerce Development from planning to delivery, with a clear scope, regular updates and one point of contact.",
  "accent": "#e5231b",
  "metaTitle": "WooCommerce Development | Hover Business Services LLP",
  "metaDesc": "Flexible WooCommerce stores on WordPress. Get a free quote from Hover Business Services LLP.",
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
    "Store set-up and design",
    "Payment and tax set-up",
    "Plugin customisation",
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
      "label": "Shopify Development",
      "href": "/shopify-development"
    },
    {
      "label": "Magento",
      "href": "/magento"
    },
    {
      "label": "Custom Ecommerce",
      "href": "/custom-ecommerce"
    }
  ]
};

export const generateMetadata = () => pageMeta(d);
export default function Page() {
  return <PageView d={d} v="H" />;
}
