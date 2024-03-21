"use client";
import { useState } from "react";
import TracksHeading from "@/app/components/Tracks/TracksHeadingCard";
import InteractiveTechnologySVG from "@/app/assets/icons/InteractiveTechnology";
import DataScienceSVG from "@/app/assets/icons/DataScience";
import BlockchainSVG from "@/app/assets/icons/Blockchain";
import OpenInnovationSVG from "@/app/assets/icons/OpenInnovation";
import TracksBodyCard from "@/app/components/Tracks/TracksBodyCard";
import ArrowSVG from "@/app/assets/icons/ArrowSVG";
import { useRef } from "react";

const TracksCard = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>(
    "Interactive Technology",
  );

  const trackData = [
    {
      title: "Interactive Technology",
      svg: <InteractiveTechnologySVG height={25} width={25} />,
      svgBody: <InteractiveTechnologySVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Interactive Technology"
          ? "bg-grape text-magnolia active"
          : "bg-violet hover:bg-grape hover:text-magnolia",
      bodyStyling: "bg-grape text-magnolia",
      description:
        "Enter the World of IoT with DeerHack. Explore connectivity, innovation, and the future of global interaction.",
    },
    {
      title: "Data Science / Machine Learning",
      svg: <DataScienceSVG height={25} width={25} />,
      svgBody: <DataScienceSVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Data Science / Machine Learning"
          ? "bg-purpures text-magnolia active"
          : "bg-violet hover:bg-purpures hover:text-magnolia",
      bodyStyling: "bg-purpures text-magnolia",
      description:
        "Dive deep into the captivating realm of Data Analysis and Predictive Modeling, Leveraging algorithms to extract meaningful patterns and trends",
    },
    {
      title: "Blockchain",
      svg: <BlockchainSVG height={25} width={25} />,
      svgBody: <BlockchainSVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Blockchain"
          ? "bg-magnolia text-dark-purple active"
          : "bg-violet hover:bg-magnolia hover:text-dark-purple",
      bodyStyling: "bg-magnolia text-dark-purple",
      description:
        "Embrace Decentralization with DeerHack. Explore smart contracts, secure transactions, and reshape industries at the forefront of innovation.",
    },
    {
      title: "Open Innovation",
      svg: <OpenInnovationSVG height={25} width={25} />,
      svgBody: <OpenInnovationSVG height={50} width={50} />,
      headStyling:
        selectedTrack === "Open Innovation"
          ? "bg-secondary text-dark-purple active"
          : "bg-violet hover:bg-secondary hover:text-dark-purple",
      bodyStyling: "bg-secondary text-dark-purple",
      description:
        "Transforming Challenges into Opportunities at DeerHack. Be part of the solution, forging a brighter future for all.",
    },
  ];

  const handleTrackSelection = (title: string) => {
    setSelectedTrack(title);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = () => {
    console.log(containerRef.current);
    if (containerRef.current) {
      containerRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="w-[85vw] mx-auto">
      <div
        className="flex xl:hidden mb-5 hover:cursor-pointer justify-end p-4 items-center"
        onClick={handleArrowClick}
      >
        <ArrowSVG />
      </div>
      <div
        className={`flex justify-start xl:justify-center items-start text-magnolia gap-8 overflow-x-auto pb-4 no-scrollbar`}
        ref={containerRef}
      >
        {trackData.map((track, index) => (
          <TracksHeading
            key={index}
            headStyling={track.headStyling}
            svg={track.svg}
            title={track.title}
            onClick={() => handleTrackSelection(track.title)}
          />
        ))}
      </div>

      {trackData.map(
        (track, index) =>
          selectedTrack === track.title && (
            <TracksBodyCard
              key={index}
              svg={track.svgBody}
              title={track.title}
              description={track.description}
              bodyStyling={track.bodyStyling}
            />
          ),
      )}
    </div>
  );
};

export default TracksCard;
