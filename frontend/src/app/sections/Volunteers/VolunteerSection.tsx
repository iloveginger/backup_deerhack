import UserEntity from "@/app/types/userentity";
import volunteerFetcher from "./data";
import UserCard from "@/app/components/core/UserCard";

const VolunteerSection = async () => {
  const volunteers = await volunteerFetcher();
  return (
    <div className="flex flex-wrap lg:w-[80%] mt-8 gap-16 justify-center">
      {volunteers.map((volunteer: UserEntity) => (
        <UserCard
          key={volunteer.name}
          name={volunteer.name}
          position=""
          image={volunteer.image}
          linkedin_url={volunteer.linkedin_url}
        />
      ))}
    </div>
  );
};

export default VolunteerSection;
