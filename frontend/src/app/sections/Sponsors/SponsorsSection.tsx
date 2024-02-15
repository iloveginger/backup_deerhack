import { ReactElement } from "react";
import Sponsor from "@/app/components/Sponsors/Sponsor";
import NetworkSVG from "@/app/assets/images/network";
import PuzzleSVG from "@/app/assets/images/puzzle";
import { cabinetMedium, cabinetExtraBold } from "@/app/utils/fonts";
import TitleSponsor from "@/app/components/Sponsors/TitleSponsor";

export default function SponsorsSection() {
  return (
    <div>
      <div className="mb-[5rem] flex flex-col justify-center items-center">
        <div
          className={`mb-8 ${cabinetExtraBold.className} text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto`}
        >
          Our Sponsors
        </div>
        <TitleSponsor image={<NetworkSVG height={100} width={100} />} />
      </div>
      <div className="flex flex-col justify-center items-center mb-[5rem]">
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Platinum Sponsors
        </div>

        <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
      </div>
      <div className="flex flex-col justify-center items-center mb-[5rem]">
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Gold Sponsors
        </div>
        <div className="mx-[15rem]  flex flex-row flex-wrap justify-center items-center">
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
          <Sponsor svg={<PuzzleSVG height={100} width={100} />} />
        </div>
      </div>
    </div>
  );
}
