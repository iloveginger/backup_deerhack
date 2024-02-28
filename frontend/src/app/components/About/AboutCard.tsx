import { ReactElement } from "react";
import { cabinetBold, satoshiRegular } from "@/app/utils/fonts";

export default function AboutCard({
  svg,
  title,
  description,
}: {
  svg?: ReactElement;
  title?: string;
  description?: string;
}): ReactElement {
  return (
    <div className="bg-violet rounded-3xl lg:w-[32%] w-[80%] flex flex-col items-start pb-24 justify-start py-14 px-6 md:px-14 gap-2">
      <div className="bg-dark-purple rounded-full w-12 lg:w-20 h-12 lg:h-20 flex items-center justify-center">
        {svg}
      </div>
      <h1
        className={`text-magnolia ${cabinetBold.className} text-xl lg:text-[36px] leading-tight mt-3 text-start`}
      >
        {title}
      </h1>
      <p
        className={`text-magnolia text-base lg:text-[18px] ${satoshiRegular.className} mt-3 text-start`}
      >
        {description}
      </p>
    </div>
  );
}
