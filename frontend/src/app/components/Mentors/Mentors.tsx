import React from "react";
import FetchData from "./data";
import { cabinetBold, cabinetExtraBold } from "@/fonts";
import UserEntity from "@/app/types/userentity";
import UserCard from "../core/UserCard";
import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";

const MentorsList = async () => {
  const response = await FetchData();
  const mentors_ = response.data;
  let mentors: UserEntity[] = [];
  for (let mentor of mentors_) {
    let entity: UserEntity = {
      name: mentor.attributes.name,
      position: mentor.attributes.position,
      image: SERVER_URL + mentor.attributes.image.data.attributes.url,
      linkedin_url: mentor.attributes.linkedin_url,
    };
    mentors.push(entity);
  }

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

