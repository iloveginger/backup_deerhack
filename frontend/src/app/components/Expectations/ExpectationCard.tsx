import { ReactElement } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import { cabinetBlack, cabinetRegular, cabinetBold } from "@/app/utils/fonts";
import styles from "./styles.module.css";

export default function ExpectationCard({
  svg,
  title,
  description,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
}): ReactElement {
  return (
    <div
      className={`bg-dark-purple hover:bg-grape hover:cursor-pointer w-[70vw] lg:w-[30vw] py-8 justify-start px-6 border-grape border-[3px] rounded-xl flex gap-5 sm:gap-8 expectation_root ${styles.expectation_root}`}
    >
      <div>{svg}</div>
      <div className="flex flex-col gap-4">
        <p
          className={`text-white ${cabinetBold.className} text-lg sm:text-2xl`}
        >
          {title}
        </p>
        <p
          className={`text-white ${cabinetRegular.className} text-sm md:text-lg expectation_description ${styles.expectation_description}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
