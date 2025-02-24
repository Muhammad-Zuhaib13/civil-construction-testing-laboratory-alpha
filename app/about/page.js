import { about } from "@/app/_utils/content";
import {
  ContactForm,
  Heading,
  TextWithImg,
  Banner,
  ParasWithList,
} from "../_components/ui";

const { seo, data } = about;
export default function AboutPage() {
  return (
    <>
      {data.map((component, index) => {
        const { key, pageContent } = component;
        switch (key) {
          case "banner":
            return <Banner key={index} data={pageContent} />;
          case "textWithImage":
            return <TextWithImg key={index} data={pageContent} />;
          case "heading":
            return <Heading key={index} data={pageContent} />;
          case "contactForm":
            return <ContactForm key={index} data={pageContent} />;
          case "parasWithPoints":
            return <ParasWithList key={index} data={pageContent} />;
          default:
            return null;
        }
      })}
    </>
  );
}
