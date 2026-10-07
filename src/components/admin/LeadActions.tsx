"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function LeadActions({ id, status }: { id: number; status: string }) {
  const router = useRouter();
  async function setStatus(s: string) {
    await fetch(`/api/admin/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: s }) });
    router.refresh();
  }
  async function del() {
    if (!confirm("Delete this lead?")) return;
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    router.refresh();
  }
  const btn = "rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-bold hover:border-[var(--color-brand)]";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {status !== "read" ? <button onClick={() => setStatus("read")} className={btn}>Mark read</button> : null}
      {status !== "done" ? <button onClick={() => setStatus("done")} className={btn}>Mark done</button> : null}
      {status !== "new" ? <button onClick={() => setStatus("new")} className={btn}>Mark new</button> : null}
      <button onClick={del} className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]"><Trash2 size={15} /></button>
    </div>
  );
}
