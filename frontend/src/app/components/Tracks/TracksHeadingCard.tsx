import { cabinetBold } from "@/app/utils/fonts";
import { ReactElement } from "react";
const TracksHeading = ({
  svg,
  title,
  hoverColor,
}: {
  svg?: ReactElement;
  title?: string;
  hoverColor?: string;
}) => {
  return (
    <>
      <div
        className={`flex flex-row gap-4 items-center cursor-pointer p-3 text-lg ${cabinetBold.className} rounded-md bg-violet ${hoverColor} text-magnolia `}
      >
        {svg}
        <span>{title}</span>
      </div>
    </>
  );
};

export default TracksHeading;
