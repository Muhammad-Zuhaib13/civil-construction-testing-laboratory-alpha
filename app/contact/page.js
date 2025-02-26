import {
  PageContent
} from "../_components/ui";
import { contactUs } from "@/app/_utils/content";

const { seo, data } = contactUs;

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
export default function ContactPage(){
  return <>{<PageContent data={data} />}</>;
}