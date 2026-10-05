import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { Gauge, ListChecks, ShieldCheck, Smartphone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { AuditTool } from "@/components/audit/AuditTool";

export const metadata: Metadata = buildMeta({
  title: "Free Website Audit",
  description: "Check your website's SEO, speed, mobile readiness and security in seconds with the free audit tool from Hover Business Services.",
  path: "/free-website-audit",
});

const covers = [
  { icon: ListChecks, title: "On-page SEO", body: "Titles, descriptions, headings, images and content depth." },
  { icon: Gauge, title: "Performance", body: "Server response time and page weight." },
  { icon: Smartphone, title: "Mobile readiness", body: "Viewport, language and responsive basics." },
  { icon: ShieldCheck, title: "Security & crawling", body: "HTTPS, robots.txt, sitemap and structured data." },
];

export default function AuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Free website audit in 10 seconds"
        tagline="Enter your URL and get an instant health score with clear fixes for SEO, speed and mobile."
        crumbs={[{ label: "Free Website Audit", href: "/free-website-audit" }]}
      />
      <section className="section-space">
        <div className="container-max">
          <AuditTool />
          <Reveal stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {covers.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <Icon size={30} strokeWidth={1.5} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <PageCta title="Want a full manual audit?" body="Our specialists review your site, competitors and funnel, then share a prioritised roadmap." />
    </>
  );
}
