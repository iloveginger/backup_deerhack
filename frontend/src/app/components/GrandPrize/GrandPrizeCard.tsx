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
      className={`flex flex-col justify-evenly grow h-[27rem] sm:h-72 md:h-72 lg:h-[25rem] w-full lg:w-[22rem] primary-gradient-background rounded-2xl`}
    >
      <div className="flex flex-col justify-center text-center gap-4">
        <div className="flex justify-center">
          <Trophy height={120} width={120} />
        </div>
        <p
          className={`${cabinetExtraBold.className} font-bold  text-2xl sm:text-xl lg:text-3xl`}
        >
          Grand Prize
        </p>
      </div>
      <p
        className={`${cabinetBlack.className} text-5xl sm:text-4xl lg:text-5xl font-extrabold text-center`}
      >
        Rs. 50,000
      </p>
    </div>
  );
}
