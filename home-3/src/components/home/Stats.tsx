import { getSetting } from "@/lib/site";
import { StatsView } from "./StatsView";

export async function Stats() {
  const { items } = await getSetting("stats");
  return <StatsView stats={items} />;
}
