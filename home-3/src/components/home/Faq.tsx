import { getSetting } from "@/lib/site";
import { FaqView } from "./FaqView";

export async function Faq() {
  const { items } = await getSetting("faqs");
  return <FaqView faqs={items} />;
}
