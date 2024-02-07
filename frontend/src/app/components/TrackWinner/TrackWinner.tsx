import { ReactElement } from "react";
import Confetti from "@/app/assets/images/confetti";
import style from "./styles.module.css";
import { cabinetBlack, cabinetBold } from "@/app/utils/fonts";

export default function TrackWinner(): ReactElement {
  return (
    <div
      className={`primary-gradient-background h-40 w-64 p-[2px] rounded-[0.9rem] mt-2 ml-10`}
    >
      <div
        className={`bg-violet flex flex-col h-full w-full rounded-[0.8rem] justify-evenly`}
      >
        <div className="flex justify-center gap-2">
          <Confetti height={30} width={40} />
          <div className="flex">
            <p
              className={`${cabinetBold.className} text-primary-gradient-color font-extrabold m-auto text-lg`}
            >
              Track Winner
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p
            className={`${cabinetBlack.className} text-center text-4xl text-white`}
          >
            Rs. 15,000
          </p>

          <p
            className={`${cabinetBold.className} text-right mr-4 text-white text-[0.6rem] italic w-5/6`}
          >
            for each track
          </p>
        </div>
      </div>
    </div>
  );
}
