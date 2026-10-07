import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Offices } from "@/components/home/Offices";
import { Faq } from "@/components/home/Faq";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
  title: "Contact Us",
  description: "Talk to Hover Business Services LLP — offices in Delhi, Noida and Auckland. Call, email or send an enquiry.",
  path: "/contact-us",
});
}

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
