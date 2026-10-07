import { getSetting } from "@/lib/site";
import { TestimonialsView } from "./TestimonialsView";

export async function Testimonials() {
  const { items } = await getSetting("reviews");
  return <TestimonialsView testimonials={items} />;
}
