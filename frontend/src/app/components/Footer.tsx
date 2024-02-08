import Image from "next/image";
import Link from "next/link";
import Deer from "../assets/icons/software";
import FooterArt from "../assets/icons/FooterArt";
import { cabinetBold, cabinetLight, satoshiRegular } from "@/fonts";
import Mail from "../assets/icons/Email_Icon";
import FooterImage from "./FooterImage";
import SoftwareSVG from "../assets/icons/software";
import DWITSVG from "../assets/icons/dwit_logo";
import MailSVG from "../assets/icons/Email_Icon";
import PhoneSVG from "../assets/icons/Phone";
import FacebookSVG from "../assets/icons/facebook";
import InstagramSVG from "../assets/icons/instagram";
import DiscordSVG from "../assets/icons/discord";
import LinkedInSVG from "../assets/icons/linkedin";

const Footer = () => {
  return (
    <div key ="footer_container" className="pb-52 flex min-h-screen flex-col flex-grow  bg-[#241A4A]  w-full">
      <div className="flex flex-grow flex-col w-[85%] m-auto mt-10">
        <div className="flex items-center md:flex-row justify-between gap-10 mb-10 sm:flex-col -sm:flex-col">
          <div className="flex flex-col ">
            <div key = "logo_container" className="flex gap-7 items-center sm:justify-center md:justify-start">
              <DWITSVG />
              <SoftwareSVG />
            </div>
            <div key = "contact_info" className="mt-10">
              <div className="text-white flex flex-row mb-4 justify-center items-center">
                <MailSVG />
                <span className={`px-2 text-[20px] ${cabinetLight.className}`}>
                  deerhack@deerwalk.edu.np
                </span>
              </div>
              <div className="text-white flex flex-row justify-start items-center">
                <PhoneSVG />
                <span className={`px-2 text-[20px] ${cabinetLight.className}`}>
                  9841210924/9843109234
                </span>
              </div>
            </div>
            <div key = "socials" className="flex flex-col mt-11 gap-4">
              <p
                className={`text-white text-xl font-[700] ${cabinetLight.className}`}
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
                className={`px-2 text-[16px] ${cabinetLight.className}`}
                href=""
              >
                Schedule
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetLight.className}`}
                href=""
              >
                Organizers
              </Link>
              <Link
                className={`px-2 text-[16px] ${cabinetLight.className}`}
                href=""
              >
                Winners
              </Link>
            </div>
          </div>
          <div key = "event_summary" className="text-white ">
            <p
              className={`font-[700] text-[28px] mb-8 ${cabinetLight.className}`}
            >
              Event Summary
            </p>
            <p className={`mb-5 text-[16px] ${cabinetLight.className}`}>
              Mode: In-person
            </p>
            <p className={`mb-5 text-[16px] ${cabinetLight.className}`}>
              Venue: Deerwalk Complex
            </p>
            <p className={`text-[16px] ${cabinetLight.className}`}>
              Date: 5th-7th May, 2024
            </p>
          </div>
        </div>
        <span
          className={`text-white flex justify-center text-sm/[24px] font-[500] ${cabinetLight.className}`}
        >
          All Rights Reserved © DWIT Software Club 2024
        </span>
      </div>
      <FooterImage />
    </div>
  );
};

export default Footer;
