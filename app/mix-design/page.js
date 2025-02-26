import { PageContent } from "../_components/ui";
import { mixDesing } from "@/app/_utils/content";

const { seo, data } = mixDesing;
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
export default function MixDesignPage() {
  return <>{<PageContent data={data} />}</>;
}
