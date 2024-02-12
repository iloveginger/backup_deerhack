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
    <div className="bg-violet mx-3 rounded-3xl md:w-[33%] flex flex-col items-start pb-24 justify-start  py-8 space-y-4 ">
      <div className="px-14">
        <div className="bg-dark-purple rounded-full w-20 h-20 flex items-center justify-center">
          {svg}
        </div>
        <h1 className={`text-magnolia ${cabinetBold.className} text-4xl leading-tight mt-3`}>{title}</h1>
        <p className={`text-magnolia text-lg ${satoshiRegular.className} mt-3`}>{description}</p>
      </div>
    </div>
  );
}
