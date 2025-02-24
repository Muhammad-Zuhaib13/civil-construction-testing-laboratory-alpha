import {
  ContactForm,
  ParasWithList,
  TextWithImg,
  Banner,
} from "../_components/ui";
import { civilEngineering } from "../_utils/content";

const { seo, data } = civilEngineering;

export default function CivilEngineeringPage() {
 
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
