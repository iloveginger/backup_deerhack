import { ReactElement } from "react";
import Confetti from "@/app/assets/images/confetti";
import { cabinetBlack, cabinetBold, cabinetRegular } from "@/app/utils/fonts";  

export default function TrackWinner(): ReactElement {
  return (

    <div className="primary-gradient-background w-[19.985rem] md:w-[26.313rem] h-[18.369rem] md:h-[29.063rem] p-[2px] rounded-[2rem] mt-[3rem] ml-[1.5rem]">
    {/* <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[2rem] justify-between py-8 sm:py-12"> */}
    <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[2rem] justify-between py-8">
      
  
      <div className="flex justify-center gap-4">
        <Confetti height={60} width={60} />
        <div className="flex p-0">
          <p className={`${cabinetBold.className} text-primary-gradient-color font-extrabold text-2xl md:text-[2.875rem] md:relative md:top-[1.3rem]`}>Track Winner</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-1 lg:gap-2 px-6">
        <p className={`${cabinetRegular.className} text-white text-xs sm:text-sm lg:text-lg tracking-wide w-full`}>New Track Added !</p>
        <p className={`${cabinetBlack.className} text-4xl sm:text-5xl lg:text-6xl text-[#F5C144]`}>Rs. 15,000</p>
        <p className={`${cabinetRegular.className} text-white text-xs sm:text-sm lg:text-lg italic tracking-wide w-full`}>per track</p>
      </div>
    </div>
  </div>
    // <div className="primary-gradient-background w-[25.688rem] h-[28.25rem] p-[2px] rounded-2xl">
    //   <div className="bg-[#110C24] flex flex-col h-full w-full rounded-[0.9rem] justify-between py-12">
        
    //     {/* Top Section */}
    //     <div className="flex justify-center gap-4">
    //       <Confetti height={67} width={66} />
    //       <div className="flex p-0">
    //         <p
    //           className={`${cabinetBold.className} text-primary-gradient-color font-extrabold m-auto text-4xl sm:text-lg lg:text-[48px]`}
    //         >
    //           Track Winner
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col lg:gap-2">
    //       <p
    //         className={`${cabinetBold.className} text-left ml-6 text-white text-[0.6rem]  lg:text-2xl w-5/6`}
    //       >
    //         New Track Added !
    //       </p>
    //       <p
    //         className={`${cabinetBlack.className} text-left ml-6 text-5xl sm:text-4xl lg:text-6xl text-[#F5C144]`}
    //       >
    //         Rs. 15,000
    //       </p>
    //       <p
    //         className={`${cabinetBold.className} text-left ml-6 text-white text-[0.6rem] lg:text-sm italic w-5/6`}
    //       >
    //         per track
    //       </p>
    //     </div>

    //   </div>
    // </div>


  );
}

