import { getSetting } from "@/lib/site";
import { HeroSliderView } from "./HeroSliderView";

export async function HeroSlider() {
  const { interval, items } = await getSetting("heroSlides");
  const slides = (items ?? []).filter((s) => s.image);
  if (!slides.length) return null;
  return <HeroSliderView slides={slides} seconds={Number(interval) || 0} />;
}
