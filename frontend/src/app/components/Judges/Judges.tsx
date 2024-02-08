import FetchData from "./data";
import { cabinetBold, satoshiRegular,cabinetRegular } from "@/fonts";
import JudgeCard from "./JudgeCard";

const Judges =async () => {
    const data = await FetchData();
    console.log(data);
  return (
    <div key ="container" className="w-[85%] m-auto py-10" >
        <div key = "judgeContainer" className="flex items-center flex-col my-20">
            <h1 className={`bg-gradient-to-r from-primary to-secondary text-sm bg-clip-text text-transparent font-[800] mb-6 ${cabinetBold.className}`}>Judges for DeerHack 2024</h1>
            <div key = "JudgeCards" className="flex flex-wrap justify-center mt-2 gap-16">
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
            </div>
        </div>
        <div key = "judgeContainer" className="flex items-center flex-col">
            <h1 className={`bg-gradient-to-r from-primary to-secondary text-sm bg-clip-text text-transparent font-[800] mb-6 ${cabinetBold.className}`}>Mentors for DeerHack 2024</h1>
            <div key = "JudgeCards" className="flex flex-wrap justify-center mt-2 gap-16">
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
                <JudgeCard/>
            </div>
        </div>
    </div>
  )
}

export default Judges