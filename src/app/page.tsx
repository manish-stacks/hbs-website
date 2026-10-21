import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { AllServicesHub } from "@/components/home/AllServicesHub";
import { DigitalSolutions } from "@/components/home/DigitalSolutions";
import { HomeWorkShowcase } from "@/components/home/HomeWorkShowcase";
import { Stats } from "@/components/home/Stats";
import { Products } from "@/components/home/Products";
import { About } from "@/components/home/About";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { AuditBanner } from "@/components/home/AuditBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/home/Faq";
import { ContactCTA } from "@/components/home/ContactCTA";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
    title: "Hover Business Services LLP | AI-Powered Digital Marketing & Web Engineering Agency",
    description:
      "Hover Business Services is an award-winning digital marketing and web engineering agency in India & New Zealand. We build AI search dominance (LLMO/GEO), custom Next.js platforms, Shopify stores, and high-ROAS paid media funnels.",
    path: "/",
  });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AllServicesHub />
      <Stats />
      <About />
      <Industries />
      <Process />
      <WhyUs />
      <Testimonials />
      <Blog />
      <Faq />
      <Logos />
    </>
  );
}
