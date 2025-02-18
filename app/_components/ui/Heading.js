import React from "react";
import ScreenContainer from "./ScreenContainer";
const Heading = (props) => {
  const { data } = props;
  const { title, marginY = "", isShowMarginYResp = true , classesContainer=''} = data;
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${
    isShowMarginYResp && "sm:py-[60px] py-[40px]"
  }`;
  return (
    <ScreenContainer>
      {title ? (
        <div className={`${classesContainer} ${containerPaddingY || ""} `}>
          <h2 className="mainHeading dark:text-white text-center">{title}</h2>
        </div>
      ) : null}
    </ScreenContainer>
  );
};

export default Heading;
