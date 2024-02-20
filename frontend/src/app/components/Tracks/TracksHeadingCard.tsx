import { cabinetBold } from "@/app/utils/fonts";
import { ReactElement } from "react";

type TracksHeadingProps = {
  svg?: ReactElement;
  title?: string;
  headStyling?: string;
  onClick?: () => void; // Add onClick to the props interface
};

const TracksHeading = ({
  svg,
  title,
  headStyling,
  onClick,
}: TracksHeadingProps) => {
  return (
    <div
      className={`flex flex-row flex-nowrap gap-4 whitespace-nowrap items-center cursor-pointer p-3 lg:text-lg text-base ${cabinetBold.className}  ${headStyling} rounded-md`}
      onClick={onClick}
    >
      <div>{svg}</div>
      <div>{title}</div>
    </div>
  );
};
export default TracksHeading;
