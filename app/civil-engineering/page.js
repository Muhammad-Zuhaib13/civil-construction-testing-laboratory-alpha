import { PageContent } from "../_components/ui";
import { civilEngineering } from "../_utils/content";

const { seo, data } = civilEngineering;
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

export default function CivilEngineeringPage() {
  return <>{<PageContent data={data} />}</>;
}
