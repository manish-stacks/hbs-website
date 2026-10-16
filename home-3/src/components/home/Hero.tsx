import { getCompany, getSetting } from "@/lib/site";
import { HeroView } from "./HeroView";

export async function Hero() {
  const [company, hero] = await Promise.all([getCompany(), getSetting("hero")]);
  return <HeroView company={company} hero={hero} />;
}
