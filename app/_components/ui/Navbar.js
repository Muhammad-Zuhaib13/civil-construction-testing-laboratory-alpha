"use client";
import React, { useRef, useState, useEffect } from "react";
import { Navbar, Flowbite, DarkThemeToggle, Dropdown } from "flowbite-react";
import ScreenContainer from "./ScreenContainer";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DrawerComp from "./DrawerComp";
const NavbarComp = () => {
  const dropdownContainerRef = useRef(null); // Reference for the dropdown container (li)
  const dropdownMenuRef = useRef(null); // Reference for the dropdown menu (ul)
  const [isOpen, setIsOpen] = useState(false); // Track the dropdown's open/close state

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-[#e1dddd] dark:bg-slate-800 sticky left-0 right-0 top-[-1px] z-50 header">
        <ScreenContainer>
          <nav className="flex flex-row items-center justify-between py-2.5">
            <Link
              className="mr-3 flex justify-center items-center  shrink-0"
              href="/"
            >
              <img
                src="/assets/icons/Logo-CCTL.png"
                className="h-[75px] w-[80px]"
                alt="Flowbite Logo"
              />
              <span className="self-center sub-heading font-semibold dark:text-white lg:block hidden">
                Civil Construction Testing Laboratory
              </span>
            </Link>
            <div className="md:flex items-center hidden gap-2">
              <ul className="flex  flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <Link
                    href="/"
                    className="navbar block py-2 pl-3 pr-4 md:p-0  dark:text-white text-cyan-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="navbar block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="navbar block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="navbar block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  >
                    Careers
                  </Link>
                </li>
                <li ref={dropdownContainerRef} className="relative">
                  <span
                    className="py-2 pl-3 pr-4 md:p-0 dark:text-white text-cyan-700 flex flex-row gap-1"
                    onClick={toggleDropdown}
                  >
                    <span className="navbar">Services</span>
                    <ExpandMoreIcon />
                  </span>
                  <ul
                    ref={dropdownMenuRef}
                    className={`absolute right-0 bg-white w-[210px] p-2 rounded-sm shadow-sm transition-all duration-300 ease-in-out flex flex-col ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link
                        href="/material-and-lab-testing-services"
                        className="navbar block py-2 px-3  dark:text-white text-cyan-700"
                      >
                        Material & Lab Testing Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mix-design"
                        className="navbar block py-2 px-3  dark:text-white text-cyan-700"
                      >
                        Mix Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/civil-engineering"
                        className="navbar block py-2 px-3  dark:text-white text-cyan-700"
                      >
                        Civil Engineering
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/road-and-commercial-construction"
                        className="navbar block py-2 px-3  dark:text-white text-cyan-700"
                      >
                        Road & Commercial Construction
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <Flowbite>
                <DarkThemeToggle />
              </Flowbite>
            </div>
            <div className="md:hidden block">
              <DrawerComp />
            </div>
          </nav>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default NavbarComp;
