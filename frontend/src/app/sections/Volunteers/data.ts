import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
import UserEntity from "@/app/types/userentity";

const transformVolunteerData = (volunteer: any) => ({
  name: volunteer.attributes.name,
  position: volunteer.attributes.position,
  image: SERVER_URL + volunteer.attributes.image.data.attributes.url,
  linkedin_url: volunteer.attributes.linkedin_url,
});

const fetchData = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/volunteers?populate=image`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.log(`Failed to fetch data. Status: ${response.status}`);
      return [];
    }

    const data = await response.json();

    const volunteers: UserEntity[] = data.data.map(transformVolunteerData);

    return volunteers;
  } catch (error) {
    console.error("Error fetching volunteers");
    return [];
  }
};

export default fetchData;
