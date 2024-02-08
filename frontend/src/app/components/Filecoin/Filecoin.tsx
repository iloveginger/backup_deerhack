import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import FileCoinSVG from "@/app/assets/images/filecoin";

export default function Filecoin(): ReactElement {
  return (
    <div className=" bg-violet w-48 mt-10 ml-10 rounded-xl">
      <div className="flex flex-col px-4 py-5 gap-3">
        <div className="flex justify-start gap-2 items-center">
          <FileCoinSVG height={38} width={40} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-xl`}
          >
            Filecoin
          </p>
        </div>
        <div className="flex flex-col">
          <p className={`${cabinetLight.className} text-[0.6rem] text-white`}>
            best use of Filecoin and/or IPFS
          </p>
          <p className={`${cabinetBold.className} text-secondary text-xs`}>
            worth $200
          </p>
        </div>
      </div>
    </div>
  );
}
