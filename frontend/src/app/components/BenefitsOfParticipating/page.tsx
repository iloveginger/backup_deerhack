import CardDark from "./CardDark";
import CardLight from "./CardLight";
import NetworkSVG from "@/app/assets/images/network";
import IdeaSVG from "@/app/assets/images/idea";
import OpportunitiesSVG from "@/app/assets/images/opportunities";
import PuzzleSVG from "@/app/assets/images/puzzle";

export default function BenefitsSection() {
  return (
    <div className="flex flex-row flex-wrap gap-3 mx-10 mt-10">
      <div className="flex flex-col gap-3">
        <CardDark
          title="Build a Powerful Network"
          description="DeerHack is the perfect platform to find like-minded people and build your connections."
          svg={<NetworkSVG height={100} width={100} />}
        />
        <CardLight
          title="Career Opportunities"
          description="Showcase talents, gain hands-on experience, and develop crucial skills like problem-solving and teamwork for career success."
          svg={<OpportunitiesSVG />}
        />
      </div>

      <div className="flex flex-col gap-3">
        <CardLight
          title="Support for Your Ideas"
          description="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions."
          svg={<IdeaSVG />}
        />
        <CardDark
          title="Interpersonal Development"
          description="Embrace the challenge at DeerHack and watch as your interpersonal skills evolve under pressure, transforming you into a more resilient and effective collaborator."
          svg={<PuzzleSVG height={100} width={100} />}
        />
      </div>
    </div>
  );
}
