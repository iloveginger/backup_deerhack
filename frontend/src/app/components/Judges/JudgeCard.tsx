import DWITSVG from "@/app/assets/icons/DwitLogo"
import LinkedInSVG from "@/app/assets/icons/LinkedIn"
import { cabinetRegular } from "@/app/utils/fonts"
import Image from "next/image"

const JudgeCard = () => {
  return (
    <div key = "card" className="rounded-xl  bg-gradient-to-r py-0.5 px-0.5 my-1 from-grape to-saffron max-w-sm flex flex-wrap justify-center w-52 h-72">
        <div className=" flex flex-col rounded-lg h-full w-full">
            <div className="flex items-center">
                <Image 
                    src="/test_2.jpg"
                    width={306}
                    height = {400}
                    alt="test"
                    className="rounded"
                />
            </div>
            <div>
                    <div className="relative top-[-130%] flex flex-row justify-between items-center bg-[#110C24] rounded-lg p-1.5 mx-1">
                        <div>
                            <p className={`text-white font-[700] ${cabinetRegular.className}`}>John Doe</p>
                            <p className={`text-white font-[150] text-xs`}>CEO,Acame</p>
                        </div>
                        <div key = "icon">
                            <LinkedInSVG/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default JudgeCard