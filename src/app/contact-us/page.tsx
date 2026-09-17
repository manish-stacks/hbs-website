import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Offices } from "@/components/home/Offices";
import { Faq } from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Hover Business Services LLP — offices in Delhi, Noida and Auckland. Call, email or send an enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk about what you want to grow"
        tagline="Send a message, or call the office nearest to you. Someone from the team responds within one working day."
        crumbs={[{ label: "Contact Us", href: "/contact-us" }]}
      />
      <Offices />
      <ContactCTA />
      <Faq />
    </>
  );
}
