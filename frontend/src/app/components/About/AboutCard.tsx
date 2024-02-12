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
    <div className="bg-violet rounded-3xl lg:w-[28%] w-[80%] flex flex-col items-start pb-24 justify-start py-8 px-9 gap-2">
      <div className="bg-dark-purple rounded-full w-12 lg:w-20 h-12 lg:h-20 flex items-center justify-center">
        {svg}
      </div>
      <h1
        className={`text-magnolia ${cabinetBold.className} text-2xl lg:text-4xl leading-tight mt-3 text-start`}
      >
        {title}
      </h1>
      <p
        className={`text-magnolia text-sm lg:text-lg ${satoshiRegular.className} mt-3 text-start`}
      >
        {description}
      </p>
    </div>
  );
}
