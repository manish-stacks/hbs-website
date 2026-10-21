"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Briefcase,
  GraduationCap,
  Building,
  Store,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface IndustryGroup {
  id: string;
  category: string;
  icon: typeof Heart;
  description: string;
  items: { name: string; href: string; tag: string }[];
}

const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    id: "healthcare",
    category: "Healthcare & Wellness",
    icon: Heart,
    description: "HIPAA-conscious search optimization, patient acquisition funnels, and medical reputational growth.",
    items: [
      { name: "Hospitals", href: "/hospitals-marketing", tag: "OPD Bookings & SEO" },
      { name: "Dental Clinics", href: "/dental-clinics-marketing", tag: "Local Google 3-Pack" },
      { name: "Fitness & Wellness", href: "/fitness-wellness-marketing", tag: "Membership Funnels" },
      { name: "Pharmaceuticals", href: "/pharmaceuticals-marketing", tag: "B2B & Product Search" },
    ],
  },
  {
    id: "professional",
    category: "Professional & Corporate",
    icon: Briefcase,
    description: "High-ticket client acquisition, authority positioning, and corporate inbound lead generation.",
    items: [
      { name: "Law Firms", href: "/law-firms-marketing", tag: "Practice Area SEO" },
      { name: "Accounting & Finance", href: "/accounting-finance-marketing", tag: "Tax Season Funnels" },
      { name: "Insurance", href: "/insurance-marketing", tag: "Policy Buyer Search" },
      { name: "Consulting", href: "/consulting-marketing", tag: "B2B Thought Leadership" },
      { name: "Business Services", href: "/business-services-marketing", tag: "Enterprise Inbound" },
      { name: "Tax Consultants", href: "/tax-consultants-marketing", tag: "Local Discovery" },
      { name: "Corporate Services", href: "/corporate-services-marketing", tag: "Compliance Trust" },
    ],
  },
  {
    id: "education",
    category: "Education & Hospitality",
    icon: GraduationCap,
    description: "Admission season enrollment surges, direct hotel bookings, and student lead automation.",
    items: [
      { name: "Schools", href: "/schools-marketing", tag: "Admission Enrolments" },
      { name: "Colleges & Universities", href: "/colleges-universities-marketing", tag: "Course Enquiries" },
      { name: "Coaching Institutes", href: "/coaching-institutes-marketing", tag: "Batch Registration" },
      { name: "Hotels & Resorts", href: "/hotels-resorts-marketing", tag: "Direct Bookings" },
      { name: "Travel & Tourism", href: "/travel-tourism-marketing", tag: "Tour Package Sales" },
      { name: "Restaurants & Cafes", href: "/restaurants-cafes-marketing", tag: "Local Footfall" },
      { name: "Event Management", href: "/event-management-marketing", tag: "Corporate Enquiries" },
    ],
  },
  {
    id: "industrial",
    category: "Real Estate & Industrial",
    icon: Building,
    description: "High-value real estate buyer leads, factory B2B tenders, and architectural project inquiries.",
    items: [
      { name: "Real Estate", href: "/real-estate-marketing", tag: "Property Buyer Leads" },
      { name: "Construction", href: "/construction-marketing", tag: "Contractor Tenders" },
      { name: "Manufacturing", href: "/manufacturing-marketing", tag: "B2B Export Supply" },
      { name: "Interior Design", href: "/interior-design-marketing", tag: "Turnkey Consultations" },
      { name: "Industrial Equipment", href: "/industrial-equipment-marketing", tag: "Machinery Enquiries" },
      { name: "Warehousing & Logistics", href: "/warehousing-logistics-marketing", tag: "Supply Chain Leads" },
    ],
  },
  {
    id: "retail",
    category: "Retail, D2C & E-Commerce",
    icon: Store,
    description: "Scaling online customer acquisition, increasing average order value, and driving showroom visits.",
    items: [
      { name: "Ecommerce Stores", href: "/ecommerce-marketing", tag: "ROAS Scaling" },
      { name: "Retail Stores", href: "/retail-stores-marketing", tag: "Local Footfall & Maps" },
      { name: "Fashion & Apparel", href: "/fashion-apparel-marketing", tag: "D2C Meta Funnels" },
      { name: "Jewellery", href: "/jewellery-marketing", tag: "High-Ticket Showroom" },
      { name: "Home Decor", href: "/home-decor-marketing", tag: "Visual Inspiration" },
      { name: "Furniture", href: "/furniture-marketing", tag: "Catalogue SEO" },
    ],
  },
];

export function Industries() {
  const fallback = INDUSTRY_GROUPS[0]!;
  const [selectedId, setSelectedId] = useState("healthcare");
  const activeGroup: IndustryGroup = INDUSTRY_GROUPS.find((g) => g.id === selectedId) ?? fallback;

  return (
    <section className="section-space relative overflow-hidden bg-[var(--color-surface)]">
      <div className="container-max">
        {/* Section Header */}
        <div className="mx-auto max-w-[68ch] text-center">
          <span className="pill">Sector Specialization</span>
          <h2 className="mt-4 font-display font-extrabold text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)" }}>
            Industry-Tuned <span className="text-gradient-brand">Digital Growth</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            Every sector buys differently. We build custom marketing architectures shaped around how your specific customers search, evaluate, and purchase.
          </p>
        </div>

        {/* Group Selector Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {INDUSTRY_GROUPS.map((group) => {
            const Icon = group.icon;
            const isSelected = group.id === activeGroup.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedId(group.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[var(--color-ink)] text-white shadow-md ring-2 ring-[var(--color-ink)]"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-[var(--color-brand)]" : "text-[var(--color-text-muted)]"} />
                <span>{group.category}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${isSelected ? "bg-[var(--color-brand)] text-white" : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)]"}`}>
                  {group.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Group Description Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
            {activeGroup.description}
          </p>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand)] hover:underline shrink-0"
          >
            <span>View All Industries Directory</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeGroup.items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/60 hover:shadow-[var(--shadow-md)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-[var(--color-brand-soft)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-brand)]">
                    {item.tag}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-all group-hover:text-[var(--color-brand)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                <h4 className="mt-3.5 font-display text-base font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  Tailored campaigns, localized search, and lead generation for {item.name.toLowerCase()}.
                </p>
              </div>

              <div className="mt-4 border-t border-[var(--color-border)] pt-3 flex items-center justify-between text-[11px] font-semibold text-[var(--color-brand)]">
                <span>Explore Solutions</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
