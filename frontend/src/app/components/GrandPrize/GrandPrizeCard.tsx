import { ReactElement } from "react";
import Trophy from "@/app/assets/images/trophy";
import Leaf from "@/app/assets/images/Leaf";
import {
  satoshiRegular,
  cabinetBold,
  cabinetBlack,
  cabinetExtraBold,
} from "@/app/utils/fonts";

export default function GrandPrizeCard(): ReactElement {
  return (
    
    <div className="flex flex-col justify-evenly grow h-[29.448rem] md:h-[43.284rem] rounded-[2rem] primary-aboutpage-background w-[19.966rem] md:w-[29.348rem] mb-6 ml-[1rem]">
      <div className="flex flex-col text-left ml-[2rem]">
        <div className="flex">
          <Trophy height={160} width={160} />
        </div>
        {/* <p className={`${cabinetExtraBold.className} font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#110C24]`}> */}
        <p className={`${cabinetExtraBold.className} font-extrabold text-3xl md:text-6xl text-[#110C24]`}>
          Grand Prize
        </p>
      </div>
      
      {/* <p className={`${cabinetBlack.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold text-left ml-10 mt-28 relative`}> */}
      <p className={`${cabinetBlack.className} text-5xl font-extrabold text-left ml-10 mt-28 relative`}>
        Rs.<br/> 50,000
        <div 
          // className={`${satoshiRegular.className} text-sm sm:text-base lg:text-lg italic text-left`}
          className={`${satoshiRegular.className} text-sm italic text-left`}
        > 
          to overall winner
        </div>
        
    
        <div className="absolute bottom-[4rem]">
        
          <Leaf height={300} width={300}/>
        </div>
      </p>
    </div>
    // <div
    //   className={`flex flex-col justify-evenly grow h-[43.284rem] sm:h-72 md:h-72 lg:h-[25rem] w-[29.348rem] lg:w-[22rem] primary-aboutpage-background rounded-2xl`}
    // >
    //   <div className="flex flex-col justify-left text-left  ml-[2rem] ">
    //     <div className="flex justify-left">
    //       <Trophy height={164} width={164} />
    //     </div>
    //     <p
    //       className={`${cabinetExtraBold.className} font-extrabold  text-4xl text-[#110C24] sm:text-xl lg:text-5xl`}
    //     >
    //       Grand Prize
    //     </p>
    //   </div>
      
    //   <p
    //     className={`${cabinetBlack.className} text-6xl sm:text-4xl lg:text-6xl font-extrabold text-left ml-[2rem] mt-[2rem]`}
    //   >
    //     Rs.<br/> 50,000
    //   <div 
    //   className={`${satoshiRegular.className} text-sm sm:text-xs lg:text-base font-style: italic text-left`}
    //   > 
    //   to overall winner
    //   </div>
    //   </p>

    // </div>
    // <div className="flex flex-col justify-evenly grow h-[36.784rem] w-[38.348rem]  md:max-h-[36.784rem] md:max-w-[18rem] rounded-[2rem] primary-aboutpage-background">

  );
}
