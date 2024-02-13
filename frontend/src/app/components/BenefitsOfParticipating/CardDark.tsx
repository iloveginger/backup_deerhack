import { ReactElement } from "react"
import {
    cabinetBlack,
    cabinetBold,
    cabinetExtraBold,
    cabinetMedium,
    cabinetRegular,
  } from "@/app/utils/fonts";

export default function CardDark({
    title,
    description,
    svg
}: {
    title: string,
    description: string,
    svg: ReactElement
}){
    return(
        <div className = " primary-gradient-background w-[20.4375rem] h-[22.125rem] md:w-[33.125rem] md:h-[21.25rem] rounded-[3.5rem] p-[0.1875rem]">
            <div className = " bg-dark-purple w-full h-full  rounded-[3.5rem] flex flex-col px-12 pt-9 gap-4">
                <div className={`${cabinetExtraBold.className} text-primary-gradient-color text-base  md:text-2xl w-full md:w-48 leading-6`}>{title}</div>
                <div className="flex flex-col items-left gap-5 md:flex-row justify-between  md:items-center">
                    <div className={`${cabinetRegular.className} text-white w-52 md:w-72 text-sm md:text-xl`}>{description}</div>
                    <div className="">{svg}</div>
                </div>
            </div>
        </div>
    )
}