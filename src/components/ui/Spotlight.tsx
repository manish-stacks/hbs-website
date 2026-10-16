"use client";

import type { MouseEvent, ReactNode } from "react";

/** Card wrapper with a soft light that follows the cursor. */
export function Spotlight({
  children,
  className = "",
  color = "rgba(229,35,27,.10)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`group relative isolate overflow-hidden ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(340px circle at var(--mx,50%) var(--my,50%), ${color}, transparent 65%)` }}
      />
      {children}
    </div>
  );
}
