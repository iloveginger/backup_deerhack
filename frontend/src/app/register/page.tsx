import Register from "../sections/Register/RegisterSection";
import RegisterCard from "@/app/components/Register/RegisterCard";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import { cabinetExtraBold, cabinetRegular } from "../utils/fonts";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div>
      <Navbar />
      <form>
        <div
          className={`${styles.background_container} h-screen flex justify-center items-center`}
        >
          <div
            className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] md:w-[50vw] max-w-[630px] h-fit lg:h-[22rem] flex flex-col gap-4 items-center  border-secondary border-2 backdrop-blur-sm px-9 py-9 mx-auto `}
          >
            <p
              className={`${cabinetExtraBold.className} text-primary-gradient-color w-fit text-3xl md:text-5xl text-center`}
            >
              Registration Starts Soon!
            </p>
            <p
              className={`text-white text-base md:text-2xl text-center font-light ${cabinetRegular.className}`}
            >
              Pre-Register Now to Get Notified When Registration Starts.
            </p>

            <div className="flex flex-col justify-center items-center  gap-8 w-full">
            <div className="w-full h-[3rem] primary-gradient-background p-[3px] flex justify-center items-center rounded ">
              <input
                type="email"
                placeholder="example@mail.com"
                className={`w-full h-full rounded bg-violet pl-4 py-2 ${cabinetRegular.className}`}
              ></input>
            </div>
            <button className="w-full h-[2.9rem] bg-saffron p-[3px] flex justify-center items-center rounded font-bold mx-2 py-5">
              Submit
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
