import Image from "next/image";
import { ContactForm, ParasWithList, TextWithImg , Banner} from "../_components/ui";
import { list } from "postcss";

export default function MaterialandLabTestingServicesPage() {
  const textWithImgData = {
    subTItleTop: "Michigan Construction Materials Testing",
    title: "Tested & Ready",
    paras: [
      "CCT Construction Materials Testing provides critically important data that Michigan municipalities, developers, contractors, industrial companies, and Local Public Agencies (LPAs), and even the Army Corps of Engineers rely on for construction projects.",
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
      "The foundation that the structure rests upon plays a significant role in the ultimate success of a project. Whether its clay, silt, sand, gravel, or bedrock, understanding the conditions of a site can help your team make smart engineering and construction decisions. Test verification of the materials used on a job site is essential for compliance to specifications, adhering to Michigan building codes, providing occupational safety, and following environmental regulations. In addition to the standard tests that are required by the specification, we perform specific tests on construction materials as dictated by the needs of the client. Proper testing can provide critical information to assist engineers in achieving sound building practices. Our laboratory engineers and technicians also sample, examine, and classify soil materials. We uphold current State of Michigan and federal standards. CCT highly skilled geotechnical team always provide accurate conclusions and recommendations regarding material compliance for each project’s requirements. Our testing services include:",
    ],
    list: [],
  };
  const banner = {
    title: "Material & Lab Testing Services",
    img: "/assets/images/material-lab-testing.jpg",
    para:'',
  };

  return (
    <>
    <Banner data={banner} />
      <TextWithImg data={textWithImgData} />
      <div className="bg-[#FDF6F6] dark:bg-slate-400">
        <ParasWithList data={parasWithListData} />
      </div>
    </>
  );
}
