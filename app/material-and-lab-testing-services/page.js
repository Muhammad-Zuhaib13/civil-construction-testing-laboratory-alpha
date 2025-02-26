import { PageContent } from "../_components/ui";
import { materialandLabTestingServices } from "@/app/_utils/content";

const { seo, data } = materialandLabTestingServices;
export const metadata = {
  title: seo?.title,
  description: seo?.description,
  keywords: seo?.keywords,
  robots: seo?.metaRobots,
  viewport: seo?.metaViewport,
  alternates: {
    canonical: seo?.canonicalURL,
  },
  openGraph: seo?.openGraph,
};
export default function MaterialandLabTestingServicesPage() {
  return <>{<PageContent data={data} />}</>;
}
