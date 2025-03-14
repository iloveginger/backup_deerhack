import { ReactElement } from "react";
import Trophy from "@/app/assets/images/trophy";
import {
  satoshiRegular,
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
} from "@/app/utils/fonts";

export default function GrandPrizeCard(): ReactElement {
  return (
    <div
      className={`flex flex-col justify-evenly grow h-[43.284rem] sm:h-72 md:h-72 lg:h-[25rem] w-[29.348rem] lg:w-[22rem] primary-aboutpage-background rounded-2xl`}
    >
      <div className="flex flex-col justify-left text-left  ml-[2rem] ">
        <div className="flex justify-left">
          <Trophy height={120} width={120} />
        </div>
        <p
          className={`${cabinetExtraBold.className} font-extrabold  text-4xl text-[#110C24] sm:text-xl lg:text-4xl`}
        >
          Grand Prize
        </p>
      </div>
      <p
        className={`${cabinetBlack.className} text-5xl sm:text-4xl lg:text-5xl font-extrabold text-left ml-[2rem] mt-[2rem]`}
      >
        Rs.<br></br> 50,000
      <div 
      className={`${satoshiRegular.className} text-xs sm:text-xs lg:text-xs font-normal font-style: italic text-left`}
      > 
      to overall winner
      </div>
      </p>

    </div>
  );
}
