"use client";
import styles from "./styles.module.css";
import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold } from "@/fonts";
import { useEffect,useState } from "react";

const Hero = () => {
  // DEVFOLIO REQUIREMENTS
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    // document.getElementById('hero_container')?.appendChild(script);
    document.body.appendChild(script);
    return () => {
      // document.getElementById('hero_container')?.removeChild(script);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={` ${styles.hero_background_container} flex justify-center w-full `} id = "hero_container"
    >
      <div className="absolute gap-[30px] top-[90px] flex flex-col text-center lg:top-48">
        <p
          className={` text-3xl font-bold text-center text-secondary ${cabinetBold.className}`}
        >
          10th - 12th May
        </p>
        <MainLogo width={300} height={135} />
        <div
        className="apply-button"
        data-hackathon-slug="deerhack24"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }} 
        ></div>
      </div>
    
    </div>
  );
};
export default Hero;
