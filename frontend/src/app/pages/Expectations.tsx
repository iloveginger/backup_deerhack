import ExpectationCards from "@/app/sections/Expectations/ExpectationCards";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";
import { ReactElement } from "react";
import Image from "next/image";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import { cabinetExtraBold } from "../utils/fonts";

export default function ExpectationPage(): ReactElement {
  return (
    <div className="bg-dark-purple pb-20">
      <Image
        src={leaf_prizes_right}
        alt="leaf"
        height={350}
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-3 hidden lg:block"
      />
      <div
        className={`${cabinetExtraBold.className} text-center text-2xl sm:text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto pt-36`}
      >
        What Else Can You Expect at DeerHack?
      </div>
      <ExpectationCards />
      {/* <div className="flex lg:flex-row flex-col justify-around w-[90vw] lg:w-[80vw] lg:max-w-[60vw] mx-auto mt-10 items-center lg:items-start gap-5">
        <ExpectationCards />
        <div className="hidden lg:block cursor-pointer">
          <ExpectationImage />
        </div>
      </div> */}
    </div>
  );
}
