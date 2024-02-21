import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/app/assets/icons/Hero";
import { cabinetBold } from "@/fonts";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center  ">
      <HeroIcon className="w-screen h-fit mt-5 md:mt-10" />
      <div className="absolute gap-[25px] top-[80px] flex flex-col text-center lg:top-64 ">
        <p
          className={`text-3xl font-extrabold text-secondary ${cabinetBold.className}`}
        >
          26th - 29th April
        </p>
        <MainLogo className="w-fit h-fit " />
      </div>
    </div>
  );
};

export default Hero;
