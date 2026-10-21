"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";

type BlogShareBarProps = {
  title: string;
  url?: string;
  compact?: boolean;
};

export function BlogShareBar({ title, url, compact = false }: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return url || window.location.href;
    }
    return url || "https://hoverbusinessservices.com";
  };

  const handleCopy = async () => {
    const shareUrl = getShareUrl();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  };

  const handleWhatsApp = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`Check out this insightful article: "${title}" - ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleLinkedIn = () => {
    const shareUrl = getShareUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleTwitter = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`${title} by @media_hover`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          title="Copy link"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#10131a] transition-all hover:border-[#e5231b] hover:text-[#e5231b]"
        >
          {copied ? <Check size={15} className="text-[#12925a]" /> : <Copy size={15} />}
        </button>
        <button
          onClick={handleWhatsApp}
          title="Share on WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#10131a] transition-all hover:border-[#25D366] hover:text-[#25D366]"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
        <button
          onClick={handleLinkedIn}
          title="Share on LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#10131a] transition-all hover:border-[#0A66C2] hover:text-[#0A66C2]"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
        </button>
        <button
          onClick={handleTwitter}
          title="Share on X"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[#10131a] transition-all hover:border-[#10131a] hover:bg-[#10131a] hover:text-white"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[0_4px_20px_rgba(16,19,26,0.04)]">
      <div className="flex items-center gap-2 pb-3.5 border-b border-[var(--color-border)]">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fdecea] text-[#e5231b]">
          <Share2 size={15} />
        </span>
        <span className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-ink)]">
          Share This Article
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 px-3 py-2.5 text-[12px] font-bold text-[#128C7E] transition-all hover:bg-[#25D366] hover:text-white"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleLinkedIn}
          className="flex items-center justify-center gap-2 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/5 px-3 py-2.5 text-[12px] font-bold text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
          <span>LinkedIn</span>
        </button>

        <button
          onClick={handleTwitter}
          className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[#faf8f6] px-3 py-2.5 text-[12px] font-bold text-[#10131a] transition-all hover:bg-[#10131a] hover:text-white"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>X / Twitter</span>
        </button>

        <button
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-[12px] font-bold transition-all ${
            copied
              ? "border-[#12925a] bg-[#12925a] text-white"
              : "border-[var(--color-brand)]/30 bg-[#fdecea]/40 text-[#e5231b] hover:bg-[#e5231b] hover:text-white"
          }`}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

