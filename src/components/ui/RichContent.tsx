import { RICH_CLASS, cleanHtml } from "@/lib/richtext";

export function RichContent({ html, className = "" }: { html: string; className?: string }) {
  return <div className={`${RICH_CLASS} ${className}`} dangerouslySetInnerHTML={{ __html: cleanHtml(html) }} />;
}
