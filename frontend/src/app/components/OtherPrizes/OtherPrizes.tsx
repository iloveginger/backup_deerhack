import { ReactElement } from "react";
import GiftBox from "@/app/assets/images/giftbox";
import { cabinetBlack, cabinetExtraBold } from "@/app/utils/fonts";

export default function OtherPrizes(): ReactElement {
  return (
    <div className="flex justify-center items-center mt-[1.2rem] mx-auto">
      <div className="primary-gradient-background p-[0.15rem] w-full rounded-2xl">
        <div className="bg-violet rounded-[0.9rem] flex justify-between md:flex-row flex-col items-start py-10 px-5 md:px-14 gap-3 md:items-center">
          <GiftBox height={100} width={100} />
          <div
            className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl sm:text-2xl lg:text-4xl text-start md:text-end`}
          >
            And Many More Gifts and <br className="hidden sm:block" />
            Swags for Everyone!
          </div>
        </div>
      </div>
    </div>
  );
}
