import Image from "next/image";
import { ContactForm, ParasWithList, TextWithImg } from "../_components/ui";
import { list } from "postcss";

export default function HomePage() {
  const textWithImgData = {
    subTItleTop: "Civil Engineering Projects",
    title: "CCT LABS USES ADVANCED TECHNIQUES TO PROVIDE ACCURATE RESULTS.",
    paras: [
      "Civil Engineering is both a science and an art. And the quality of results depends both upon the skill and training of the Engineer, but also on the quality of information and data available on each type of engineering project. That’s where CCT comes in. We have a deep understanding of Civil Engineering Lab Tests and the types of testing that must be conducted to define the quality and strength of the material involved in the construction process for our civil engineering clients.",
      "At CCT, we maintain a staff of experienced personnel and calibrated equipment to provide the most accurate results that our civil engineering clients trust and depend on. Our Testing experts have decades of experience and are certified in a number of testing methods and have certifications from many regulatory agencies. Including the American Society of Testing and Materials (ASTM). By using state-of-the-art equipment and advanced techniques, we provide exacting solutions for a wide range of civil engineering applications.",
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
  };
  const parasWithListData = {
    subTItleTop: "Civil Engineering Projects",
    title: "CCT LABS USES ADVANCED TECHNIQUES TO PROVIDE ACCURATE RESULTS.",
    paras: [
      "Civil Engineering is both a science and an art. And the quality of results depends both upon the skill and training of the Engineer, but also on the quality of information and data available on each type of engineering project. That’s where CCT comes in. We have a deep understanding of Civil Engineering Lab Tests and the types of testing that must be conducted to define the quality and strength of the material involved in the construction process for our civil engineering clients.",
      "At CCT, we maintain a staff of experienced personnel and calibrated equipment to provide the most accurate results that our civil engineering clients trust and depend on. Our Testing experts have decades of experience and are certified in a number of testing methods and have certifications from many regulatory agencies. Including the American Society of Testing and Materials (ASTM). By using state-of-the-art equipment and advanced techniques, we provide exacting solutions for a wide range of civil engineering applications.",
    ],
    list: [
      "Civil Engineering is both a science and an art. And the quality of results depends both upon the skill and training of the Engineer, but also on the quality of information and data available on each type of engineering project. That’s where CCT comes in. We have a deep understanding of Civil Engineering Lab Tests and the types of testing that must be conducted to define the quality and strength of the material involved in the construction process for our civil engineering clients.",
      "At CCT, we maintain a staff of experienced personnel and calibrated equipment to provide the most accurate results that our civil engineering clients trust and depend on. Our Testing experts have decades of experience and are certified in a number of testing methods and have certifications from many regulatory agencies. Including the American Society of Testing and Materials (ASTM). By using state-of-the-art equipment and advanced techniques, we provide exacting solutions for a wide range of civil engineering applications.",
    ],
  };
  return (
    <>
      <TextWithImg data={textWithImgData} />
      {/* <ParasWithList data={parasWithListData}  />
      <ContactForm /> */}
    </>
  );
}
