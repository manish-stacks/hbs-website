import { Reveal } from "@/components/ui/Reveal";

export function SectionHead({
  pill,
  title,
  sub,
  center = true,
  light = false,
}: {
  pill?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  pillClass?: string;
  light?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto w-full max-w-[820px] text-center" : "w-full max-w-[820px]"}>
      {pill ? <span className="tag">{pill}</span> : null}
      <h2 className={`mt-5 ${light ? "!text-white" : ""}`} style={{ fontSize: "var(--fs-3xl)", lineHeight: 1.04 }}>{title}</h2>
      {sub ? <p className={`mt-5 max-w-[60ch] ${center ? "mx-auto" : ""} ${light ? "text-white/80" : "text-[var(--color-text-muted)]"}`}>{sub}</p> : null}
    </Reveal>
  );
}
