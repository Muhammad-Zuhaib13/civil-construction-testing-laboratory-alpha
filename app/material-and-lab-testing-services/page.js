import {  ParasWithList, TextWithImg , Banner} from "../_components/ui";
import { materialandLabTestingServices } from "@/app/_utils/content";

const { seo, data } = materialandLabTestingServices;


export default function MaterialandLabTestingServicesPage() {
 
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
            return <ParasWithList key={index} data={pageContent} />;
          default:
            return null;
        }
      })}

    </>
  );
}
