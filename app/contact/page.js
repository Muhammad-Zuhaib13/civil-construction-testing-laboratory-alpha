import { ContactForm, Heading, TextWithImg, Banner } from "../_components/ui";
import { contactUs } from "@/app/_utils/content";

const { seo, data } = contactUs;

export default function ContactPage() {
 
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
          default:
            return null;
        }
      })}
    </>
  );
}
