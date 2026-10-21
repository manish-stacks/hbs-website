import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioExplorer } from "@/components/portfolio/PortfolioExplorer";
import { ImpactShowcase } from "@/components/portfolio/ImpactShowcase";
import { ProjectProcess } from "@/components/portfolio/ProjectProcess";
import { ProjectEstimatorCTA } from "@/components/portfolio/ProjectEstimatorCTA";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { getSetting, getCompany } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Portfolio & Case Studies | Selected Client Projects",
    description:
      "Explore selected production client projects, e-commerce stores, custom applications, and measurable business growth achieved by Hover Business Services LLP.",
    path: "/portfolio",
  });
}

export default async function PortfolioPage() {
  const [statsSetting, workSetting, company] = await Promise.all([
    getSetting("stats"),
    getSetting("work"),
    getCompany(),
  ]);

  return (
    <div className="theme-hbs min-h-screen bg-[var(--color-background)]">
      {/* 1. Hero Section */}
      <PortfolioHero stats={statsSetting.items} />

      {/* 2. Interactive Projects Explorer */}
      <section className="section-space relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-circuit opacity-30"
          aria-hidden
        />
        <div className="container-max relative">
          <Reveal className="mx-auto max-w-[64ch] text-center mb-10 sm:mb-12">
            <span className="pill">Selected Projects</span>
            <h2 className="mt-4" style={{ fontSize: "var(--fs-3xl)" }}>
              Engineered For Speed & <span className="text-gradient-brand">Conversion</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
              Browse our portfolio of custom web platforms, e-commerce storefronts, mobile applications, and growth campaigns. Click any project to inspect the full case study.
            </p>
          </Reveal>

          {/* Client-side filterable explorer with modal */}
          <PortfolioExplorer cmsWork={workSetting.items} />
        </div>
      </section>

      {/* 3. Deep-Dive Quantifiable Impact & Transformations */}
      <ImpactShowcase />

      {/* 4. Our Delivery & Execution Framework */}
      <ProjectProcess />

      {/* 5. Client Testimonials & Social Proof */}
      <Testimonials />

      {/* 6. Industries Served */}
      <Industries />

      {/* 7. Interactive Project Kickoff & Inquiry Section */}
      <ProjectEstimatorCTA company={company} />
    </div>
  );
}
