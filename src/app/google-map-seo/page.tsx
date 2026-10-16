import { ServicePage, svcMeta } from "@/components/svc/kit";
import { googleMapSeo as s } from "@/components/svc/data/seo";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
