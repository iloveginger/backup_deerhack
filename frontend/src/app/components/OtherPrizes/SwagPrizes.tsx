import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

import thumbsupSVG from "@/app/assets/images/ThumbsUp";

export default function Swagprizes({
  svg,
}: {
  svg: ReactElement;
}) {
  return (
    <div className="flex items-center ml-[2rem]">
        {/* <div className="bg-violet flex flex-col h-[25.25rem] w-[17.474rem] max-w-[17.5rem] p-4 sm:p-6 rounded-[2rem] justify-between py-6 sm:py-10 items-center"> */}
        <div className="bg-violet flex-row-reverse  h-[12.459rem] md:h-[29.041rem]  w-[20.027rem] max-w-[23.5rem] rounded-[2rem] justify-between py-6 items-center">
          {/* <div className={`${cabinetExtraBold.className} text-primary-gradient-color text-xl sm:text-2xl lg:text-4xl text-center`}>           */}
          <div className={`${cabinetExtraBold.className} text-primary-gradient-color h-[7.875rem] w-[10.375rem] leading-none text-[1.701rem] md:text-[2.5rem] text-left py-4 relative left-[1.867rem] top-[2rem] md:relative md:top-[1rem] md:w-[20rem] md:items-center`}>          
            Swags and Freebies!
          </div>
          {/* <div className="flex justify-center w-full max-w-[10rem] sm:max-w-[12rem] lg:max-w-[14rem]">{svg}</div> */}
          <div className="flex justify-center w-full max-w-[10rem] py-4 relative left-[11rem] bottom-[6.5rem] md:relative md:top-[7rem] right-[3rem] ">{svg}</div>
        </div>
      </div>
    
    );
    //   <div className="flex justify-center items-center">
    
  //   <div className="bg-violet flex flex-col h-[28.25rem] w-[17.474rem] p-[2px] rounded-[1rem] justify-between py-12">
  //     <div
  //       className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl sm:text-2xl lg:text-4xl text-center sm:text-center`}
  //     >
  //       Swags and <br className="hidden sm:block" />
  //       Freebies!
  //     </div>
  //     <div className="flex justify-center">
      
  //     {svg}
      
  //     </div>
  //   </div>
  // </div>

}
