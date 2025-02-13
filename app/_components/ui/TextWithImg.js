import React from "react";
import ScreenContainer from "./ScreenContainer";

const TextWithImg = (props) => {
  const { data } = props;
  const { title, paras, img, subTItleTop } = data;
  return (
    <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
      <ScreenContainer>
        <div className="flex flex-col items-start gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px]">
          <div className="flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px]">
            <div className="flex flex-col gap-[8px]">
              <h4 className='sub-heading dark:text-white'>{subTItleTop}</h4>
              <h2 className='mainHeading dark:text-white'>{title}</h2>
            </div>
            <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
              {paras.map((para, index) => (
                <div key={index} className="last:mb-0">
                  <p className="paragraph dark:text-white">{para}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px]">
            <img src={img.src} alt={img.alt} />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default TextWithImg;
