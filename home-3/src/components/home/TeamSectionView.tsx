"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SectionHead } from "./SectionHead";


export function TeamSectionView({ team }: { team: { name: string; role: string; image: string; alt?: string; facebook?: string; twitter?: string; instagram?: string }[] }) {
  const slider = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const move = (dir: number) => {
    slider.current?.scrollBy({
      left: dir * 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-space bg-white">
      <div className="container-max">
        <SectionHead
          pill="Our Team"
          title="What Success Looks From The Back"
          sub="Meet the people helping brands turn ideas into measurable digital growth."
        />

        <div className="relative mt-10 sm:mt-14">
          {/* Left Arrow */}
          <button
            onClick={() => move(-1)}
            className="absolute -left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[var(--color-brand)] lg:flex"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => move(1)}
            className="absolute -right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[var(--color-brand)] lg:flex"
          >
            <ArrowRight size={20} />
          </button>

          <div
            ref={slider}
            className="flex snap-x gap-5 overflow-x-auto sm:gap-7 scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {team.map((member, i) => {
              const showSocial = open === i || hovered === i;

              return (
                <article
                  key={member.name}
                  className="relative min-w-[260px] flex-1 snap-start overflow-hidden rounded-[22px] bg-[var(--color-surface)] sm:min-w-[330px] lg:min-w-[calc(33.333%-18px)]"
                >
                  {/* Image */}
                  <div
                    className="relative m-4 mb-0 overflow-hidden rounded-[18px]"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src={member.image}
                      alt={member.alt || `${member.name}, ${member.role}`}
                      className="h-[300px] sm:h-[350px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Social Icons */}
                    <div
                      className={`absolute bottom-[58px] right-4 z-20 flex flex-col gap-2 transition-all duration-300 ${
                        showSocial
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-3 opacity-0"
                      }`}
                    >
                      <a
                        href={member.facebook || "#"}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition hover:bg-[var(--color-brand)] hover:text-white"
                      >
                        <FaFacebookF size={15} />
                      </a>

                      <a
                        href={member.twitter || "#"}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition hover:bg-[var(--color-brand)] hover:text-white"
                      >
                        <FaXTwitter size={15} />
                      </a>

                      <a
                        href={member.instagram || "#"}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white transition hover:bg-[var(--color-brand)] hover:text-white"
                      >
                        <FaInstagram size={16} />
                      </a>
                    </div>

                    {/* Plus Button */}
                    <button
                      onClick={() =>
                        setOpen(open === i ? null : i)
                      }
                      className={`absolute bottom-0 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                        open === i
                          ? "rotate-90 bg-[var(--color-brand)] text-white"
                          : "bg-[var(--color-ink)] text-white hover:bg-[var(--color-brand)]"
                      }`}
                    >
                      {open === i ? (
                        <X size={20} />
                      ) : (
                        <Plus size={21} />
                      )}
                    </button>
                  </div>

                  {/* Bottom */}
                  <div className="relative overflow-hidden px-6 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-8">
                    <div className="pointer-events-none absolute -right-3 -top-16 h-[180px] w-[95px] rotate-[-31deg] bg-white/75" />

                    <div className="pointer-events-none absolute right-[55px] -top-16 h-[180px] w-[35px] rotate-[-31deg] bg-[var(--color-surface-2)]" />

                    <h3 className="relative z-10 text-[19px] sm:text-[22px] font-extrabold text-[var(--color-ink)]">
                      {member.name}
                    </h3>

                    <p className="relative z-10 mt-1 text-[13px] font-medium text-[var(--color-text-muted)]">
                      {member.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}