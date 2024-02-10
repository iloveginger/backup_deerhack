import React from "react";
import FetchData from "./data";
import { cabinetBold } from "@/fonts";
import JudgeCard from "./JudgeCard";
import Judge from "@/app/types/judge";

const Judges = async () => {
  const response = await FetchData();
  const judges = response.data;
  let judges_real: Judge[] = [];
  for (let judge of judges) {
    console.log(judge.attributes.image.data.attributes.url);

    let entity: Judge = {
      name: judge.attributes.name,
      position: judge.attributes.position,
      image:"http://localhost:1337"+judge.attributes.image.data.attributes.url,
      linkedin_url: judge.attributes.linkedin_url,
    };

    judges_real.push(entity);
  }

  return (
    <div key="container" className="w-[85%] m-auto py-10">
      <div key="judgeContainer" className="flex items-center flex-col my-20">
        <h1
          className={`bg-gradient-to-r from-primary to-secondary text-4xl bg-clip-text text-transparent font-[800] mb-6 ${cabinetBold.className}`}
        >
          Judges for DeerHack 2024
        </h1>
        <div
          key="JudgeCards"
          className="flex flex-wrap lg:w-full xl:w-[70%] mt-2 gap-16 justify-center"
        >
          {judges_real.map((judge: Judge) => (
            <JudgeCard
              key={judge.name}
              name={judge.name}
              position={judge.position}
              image={judge.image}
              linkedin_url={judge.linkedin_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;