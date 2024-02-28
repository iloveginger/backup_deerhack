import UserEntity from "@/app/types/userentity";
import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";

import Team from "@/app/types/team";

function transformData(data: any): Array<Team> {
  let teams: Array<Team> = [];

  for (let team of data.data) {
    let member: UserEntity = {
      name: "",
      image: "",
      linkedin_url: "",
      position: "",
    };

    const members: Array<UserEntity> = [];

    for (let value of team.attributes.organizers.data) {
      member = {
        id: value.attributes.id,
        name: value.attributes.name,
        image: SERVER_URL + value.attributes.image.data.attributes.url,
        linkedin_url: value.attributes.linkedin_url,
        position: "",
      };
      members.push(member);
    }

    let teamInstance: Team = {
      id: team.id,
      name: team.attributes.name,
      organizers: members,
    };

    teams.push(teamInstance);
  }
  return teams;
}

async function getData() {
  try {
    const res = await fetch(
      "http://localhost:1337/api/teams?populate=organizers&populate=organizers.image&sort=order:asc",
      { cache: "no-store" },
    );
    if (!res.ok) {
      throw new Error("Cannot Fetch Data");
    }
    const data = await res.json();
    const teams = transformData(data);
    return teams;
  } catch (error: any) {
    console.log("Error", error.message);
    return [];
  }
}

export default getData;
