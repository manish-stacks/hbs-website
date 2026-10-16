import { getSetting } from "@/lib/site";
import { ServicesView } from "./ServicesView";

export async function Services() {
  const { items } = await getSetting("services");
  const services = items.map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0"), tags: s.tags.filter(Boolean) }));
  return <ServicesView services={services} />;
}
