import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Problems } from "@/components/home/Problems";
import { WhyUs } from "@/components/home/WhyUs";
import { Offices } from "@/components/home/Offices";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { Products } from "@/components/home/Products";
import { Blog } from "@/components/home/Blog";
import { Faq } from "@/components/home/Faq";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <About />
      <Stats />
      <Services />
      <Process />
      
      <WhyUs />
      <Industries />
      <Testimonials />
      <Products />
      <Blog />
      
      <Offices />
      <Faq />
    </>
  );
}
