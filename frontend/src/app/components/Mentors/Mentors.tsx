// import React from "react";
import { cabinetBold, cabinetExtraBold } from "@/fonts";
import UserEntity from "@/app/types/userentity";
import UserCard from "../core/UserCard";
import FetchMentors from "./data";

const MentorsList = async () => {
  const mentors = await FetchMentors();
  return (
    <div
      key="MentorCards"
      className="flex flex-wrap lg:w-[80%] xl:w-[80%] mt-14 gap-16 justify-center"
    >
      {mentors.map((mentor: UserEntity) => (
        <UserCard
          key={mentor.name}
          name={mentor.name}
          position={mentor.position}
          image={mentor.image}
          linkedin_url={mentor.linkedin_url}
        />
      ))}
    </div>
  );
};

export default MentorsList;
