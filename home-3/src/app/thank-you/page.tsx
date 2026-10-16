import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title="Thank you for contacting us"
        tagline="Your message has been received. Someone from our team will get back to you within one working day."
        crumbs={[{ label: "Thank you", href: "/thank-you" }]}
      />
      <section className="section-space">
        <div className="container-max flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-brand)] text-white"><Check size={30} /></span>
          <p className="mt-5 max-w-[56ch] text-[var(--fs-lg)] text-[var(--color-text-muted)]">
            We have saved your details and will contact you shortly.
          </p>
          <Link href="/" className="btn btn-brand mt-6">Back to home <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
