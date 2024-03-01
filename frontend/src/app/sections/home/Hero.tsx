import styles from "./styles.module.css";
import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold } from "@/fonts";

const Hero = () => {
  return (
    <div
      className={` ${styles.hero_background_container} flex justify-center w-full `}
    >
      <div className="absolute gap-[30px] top-[90px] flex flex-col text-center lg:top-48">
        <p
          className={` text-3xl font-bold text-center text-secondary ${cabinetBold.className}`}
        >
          10th - 12th May
        </p>
        <MainLogo width={350} height={135} />
      </div>
    </div>
  );
};
export default Hero;
