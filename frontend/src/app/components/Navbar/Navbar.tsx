"use client";
import { useState } from "react";
import Link from "next/link";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import NavLinks from "./Navlinks";
import { cabinetBold, cabinetMedium, satoshiBlack } from "@/app/utils/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import menuSVG from "@/app/assets/icons/menu.svg";
import crossSVG from "@/app/assets/icons/cross.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);

  const Counter = dynamic(() => import("@/app/components/counter/Counter"), {
    ssr: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResourceClick= ()=>{
    setIsResourceOpen(!isResourceOpen);
  }

  return (
    <div className="relative">

    <header className="fixed w-screen mx-auto z-10 isolate shadow-lg backdrop-blur-lg ">
      <nav
        className={`flex w-screen flex-row justify-${
          isMenuOpen ? "" : "evenly"
        } lg:px-28 gap-x-28 gap-y-8 py-4 items-start ${
          isMenuOpen ? "flex-col bg-dark-purple px-5 h-screen " : "flex-row"
        }`}
        >
        <div className="flex justify-between items-start w-full lg:w-auto md:px-10 px-4 sm:px-8">
          <a href="/">
            <DeerhackLogo width="50" height="50" />
          </a>
          <button
            onClick={toggleMenu}
            className="lg:hidden mt-2 md:mt-2 lg:right-0"
            >
            {isMenuOpen ? (
              <Image src={crossSVG} alt="Close Menu" width={40} height={40} />
            ) : (
              <Image src={menuSVG} alt="Open Menu" width={40} height={40} />
              )}
          </button>
        </div>

        <div
          className={`lg:flex lg:items-between md:w-[800px] h-[55px] lg:h-auto ${
            isMenuOpen ? cabinetMedium.className + " block " : "hidden"
          } `}
          >
          <Counter />
        </div>

        <div
          className={`lg:flex ${
            cabinetBold.className
          } lg:flex-row lg:items-between mt-4 lg:gap-10  ${
            isMenuOpen
            ? cabinetMedium.className + " flex-col mt-5 text-2xl space-y-5"
            : "hidden"
          } font-[16px] text-magnolia`}
        >
          <Link
            href="/schedule"
            className="hover:text-secondary block lg:inline-block "
            >
            Schedule
          </Link>
          {/* <Link
            href="/organizers"
            className="hover:text-secondary block lg:inline-block 
            "
            >
            Organizers
          </Link> */}
          <Link
            href="/winners"
            className="hover:text-secondary block lg:inline-block "
            >
            Winners
          </Link>
          
          
          <div
            >
              <span
              
              className=" hover:text-secondary block lg:inline-block cursor-pointer "
              onClick={handleResourceClick}>
            Resources
              </span>
          </div>
              </div>
            
         
        

        <div
          className={`lg:flex lg:items-between ${
            isMenuOpen ? cabinetMedium.className + " block" : "hidden"
          } `}
          >
          <Link href="/register">
            <button
              className={` ${satoshiBlack.className} font-[20px] md:text-md bg-secondary text-dark-purple text-xl p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}
              >
              Register Now
            </button>
          </Link>
        </div>
      </nav>
    </header>
  <div className = 'fixed  right-64  top-20 w-fit hidden lg:block text-white mx-auto mt-0.5  z-20   backdrop-blur-md'>

<ul className={` ${
  isResourceOpen? "block" :"hidden "
}
w-56 mt-0.5  text-left  z-20 list-none  `}>
    <li className="p-5  mb-2 cursor-pointer">Judging Criteria</li>
    <li className="p-5 mb-2 cursor-pointer">Judging Criteria1</li>
    <li className="p-5 cursor-pointer">Judging Criteria2</li>
  </ul>
  </div>
  </div>
    
  );
};

export default Navbar;
