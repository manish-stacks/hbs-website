import { Reveal } from "@/components/ui/Reveal";
import { Underline } from "@/components/ui/Decor";

export function SectionHead({
  pill,
  title,
  sub,
  center = true,
  pillClass = "",
}: {
  pill?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  pillClass?: string;
}) {
  return (
    <Reveal
      className={
        center
          ? "mx-auto w-full max-w-[65ch] text-center"
          : "w-full max-w-[65ch]"
      }
    >
      {pill ? <span className={`pill ${pillClass}`}>{pill}</span> : null}

      <div className="mt-4">
        <h2
          className="relative inline-block"
          style={{ fontSize: "var(--fs-3xl)" }}
        >
          <span>{title}</span>

          <Underline
            className="
              pointer-events-none
              absolute
              -bottom-2
              left-0
              h-3
              w-[42%]
              min-w-[130px]
              max-w-full
            "
          />
        </h2>
      </div>

      {sub ? (
        <p className="mt-5 text-[var(--color-text-muted)]">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}