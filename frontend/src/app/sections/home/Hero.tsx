import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/icons/Hero.svg";
import Image from "next/image";
import { cabinetBold, cabinetRegular } from "@/fonts";
// import Footer from "@/app/components/Footer/Footer";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center relative z-[-1]">
        <Image src={HeroIcon} alt="Hero Image" className="w-screen" />
        <div className="absolute mt-[-300px] gap-[24px] flex flex-col text-center ">
          <p
            className={`text-3xl font-extrabold text-secondary ${cabinetBold.className} `}
          >
            26th - 29th April
          </p>
          <MainLogo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
