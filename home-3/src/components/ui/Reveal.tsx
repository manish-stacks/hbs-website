"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** stagger direct children instead of the wrapper itself */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "article" | "header";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  stagger = false,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : [el];
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.09 : 0,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [delay, y, stagger]);

  // @ts-expect-error - generic tag ref
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
