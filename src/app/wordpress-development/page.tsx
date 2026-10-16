import { ServicePage, svcMeta } from "@/components/svc/kit";
import { wordpress as s } from "@/components/svc/data/web";

export const generateMetadata = () => svcMeta(s);
export default function Page() {
  return <ServicePage s={s} />;
}
