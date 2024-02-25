import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
import UserEntity from "@/app/types/userentity";

const transformMentorData = (mentor: any) => ({
  name: mentor.attributes.name,
  position: mentor.attributes.position,
  image: SERVER_URL + mentor.attributes.image.data.attributes.url,
  linkedin_url: mentor.attributes.linkedin_url,
});

const fetchData = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/mentors?populate=image`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.log(`Failed to fetch data. Status: ${response.status}`);
      return [];
    }

    const data = await response.json();

    const mentors: UserEntity[] = data.data.map(transformMentorData);

    return mentors;
  } catch (error) {
    console.error("Error fetching judges");
    return [];
  }
};

export default fetchData;
