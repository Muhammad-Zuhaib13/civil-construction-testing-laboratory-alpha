"use client"
import React from "react";
import ScreenContainer from "./ScreenContainer";
import { List } from "flowbite-react";
const ParasWithList = (props) => {
  const { data } = props;
  const { title, paras, list, subTItleTop } = data;
  return (
    <div className="py-[40px] sm:py-[60px] lg:py-[80px]">
      <ScreenContainer>
        <div className="flex flex-col items-start gap-[16px] sm:gap-[30px]  lg:gap-[60px]">
          <div className="flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px]">
            <div className="flex flex-col gap-[8px]">
              <h4 className="sub-heading dark:text-white">{subTItleTop}</h4>
              <h2 className="mainHeading dark:text-white">{title}</h2>
            </div>
            <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]">
              {paras.map((para, index) => (
                <div key={index} className="last:mb-0">
                  <p className="paragraph dark:text-white">{para}</p>
                </div>
              ))}
            </div>
          </div>
          <List className="flex flex-col sm:gap-[20px] gap-[16px] list-disc">
            {list.map((item, index) => (
              <List.Item key={index}>
                <span className="paragraph text-black dark:text-white">
                 {item}
                </span>
              </List.Item>
            ))}
          </List>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default ParasWithList;
