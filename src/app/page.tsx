import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { Offices } from "@/components/home/Offices";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { Products } from "@/components/home/Products";
import { DigitalSolutions } from "@/components/home/DigitalSolutions";
import { GrowCta } from "@/components/home/GrowCta";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/home/Faq";
import { ContactCTA } from "@/components/home/ContactCTA";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({ path: "/" });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <About />
      <Stats />
      <Services />
      <DigitalSolutions />
      <Process />
      <GrowCta />

      <Industries />
      <Testimonials />
      <Products />
      <WhyUs />
      <Blog />

      <Offices />
      <Faq />
    </>
  );
}
