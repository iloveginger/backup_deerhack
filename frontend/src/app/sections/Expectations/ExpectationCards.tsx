"use client";
import ExpectationCard from "@/app/components/Expectations/ExpectationCard";
import { ReactElement, useState } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import WorkshopSVG from "@/app/assets/images/workshop";
import MusicSVG from "@/app/assets/images/music";
import ExpectationImage from "@/app/components/Expectations/ExpectationImage";
import fun_games_image from "@/app/assets/images/fun_games.webp";
import live_music_image from "@/app/assets/images/live_music_image.webp";
import workshop_image from "@/app/assets/images/workshop_image.webp";

export default function ExpectationCards(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImageIndex = (index: number) => {
    console.log("Expectation cards is triggered");
    setCurrentIndex((prev) => (prev == index ? -1 : index));
  };
  return (
    <div className="flex lg:flex-row flex-col justify-around w-[90vw] lg:w-[80vw] lg:max-w-[60vw] mx-auto mt-10 items-center lg:items-start gap-5">
      <div className="flex flex-col py-10 gap-5">
        <div onClick={() => toggleImageIndex(0)}>
          <ExpectationCard
            imageSrc={fun_games_image}
            svg={FunGamesSVG({ height: 40, width: 40 })}
            title="Fun Games"
            description="Get ready to unleash your competitive spirit and bond with fellow participants in a series of exciting challenges and friendly competitions."
            index={0}
            isActive={currentIndex == 0}
          />
        </div>
        <div onClick={() => toggleImageIndex(1)}>
          <ExpectationCard
            svg={WorkshopSVG({ height: 40, width: 40 })}
            title="Workshops"
            index={1}
            imageSrc={workshop_image}
            description="Dive deep into cutting-edge technologies, sharpen your skills, and gain invaluable insights from industry experts through interactive workshops tailored to enhance your expertise and ignite your innovation."
            isActive={currentIndex == 1}
          />
        </div>
        <div onClick={() => toggleImageIndex(2)}>
          <ExpectationCard
            svg={MusicSVG({ height: 40, width: 40 })}
            title="Live Music"
            imageSrc={live_music_image}
            index={2}
            description="Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances, adding rhythm and energy to your DeerHack experience."
            isActive={currentIndex == 2}
          />
        </div>
      </div>
      <div className="hidden lg:block cursor-pointer">
        <ExpectationImage
          imageSrc={
            currentIndex == 0
              ? fun_games_image
              : currentIndex == 1
                ? workshop_image
                : currentIndex == 2
                  ? live_music_image
                  : fun_games_image
          }
        />
      </div>
    </div>
  );
}
