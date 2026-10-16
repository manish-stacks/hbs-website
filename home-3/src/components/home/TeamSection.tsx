import { getSetting } from "@/lib/site";
import { TeamSectionView } from "./TeamSectionView";

export async function TeamSection() {
  const { items } = await getSetting("team");
  return <TeamSectionView team={items} />;
}
