import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/icons/Hero.svg";
import Image from "next/image";
import { cabinetBold, cabinetRegular } from "@/fonts";
// import Footer from "@/app/components/Footer/Footer";

const Hero = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <Image src={HeroIcon} alt="Hero Image" className="w-screen" />
      <div className="absolute gap-[25px] top-0 mt-[10rem] flex flex-col text-center">
        <p
          className={`text-3xl font-extrabold text-secondary ${cabinetBold.className}`}
        >
          26th - 29th April
        </p>
      </div>
      <MainLogo />
    </div>
  );
};

export default Hero;
