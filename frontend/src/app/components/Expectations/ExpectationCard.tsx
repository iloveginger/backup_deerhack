"use client";
import { ReactElement } from "react";
import { cabinetBlack, cabinetRegular, cabinetBold } from "@/app/utils/fonts";
import ExpectationImage from "./ExpectationImage";
import { StaticImageData } from "next/image";

export default function ExpectationCard({
  svg,
  title,
  description,
  index,
  imageSrc,
  isActive,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
  index: number;
  imageSrc: StaticImageData;
  isActive: boolean;
}): ReactElement {
  return (
    <div>
      <div
        className={`hover:cursor-pointer w-[70vw] lg:w-[40rem] py-8 justify-start px-6 border-grape hover:bg-grape border-[3px] rounded-xl flex flex-col lg:flex-row gap-5 sm:gap-8 expectation_root ${
          isActive ? "bg-grape" : "bg-dark-purple"
        }`}
      >
        <div>{svg}</div>
        <div className="flex flex-col gap-4">
          <p
            className={`text-white ${cabinetBold.className} text-lg sm:text-2xl`}
          >
            {title}
          </p>
          <p
            className={`text-white ${
              cabinetRegular.className
            } text-sm md:text-lg expectation_description ${
              isActive ? "block" : "hidden"
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Image that comes below the div when clicking, comes only in mobile, hidden in large screens */}
      <div
        className={`${
          isActive ? "block lg:hidden" : "hidden"
        } flex justify-center`}
      >
        <ExpectationImage imageSrc={imageSrc} />
      </div>
    </div>
  );
}
