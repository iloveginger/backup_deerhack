import { ReactElement } from "react";
export default function Sponsor({svg}:{svg:ReactElement}){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className=" inset-0 flex justify-center items-center">
                <div className="w-[12rem] h-[12rem] rounded-full bg-[#241A4A] flex justify-center items-center">
                    {svg}
                </div>
            </div>
</div>
);
}