import SchedulePage from "../(pages)/SchedulePage";
import Announced from "../components/Announced/Announced";
import Navbar from "../components/Navbar/Navbar";
import { ScheduleSection } from "../sections/Schedule";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <ScheduleSection/>
      </div>
    </>
  );
};

export default Schedule;
