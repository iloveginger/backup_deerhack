import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import footer_image from "@/app/assets/images/footer_image.svg";

import { cabinetBold, cabinetRegular } from "@/fonts";

import SoftwareSVG from "@/icons/Software";
import DWITSVG from "@/icons/DwitLogo";
import MailSVG from "@/icons/EmailIcon";
import PhoneSVG from "@/icons/Phone";
import FacebookSVG from "@/icons/Facebook";
import InstagramSVG from "@/icons/Instagram";
import DiscordSVG from "@/icons/Discord";
import LinkedInSVG from "@/icons/LinkedIn";

export default function Footer(): ReactElement {
  return (
    <div
      key="footer_container"
      className="relative flex min-h-screen flex-col flex-grow w-full bg-dark-purple "
    >
      {/* BACKGROUND IMAGE WITH Z-INDEX SET */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footer_image}
          fill
          object-fit="cover"
          alt="deerhack footer"
          className="hidden md:block"
        />
      </div>
      <div className="relative flex flex-grow flex-col w-[85%] m-auto mt-10 mb-10 md:mb-0">
        <div className="flex items-center md:flex-row justify-between gap-10 mb-10 sm:flex-col -sm:flex-col">
          <div className="flex flex-col ">
            <div
              key="logo_container"
              className="flex gap-7 items-center sm:justify-center md:justify-start"
            >
              <DWITSVG />
              <SoftwareSVG />
            </div>
            <div key="contact_info" className="mt-10">
              <div className="text-white flex flex-row mb-4 justify-center items-center">
                <MailSVG />
                <span
                  className={`px-2 text-[20px] ${cabinetRegular.className}`}
                >
                  deerhack@deerwalk.edu.np
                </span>
              </div>
              <div className="text-white flex flex-row justify-start items-center">
                <PhoneSVG />
                <span
                  className={`px-2 text-[20px] ${cabinetRegular.className}`}
                >
                  9841210924/9843109234
                </span>
              </div>
            </div>
            <div key="socials" className="flex flex-col mt-11 gap-4">
              <p
                className={`text-white text-xl font-[700] ${cabinetBold.className}`}
              >
                Visit Our Socials
              </p>
              <div className="icons">
                <FacebookSVG />
                <InstagramSVG />
                <DiscordSVG />
                <LinkedInSVG />
              </div>
            </div>
          </div>
          <div key="Navigation">
            <div className="links text-white flex flex-col gap-9 justify-center items-center">
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href=""
              >
                Schedule
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href=""
              >
                Organizers
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetRegular.className}`}
                href=""
              >
                Winners
              </Link>
            </div>
          </div>
          <div key="event_summary" className="text-white ">
            <p
              className={`font-[700] text-[28px] mb-8 ${cabinetRegular.className}`}
            >
              Event Summary
            </p>
            <p className={`mb-5 text-[16px] ${cabinetRegular.className}`}>
              Mode: In-person
            </p>
            <p className={`mb-5 text-[16px] ${cabinetRegular.className}`}>
              Venue: Deerwalk Complex
            </p>
            <p className={`text-[16px] ${cabinetRegular.className}`}>
              Date: 5th-7th May, 2024
            </p>
          </div>
        </div>
        <span
          className={`text-white flex justify-center text-sm/[24px] font-[500] ${cabinetRegular.className}`}
        >
          All Rights Reserved © DWIT Software Club 2024
        </span>
      </div>
    </div>
  );
}
