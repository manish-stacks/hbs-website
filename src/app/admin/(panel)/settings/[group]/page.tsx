import { notFound } from "next/navigation";
import { SettingsEditor } from "@/components/admin/SettingsEditor";
import { getSetting } from "@/lib/site";
import { GROUPS, GROUP_KEYS, WHERE, type GroupKey } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function SettingsPage({ params }: { params: Promise<{ group: string }> }) {
  const key = (await params).group as GroupKey;
  if (!GROUP_KEYS.includes(key)) notFound();
  const g = GROUPS[key];
  const initial = (await getSetting(key)) as unknown as Record<string, unknown>;
  return <SettingsEditor key={key} group={key} label={g.label} desc={g.desc} where={WHERE[key].where} url={WHERE[key].url} fields={g.fields} initial={initial} />;
}
