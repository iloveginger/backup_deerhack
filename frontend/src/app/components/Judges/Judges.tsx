// import React from "react";
import { cabinetBold, cabinetExtraBold } from "@/fonts";
import UserEntity from "@/app/types/userentity";
import UserCard from "../core/UserCard";
import JudgesFetcher from "./data";

const JudgesList = async () => {
  const judges = await JudgesFetcher();
  return (
    <div
      key="JudgeCards"
      className="flex flex-wrap lg:w-[80%] xl:w-[80%] mt-14 gap-16 justify-center"
    >
      {judges.map((judge: UserEntity) => (
        <UserCard
          key={judge.name}
          name={judge.name}
          position={judge.position}
          image={judge.image}
          linkedin_url={judge.linkedin_url}
        />
      ))}
    </div>
  );
};

export default JudgesList;
