import Sponsor from "@/app/components/Sponsors/Sponsor";
import NetworkSVG from "@/app/assets/images/network";
import { cabinetMedium, cabinetExtraBold } from "@/app/utils/fonts";
import TitleSponsor from "@/app/components/Sponsors/TitleSponsor";
import DeerholdLogo from "@/app/assets/images/sponsors/deerhold.png";
import MountStradaLogo from "@/app/assets/images/sponsors/mount_strada.png";
import SegwayLogo from "@/app/assets/images/sponsors/segway.png";

export default function SponsorsSection() {
  return (
    <div>
      <div className="mb-[5rem] flex flex-col justify-center items-center">
        <div className={`mb-8 ${cabinetExtraBold.className} headings`}>
          Our Sponsors
        </div>
        <TitleSponsor image={<NetworkSVG height={100} width={100} />} />
      </div>
      {/* <div className="flex flex-col justify-center items-center mb-[5rem]">
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Platinum Sponsors
        </div>

        <Sponsor image={<PuzzleSVG height={100} width={100}/>} />
      </div> */}
      <div className="flex flex-col justify-center items-center mb-[5rem]">
        {/* <div
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
        </div> */}
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Silver Sponsors
        </div>
        <div className="mx-[15rem]  flex flex-row flex-wrap justify-center items-center">
          <Sponsor image={DeerholdLogo} />
        </div>
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Coffee Partner
        </div>
        <div className="mx-[15rem]  flex flex-row flex-wrap justify-center items-center">
          <Sponsor image={MountStradaLogo} />
        </div>
        <div
          className={`${cabinetMedium.className} m-10 text-white text-3xl font-extrabold tracking-normal`}
        >
          Mobility Partner
        </div>
        <div className="mx-[15rem]  flex flex-row flex-wrap justify-center items-center">
          <Sponsor image={SegwayLogo} />
        </div>
      </div>
    </div>
  );
}
