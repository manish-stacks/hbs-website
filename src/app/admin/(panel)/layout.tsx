import { AdminShell } from "@/components/admin/AdminShell";
import { currentAdmin } from "@/lib/auth";
import { newLeadCount } from "@/lib/leads";

export const dynamic = "force-dynamic";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const [admin, newLeads] = await Promise.all([currentAdmin(), newLeadCount()]);
  return <AdminShell email={admin?.email ?? ""} newLeads={newLeads}>{children}</AdminShell>;
}
