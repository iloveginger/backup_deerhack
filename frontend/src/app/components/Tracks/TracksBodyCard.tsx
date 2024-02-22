import React, { ReactElement } from "react";
import {
  cabinetBold,
  cabinetExtraBold,
  cabinetRegular,
  cabinetMedium,
} from "@/app/utils/fonts";

interface TracksBodyCardProps {
  svg: ReactElement;
  title: string;
  description: string;
  bodyStyling?: string;
}

const TracksBodyCard: React.FC<TracksBodyCardProps> = ({
  svg,
  title,
  description,
  bodyStyling = "",
}: TracksBodyCardProps) => {
  return (
    <div
      className={`max-w-[1150px] mx-auto flex xl:items-center justify-start align-start flex-col xl:flex-row cursor-pointer px-8 lg:pb-44 pb-24 pt-10 text-lg ${cabinetBold.className} rounded-2xl bg-grape ${bodyStyling} gap-8`}
    >
      <div className="xl:w-3/5 self-start">
        <div className="rounded-full w-16 h-16 flex items-center justify-start">
          {svg}
        </div>
        <div className={`${bodyStyling} flex flex-col`}>
          <p
            className={`lg:text-3xl text-2xl xl:mt-4 mt-2 ${cabinetBold.className}`}
          >
            {title}
          </p>
          <span
            className={`lg:text-xl text-lg xl:mt-10 mt-4 ${cabinetMedium.className}`}
          >
            {description}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <p className={`text-base ${cabinetExtraBold.className}`}>WINNER GETS</p>
        <span className={`${cabinetExtraBold.className} lg:text-6xl text-5xl`}>
          Rs. 15,000
        </span>
      </div>
    </div>
  );
};

export default TracksBodyCard;
