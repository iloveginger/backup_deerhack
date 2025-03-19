import { ReactElement } from "react";
import Solana from "@/app/components/Solana/Solana";
import Replit from "@/app/components/Replit/Replit";
import GrandPrizeCard from "@/app/components/GrandPrize/GrandPrizeCard";
import SwagPrizes from "@/app/components/OtherPrizes/SwagPrizes";
import TrackWinner from "@/app/components/TrackWinner/TrackWinner";
import Filecoin from "@/app/components/Filecoin/Filecoin";
import Polygon from "@/app/components/Polygon/Polygon";
import OtherPrizes from "@/app/components/OtherPrizes/OtherPrizes";
import ThumbsUp from "@/app/assets/images/ThumbsUp";
import GiftBox from "@/app/assets/images/giftbox";


export default function PrizesGrid(): ReactElement {
  return (
    // <div className="flex flex-col items-center">
    //   <div className="w-full mx-auto  md:items-start flex flex-col md:flex-row justify-center gap-4 mt-10 h-full px-5 items-center">
    //     <div className="max-w-[350px] w-full sm:w-fit md:w-fit flex flex-col gap-5 items-center justify-between md:self-stretch">
    //       <GrandPrizeCard />
    //     </div>
    //
    //     <div className="max-w-[350px] w-full md:w-fit flex flex-col sm:justify-between items-center gap-4 md:self-stretch">
    //       <TrackWinner />
    //        <div className="px-5 max-w-[20.5rem] sm:w-[18rem] md:max-w-[45rem] md:w-[45rem] lg:max-w-[50rem] lg:w-[63rem]">
    //           <OtherPrizes />
    //         </div>
    //     </div>  
    //
    //     <div className="max-w-[350px] w-full  md:w-fit flex flex-col sm:justify-around items-center gap-4 md:self-stretch gap-5">
  
    //     </div>
    //   </div>
    // </div>

  
      // <div className="w-full mx-auto md:items-start flex flex-col md:flex-row justify-center gap-4 mt-10 h-full   items-center">

      //   <div className="max-w-[350px] w-full sm:w-fit md:w-full flex flex-col gap-5 items-center justify-between md:self-stretch">
      //     <GrandPrizeCard />
      //   </div>


      //   <div className="flex flex-col items-start gap-3 md:self-stretch w-full md:max-w-[45rem] lg:max-w-[50rem]">
      //     <div className = "flex flex-row items-start gap-4 md:self-stretch w-full md:max-w-[45rem] lg:max-w-[50rem]">
      //     <TrackWinner />
      //     <SwagPrizes
      //      svg={<ThumbsUp width={163} height={163}/>}
      //      />
      //     </div>
      //     <div className="flex w-full justify-start">
      //       <OtherPrizes />
      //     </div>
      //   </div>
      // </div>

        // <div className="maindiv flex justify-center mt-10 items-start md:flex-row sm:flex-col">
        //   <div className="Grandprize px-5">
        //     <GrandPrizeCard />
        //   </div>
        //   <div className="Everythingelse flex flex-col sm:flex-col sm:justify-center">
        //     <div className ="uppercards flex lg:flex-row md:flex-row sm:flex-col sm:justify-center">
        //       <div className="Trackwinner pe-5 pb-5">
        //       <TrackWinner />
        //       </div>
        //       <div className = "Swagprizes">
        //       <SwagPrizes
        //       svg={<ThumbsUp width={120} height={120}/>}
        //        />
        //       </div>
        //     </div> 
        //     <div className="Lowercard">
        //     <OtherPrizes
        //       svg={<GiftBox width={120} height={120}/>}
        //       />
        //     </div>
        // </div>
        // </div>


  <div className="maindiv flex items-center justify-center mt-10  flex-col md:flex-row">

  <div className="Grandprize md:mb-[1.5rem]">
    <GrandPrizeCard />
  </div>


  <div className="Everythingelse flex flex-col ">

    <div className="uppercards flex flex-col lg:flex-row md:mt-[1rem] md:flex-row sm:flex-col sm:items-start">
      <div className="Trackwinner relative bottom-[3rem]">
        <TrackWinner />
      </div>
      <div className="Swagprizes w-full sm:w-auto">
        <SwagPrizes svg={<ThumbsUp width={120} height={120} />} />
      </div>
    </div>

    {/* Lower Card */}
    <div className="Lowercard w-auto flex justify-center mt-5">
      <OtherPrizes svg={<GiftBox width={120} height={120} />} />
    </div>
  </div>
</div>


  );
}
