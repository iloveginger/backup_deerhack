import { cabinetBold, cabinetRegular } from "@/app/utils/fonts";
import { ReactElement } from "react";

export default function CardMini({
  svg,
  title,
  numbers,
}: {
  svg: ReactElement;
  title: string;
  numbers: number;
}) {
  return (
    <div className="w-80 lg:w-[24rem] h-36 lg:h-[10.5rem] bg-violet rounded-2xl px-8 pt-4 pb-8 flex  justify-between items-end">
      <div className="flex flex-col justify-between gap-5">
        {svg}
        <p className={`${cabinetBold.className} text-white text-2xl`}>
          {title}
        </p>
      </div>
      <p className={`${cabinetRegular.className} text-4xl text-white`}>
        {numbers}
      </p>
    </div>
  );
}
