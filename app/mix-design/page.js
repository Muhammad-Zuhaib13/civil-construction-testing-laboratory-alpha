import { ContactForm, ParasWithList, TextWithImg , Banner} from "../_components/ui";
import { mixDesing } from "@/app/_utils/content";

const {seo, data} = mixDesing;
export default function MixDesignPage() {

  return (
    <>
       {data.map((component, index) => {
        const { key, pageContent } = component;
        switch (key) {
          case "banner":
            return <Banner key={index} data={pageContent} />;
          case "textWithImage":
            return <TextWithImg key={index} data={pageContent} />;
          case "parasWithPoints":
            return  <ParasWithList key={index} data={pageContent} />;
          case "contactForm":
            return <ContactForm key={index} data={pageContent} />;
          default:
            return null;
        }
      })}
    </>
  );
}
