import { ReactElement } from "react";
import Confetti from "@/app/assets/images/confetti";
import { cabinetBlack, cabinetBold } from "@/app/utils/fonts";  

export default function TrackWinner(): ReactElement {
  return (
    <div className="primary-gradient-background w-[25.688rem] h-[28.25rem] p-[2px] rounded-2xl">
      <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[0.9rem] justify-between py-12">
        
        {/* Top Section */}
        <div className="flex justify-center gap-4">
          <Confetti height={60} width={60} />
          <div className="flex">
            <p
              className={`${cabinetBold.className} text-primary-gradient-color font-extrabold m-auto text-4xl sm:text-lg lg:text-4xl`}
            >
              Track Winner
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 mb-4">
          <p
            className={`${cabinetBold.className} text-left ml-4 text-white text-[0.6rem] lg:text-sm w-5/6`}
          >
            New Track Added
          </p>
          <p
            className={`${cabinetBlack.className} text-left ml-4 text-5xl sm:text-4xl lg:text-5xl text-[#F5C144]`}
          >
            Rs. 15,000
          </p>
          <p
            className={`${cabinetBold.className} text-left ml-4 text-white text-[0.6rem] lg:text-sm italic w-5/6`}
          >
            per track
          </p>
        </div>

      </div>
    </div>
  );
}

