import Image from "next/image";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { getCompany } from "@/lib/site";

export async function GrowCta() {
  const company = await getCompany();
  return (
    <section className="theme-hbs relative z-10 mt-24 bg-[var(--color-surface)] lg:mt-32">

      <div className="container-max relative">
        <Reveal className="max-w-[860px] py-14 lg:py-20">
          <p className="text-[var(--fs-2xl)] text-[#10131a]">Is Your Business Ready to</p>
          <h2 className="mt-2 font-display font-black italic leading-[1.2] text-[var(--color-ink)]" style={{ fontSize: "var(--fs-3xl)" }}>
            <span className="text-[var(--color-brand)]">Grow with Strategic Web Design</span> and Digital Marketing Company
            <span className="font-light not-italic">?</span>
          </h2>
          <p className="mt-5 max-w-[62ch] text-[var(--color-text)]">
            We bring innovative ideas in web design along with effective marketing techniques that can work wonders for your business in making you stand out.
          </p>

          <div className="relative mt-8 inline-flex overflow-hidden rounded-full text-sm font-semibold text-white shadow-lg">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[var(--color-brand)] py-3.5 pl-7 pr-10 transition-colors hover:bg-[var(--color-brand-dark)]">
              <Send size={15} /> Request Proposal
            </Link>
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 bg-[var(--color-ink)] py-3.5 pl-10 pr-7 transition-colors hover:brightness-125">
              <Phone size={15} /> Contact Now
            </a>
            <span className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[13px] font-bold text-[var(--color-ink)] shadow">
              OR
            </span>
          </div>
        </Reveal>

        {/* bottom-anchored, taller than the section so the head pops out above it */}
        <Image
          src="/images/theme/man-laptop.png"
          alt="Hover Business Services founder"
          width={380}
          height={518}
          className="pointer-events-none absolute bottom-0 right-[2%] hidden h-auto w-[330px] xl:right-[6%] xl:w-[380px] lg:block"
        />
      </div>
    </section>
  );
}
