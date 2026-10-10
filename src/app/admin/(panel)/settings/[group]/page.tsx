import { notFound } from "next/navigation";
import { SettingsEditor } from "@/components/admin/SettingsEditor";
import { FooterManager } from "@/components/admin/FooterManager";
import { ListManager } from "@/components/admin/ListManager";
import { getSetting } from "@/lib/site";
import { GROUPS, GROUP_KEYS, WHERE, type GroupKey } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function SettingsPage({ params }: { params: Promise<{ group: string }> }) {
  const key = (await params).group as GroupKey;
  if (!GROUP_KEYS.includes(key)) notFound();
  const g = GROUPS[key];
  const initial = (await getSetting(key)) as unknown as Record<string, unknown>;
  if (key === "footer") return <FooterManager key={key} group={key} label={g.label} desc={g.desc} url={WHERE[key].url} fields={g.fields} initial={initial} />;
  const only = g.fields.length === 1 && g.fields[0]!.t === "items" ? g.fields[0]! : null;
  if (only) return <ListManager key={key} group={key} label={g.label} desc={g.desc} url={WHERE[key].url} field={only} initial={initial} />;
  return <SettingsEditor key={key} group={key} label={g.label} desc={g.desc} where={WHERE[key].where} url={WHERE[key].url} fields={g.fields} initial={initial} />;
}
