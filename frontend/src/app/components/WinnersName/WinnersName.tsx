import { cabinetExtraBold } from "@/app/utils/fonts"

const WinnersName = ({
    teamName
}: {
    teamName: string
}) => {
    return (
        <>
            <div className=" bg-violet/50  text-center uppercase  text-white border-2 rounded-md p-4 border-secondary  isolate z-10 shadow-lg backdrop-blur-sm">
                <p className={` text-center ${cabinetExtraBold.className} text-3xl`} >{teamName}</p>
            </div>
        </>
    )
}

export default WinnersName
