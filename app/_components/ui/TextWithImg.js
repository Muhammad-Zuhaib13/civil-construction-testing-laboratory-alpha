import React from "react";
import ScreenContainer from "./ScreenContainer";
import { List } from "flowbite-react";
import { Fade } from "react-awesome-reveal";
const TextWithImg = (props) => {
  const { data } = props;
  const {
    title,
    paras,
    img,
    subTItleTop,
    list,
    classesContainer = "",
    marginY = "",
    isShowMarginYResp = true,
    isShowBg = false,
  } = data || {};
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${
    isShowMarginYResp && "sm:py-[60px] py-[40px]"
  }`;
  return (
    <div className={` ${isShowBg ? "bg-[#FDF6F6] dark:bg-slate-400" : ""}`}>
      <ScreenContainer>
        <div
          className={`${classesContainer} ${
            containerPaddingY || ""
          } flex flex-col items-center gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px] `}
        >
          <div className="flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px]">
            <div className="flex flex-col gap-[8px]">
              {subTItleTop ? (
                <Fade direction="left">
                  <h4 className="sub-heading dark:text-white">{subTItleTop}</h4>
                </Fade>
              ) : null}
              {title ? (
                <Fade direction="left">
                  <h2 className="mainHeading dark:text-white">{title}</h2>
                </Fade>
              ) : null}
            </div>
            {paras ? (
              <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
                {paras.map((para, index) => (
                  <div key={index} className="last:mb-0">
                    <Fade direction="left">
                      <p className="paragraph dark:text-white">{para}</p>
                    </Fade>
                  </div>
                ))}
              </div>
            ) : null}

            {list ? (
              <Fade direction="left">
                <List className="flex flex-col sm:gap-[20px] gap-[16px] list-disc">
                  {list.map((item, index) => (
                    <List.Item key={index}>
                      <span className="paragraph text-black dark:text-white">
                        {item}
                      </span>
                    </List.Item>
                  ))}
                </List>
              </Fade>
            ) : null}
          </div>
          {img.src ? (
            <div className="h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px]">
              <Fade direction="right">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full overflow-hidden object-fill"
                />
              </Fade>
            </div>
          ) : null}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TextWithImg;
