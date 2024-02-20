import JudgesSection from "../sections/Judges/Judges"
import { cabinetExtraBold } from "../utils/fonts"


const Judges = () => {
  return (
    <div key="JudgeContainer" className="w-full m-auto py-10 bg-dark-purple">

    <div key="judgeContainer" className="flex items-center flex-col my-20">
        <h1
          className={`text-center text-3xl lg:text-6xl text-primary-gradient-color w-fit mx-auto ${cabinetExtraBold.className}`}
        >
          Judges for DeerHack 2024
        </h1>
        <JudgesSection/>
    </div>
    </div>
  )
}

export default Judges