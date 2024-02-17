import ExpectationCard from "@/app/components/Expectations/ExpectationCard";
import { ReactElement } from "react";
import FunGamesSVG from "@/app/assets/images/funGames";
import WorkshopSVG from "@/app/assets/images/workshop";
import MusicSVG from "@/app/assets/images/music";

export default function ExpectationCards(): ReactElement {
  return (
    <div className="flex flex-col py-10 gap-5">
      <ExpectationCard
        svg={FunGamesSVG({ height: 40, width: 40 })}
        title="Fun Games"
        description="Get ready to unleash your competitive spirit and bond with fellow participants in a series of exciting challenges and friendly competitions."
      />
      <ExpectationCard
        svg={WorkshopSVG({ height: 40, width: 40 })}
        title="Workshops"
        description="Dive deep into cutting-edge technologies, sharpen your skills, and gain invaluable insights from industry experts through interactive workshops tailored to enhance your expertise and ignite your innovation."
      />
      <ExpectationCard
        svg={MusicSVG({ height: 40, width: 40 })}
        title="Live Music"
        description="Take a break from coding and immerse yourself in the soulful melodies and electrifying beats of live music performances, adding rhythm and energy to your DeerHack experience."
      />
    </div>
  );
}
