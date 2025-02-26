import { PageContent } from "../_components/ui";
import { roadandCommercialConstruction } from "../_utils/content";
const { seo, data } = roadandCommercialConstruction;
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
export default function RoadandCommercialConstructionPage() {
  return <>{<PageContent data={data} />}</>;
}
