import Image from "next/image";
import { PageContent } from "../_components/ui";
import { careers } from "@/app/_utils/content";

const { seo, data } = careers;
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
export default function CareersPage() {
  return <>{<PageContent data={data} />}</>;
}
