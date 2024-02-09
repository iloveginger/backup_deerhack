import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import SolanaSVG from "@/app/assets/images/solana";

export default function Solana({
  title = "Solana",
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}): ReactElement {
  return (
    <div className=" bg-violet w-48 rounded-xl">
      <div className="flex flex-col px-4 py-5 gap-5">
        <div className="flex justify-start gap-2 items-center">
          <SolanaSVG height={38} width={40} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-xl`}
          >
            Solana
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className={`${cabinetBold.className} text-white text-sm`}>
            {title}
          </p>
          <p className={`${cabinetLight.className} text-[0.6rem] text-white`}>
            {description}
          </p>
          <p className={`${cabinetBold.className} text-secondary text-xs`}>
            worth ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
