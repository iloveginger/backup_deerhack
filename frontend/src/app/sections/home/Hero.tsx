"use client"
import { useState, useEffect } from 'react';
import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/app/assets/icons/Hero";
import { cabinetBold } from "@/fonts";

const Hero = () => {
  const [logoSize, setLogoSize] = useState({ width: 345, height: 152 });
  const [textSize, setTextSize] = useState('text-3xl');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 580) {
        setLogoSize({ width: 150, height: 50 });
      }

      else if (window.innerWidth < 768) {
        setLogoSize({ width: 200, height: 87 });
        setTextSize('text-lg'); 
      }

      else {
        setLogoSize({ width: 345, height: 150 });
        setTextSize('text-3xl'); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative flex justify-center ">
      <HeroIcon className="w-screen h-fit mt-5 " />
      <div className="absolute gap-[30px] top-[90px] flex flex-col text-center lg:top-48">
        <p className={`${textSize} font-bold text-secondary ${cabinetBold.className}`}>
          5th - 7th May
        </p>
        <MainLogo className="w-fit h-fit" width={logoSize.width} height={logoSize.height} />
      </div>
    </div>
  );
};

export default Hero;
