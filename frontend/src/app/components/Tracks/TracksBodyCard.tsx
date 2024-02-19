import React, { ReactElement } from 'react';
import { cabinetBold, cabinetExtraBold, cabinetRegular } from '@/app/utils/fonts';

interface TracksBodyCardProps {
  svg: ReactElement;
  title: string;
  description: string;
  bodyStyling?: string;
}

const TracksBodyCard: React.FC<TracksBodyCardProps> = ({
  svg,
  title,
  description,
  bodyStyling = '',
}: TracksBodyCardProps) => {
  return (
    <div className="w-full h-full flex justify-center mt-5">
      <div
        className={`w-[70%] max-h-full flex flex-row cursor-pointer gap-16 p-3 pb-44 text-lg ${cabinetBold.className} rounded-2xl bg-grape ${bodyStyling} `}
      >
        <div className="w-1/2 p-10">
          <div className="rounded-full w-20 h-20 flex items-center justify-center">{svg}</div>
          <div className={`${bodyStyling} flex flex-col`}>
            <p className={`text-3xl mt-4 ${cabinetBold.className}`}>{title}</p>
            <span className={`text-xl mt-10 ${cabinetRegular.className}`}>{description}</span>
          </div>
        </div>

        <div className="container-fluid flex flex-col w-1/2 justify-center p-10 pt-16 mx-auto">
          <p className={`text-base ${cabinetExtraBold.className}`}>WINNER GETS</p>
          <span className={`${cabinetExtraBold.className} text-7xl`}>Rs. 15,000</span>
        </div>
      </div>
    </div>
  );
};

export default TracksBodyCard;