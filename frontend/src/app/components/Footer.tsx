import Image from "next/image";
import Link from "next/link";
import Deer from "../assets/icons/deer";
import FooterArt from "../assets/icons/FooterArt";
import { cabinetBold, satoshiRegular } from "@/fonts";
import Mail from "../assets/icons/mail";
import Phone from "../assets/icons/Phone";


const Footer = () => {
  return (
    <div className="footer_container flex flex-col  bg-[#241A4A] w-full">
      <div className="mx-32 mt-16">
        <div className="flex items-center flex-row gap mb-10 ">
          <div className="flex flex-col gap-4 mr-80 contact">
            <div className="flex gap-8 items-center logo_container">
              <Image src="/Group.svg" width={85} height={84} alt="Deerwalk" />
              {/* <Image
                src="/Deer.svg"
                width={46}
                height={76}
                alt="DWIT"
              /> */}
              <Deer/>
            </div>
            <div className="mt-10 contact_info">
              <div className="text-white flex flex-row mb-4 justify-center items-center">
                {/* <Image
                  src="Group 63.svg"
                  className="inline"
                  alt="SoftwareClub"
                  height={32}
                  width={32}
                /> */}
                <Mail/>
                <span className="px-2 text-xl/[24px]">deerhack@deerwalk.edu.np</span>
              </div>
              <div className="text-white flex flex-row justify-start items-center">
                <Image
                  src="Group 64.svg"
                  className="inline"
                  alt="fad"
                  height={32}
                  width={32}
                />

                <span className="px-2 text-xl/[24px]">9841210924/9843109234</span>
              </div>
            </div>
            <div className="Social_media flex flex-col mt-11 gap-4">
              <p className="text-white text-xl font-[700]">Visit Our Socials</p>
              <div className="icons">
                <Image
                  src="Facebook.svg"
                  className="inline mr-5"
                  alt="fad"
                  height={25.95}
                  width={25.9}
                />
                <Image
                  src="Instagram.svg"
                  className="inline mr-5"
                  alt="fad"
                  height={25.9}
                  width={25.9}
                />
                <Image
                  src="Discord.svg"
                  className="inline mr-5"
                  alt="fad"
                  height={30}
                  width={23}
                />
                <Image
                  src="Linked.svg"
                  className="inline mr-5"
                  alt="fad"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
          <div className="Navigation mr-80">
            <div className="links text-white flex flex-col gap-11 justify-center items-center">
              <Link className="px-2 text-xl/[24px]" href="">
                Schedule
              </Link>
              <Link className="px-2 text-xl/[24px]" href="">
                Organizers
              </Link>
              <Link className="px-2 text-xl/[24px]" href="">
                Winners
              </Link>
            </div>
          </div>
          <div className="Event_summary text-white ">
            <p className={`font-[700] text-3xl/[32px] mb-8 ${satoshiRegular.className}`}>Event Summary</p>
            <p className="mb-5 text-xl/[32px]">Mode:In-person</p>
            <p className="mb-5 text-xl/[32px]">Venue:Deerwalk Complex</p>
            <p className="text-xl/[32px]">Date:5th-7th May, 2024</p>
          </div>
        </div>
        <span className={ `text-white flex justify-center text-sm/[24px] ${cabinetBold.className}`}>
          All Rights Reserved © DWIT Software Club 2024
        </span>
      </div>
      <div className="visuals m-0">
        {/* <Image
          src="FooterArt.svg"
          alt="footer Art"
          height ={1000}
          width = {1000}
          objectFit="cover"
        /> */}
        <FooterArt 
        />
      </div>
    </div>
  );
};

export default Footer;
