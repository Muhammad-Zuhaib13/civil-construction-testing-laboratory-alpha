import Image from "next/image";
import { ContactForm, Heading, TextWithImg , Banner} from "../_components/ui";

export default function ContactPage() {
  const textWithImgData = {
    subTItleTop: "",
    title: "Put us to the Test, Michigan!",
    paras: [
      "Call CCT for a project quote today at 419-878-7304. Or simply submit your request on the form below. We’ll respond promptly.",
      "CCT will help you obtain high-quality data, test reports, and certificates that you can rely on to make informed decisions about construction materials and stay within compliance. Engage with one of our experts today."
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
  };
  const heading = {
    title: "We are the Michigan Engineering, Construction and Testing Experts.",
  };
  const banner = {
    title: "Contact Us",
    img: "/assets/images/contact.jpg",
    para:'',
  };
  return (
    <>
    <Banner data={banner} />
       <TextWithImg data={textWithImgData} />
      <Heading data={heading} />
      <div className="bg-[#FDF6F6] dark:bg-slate-400">
        <ContactForm />
      </div>
    </>
  );
}
