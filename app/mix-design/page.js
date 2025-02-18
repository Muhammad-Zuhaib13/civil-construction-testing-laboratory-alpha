import Image from "next/image";
import { ContactForm, ParasWithList, TextWithImg } from "../_components/ui";
import { list } from "postcss";

export default function MixDesignPage() {
  const textWithImgData = {
    subTItleTop: "Quality Concrete Mix Design",
    title: "more to the mix.",
    paras: [
      "CCT experience testing pavement Mix designs can ensure that your concrete, asphalt and aggregate mix will achieve the performance and durability goals you have for both your standard and special projects. Pavement mix-designs and density control always have an effect on quality pavement performance. Your CCT professionals have all of the technical certifications to ensure that your concrete projects achieve the best possible results.",
      "For asphalt mixtures, density is one of the most important measurements. A proper mixture will contain enough air voids to prevent rutting due to plastic flow but low enough air voids to prevent permeability of air and water. Verification of the proper mix to match your desired materials performance is a big reason to perform testing.",
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
  };
  const parasWithListData = {
    subTItleTop: "",
    title: "",
    paras: [
      "Our Construction Consulting & Testing technicians hold the MCPA Level I & II Concrete Certifications as well as the ACI Concrete Certification. Our services encompass both intensive field and laboratory testing and include:",
    ],
    list: [
      "Compressive Strength of Concrete Cylinders and Cores",
      "Flexural Strength of Concrete Beams",
      "Concrete Mix Designs and Trial Batch",
      "Chloride-ion Permeability",
      "Quality Control Plan",
    ],
  };
  return (
    <>
      <TextWithImg data={textWithImgData} />
      <div className="bg-[#FDF6F6] dark:bg-slate-400">
        <ParasWithList data={parasWithListData} />
        <ContactForm />
      </div>
    </>
  );
}
