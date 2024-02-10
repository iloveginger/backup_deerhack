import PrizesGrid from "@/app/sections/Prizes/PrizesGrid";
import { ReactElement } from "react";
import { cabinetExtraBold } from "../utils/fonts";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import Image from "next/image";

export default function PrizesPage(): ReactElement {
  return (
    <div className="bg-dark-purple">
      <Image
        src={leaf_prizes_right}
        alt="leaf"
        height={350}
        className="absolute z-0 right-9 hidden lg:block"
      />
      <p
        className={`${cabinetExtraBold.className} text-center text-3xl text-primary-gradient-color w-fit mx-auto`}
      >
        Prizes
      </p>
      <PrizesGrid />
    </div>
  );
}
