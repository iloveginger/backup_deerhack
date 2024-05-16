import TeamDecent from "@/app/assets/images/TeamDecent";
import TeamERROR from "@/app/assets/images/TeamERROR";
import TeamEverest from "@/app/assets/images/TeamEverest";
import TeamNymna from "@/app/assets/images/TeamNymna";
import TeamSolo from "@/app/assets/images/TeamSolo";
import WinnerLeafLeft from "@/app/assets/images/WinnerLeafLeft";
import WinnerLeafRight from "@/app/assets/images/WinnerLeafRight";
import Footer from "@/app/components/Footer/Footer";
import WinnersName from "@/app/components/WinnersName/WinnersName";
import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import Image from "next/image";
import right from "@/app/assets/icons/right.svg"
import left from "@/app/assets/icons/left.svg"


const page = () => {
  return (
    <>
      <div className="lg:w-full mx-auto text-white flex flex-col">
        <h1
          className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
        >
          Winners
        </h1>
        <div className="flex flex-col items-center  w-full">
          <div className="relative flex flex-col shrink justify-center items-center lg:w-[50%] mb-16 mx-auto">
            <h2 className={`${cabinetBold.className} text-4xl  mb-10`}>
              Overall Winners
            </h2>
            <div className="relative flex lg:w-fit flex-row justify-center shrink ">
              <div className="absolute z-0 lg:right-96 right-64 ">
                <WinnerLeafLeft />
              </div>
              <span className="z-1">
                <TeamSolo className="lg:w-full md:w-96 sm:w-96 w-96" />
              </span>
              <div className="absolute z-0 lg:left-96 left-64">
                <WinnerLeafRight />
              </div>
            </div>
            <div
              className={` absolute inset-x-0 bottom-0 mx-auto min-w-64 max-w-96 text-center ${cabinetExtraBold.className} md:text-3xl text-2xl  p-0.5 rounded-md`}
            >
              <WinnersName teamName="SOLO" />
            </div>
          </div>

        </div>
      </div>
      <div className=" w-full  ">
        <h2 className={`mb-5 ${cabinetBold.className} text-white text-center text-4xl`}>
          Track Winners
        </h2>

        <div className="flex flex-col gap-24">
          <div className="flex justify-center flex-col lg:flex-row items-center px-24 gap-16">
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Open Innovation
                </p>

                <div className="relative flex flex-row justify-center items-center px-0 sm:px-8">
                  <span className="absolute z-0 lg:right-96 right-48">
                    <Image
                      src={left}
                      alt="right"
          
                    />
                  </span>
                  <span className="z-1">
                    <TeamDecent className="md:w-80 w-72 sm:w-80 lg:w-fit" />
                  </span>
                  <span className="absolute z-0 lg:left-96  left-48 ">
                    <Image
                      src={right}
                      alt="left"
                     
                    />
                  </span>
                  <div
                    className={`absolute bottom-0 w-96 text-center ${cabinetExtraBold.className} `}
                  >
                    <WinnersName teamName="decent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Data Science / ML
                </p>

                <div className="relative flex flex-row justify-center items-center ">
                  <div className="absolute z-0 lg:right-96 right-48">
                    <WinnerLeafLeft />
                  </div>
                  <span className="z-1">
                    <TeamNymna className="md:w-80 w-72 sm:w-96 lg:w-fit"/>
                  </span>
                  <span className="absolute z-0 lg:left-96 left-48">
                    <WinnerLeafRight />
                  </span>
                  <div
                    className={`absolute bottom-0 w-96 text-center ${cabinetExtraBold.className} `}
                  >
                    <WinnersName teamName="nymna" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:flex-row flex-col items-center px-24 gap-16">
            <div className="flex flex-row  px-24 gap-20 py-10  w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                 Interactive Technology
                </p>

                <div className="relative flex flex-row justify-center items-center ">
                  <span className="absolute z-0 lg:right-96 md:right-48 right-48">
                    <WinnerLeafLeft />
                  </span>
                  <span className="z-1">
                    <TeamEverest className="md:w-80 w-72 sm:w-96 lg:w-fit"/>
                  </span>
                  <span className="absolute z-0 lg:left-96 left-48">
                    <WinnerLeafRight />
                  </span>
                  <div
                    className={`absolute bottom-0 w-96 text-center ${cabinetExtraBold.className} `}
                  >
                    <WinnersName teamName="Team Everest" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  px-24 gap-20 py-10  w-2 lg:w-1/2 justify-center items-center">
              <div className="flex flex-col gap-6 text-white justify-center items-center">
                <p className={`${cabinetBold.className} text-2xl text-center  mb-10`}>
                  Blockchain
                </p>

                <div className="relative flex flex-row justify-center items-center ">
                  <span className="absolute z-0 lg:right-96 md:right-48 right-48">
                    <WinnerLeafLeft />
                  </span>
                  <span className="z-1">
                    <TeamERROR className="md:w-80 w-72 sm:w-96 lg:w-fit"/>
                  </span>
                  <span className="absolute z-0 lg:left-96 left-48">
                    <WinnerLeafRight />
                  </span>
                  <div
                    className={`absolute bottom-0 w-96 text-center ${cabinetExtraBold.className} `}
                  >
                    <WinnersName teamName="Error - 404" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
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
