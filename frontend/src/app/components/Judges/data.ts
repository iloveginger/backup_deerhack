import UserEntity from "@/app/types/userentity";
import { BACKEND_URL, SERVER_URL } from "@/app/utils/config";

let judges_real: UserEntity[] = [];


const FetchData = async (): Promise<UserEntity[]>=> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/judges?populate=image`, {
      cache: "no-store",
    });
    const data = await response.json();
    for (let judge of data.data) {
      const entity: UserEntity = {
        name: judge.attributes.name,
        position: judge.attributes.position,
        image: SERVER_URL + judge.attributes.image.data.attributes.url,
        linkedin_url: judge.attributes.linkedin_url,
      };
      judges_real.push(entity);
    }
    return judges_real;
  } catch (error) {
    console.error("Error fetching judges:", error);
    return []; // Return an empty array if there's an error
  }
}
let judges_list =FetchData();
export default judges_real;
