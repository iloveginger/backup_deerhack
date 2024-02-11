'use client'
import { useEffect, useState } from "react";
import { cabinetRegular } from "@/app/utils/fonts";


const Counter = () => {
    const calculateTimeLeft = (): { days: number, hours: number, minutes: number, seconds: number } => {
        const countDownDate = new Date("Apr 26, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = countDownDate - now;
        return {
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
        };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (number: number): string => {
        return number < 10 ? `0${number}` : number.toString();
    };

    return (
        <div className="text-magnolia w-75 h-[65] font-normal">
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
