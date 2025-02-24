import {
  TextWithImg,
  Banner,
} from "../_components/ui";
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
  return (
    <>
      {data.map((component, index) => {
        const { key, pageContent } = component;
        switch (key) {
          case "banner":
            return <Banner key={index} data={pageContent} />;
          case "textWithImage":
            return <TextWithImg key={index} data={pageContent} />;
          default:
            return null;
        }
      })}
    </>
  );
}
