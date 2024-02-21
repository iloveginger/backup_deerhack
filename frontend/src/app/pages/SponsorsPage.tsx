import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg";
import SponsorsSection from "../sections/Sponsors/SponsorsSection";
import Image from "next/image";
import { ReactElement } from "react";
export default function SponsorPage(): ReactElement {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Image
          src={leaf_prizes_right}
          alt="leaf"
          height={250}
          className="absolute right-3 top-46 hidden xl:block -rotate-12"
        />
      </div>
      <div>
        <SponsorsSection />
      </div>
      <div className="h-40">
        <div className="relative h-fit">
          <Image
            src={leaf_deerhack2023_right}
            alt="leaf"
            height={250}
            style={{ transform: "scaleX(-1)" }}
            className="absolute left-1 top-46 hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
}
