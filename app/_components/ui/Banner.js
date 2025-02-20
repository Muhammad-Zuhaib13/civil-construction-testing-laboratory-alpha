import React from "react";
import ScreenContainer from "./ScreenContainer";
import { Fade } from "react-awesome-reveal";
const Banner = (props) => {
  const { data } = props;
  const { title, img, para } = data;
  return (
    <div className="w-full h-[400px] relative">
      <div className="gradient-banner  w-full h-full absolute top-0 left-0 z-20"></div>
      {img ? (
        <img
          src={img}
          className="w-full h-full object-cover absolute top-0 left-0 right-0 z-10"
          alt={title || "image"}
        />
      ) : null}
      {title ? (
        <ScreenContainer>
          <div className="flex flex-col justify-end items-start h-full w-full pb-[30px] relative z-30">
            <Fade direction="up" delay={100}>
              <h2 className="mainHeading text-white relative">{title}</h2>
            </Fade>
            <Fade direction="up" delay={150}>
              {para ? <p className="paragraph text-white">{para}</p> : null}
            </Fade>
          </div>
        </ScreenContainer>
      ) : null}
    </div>
  );
};

export default Banner;
