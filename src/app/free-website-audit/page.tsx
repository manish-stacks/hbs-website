import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { BadgeCheck, Gauge, Link2, ListChecks, ShieldCheck, Smartphone, Timer, Wrench } from "lucide-react";
import { PageCta } from "@/components/layout/PageCta";
import { AuditTool } from "@/components/audit/AuditTool";
import { getCompany } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Free Website Audit",
    description: "Check your website's SEO, speed, mobile readiness and security in seconds with the free audit tool from Hover Business Services.",
    path: "/free-website-audit",
  });
}

const covers = [
  { icon: ListChecks, title: "On-page SEO", body: "Titles, descriptions, headings, images and content depth." },
  { icon: Gauge, title: "Performance", body: "Server response time and page weight." },
  { icon: Smartphone, title: "Mobile readiness", body: "Viewport, language and responsive basics." },
  { icon: ShieldCheck, title: "Security & crawling", body: "HTTPS, robots.txt, sitemap and structured data." },
];
const steps = [
  { icon: Link2, title: "Enter your URL", body: "Type your website address. No sign-up needed." },
  { icon: Timer, title: "Get your score", body: "See a 0-100 health score with every issue explained." },
  { icon: Wrench, title: "We fix it for you", body: "Send us the report and our experts handle the rest." },
];

export default async function AuditPage() {
  const c = await getCompany();
  return (
    <>
      <section className="mesh-hero relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#ffe1de] opacity-70 blur-3xl" />
        <div className="container-max relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[780px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fbeceb] px-4 py-2 text-xs font-bold text-[var(--color-brand-dark)]"><BadgeCheck size={14} /> Free tool - results in 10 seconds</span>
            <h1 className="mt-5" style={{ fontSize: "var(--fs-4xl)", lineHeight: 1.08 }}>
              Is your website <span className="text-gradient-brand">losing you customers?</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[56ch] text-[var(--fs-lg)] text-[var(--color-text-muted)]">Get an instant health score for SEO, speed, mobile and security. If something is broken, our team will fix it for you.</p>
          </div>
          <div className="mt-10">
            <AuditTool phone={c.phone} whatsapp={c.whatsapp} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-max">
          <h2 className="text-center" style={{ fontSize: "var(--fs-3xl)" }}>What we check</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {covers.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-soft)] text-[var(--color-brand)]"><Icon size={24} strokeWidth={1.6} /></span>
                <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] leading-relaxed text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 text-center" style={{ fontSize: "var(--fs-3xl)" }}>How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-[var(--color-brand)]/15">{i + 1}</span>
                <Icon size={28} strokeWidth={1.5} className="text-[var(--color-brand)]" />
                <h3 className="mt-4 font-display text-[var(--fs-lg)] font-bold">{title}</h3>
                <p className="mt-2 text-[var(--fs-sm)] text-[var(--color-text-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCta title="Want a full manual audit?" body="Our specialists review your site, competitors and funnel, then share a prioritised roadmap." />
    </>
  );
}
