"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";
import ScreenContainer from "./ScreenContainer";
export default function DrawerComp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="flex items-center justify-center ">
        <Button onClick={() => setIsOpen(true)} className="bg-[#FDF6F6] dark:bg-slate-400 text-black dark:text-white">
          <MenuOpenIcon />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="bg-[#FDF6F6] dark:bg-slate-800 ">
        <ScreenContainer>
          <Drawer.Header title="" titleIcon={() => <></>} />
          <Drawer.Items>
            <ul className="flex  flex-col md:space-x-8 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 md:p-0  dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  About
                </Link>
              </li> <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="block py-2 pl-3 pr-4 md:p-0   dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/material-and-lab-testing-services"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Material & Lab Testing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/mix-design"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Mix Design
                </Link>
              </li>
              <li>
                <Link
                  href="/civil-engineering"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/road-and-commercial-construction"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:text-white text-cyan-700"
                  onClick={handleClose}
                >
                  Road & Commercial Construction
                </Link>
              </li>
            </ul>
          </Drawer.Items>
        </ScreenContainer>
      </Drawer>
    </>
  );
}
