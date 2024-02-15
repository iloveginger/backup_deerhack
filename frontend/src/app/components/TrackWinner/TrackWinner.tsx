import { ReactElement } from "react";
import Confetti from "@/app/assets/images/confetti";
import { cabinetBlack, cabinetBold } from "@/app/utils/fonts";

export default function TrackWinner(): ReactElement {
  return (
    <div
      className={`primary-gradient-background w-64 lg:w-[22rem] p-[2px] h-60 rounded-[0.9rem]`}
    >
      <div
        className={`bg-violet flex flex-col h-full w-full rounded-[0.8rem] justify-evenly py-10 gap-4`}
      >
        <div className="flex justify-center gap-4">
          <Confetti height={50} width={50} />
          <div className="flex">
            <p
              className={`${cabinetBold.className} text-primary-gradient-color font-extrabold m-auto text-lg lg:text-2xl`}
            >
              Track Winner
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-2">
          <p
            className={`${cabinetBlack.className} text-center text-4xl lg:text-5xl text-white`}
          >
            Rs. 15,000
          </p>

          <p
            className={`${cabinetBold.className} text-right mr-4 text-white text-[0.6rem] lg:text-sm italic w-5/6`}
          >
            for each track
          </p>
        </div>
      </div>
    </div>
  );
}
