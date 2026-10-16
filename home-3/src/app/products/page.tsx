import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { PageCta } from "@/components/layout/PageCta";
import { Products } from "@/components/home/Products";

export async function generateMetadata(): Promise<Metadata> {
  return buildMeta({
  title: "Products",
  description: "Hover Business Services SaaS products — email marketing, Google Business posting, WhatsApp Business API and CRM.",
  path: "/products",
});
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software we built, not software we resell"
        tagline="Email marketing, Google Business posting, WhatsApp Business API and CRM — built in-house, used by our own team first."
        crumbs={[{ label: "Products", href: "/products" }]}
      />
      <Products />
      <PageCta title="Want a walkthrough of any product?" body="We will run a live demo on your own data and tell you honestly whether it fits." />
    </>
  );
}
