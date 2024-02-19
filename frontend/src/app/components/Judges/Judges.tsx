import React from "react";
import FetchData from "./data";
import { cabinetBold, cabinetExtraBold } from "@/fonts";
import UserEntity from "@/app/types/userentity";
import UserCard from "../core/UserCard";
import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";

const JudgesList = async () => {
  const response = await FetchData();
  const judges = response.data;
  let judges_real: UserEntity[] = [];
  for (let judge of judges) {
    let entity: UserEntity = {
      name: judge.attributes.name,
      position: judge.attributes.position,
      image: SERVER_URL + judge.attributes.image.data.attributes.url,
      linkedin_url: judge.attributes.linkedin_url,
    };
    judges_real.push(entity);
  }

  return (
    <div key="JudgeContainer" className="w-full m-auto py-10 bg-dark-purple">
      <div key="judgeContainer" className="flex items-center flex-col my-20">
        <h1
          className={`text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto ${cabinetExtraBold.className}`}
        >
          Judges for DeerHack 2024
        </h1>
        <div
          key="JudgeCards"
          className="flex flex-wrap lg:w-[80%] xl:w-[80%] mt-14 gap-16 justify-center"
        >
          {judges_real.map((judge: UserEntity) => (
            <UserCard
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

export default JudgesList;
