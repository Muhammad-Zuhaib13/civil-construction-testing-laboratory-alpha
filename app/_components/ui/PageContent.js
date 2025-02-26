import React from "react";
import dynamic from "next/dynamic";

// Dynamically import components
const Banner = dynamic(() => import("@/app/_components/ui/Banner"));
const TextWithImg = dynamic(() => import("@/app/_components/ui/TextWithImg"));
const Heading = dynamic(() => import("@/app/_components/ui/Heading"));
const ContactForm = dynamic(() => import("@/app/_components/ui/ContactForm"));
const ParasWithList = dynamic(() => import("@/app/_components/ui/ParasWithList"));

const PageContent = (props) => {
  const { data } = props;

  return (
    <>
      {data
        ? data.map((component, index) => {
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
          })
        : null}
    </>
  );
};

export default PageContent;