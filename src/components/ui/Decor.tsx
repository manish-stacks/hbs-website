/* Hand-drawn style decorative SVGs — agency flavour, zero dependencies. */

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 22"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M4 14c48-7 104-10 156-9 52 1 108 5 158 13"
        stroke="var(--color-brand)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".9"
      />
      <path
        d="M22 20c52-6 112-8 168-7 40 1 78 3 112 7"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

export function CurvyArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden className={className}>
      <path
        d="M6 8c34 2 58 16 70 38 4 8 6 16 6 24"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="7 8"
        opacity=".55"
      />
      <path
        d="M70 62l12 12 12-14"
        stroke="var(--color-brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".55"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Blob({
  className = "",
  color = "var(--color-primary-soft)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className}>
      <path
        fill={color}
        d="M44.6 -58.3C56.5 -49.2 63 -33.4 66.9 -17.2C70.8 -1 72 15.6 66 29.5C60 43.4 46.8 54.6 32 60.9C17.2 67.2 0.9 68.6 -15.9 65.6C-32.7 62.6 -50 55.2 -60.4 42.2C-70.8 29.2 -74.3 10.6 -71.4 -6.4C-68.6 -23.4 -59.4 -38.8 -46.6 -48.2C-33.8 -57.6 -16.9 -61 0.6 -61.8C18.1 -62.6 32.7 -67.4 44.6 -58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function DottedGrid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={className}>
      <defs>
        <pattern id="hbs-dg" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="var(--color-brand)" opacity=".28" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#hbs-dg)" />
    </svg>
  );
}
