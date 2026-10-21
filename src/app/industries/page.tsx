import { HubIndustries, hubMeta, type HubData } from "@/components/pages/hubs";

// Edit the text below to change this page.
const h: HubData = {
  "slug": "industries",
  "metaTitle": "Industries We Serve | Hover Business Services LLP",
  "metaDesc": "Digital marketing for healthcare, professional services, education, real estate and retail businesses.",
  "eyebrow": "Industries",
  "title": "Marketing shaped around your industry",
  "tagline": "From healthcare to retail, we plan campaigns around how your customers search, compare and buy.",
  "accent": "#e5231b",
  "groups": [
    {
      "title": "Healthcare & Wellness",
      "sub": "Trust-led marketing for care providers.",
      "items": [
        {
          "label": "Hospitals",
          "href": "/hospitals-marketing",
          "body": "Marketing that focuses on patient trust, local search and appointment bookings."
        },
        {
          "label": "Dental Clinics",
          "href": "/dental-clinics-marketing",
          "body": "Marketing that focuses on local rankings, reviews and booked consultations."
        },
        {
          "label": "Fitness & Wellness",
          "href": "/fitness-wellness-marketing",
          "body": "Marketing that focuses on memberships, trials and community engagement."
        },
        {
          "label": "Pharmaceuticals",
          "href": "/pharmaceuticals-marketing",
          "body": "Marketing that focuses on compliant content, B2B reach and brand authority."
        }
      ]
    },
    {
      "title": "Professional Services",
      "sub": "Credibility and steady client enquiries.",
      "items": [
        {
          "label": "Law Firms",
          "href": "/law-firms-marketing",
          "body": "Marketing that focuses on high-intent enquiries and a credible online profile."
        },
        {
          "label": "Accounting & Finance",
          "href": "/accounting-finance-marketing",
          "body": "Marketing that focuses on trust, local visibility and steady client enquiries."
        },
        {
          "label": "Insurance",
          "href": "/insurance-marketing",
          "body": "Marketing that focuses on quote requests and long-term policyholder trust."
        },
        {
          "label": "Consulting",
          "href": "/consulting-marketing",
          "body": "Marketing that focuses on thought leadership and qualified inbound leads."
        },
        {
          "label": "Business Services",
          "href": "/business-services-marketing",
          "body": "Marketing that focuses on B2B lead generation and clear service positioning."
        },
        {
          "label": "Tax Consultants",
          "href": "/tax-consultants-marketing",
          "body": "Marketing that focuses on seasonal demand, local search and client trust."
        },
        {
          "label": "Corporate Services",
          "href": "/corporate-services-marketing",
          "body": "Marketing that focuses on compliance-led credibility and consistent enquiries."
        }
      ]
    },
    {
      "title": "Education & Hospitality",
      "sub": "Admissions, bookings and reputation.",
      "items": [
        {
          "label": "Schools",
          "href": "/schools-marketing",
          "body": "Marketing that focuses on admission enquiries and parent trust."
        },
        {
          "label": "Colleges & Universities",
          "href": "/colleges-universities-marketing",
          "body": "Marketing that focuses on application growth and programme visibility."
        },
        {
          "label": "Coaching Institutes",
          "href": "/coaching-institutes-marketing",
          "body": "Marketing that focuses on enrolments, results proof and local reach."
        },
        {
          "label": "Hotels & Resorts",
          "href": "/hotels-resorts-marketing",
          "body": "Marketing that focuses on direct bookings and strong review profiles."
        },
        {
          "label": "Travel & Tourism",
          "href": "/travel-tourism-marketing",
          "body": "Marketing that focuses on seasonal campaigns and booking enquiries."
        },
        {
          "label": "Restaurants & Cafes",
          "href": "/restaurants-cafes-marketing",
          "body": "Marketing that focuses on local discovery, reviews and online orders."
        },
        {
          "label": "Event Management",
          "href": "/event-management-marketing",
          "body": "Marketing that focuses on portfolio showcase and enquiry-driven leads."
        }
      ]
    },
    {
      "title": "Real Estate & Industrial",
      "sub": "Project leads and B2B visibility.",
      "items": [
        {
          "label": "Real Estate",
          "href": "/real-estate-marketing",
          "body": "Marketing that focuses on property leads, project launches and local trust."
        },
        {
          "label": "Construction",
          "href": "/construction-marketing",
          "body": "Marketing that focuses on project enquiries and a professional portfolio."
        },
        {
          "label": "Manufacturing",
          "href": "/manufacturing-marketing",
          "body": "Marketing that focuses on B2B visibility, catalogues and export leads."
        },
        {
          "label": "Interior Design",
          "href": "/interior-design-marketing",
          "body": "Marketing that focuses on visual portfolios and design consultations."
        },
        {
          "label": "Industrial Equipment",
          "href": "/industrial-equipment-marketing",
          "body": "Marketing that focuses on technical content and B2B quotations."
        },
        {
          "label": "Warehousing & Logistics",
          "href": "/warehousing-logistics-marketing",
          "body": "Marketing that focuses on B2B lead generation and service-area visibility."
        }
      ]
    },
    {
      "title": "Retail & Lifestyle",
      "sub": "Sales and brand growth for product businesses.",
      "items": [
        {
          "label": "Ecommerce",
          "href": "/ecommerce-marketing",
          "body": "Marketing that focuses on traffic, conversion and repeat purchases."
        },
        {
          "label": "Retail Stores",
          "href": "/retail-stores-marketing",
          "body": "Marketing that focuses on footfall, local search and online sales."
        },
        {
          "label": "Fashion & Apparel",
          "href": "/fashion-apparel-marketing",
          "body": "Marketing that focuses on visual social growth and seasonal campaigns."
        },
        {
          "label": "Jewellery",
          "href": "/jewellery-marketing",
          "body": "Marketing that focuses on trust, premium branding and showroom visits."
        },
        {
          "label": "Home Decor",
          "href": "/home-decor-marketing",
          "body": "Marketing that focuses on visual storytelling and online orders."
        },
        {
          "label": "Furniture",
          "href": "/furniture-marketing",
          "body": "Marketing that focuses on product visibility, showroom visits and online enquiries."
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
  return <HubIndustries h={h} />;
}
