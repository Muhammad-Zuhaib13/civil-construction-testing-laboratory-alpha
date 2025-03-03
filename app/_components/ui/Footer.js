"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import ScreenContainer from "./ScreenContainer";
import Image from "next/image";
export default function FooterComp() {
  return (
    <div className="dark:bg-slate-800 bg-[#e1dddd] relative z-20">
      <ScreenContainer>
        <Footer
          container
          className="dark:bg-inherit bg-inherit rounded-none shadow-none"
        >
          <div className="w-full">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
              <div className="md:block hidden">
                <div className="mr-3 h-[75px] w-[80px] relative">
                  <a href="https://civil-construction-testing-laboratory-web.vercel.app/">
                    <Image
                      src="/assets/icons/Logo-CCTL.png"
                      className="h-full w-full object-cover"
                      fill
                      alt="CCTL"
                    />
                  </a>
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
                  <span>
                    <a href="https://wa.me/03129047134">0347-9008870</a>
                  </span>
                </p>
                <p className="navbar dark:text-white">
                  <span>Mobile: </span>
                  <span>
                    <a href="tel:0312-9047134">0312-9047134</a>
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h4 className="sub-heading dark:text-white">Email</h4>
                <p className="navbar dark:text-white">
                  <span>
                    <a href="mailto:cctl1472@gmail.com" target="_blank">
                    cctl1472@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="https://civil-construction-testing-laboratory-web.vercel.app/"
                by="Civil Construction Testing Laboratory"
                year={new Date().getFullYear()}
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="https://wa.me/03129047134"
                  icon={BsWhatsapp}
                />
                <Footer.Icon
                  href="https://www.linkedin.com/in/ghulam-abbas-b23508225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  icon={BsLinkedin}
                />
                <Footer.Icon
                  href="https://www.facebook.com/share/18SbiT2nay/"
                  target="_blank"
                  icon={BsFacebook}
                />
                <Footer.Icon
                  href="https://www.instagram.com/abbas_skd?igsh=MXZqaHFqeXZocHZyYw=="
                  target="_blank"
                  icon={BsInstagram}
                />
                <Footer.Icon
                  href="https://www.tiktok.com/@akbari42101?_t=ZS-8uJeSMJrFrk&_r=1"
                  target="_blank"
                  icon={BsTiktok}
                />
              </div>
            </div>
          </div>
        </Footer>
      </ScreenContainer>
    </div>
  );
}
