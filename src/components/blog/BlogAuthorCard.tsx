import { CheckCircle2, ShieldCheck } from "lucide-react";

type BlogAuthorCardProps = {
  author?: string;
  role?: string;
  bio?: string;
};

export function BlogAuthorCard({
  author = "HBS Search Strategy Team",
  role = "Hyper-Local & Map SEO Specialists",
  bio = "Our SEO division specializes in multi-location Google Business Profile optimization, citation engineering, and algorithmic map ranking across competitive urban centers.",
}: BlogAuthorCardProps) {
  // Extract initials
  const initials = author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_4px_20px_rgba(16,19,26,0.04)]">
      <div className="flex items-center justify-between pb-3.5 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
          <ShieldCheck size={14} className="text-[#e5231b]" />
          <span>Editorial Integrity</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#12925a] bg-[#12925a]/10 px-2 py-0.5 rounded-full">
          <CheckCircle2 size={11} />
          <span>Expert Verified</span>
        </span>
      </div>

      <div className="mt-4 flex items-start gap-3.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e5231b] to-[#b8140e] font-display text-[15px] font-bold text-white shadow-md">
          {initials}
        </div>
        <div>
          <h4 className="font-display text-[15px] font-bold text-[var(--color-ink)]">
            {author}
          </h4>
          <p className="text-[12px] font-medium text-[#e5231b]">{role}</p>
        </div>
      </div>

      <p className="mt-3 text-[12.5px] leading-relaxed text-[#6b6560]">
        {bio}
      </p>
    </div>
  );
}

