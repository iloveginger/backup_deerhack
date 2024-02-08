import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/images/Hero.webp";
import Image from "next/image";
import { cabinetBold, cabinetRegular } from "@/fonts";


const Hero = () => {
  return (
    <div className=" w-full flex justify-center items-center bg-cover bg-center bg-no-repeat relative z-[-1] ">
      <Image src={HeroIcon} alt="Hero Image" quality={100} />
      <div className="absolute mt-[-300px] gap-[24px] flex flex-col text-center ">
        <p className={`text-3xl font-extrabold text-secondary ${cabinetBold.className} `}>26th - 29th April</p>
        <MainLogo />
      </div>
    </div>
  );
};

export default Hero;
