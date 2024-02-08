import React from "react";
import useCountdown from "./useCountdown";
import { cabinetRegular } from "@/app/utils/fonts";

const Counter: React.FC = () => {
    const targetDate = new Date("2024-04-26T09:00:00");
    const timeLeft = useCountdown(targetDate);

    const addLeadingZero = (number: number) => {
        return number < 10 ? `0${number}` : number.toString();
    };

    return (
        <div className="text-magnolia w-75 h-[65] font-normal ">
            <div className="flex items-center text-lg">
                <div className="flex flex-col items-center">
                    <p
                        className={`text-2xl font-bold tracking-[.25rem] ${cabinetRegular.className} `}
                    >
                        {addLeadingZero(timeLeft.days)}:
                    </p>
                    <span className="font-normal text-[10px] mr-4">Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <p
                        className={`text-2xl font-bold tracking-[.25rem] ${cabinetRegular.className} `}
                    >
                        {addLeadingZero(timeLeft.hours)}:
                    </p>
                    <span className="font-normal text-[10px] mr-4">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <p
                        className={`text-2xl font-bold tracking-[.25rem] ${cabinetRegular.className} `}
                    >
                        {addLeadingZero(timeLeft.minutes)}:
                    </p>
                    <span className="font-normal text-[10px] mr-4 ">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                    <p
                        className={`text-2xl font-bold tracking-[.25rem] ml-[-13px] ${cabinetRegular.className} `}
                    >
                        {addLeadingZero(timeLeft.seconds)}
                    </p>
                    <span className="font-normal text-[10px] mr-4">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Counter;
