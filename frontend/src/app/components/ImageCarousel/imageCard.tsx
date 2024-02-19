import { ReactElement } from "react";

export default function ImageCard({
    image,
}:{
    image?: string;
}): ReactElement{
    return(
        <li>
            <div className="primary-gradient-background w-[15.625rem] h-[8.75rem] md:w-[30rem] md:h-[16.875rem] flex justify-center items-center rounded-xl">
                <img className = " w-[15.125rem] h-[8.25rem] md:w-[29.5rem] md:h-[16.375rem] rounded-xl"src = {image} />
            </div>
        </li> 
    )
}