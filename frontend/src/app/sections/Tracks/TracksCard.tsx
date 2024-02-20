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
import styles from "./styles.module.css";

const TracksCard = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>(
    "Interactive Technology"
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
        "The track is about the development of interactive technology and its applications in various fields.",
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
        "The track is about the development of data science and machine learning and their applications in various fields.",
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
        "The track is about the development of blockchain technology and its applications in various fields.",
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
        "The track is about fostering open innovation and collaboration across various domains.",
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
        className={`flex justify-start xl:justify-center items-start text-magnolia gap-8 overflow-x-auto pb-4 ${styles.scrollbar_hide}`}
        ref={containerRef}
      >
        {trackData.map((track, index) => (
          <div className="">
            <TracksHeading
              key={index}
              headStyling={track.headStyling}
              svg={track.svg}
              title={track.title}
              onClick={() => handleTrackSelection(track.title)}
            />
          </div>
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
          )
      )}
    </div>
  );
};

export default TracksCard;
