import Link from "next/link";
import styles from "./styles.module.css";
import { cabinetBlack, cabinetBold, cabinetExtraBold } from "./utils/fonts";

export default function NotFound() {
  return (
    <div
      className={`${styles.background_container} h-screen w-screen flex justify-center`}
    >
      <div
        className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] md:w-[50vw] h-fit lg:h-[24vh] flex flex-col gap-4 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-6 mx-auto absolute top-[60%]`}
      >
        <p
          className={`${cabinetExtraBold.className} text-primary-gradient-color-reverse w-fit text-5xl text-center`}
        >
          Nobody Seems to be here
        </p>
        <Link
          className={`bg-secondary w-48 ${cabinetExtraBold.className} text-center py-3 px-4 text-lg rounded-md`}
          href="/"
        >
          Go Back to home
        </Link>
      </div>
    </div>
  );
}
