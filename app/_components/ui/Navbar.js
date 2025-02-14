"use client";
import React from "react";
import { Navbar, Flowbite, DarkThemeToggle } from "flowbite-react";
import ScreenContainer from "./ScreenContainer";
const NavbarComp = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 sticky left-0 right-0 top-[-1px] z-50 header">
      <ScreenContainer>
        <Navbar className="bg-inherit flex-nowrap px-0 sm:px-0 relative">
          <Navbar.Brand href="/">
            <img
              src="/assets/icons/Logo-CCTL.png"
              className="mr-3 h-[75px] w-[80px]"
              alt="Flowbite Logo"
            />
            <span className="self-center sub-heading font-semibold dark:text-white lg:block hidden">
              Civil Construction Testing Laboratory
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/">About</Navbar.Link>
            <Navbar.Link href="/">Services</Navbar.Link>
            <Navbar.Link href="/">Pricing</Navbar.Link>
            <Navbar.Link href="/">Contact</Navbar.Link>
          </Navbar.Collapse>
          <div className="flex fixed right-[20px] bottom-[20px]">
            <Flowbite>
              <DarkThemeToggle />
            </Flowbite>
          </div>
        </Navbar>
      </ScreenContainer>
    </div>
  );
};

export default NavbarComp;
