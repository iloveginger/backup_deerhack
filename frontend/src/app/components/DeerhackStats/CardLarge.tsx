import { ReactElement } from "react";
import GenderSVG from "@/app/assets/images/gender";
import {
  cabinetBlack,
  cabinetBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";
import GenderEllipseSVG from "@/app/assets/images/genderEllipse";

export default function CardLarge(): ReactElement {
  return (
    // Divide to Two Sections (GenderDistribution icon and title) and (Graph, Numbers)
    <div className="md:h-full h-[30rem] w-80 lg:w-[24rem] bg-violet rounded-xl gap flex flex-col px-6 pt-4 pb-16 justify-between">
      {/* Divide the Title into two sections:  icons and title  */}
      <div className="flex flex-col gap-2">
        <GenderSVG height={40} width={40} />
        <p className={`${cabinetBold.className} text-white text-2xl`}>
          Gender Distribution
        </p>
      </div>

      {/* Container for Ellipse to place it in center */}
      <div className="flex justify-center">
        <GenderEllipseSVG height={200} width={200} />
      </div>

      {/* Top Level Container for Male Female Section */}
      <div className="flex justify-center gap-8">
        {/* Male Stats */}
        <div className="flex flex-col gap-2">
          {/* Flex for Icon and Male Text */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-dark-purple rounded-full"></div>
            <p className={`${cabinetMedium.className} text-white text-sm`}>
              Male
            </p>
          </div>
          <div
            className={`${cabinetRegular.className} text-4xl text-white w-full text-center `}
          >
            85%
          </div>
        </div>

        {/* Female Stats */}
        <div className="flex flex-col gap-2">
          {/* Flex for Icon and Male Text */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-purpures rounded-full"></div>
            <p className={`${cabinetMedium.className} text-white text-sm`}>
              Female
            </p>
          </div>
          <div
            className={`${cabinetRegular.className} text-4xl text-white w-full text-center `}
          >
            15%
          </div>
        </div>
      </div>
    </div>
  );
}
