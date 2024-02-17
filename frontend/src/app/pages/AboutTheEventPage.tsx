import React from "react";
import AboutTheEventCards from "../sections/AboutTheEvent/AboutTheEventCards";
import { cabinetExtraBold } from "@/fonts";
import Image from "next/image";
import about_right from "@/app/assets/images/AboutRight.svg";
import about_left from "@/app/assets/images/AboutLeft.svg";

const AboutTheEventPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={about_right}
          alt="right leaf"
          height={400}
          className="absolute top-0 right-0 lg:block hidden"
        />
        <Image
          src={about_left}
          alt="left leaf"
          height={250}
          className="absolute top-1/2 transform -translate-y-1/2 lg:block hidden"
        />
        <div className="py-20 mt-16">
          <p
            className={`mb-8 ${cabinetExtraBold.className} text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto`}
          >
            About The Event
          </p>
          <AboutTheEventCards />I
        </div>
      </div>
    </>
  );
};

export default AboutTheEventPage;
