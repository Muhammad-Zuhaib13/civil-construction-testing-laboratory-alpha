import React from "react";
import ScreenContainer from "./ScreenContainer";
import { Fade } from "react-awesome-reveal";
const Heading = (props) => {
  const { data } = props;
  const {
    title,
    marginY = "",
    isShowMarginYResp = true,
    classesContainer = "",
  } = data;
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${
    isShowMarginYResp && "sm:py-[60px] py-[40px]"
  }`;
  return (
    <ScreenContainer>
      {title ? (
        <div className={`${classesContainer} ${containerPaddingY || ""} `}>
          <Fade direction="up">
            <h2 className="mainHeading dark:text-white text-center">{title}</h2>
          </Fade>
        </div>
      ) : null}
    </ScreenContainer>
  );
};

export default Heading;
