import TeamSolo from "@/app/assets/images/TeamSolo";
import WinnerLeafLeft from "@/app/assets/images/WinnerLeafLeft";
import WinnerLeafRight from "@/app/assets/images/WinnerLeafRight";
import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import Image from "next/image";

const page = () => {
  return (
    <div className="text-white flex flex-col">
      <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
      >
        Winners
      </h1>
      <div className="flex flex-col items-center   lg:w-full">
        <div className="relative flex flex-col justify-center items-center lg:w-[50%] mb-16 mx-auto">
          <h2 className={`${cabinetBold.className} text-2xl  mb-10`}>
            Overall Winners
          </h2>
          <div className="relative flex flex-row justify-center ">
            <span className="absolute z-0 right-96">
              <WinnerLeafLeft />
            </span>
            <span className="z-1">
              <TeamSolo />
            </span>
            <span className="absolute z-0 left-96">
              <WinnerLeafRight />
            </span>
          </div>
          <div
            className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
          >
            <div className=" border border-x-orange-500 z-10 mx-auto shadow-lg backdrop-blur-lg rounded-md py-5">
              <span className="headings text-xl p-4 sm:text-3xl md:px-14 ">
                SOLO
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center w-[50%] min-h-10">
          <h2 className={`mb-5 ${cabinetBold.className} text-2xl`}>
            Track Winners
          </h2>

        </div>
      </div>
    </div>
  );
};

export default page;
{/* <div className="flex flex-row justify-between">

<div className="">
  <div className="relative flex flex-row">
      <span className="absolute z-0 right-96 w-48">
      <WinnerLeafLeft />
      </span>
      <span className="z-1">
      <TeamSolo />
      </span>
      <span className="absolute z-0 left-96">
      <WinnerLeafRight />
      </span>
  </div>
  <div
      className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
  >
      <div className=" border border-x-orange-500 z-10 mx-auto shadow-lg backdrop-blur-lg rounded-md py-5">
      <span className="headings text-xl p-4 sm:text-3xl md:px-14 ">
          SOLO
      </span>
      </div>

</div>
</div>

<div className="w-64">
  <div className="relative flex flex-row justify-center ">
      <span className="absolute z-0 right-96">
      <WinnerLeafLeft />
      </span>
      <span className="z-1">
      <TeamSolo />
      </span>
      <span className="absolute z-0 left-96">
      <WinnerLeafRight />
      </span>
  </div>
  <div
      className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
  >
      <div className=" border border-x-orange-500 z-10 mx-auto shadow-lg backdrop-blur-lg rounded-md py-5">
      <span className="headings text-xl p-4 sm:text-3xl md:px-14 ">
          SOLO
      </span>
      </div>

</div>
</div>
</div> */}
