import SchedulePage from "../(pages)/SchedulePage";
import Announced from "../components/Announced/Announced";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { ScheduleSection } from "../sections/Schedule";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <div className="relative ">
        <ScheduleSection/>
      </div>
      <Footer/>
    </>
  );
};

export default Schedule;
