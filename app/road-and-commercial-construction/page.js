import Image from "next/image";
import { ContactForm, TextWithImg, Heading , Banner} from "../_components/ui";

export default function RoadandCommercialConstructionPage() {
  const textWithImgDataOne = {
    
    subTItleTop: "Road & Commercial Construction",
    title: "How we help Road Construction (Horizontal)",
    paras: [
      "Civil Engineering is both a science and an art. And the quality of results depends both upon the skill and training of the Engineer, but also on the quality of information and data available on each type of engineering project. That’s where CCT comes in. We have a deep understanding of Civil Engineering Lab Tests and the types of testing that must be conducted to define the quality and strength of the material involved in the construction process for our civil engineering clients.",
      "Mr. Mandell has worked on roadway projects, sewer and waterline projects, commercial projects, industrial projects, landfill projects and Air Force projects rebuilding runways and taxiways, and many more. As a result of this broad range of experience and expertise, CCT brings the knowledge of Testing for Road Construction projects for building and maintaining roadways and highways that is second to none.",
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
  };
  const textWithImgDataTwo = {
    classesContainer:'lg:flex-row-reverse',
    subTItleTop: "How we help Commercial Construction (Vertical)",
    title: "How we help Road Construction (Horizontal)",
    paras: [
      "Vertical construction projects and infrastructure have very specialized needs and require a higher level of collaboration with the architectural and engineering teams. Planning, land acquisition, site development, soils and foundations, design, engineering, construction and building safety all require critical and exacting testing design, capabilities and support. This is where the combined engineering experience of both CCT and our sister engineering and construction management company, The Maakil Group, makes the difference. Both soil and foundation density and strength testing play critical rolls, as does testing for construction materials, and engineered fills. Exacting tests must be designed and conducted to evaluate the suitability of fill placement and compaction, in concert with comprehensive load testing.",
    ],
    img: {
      src: "/assets/images/home-comp-txt-img.jpg",
      alt: "Scenic view of Oman",
    },
    list: [
      "Foundation / Footing Inspections",
      "Trench Compaction Testing",
      "Structural Concrete Inspections",
      "Steel Framing Inspections",
      "Construction Material Testing",
      "Additional Construction Inspections Required Per Project Specifications",
      "Be sure to talk to us about your specific performance goals before you begin your next project.",
    ],
  };
  const banner = {
    title: "Road & Commercial Construction",
    img: "/assets/images/commercial-construction-a.jpg",
    para:'',
  };
  return (
    <>
    <Banner data={banner} />
      <TextWithImg data={textWithImgDataOne} />
      <div className="bg-[#FDF6F6] dark:bg-slate-400">
      <TextWithImg data={textWithImgDataTwo} />
      </div>
    </>
  );
}
