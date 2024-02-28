import { cabinetExtraBold } from "@/fonts";
import GoBackToHome from "../GoBack/GoBackToHome";
import styles from "./Announced.module.css";

const Announced = ({ description }: { description: string }) => {
  return (
    <div className={` ${styles.announced_background_container}  flex justify-center `}>
      
      <div className="absolute gap-[40px] top-[190px] flex flex-col text-center lg:top-48 sm:top-56">
        <p
          className={`${cabinetExtraBold.className} text-secondary-gradient-color-reverse w-fit text-5xl px-4 text-center`}
        >
          {description}
        </p>
        <GoBackToHome />
      </div>
    </div>
  );
};

export default Announced;
