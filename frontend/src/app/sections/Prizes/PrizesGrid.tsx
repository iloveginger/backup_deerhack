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
    <div>
      <div className="mx-auto flex flex-wrap justify-center gap-4 mt-10">
        <div className="w-full sm:w-fit md:w-fit flex flex-col gap-4 items-center">
          <div>
            <GrandPrizeCard />
          </div>
          <div>
            <TrackWinner />
          </div>
        </div>
        <div className="w-full md:w-fit flex flex-col sm:justify-between items-center gap-4">
          <Polygon />
          <Filecoin />
          <Replit />
        </div>
        <div className="w-full md:w-fit flex flex-col sm:justify-around items-center gap-4">
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
      <OtherPrizes />
    </div>
  );
}
