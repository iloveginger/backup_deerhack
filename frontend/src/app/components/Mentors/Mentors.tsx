// import FetchData from "./data";
import { cabinetBold, satoshiRegular, cabinetRegular } from "@/fonts";

const Judges = async () => {
  return (
    <div key="container" className="w-[85%] m-auto py-10">
      <div key="judgeContainer" className="flex items-center flex-col my-20">
        <h1
          className={`bg-gradient-to-r from-primary to-secondary text-4xl bg-clip-text text-transparent font-[800] mb-6 ${cabinetBold.className}`}
        >
          Mentors for DeerHack 2024
        </h1>
        <div
          key="JudgeCards"
          className="flex flex-wrap lg:w-full xl:w-[70%] mt-2 gap-16 justify-center"
        ></div>
      </div>
    </div>
  );
};

export default Judges;
