import MentorsSection from "../sections/Mentors/Mentors"
import { cabinetExtraBold } from "../utils/fonts"


const Mentors = () => {
  return (
    <div key="MentorContainer" className="w-full m-auto py-10 bg-dark-purple">

    <div key="MentorContainer" className="flex items-center flex-col my-20">
        <h1
          className={`text-center text-3xl lg:text-5xl text-primary-gradient-color w-fit mx-auto ${cabinetExtraBold.className}`}
        >
          Mentors for DeerHack 2024
        </h1>
        <MentorsSection/>
    </div>
    </div>
  )
}

export default Mentors