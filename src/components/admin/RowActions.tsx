"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeleteButton({ id, title }: { id: number; title: string }) {
  const router = useRouter();
  async function del() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/entries/${id}`, { method: "DELETE" });
    router.refresh();
  }
  return (
    <button onClick={del} title="Delete" className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]">
      <Trash2 size={15} />
    </button>
  );
}
