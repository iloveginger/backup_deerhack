import { ReactElement } from "react";
import Confetti from "@/app/assets/images/confetti";
import { cabinetBlack, cabinetBold } from "@/app/utils/fonts";

export default function TrackWinner(): ReactElement {
  return (
    <div
      className={`primary-gradient-background w-full sm:w-64 lg:w-[22rem] p-[2px] rounded-2xl`}
    >
      <div
        className={`bg-violet flex flex-col h-full w-full rounded-[0.9rem] justify-start gap-10 py-12`}
      >
        <div className="flex justify-center gap-4">
          <Confetti height={50} width={50} />
          <div className="flex">
            <p
              className={`${cabinetBold.className} text-primary-gradient-color font-extrabold m-auto text-2xl sm:text-lg lg:text-2xl`}
            >
              Track Winner
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-2">
          <p
            className={`${cabinetBlack.className} text-center text-5xl sm:text-4xl lg:text-5xl text-white`}
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
