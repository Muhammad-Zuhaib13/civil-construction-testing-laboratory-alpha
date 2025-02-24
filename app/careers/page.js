import Image from "next/image";
import {
  ContactForm,
  ParasWithList,
  TextWithImg,
  Banner,
} from "../_components/ui";
import { careers } from "@/app/_utils/content";

const { seo, data } = careers;
export default function CareersPage() {
 
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
