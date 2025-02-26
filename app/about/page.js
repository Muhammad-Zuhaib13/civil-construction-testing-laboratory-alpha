import { about } from "@/app/_utils/content";
import { PageContent } from "../_components/ui";

const { seo, data } = about;
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
export default function AboutPage() {
  return <>{<PageContent data={data} />}</>;
}
