import { PageContent } from "../_components/ui";
import { home } from "@/app/_utils/content";

const { seo, data } = home;
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

export default function HomePage() {
  return <>{<PageContent data={data} />}</>;
}
