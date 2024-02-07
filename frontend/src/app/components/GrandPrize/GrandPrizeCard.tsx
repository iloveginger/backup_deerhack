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
      className={`flex flex-col justify-evenly h-72 w-64 primary-gradient-background rounded-xl mt-10 ml-10`}
    >
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center">
          <Trophy height={100} width={100} />
        </div>
        <p className={`${cabinetBold.className} font-bold text-xl`}>
          Grand Prize
        </p>
      </div>
      <p
        className={`${cabinetBlack.className} text-4xl font-extrabold text-center`}
      >
        Rs. 50,000
      </p>
    </div>
  );
}
