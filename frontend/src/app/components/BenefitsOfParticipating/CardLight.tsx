import { ReactElement } from "react"
import {
    cabinetBlack,
    cabinetBold,
    cabinetExtraBold,
    cabinetMedium,
    cabinetRegular,
  } from "@/app/utils/fonts";

export default function CardLight({
    title,
    description,
    svg
}: {
    title: string,
    description: string,
    svg: ReactElement
}){
    return(
        <div className = " bg-violet w-[33.125rem] h-[21.25rem] rounded-[3.5rem] p-[0.1875rem] flex flex-col px-12 pt-9 gap-4">
            <div className={`${cabinetExtraBold.className} text-primary-gradient-color text-2xl w-48 leading-6`}>{title}</div>
            <div className="flex flex-col items-left gap-5 md:flex-row justify-between md:items-center">
                <div className={`${cabinetRegular.className} text-white w-64`}>{description}</div>
                <div className="">{svg}</div>
            </div>
        </div>
    )
}