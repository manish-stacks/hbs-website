import { HubWeb, hubMeta, type HubData } from "@/components/pages/hubs";

// Edit the text below to change this page.
const h: HubData = {
  "slug": "website-development",
  "metaTitle": "Web & App Development | Hover Business Services LLP",
  "metaDesc": "Custom web development, website design, ecommerce and mobile app services from Hover Business Services LLP.",
  "eyebrow": "Web & App Development",
  "title": "Websites and apps that work as hard as you do",
  "tagline": "Custom websites, online stores and mobile apps, built fast, secure and ready to scale.",
  "accent": "#e5231b",
  "groups": [
    {
      "title": "Web Development",
      "sub": "Custom builds on modern, reliable stacks.",
      "items": [
        {
          "label": "Custom Web Development",
          "href": "/custom-web-development",
          "body": "Fast, secure websites and web apps built around your business workflow."
        },
        {
          "label": "WordPress Development",
          "href": "/wordpress-development",
          "body": "Custom WordPress themes, plugins and stores that are easy to manage."
        },
        {
          "label": "Laravel Development",
          "href": "/laravel-development",
          "body": "Robust Laravel applications, portals and APIs."
        },
        {
          "label": "PHP Development",
          "href": "/php-development",
          "body": "Reliable PHP development for new builds and legacy upgrades."
        },
        {
          "label": "Next.js Development",
          "href": "/next-js-development",
          "body": "Modern, SEO-friendly React sites with server rendering and speed."
        },
        {
          "label": "React Development",
          "href": "/react-development",
          "body": "Interactive React front-ends and single-page applications."
        },
        {
          "label": "Node.js",
          "href": "/node-js",
          "body": "Scalable Node.js back-ends, APIs and real-time features."
        }
      ]
    },
    {
      "title": "Website Design",
      "sub": "Design that looks sharp and converts.",
      "items": [
        {
          "label": "Website Design",
          "href": "/website-design",
          "body": "Clean, conversion-focused website design that reflects your brand."
        },
        {
          "label": "Website Redesign",
          "href": "/website-redesign",
          "body": "Refresh an outdated site without losing rankings or leads."
        },
        {
          "label": "Landing Page Design",
          "href": "/landing-page-design",
          "body": "High-converting landing pages built for a single campaign goal."
        }
      ]
    },
    {
      "title": "Ecommerce",
      "sub": "Online stores built to sell.",
      "items": [
        {
          "label": "Shopify Development",
          "href": "/shopify-development",
          "body": "Shopify stores, themes and custom features that sell."
        },
        {
          "label": "WooCommerce Development",
          "href": "/woocommerce-development",
          "body": "Flexible WooCommerce stores on WordPress."
        },
        {
          "label": "Magento",
          "href": "/magento",
          "body": "Enterprise-grade Magento stores for large catalogues."
        },
        {
          "label": "Custom Ecommerce",
          "href": "/custom-ecommerce",
          "body": "Tailor-made online stores when platforms are not enough."
        }
      ]
    },
    {
      "title": "Mobile Apps",
      "sub": "Apps your users will enjoy.",
      "items": [
        {
          "label": "Mobile App Development",
          "href": "/mobile-app-development",
          "body": "Mobile apps planned, designed and built for real users."
        },
        {
          "label": "Android App Development",
          "href": "/android-app-development",
          "body": "Native Android apps that are fast and stable."
        },
        {
          "label": "App Maintenance & Support",
          "href": "/app-maintenance-support",
          "body": "Keep your app updated, secure and bug-free."
        }
      ]
    },
    {
      "title": "Support & Integration",
      "sub": "Keep everything connected and healthy.",
      "items": [
        {
          "label": "API Development & Integration",
          "href": "/api-development-integration",
          "body": "Connect your systems with secure, well-documented APIs."
        },
        {
          "label": "CRM Development",
          "href": "/crm-development",
          "body": "Custom CRM tools that match how your team sells."
        },
        {
          "label": "Website Maintenance & Support",
          "href": "/website-maintenance-support",
          "body": "Ongoing updates, backups and fixes so your site stays healthy."
        }
      ]
    }
  ],
  "why": [
    {
      "t": "One accountable team",
      "b": "Strategy, design, development and marketing under one roof."
    },
    {
      "t": "Clear scope and pricing",
      "b": "You know what you get and what it costs before we start."
    },
    {
      "t": "24/7 support",
      "b": "Reach us any time through phone, email or WhatsApp."
    }
  ]
};

export const generateMetadata = () => hubMeta(h);
export default function Page() {
  return <HubWeb h={h} />;
}
