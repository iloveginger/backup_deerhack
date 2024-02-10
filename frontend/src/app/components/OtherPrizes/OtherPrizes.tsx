import { ReactElement } from "react";
import GiftBox from "@/app/assets/images/giftbox";
import { cabinetBlack, cabinetExtraBold } from "@/app/utils/fonts";

export default function OtherPrizes(): ReactElement {
  return (
    <div className="flex justify-center mt-[1.2rem] sm:max-w-[670px] w-[80vw] lg:max-w-[960px] mx-auto">
      <div className="primary-gradient-background p-[0.1rem] w-full rounded-[0.9rem]">
        <div className="bg-violet rounded-[0.8rem] flex justify-between items-center py-10 px-5 sm:px-14 gap-3">
          <GiftBox height={100} width={100} />
          <div
            className={`${cabinetExtraBold.className} text-primary-gradient-color text-sm sm:text-2xl text-end lg:text-4xl`}
          >
            And Many More Gifts and <br className="hidden sm:block" />
            Swags for everyone
          </div>
        </div>
      </div>
    </div>
  );
}
