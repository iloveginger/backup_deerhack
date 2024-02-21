"use client";
import { useState } from "react";
import Link from "next/link";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import NavLinks from "./Navlinks";
import { cabinetBold, satoshiBlack } from "@/app/utils/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import menuSVG from "@/app/assets/icons/menu.svg";
import crossSVG from "@/app/assets/icons/cross.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Counter = dynamic(() => import("@/app/components/counter/Counter"), {
    ssr: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex flex-row justify-between gap-5 py-5 px-14 w-screen items-center container-fluid isolate shadow-lg backdrop-blur-lg ${
        isMenuOpen ? "flex-col" : "flex-row"
      }`}
    >
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link href={"/"}>
          <DeerhackLogo />
        </Link>
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? (
            <Image src={crossSVG} alt="Close Menu" width={24} height={24} />
          ) : (
            <Image src={menuSVG} alt="Open Menu" width={24} height={24} />
          )}
        </button>
      </div>

      <div
        className={`lg:flex lg:items-center ${
          isMenuOpen ? "block" : "hidden"
        } `}
      >
        <Counter />
      </div>

      <ul
        className={`lg:flex lg:flex-row lg:gap-10 ${
          isMenuOpen ? "block" : "hidden"
        } font-[16px] text-magnolia ${cabinetBold.className}`}
      >
        <NavLinks />
      </ul>

      <div
        className={`lg:flex lg:items-center ${
          isMenuOpen ? "block" : "hidden"
        } `}
      >
        <Link href="/register">
          <button
            className={` ${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-xl p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}
          >
            Register Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
