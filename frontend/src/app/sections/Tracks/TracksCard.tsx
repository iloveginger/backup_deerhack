import TracksHeading from "@/app/components/Tracks/TracksHeadingCard";
import InteractiveTechnologySVG from "@/app/assets/icons/InteractiveTechnology";
import DataScienceSVG from "@/app/assets/icons/DataScience";
import BlockchainSVG from "@/app/assets/icons/Blockchain";
import OpenInnovationSVG from "@/app/assets/icons/OpenInnovation";
const TracksCard = () => {
  return (
    <div className="flex  justify-center items-start text-magnolia gap-8 overflow-x-auto ">
      <TracksHeading
        hoverColor="hover:bg-grape"
        svg={InteractiveTechnologySVG({ height: 25, width: 25 })}
        title="Interactive Technology"
      />
      <TracksHeading
        hoverColor="hover:bg-purpures"
        svg={DataScienceSVG({ height: 25, width: 25 })}
        title="Data Science / Machine Learning"
      />
      <TracksHeading
        hoverColor="hover:bg-magnolia hover:text-dark-purple"
        svg={BlockchainSVG({ height: 25, width: 25 })}
        title="Blockchain"
      />
      <TracksHeading
        hoverColor="hover:bg-secondary hover:text-dark-purple"
        svg={OpenInnovationSVG({ height: 25, width: 25 })}
        title="Open Innovation"
      />
    </div>
  );
};

export default TracksCard;
