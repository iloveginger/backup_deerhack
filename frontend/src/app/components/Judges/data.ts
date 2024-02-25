import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";
import UserEntity from "@/app/types/userentity";

const transformJudgeData = (judge: any) => ({
  name: judge.attributes.name,
  position: judge.attributes.position,
  image: SERVER_URL + judge.attributes.image.data.attributes.url,
  linkedin_url: judge.attributes.linkedin_url,
});

const fetchData = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/judges?populate=image`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.log(`Failed to fetch data. Status: ${response.status}`);
      return [];
    }

    const data = await response.json();

    const judges: UserEntity[] = data.data.map(transformJudgeData);

    return judges;
  } catch (error) {
    console.error("Error fetching judges");
    return [];
  }
};

export default fetchData;
