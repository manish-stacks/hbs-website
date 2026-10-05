import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { WhyUs } from "@/components/home/WhyUs";
import { Process } from "@/components/home/Process";
import { Offices } from "@/components/home/Offices";
import { TeamSection } from "@/components/home/TeamSection";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = buildMeta({
  title: "About Us",
  description: "Hover Business Services LLP — 80+ specialists across four offices delivering SEO, performance marketing, web and app development.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A 360° digital agency built around outcomes"
        tagline="Eighty-plus specialists, four offices, and one way of working: decide on the numbers, report them honestly, keep improving them."
        crumbs={[{ label: "About Us", href: "/about-us" }]}
      />
      <About />
      <Stats />
      <WhyUs />
      <Process />
      <TeamSection />
      <Testimonials />
      <Offices />
      <ContactCTA />
      <PageCta />
    </>
  );
}
