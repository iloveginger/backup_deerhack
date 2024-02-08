"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import NavLinks from "./Navlinks";
import Counter from "../counter/Counter";
import { cabinetBold, satoshiBlack } from "@/app/utils/fonts";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between mx-auto p-5 items-center container-fluid isolate shadow-lg backdrop-blur-lg ">
      <Link href={"/"} className="ml-20">
        <DeerhackLogo />
      </Link>
      <Counter />
      <ul
        className={`xl:flex flex-row justify-around gap-10 font-[16px] text-magnolia ${cabinetBold.className} `}
      >
        <NavLinks />
      </ul>
      <Link href="/register">
        <button
          className={` ${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-xl p-3 rounded mr-20 bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem] `}
        >
          Register Now
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
