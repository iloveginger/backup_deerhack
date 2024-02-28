import styles from "./styles.module.css";
import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold } from "@/fonts";

const Hero = () => {
  return (
    <div
      className={` ${styles.hero_background_container} flex justify-center `}
    >
      <div className="absolute gap-[30px] top-[90px] flex flex-col items-center text-center lg:top-48">
        <p
          className={` text-3xl font-bold text-center text-primary-gradient-color w-fit  ${cabinetBold.className}`}
        >
          10th - 12th May
        </p>
        <MainLogo
          width={400}
          height={135}
          className="lg:w-400 md:w-300 w-200"
        />
      </div>
    </div>
  );
};

export default Hero;
