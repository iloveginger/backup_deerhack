"use client";

import ExpectationCard from "@/app/components/Expectations/ExpectationCard";
import { ReactElement, useState } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import WorkshopSVG from "@/app/assets/images/workshop";
import MusicSVG from "@/app/assets/images/music";

import ExpectationImage from "@/app/components/Expectations/ExpectationImage";
import expectation_image from "@/app/assets/images/expectation_image.jpg";
import guitar from "@/app/assets/images/guitar.jpg";
import teaching from "@/app/assets/images/teaching.jpg";
import Hero from "@/app/assets/images/Hero.jpg";

export default function ExpectationCards(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleImageIndex = (index: number) => {
    setCurrentIndex(index);
    console.log(currentIndex);
  };
  return (
    <div className="flex lg:flex-row flex-col justify-around w-[90vw] lg:w-[80vw] lg:max-w-[60vw] mx-auto mt-10 items-center lg:items-start gap-5">
      <div className="flex flex-col py-10 gap-5">
        <div onClick={() => toggleImageIndex(0)}>
          <ExpectationCard
            imageSrc={expectation_image}
            svg={FunGamesSVG({ height: 40, width: 40 })}
            title="Fun Games"
            description="Get ready to unleash your competitive spirit and bond with fellow participants in a series of exciting challenges and friendly competitions."
            index={0}
          />
        </div>
        <div onClick={() => toggleImageIndex(1)}>
          <ExpectationCard
            svg={WorkshopSVG({ height: 40, width: 40 })}
            title="Workshops"
            index={1}
            imageSrc={teaching}
            description="Dive deep into cutting-edge technologies, sharpen your skills, and gain invaluable insights from industry experts through interactive workshops tailored to enhance your expertise and ignite your innovation."
          />
        </div>
        <div onClick={() => toggleImageIndex(2)}>
          <ExpectationCard
            svg={MusicSVG({ height: 40, width: 40 })}
            title="Live Music"
            imageSrc={guitar}
            index={2}
            description="Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances, adding rhythm and energy to your DeerHack experience."
          />
        </div>
      </div>
      <div className="hidden lg:block cursor-pointer">
        <ExpectationImage
          imageSrc={
            currentIndex == 0
              ? expectation_image
              : currentIndex == 1
              ? teaching
              : currentIndex == 2
              ? guitar
              : expectation_image
          }
        />
      </div>
    </div>
  );
}
