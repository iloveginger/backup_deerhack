import { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetLight } from "@/app/utils/fonts";
import ReplitSVG from "@/app/assets/images/replit";

export default function Filecoin(): ReactElement {
  return (
    <div className=" bg-violet w-48 mt-10 ml-10 rounded-xl">
      <div className="flex flex-col px-4 py-5 gap-3">
        <div className="flex justify-start gap-2 items-center">
          <ReplitSVG height={38} width={40} />
          <p
            className={`text-primary-gradient-color ${cabinetExtraBold.className} text-xl`}
          >
            Replit
          </p>
        </div>
        <div className="flex flex-col">
          <p className={`${cabinetLight.className} text-[0.6rem] text-white`}>
            winning project deployed on Replit
          </p>
          <p className={`${cabinetBold.className} text-secondary text-xs`}>
            worth $150
          </p>
        </div>
      </div>
    </div>
  );
}
