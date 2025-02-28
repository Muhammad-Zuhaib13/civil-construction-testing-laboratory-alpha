"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import ScreenContainer from "./ScreenContainer";
import Image from "next/image";
export default function FooterComp() {
  return (
    <div className="dark:bg-slate-800 bg-[#e1dddd]">
      <ScreenContainer>
        <Footer
          container
          className="dark:bg-inherit bg-inherit rounded-none shadow-none"
        >
          <div className="w-full">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
              <div className="md:block hidden">
                <div className="mr-3 h-[75px] w-[80px] relative">
                  <Image
                    src="/assets/icons/Logo-CCTL.png"
                    className="h-full w-full object-cover"
                    fill
                    alt="CCTL"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="sub-heading dark:text-white">Office Address</h4>
                <p className="navbar dark:text-white">
                  Near Madina colony Airport
                  <br /> Road Skardu
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="sub-heading dark:text-white">Contact</h4>
                <p className="navbar dark:text-white">
                  <span>Whatsapp: </span>
                  <span>0347-9008870</span>
                </p>
                <p className="navbar dark:text-white">
                  <span>Mobile: </span>
                  <span>0312-9047134</span>
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="sub-heading dark:text-white">Email</h4>
                <p className="navbar dark:text-white">
                  <span> g.abbasskd@gmail.com </span>
                </p>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="/"
                by="Civil Construction Testing Laboratory"
                year={2025}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="/" icon={BsFacebook} />
                <Footer.Icon href="/" icon={BsInstagram} />
                <Footer.Icon href="/" icon={BsTwitter} />
                <Footer.Icon href="/" icon={BsGithub} />
                <Footer.Icon href="/" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </ScreenContainer>
    </div>
  );
}
