import CardDark from "@/app/components/BenefitsOfParticipating/CardDark";
import CardLight from "@/app/components/BenefitsOfParticipating/CardLight";
import NetworkSVG from "@/app/assets/images/network";
import IdeaSVG from "@/app/assets/images/idea";
import OpportunitiesSVG from "@/app/assets/images/opportunities";
import PuzzleSVG from "@/app/assets/images/puzzle";
import UpdatedDevelopmentSVG from "@/app/assets/images/Updated_Development";
import UpdatedIdeasSVG from "@/app/assets/images/Updated_ideas";
import UpdatedNetwrokSVG from "@/app/assets/images/Updated_Network";
import UpdatedOpportunitiesSVG from "@/app/assets/images/Updated_Opportunities";

export default function BenefitsCards() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 mx-10 mt-10">
      <div className="flex flex-col gap-6">
        <CardDark
          title="Build a Powerful Network"
          description="DeerHack is the perfect platform to find like-minded people and build your connections."
          svg={<UpdatedNetwrokSVG height={100} width={100} />}
        />
        <CardLight
          title="Career Opportunities"
          description="Showcase talents, gain hands-on experience, and develop crucial skills like problem-solving and teamwork for career success."
          svg={<UpdatedOpportunitiesSVG />}
        />
      </div>

      <div className="flex flex-col gap-6">
        <CardLight
          title="Support for Your Ideas"
          description="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions."
          svg={<UpdatedIdeasSVG />}
        />
        <CardDark
          title="Interpersonal Development"
          description="Embrace the challenge at DeerHack and watch as your interpersonal skills evolve under pressure, transforming you into a more resilient and effective collaborator."
          svg={<UpdatedDevelopmentSVG height={100} width={100} />}
        />
      </div>
    </div>
  );
}
