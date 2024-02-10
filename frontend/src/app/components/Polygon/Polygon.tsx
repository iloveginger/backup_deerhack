import { ReactElement } from "react";
import {
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
  cabinetLight,
} from "@/app/utils/fonts";
import PolygonSVG from "@/app/assets/images/polygon";

export default function Polygon({ height }: { height?: string }): ReactElement {
  return (
    <div
      className=" bg-violet w-48 rounded-xl flex items-center"
      style={height ? { height: height } : {}}
    >
      <div className="flex flex-col px-4 py-5 gap-3">
        <div className="flex justify-start gap-2 items-center">
          <PolygonSVG height={38} width={40} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-xl`}
          >
            Polygon
          </p>
        </div>
        <div className="flex flex-col">
          <p className={`${cabinetBold.className} text-white text-sm`}>
            Ethereum Track
          </p>
          <p className={`${cabinetLight.className} text-[0.6rem] text-white`}>
            best hack built on Ethereum
          </p>
          <p className={`${cabinetBold.className} text-secondary text-xs`}>
            worth $150
          </p>
        </div>
        <div className="flex flex-col">
          <p className={`${cabinetBold.className} text-white text-sm`}>
            Ethereum + Polygon <br /> Track
          </p>
          <p className={`${cabinetLight.className} text-[0.6rem] text-white`}>
            best hack built on Ethereum + Polygon
          </p>
          <p className={`${cabinetBold.className} text-secondary text-xs`}>
            worth $150
          </p>
        </div>
      </div>
    </div>
  );
}
