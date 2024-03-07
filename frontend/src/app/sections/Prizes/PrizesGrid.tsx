import { ReactElement } from "react";
import Solana from "@/app/components/Solana/Solana";
import Replit from "@/app/components/Replit/Replit";
import GrandPrizeCard from "@/app/components/GrandPrize/GrandPrizeCard";
import TrackWinner from "@/app/components/TrackWinner/TrackWinner";
import Filecoin from "@/app/components/Filecoin/Filecoin";
import Polygon from "@/app/components/Polygon/Polygon";
import OtherPrizes from "@/app/components/OtherPrizes/OtherPrizes";

export default function PrizesGrid(): ReactElement {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mx-auto  md:items-start flex flex-col md:flex-row justify-center gap-4 mt-10 h-full px-5 items-center">
        <div className="max-w-[350px] w-full sm:w-fit md:w-fit flex flex-col gap-5 items-center justify-between md:self-stretch">
          <GrandPrizeCard />
          <TrackWinner />
        </div>
        <div className="max-w-[350px] w-full md:w-fit flex flex-col sm:justify-between items-center gap-4 md:self-stretch">
          <Polygon />
          <Filecoin />
          <Replit />
        </div>
        <div className="max-w-[350px] w-full  md:w-fit flex flex-col sm:justify-around items-center gap-4 md:self-stretch gap-5">
          <Solana
            title="Young Gun"
            description="best beginner project just starting out on Solana"
            price="200"
          />
          <Solana
            title="Master Glasseater"
            description="best advanced project that is almost ready for full-time"
            price="500"
          />
          <Solana
            title="Rising Teknoking"
            description="best award that goes into depth, demonstrating higher-order code"
            price="250"
          />
        </div>
      </div>
      <div className="px-5 max-w-[24.5rem] sm:w-[18rem] md:max-w-[45rem] md:w-[45rem] lg:max-w-[63rem] lg:w-[63rem]">
        <OtherPrizes />
      </div>
    </div>
  );
}
