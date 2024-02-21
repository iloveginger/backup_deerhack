import { BACKEND_URL ,SERVER_URL} from "@/app/utils/config";
import UserEntity from "@/app/types/userentity";

let mentors: UserEntity[] = [];


const FetchData=async ()=> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/mentors?populate=image`, {
      cache: "no-store",
    });
    const data = await response.json();
    for (let mentor of data.data) {
      let entity: UserEntity = {
        name: mentor.attributes.name,
        position: mentor.attributes.position,
        image: SERVER_URL + mentor.attributes.image.data.attributes.url,
        linkedin_url: mentor.attributes.linkedin_url,
      };
      mentors.push(entity);
    }
    return mentors;
  } catch (error){
    return [];
  }
}

let mentors_list = FetchData();
export default mentors; 