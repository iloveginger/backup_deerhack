import { ReactElement } from "react";
import {cabinetExtraBold,satoshiRegular,satoshiBlack } from "@/app/utils/fonts";

export default function RegisterCard(): ReactElement {
  return (
    <div className="flex-col justify-center items-center w-64 md:w-[668px] lg:w-[960px] mx-auto">
      <div className="primary-gradient-background p-[0.15rem] w-full rounded-[0.9rem]">
        <div className="flex flex-col items-center justify-center bg-violet rounded-[0.8rem] md:flex-row py-20 px-5 sm:px-14 gap-3 md:items-center ">
            <div
              className={`${cabinetExtraBold.className} justify-center items-center text-primary-gradient-color text-3xl sm:text-3xl lg:text-3xl text-start md:text-start`}
            >
              Register for DeerHack Now!
              <p className={`${satoshiRegular.className} items-center text-white text-xl mt-[1.5rem] mb-[0.5rem]`}>Secure your spot at DeerHack today and elevate your skills,<br/> expand your network, and ignite innovation.</p>
            </div>
          <button
          className={` ${satoshiBlack.className} justify-center items-center font-[20px] bg-secondary text-dark-purple text-xl p-3 rounded lg:ml-20 bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}
        >
          Register Now
        </button>
        </div>
      </div>
    </div>
  );
}
