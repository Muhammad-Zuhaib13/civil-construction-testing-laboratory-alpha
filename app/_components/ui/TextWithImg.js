import React from "react";
import ScreenContainer from "./ScreenContainer";
import { List } from "flowbite-react";
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
  } = data || {};
  const containerPaddingY = `lg:py-[${marginY}] px-0 ${
    isShowMarginYResp && "sm:py-[60px] py-[40px]"
  }`;
  return (
    <ScreenContainer>
      <div
        className={`${classesContainer} ${
          containerPaddingY || ""
        } flex flex-col items-start gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px] `}
      >
        <div className="flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px]">
          <div className="flex flex-col gap-[8px]">
            {subTItleTop ? (
              <h4 className="sub-heading dark:text-white">{subTItleTop}</h4>
            ) : null}
            {title ? (
              <h2 className="mainHeading dark:text-white">{title}</h2>
            ) : null}
          </div>
          {paras ? (
            <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
              {paras.map((para, index) => (
                <div key={index} className="last:mb-0">
                  <p className="paragraph dark:text-white">{para}</p>
                </div>
              ))}
            </div>
          ) : null}

          {list ? (
            <List className="flex flex-col sm:gap-[20px] gap-[16px] list-disc">
              {list.map((item, index) => (
                <List.Item key={index}>
                  <span className="paragraph text-black dark:text-white">
                    {item}
                  </span>
                </List.Item>
              ))}
            </List>
          ) : null}
        </div>
        {img.src ? (
          <div className="h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px]">
            <img src={img.src} alt={img.alt} />
          </div>
        ) : null}
      </div>
    </ScreenContainer>
  );
};

export default TextWithImg;
