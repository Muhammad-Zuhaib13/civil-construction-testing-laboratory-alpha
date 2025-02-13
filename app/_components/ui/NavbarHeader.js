"use client";
import React from "react";
import { Navbar , Flowbite, DarkThemeToggle} from "flowbite-react";
import ScreenContainer from "./ScreenContainer";
const NavbarHeader = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 sticky left-0 right-0 top-[-1px] z-50">
      <ScreenContainer>
        <Navbar className="bg-inherit">
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="/assets/images/Logo-CCTL.png"
              className="mr-3 h-[75px] w-[80px]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold dark:text-white">
              Civil Construction Testing Laboratory
            </span>
          </Navbar.Brand>
          <Navbar.Toggle className="md:block lg:hidden block" />
          <Navbar.Collapse className="lg:block md:hidden">
            <Navbar.Link href="/navbars" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
        </Navbar>
      </ScreenContainer>
    </div>
  );
};

export default NavbarHeader;
