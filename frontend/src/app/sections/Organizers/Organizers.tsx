import { ReactElement } from "react";
import getData from "./fetchTeams";
import Team from "@/app/types/team";
import Image from "next/image";
import UserCard from "@/app/components/core/UserCard";
import { cabinetBold, cabinetExtraBold, cabinetBlack } from "@/app/utils/fonts";
import VolunteerSection from "../Volunteers/VolunteerSection";

export default async function Organizers() {
  const teams: Array<Team> = await getData();

  return (
    <div className="pb-9 flex flex-col items-center">
      <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}
      >
        Meet The Organizers
      </h1>
      {teams.map((team: Team, key = team.id) => (
        <div
          className="text-white mt-20 flex flex-col justify-center w-[100%] md:w-[85%] lg:w-[70%] xl2:w-[55%]"
          key={key}
        >
          <h1
            className={`headings ${cabinetExtraBold.className} text-3xl mb-10`}
          >
            {team.name}
          </h1>
          <div className="">
            {team.organizers.length === 2 ? (
              <div className="flex justify-center flex-wrap items-center gap-8 mb-20">
                {team.organizers.map((organizer, index) => (
                  <UserCard
                    key={index}
                    image={organizer.image}
                    linkedin_url={organizer.linkedin_url}
                    name={organizer.name}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center items-center align-middle gap-8">
                {team.organizers.map((organizer, index) =>
                  index == 0 ? (
                    <div className="w-full" key={index}>
                      <UserCard
                        image={organizer.image}
                        linkedin_url={organizer.linkedin_url}
                        name={organizer.name}
                      />
                    </div>
                  ) : (
                    <UserCard
                      key={index}
                      image={organizer.image}
                      linkedin_url={organizer.linkedin_url}
                      name={organizer.name}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      <div
        key="volunteers"
        className="flex justify-center items-center flex-col mt-20"
      >
        <h1 className={`headings ${cabinetExtraBold.className} text-3xl`}>
          Volunteers
        </h1>
        <VolunteerSection />
      </div>
    </div>
  );
}
