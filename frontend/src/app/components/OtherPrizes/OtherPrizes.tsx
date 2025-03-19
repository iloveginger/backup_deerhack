import { ReactElement } from "react";
import GiftBox from "@/app/assets/images/giftbox";
import { cabinetBlack, cabinetExtraBold } from "@/app/utils/fonts";

export default function OtherPrizes({
  svg,
}: {
  svg: ReactElement;
}){
  return (
      <div className="flex justify-start items-start ml-[2rem] md:mb-[2.2rem] md:ml-[-2rem]">
        {/* <div className="bg-violet rounded-[2rem]  h-[10.3rem] w-[40rem] flex justify-between md:flex-row flex-col items-start py-10 px-5 md:px-14 gap-3 md:items-center"> */}
        <div className="bg-violet rounded-[2rem]  h-[12.459rem] w-[20.027rem] md:h-[13.038rem] md:w-[44.847rem] md:px-14 md:justify-between md:flex-row md:items-start md:gap-3 flex flex-row-reverse justify-start items-start py-5 gap-3 md:relative md:bottom-[3rem]">
        {/* <div className="flex justify-center w-full max-w-[10rem] sm:max-w-[12rem] lg:max-w-[14rem]">{svg}</div> */}
        <div className="flex justify-center max-w-[10rem] relative top-[1.9rem] md:top-[0.8rem] right-[2rem]">{svg}</div>
          <div
            // className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl sm:text-2xl lg:text-4xl text-start md:text-end`}
            className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl text-start w-[8rem] md:text-end md:text-4xl md:h-full md:w-full md:top-[2rem] relative right-[4.3rem] top-[1.3rem] leading-none text-[1.701rem]`}
          >
            Tons of 
            Gifts & <br/> 

            Merch for Everyone !
          </div>
        </div>
      </div>

  );
}


