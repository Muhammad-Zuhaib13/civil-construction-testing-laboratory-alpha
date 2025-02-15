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

export function FooterComp() {
  return (
    <div className="dark:bg-slate-800 bg-slate-100">
      <ScreenContainer>
        <Footer
          container
          className="dark:bg-inherit bg-inherit rounded-none shadow-none"
        >
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="md:block hidden">
                <img
                  src="/assets/icons/Logo-CCTL.png"
                  className="mr-3 h-[75px] w-[80px]"
                  alt="Flowbite Logo"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:mt-4 md:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/">Home</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/">Home</Footer.Link>
                    {/* <Footer.Link href="/">Home</Footer.Link> */}
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="/">Privacy Policy</Footer.Link>
                    <Footer.Link href="/">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
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
