import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "./SectionHead";
import { problems } from "@/data/home";

export function Problems() {
  return (
    <section className="pb-12 bg-white">
      <div className="container-max">
        <Reveal className=" overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="px-8 py-10 lg:px-12">
              <h3 className="text-[var(--fs-2xl)]">Ready to improve your digital performance?</h3>
              <p className="mt-3 max-w-[46ch] text-[var(--fs-sm)] text-[var(--color-text-muted)]">
                Get a free consultation and see how we optimise every channel for growth —
                search, paid, social, site speed and conversion.
              </p>
              <Link href="/contact-us" className="btn btn-primary mt-7">
                Book a free consultation <ArrowRight size={17} />
              </Link>
            </div>
            <div className="relative h-full min-h-[220px]">
              <Image
                src="/images/grow-smarter-visual.png"
                alt="Grow your business with HBS"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover object-left"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
