import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/home";

export function PageCta({
  title = "Ready to talk about your growth?",
  body = "Tell us what you are trying to grow. We come back with a plan, a timeline and a number — not a sales pitch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-space">
      <div className="container-max">
        <div
          className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:text-left"
          style={{ background: "linear-gradient(125deg, #0b0d12 0%, #1a1f2b 55%, #2f1a17 130%)" }}
        >
          <div>
            <h2 className="text-white" style={{ fontSize: "var(--fs-2xl)" }}>
              {title}
            </h2>
            <p className="mt-3 max-w-[54ch] text-[var(--fs-sm)] text-white/60">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact-us" className="btn btn-brand">
              Get a free proposal <ArrowRight size={17} />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="btn border border-white/20 text-white hover:border-white/50"
            >
              <Phone size={16} /> {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
