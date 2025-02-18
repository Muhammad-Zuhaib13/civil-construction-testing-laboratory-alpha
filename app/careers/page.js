import Image from "next/image";
import { ContactForm, ParasWithList, TextWithImg } from "../_components/ui";



export default function CareersPage() {
  const textWithImgData = {
    subTItleTop: "",
    title: "Careers",
    paras: [
    "CCT is growing rapidly in Michigan. And we are looking for talented people who want to grow your expertise and your career with the strength of experience working directly on Engineering and Construction Testing every day. At CCT, you will work directly with experts and professional leaders who can help your career grow significantly from day one. And beyond."
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
  };
  
  return (
    <>
      <TextWithImg data={textWithImgData} />
    </>
  );
}
