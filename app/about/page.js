import Image from "next/image";
import { ContactForm, Heading, TextWithImg, Banner } from "../_components/ui";


export default function AboutPage() {
  const textWithImgData = {
    subTItleTop: "",
    title: "What We're All About.",
    paras: [
    "CCT is known for high quality, civil engineering and construction inspection services, and testing. CCT was founded by Mitch Forst, P.E. in 1994. Mitch has dedicated over 30 years of his career to inspecting, managing and surveying construction projects all across the Midwest. As a result of this close affiliation with the Construction Industry, CCT is exceptionally well qualified to provide complete construction materials, mixes and soils testing services."
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "About",
    },
  };
  const heading={
    title:'We are the Michigan Engineering, Construction and Testing Experts.'
  }
  const banner = {
    title: "About Civil Construction Testing Laboratory",
    img: "/assets/images/about.jpg",
    para:'',
  };
  return (
    <>
    <Banner  data={banner} />
      <TextWithImg data={textWithImgData} />
      <Heading data={heading} />
      <div className="bg-[#FDF6F6] dark:bg-slate-400">
      <ContactForm />
      </div>
    </>
  );
}
