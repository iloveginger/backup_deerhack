import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer_container flex flex-col flex-grow bg-[#241A4A] w-full">
      <div className="flex flex-row">
        <div className="contact">
          <div className="flex logo_container">
            <Image src="/Deer.svg" width={32} height={32} alt="SoftwareClub" />
            <Image src="/Group.svg" width={32} height={32} alt="Deerwalk" />
          </div>
          <div className="text-white flex-column contact_info">
            <Image
              src="Group 63.svg"
              className="inline"
              alt="fad"
              height={32}
              width={32}
            />
            <span>deerhack@deerwalk.edu.np</span>
          </div>
          <div className="text-white flex-column contact_info">
            <Image
              src="Group 64.svg"
              className=" inline"
              alt="fad"
              height={32}
              width={32}
            />
            <span>9841210924/9843109234</span>
          </div>
          <div className="Social_media">
            <p className="text-white font-[700]">Visit Our Socials</p>
            <div className="icons py-5 px-2">
              <Image
                src="Facebook.svg"
                className="mx-2 inline"
                alt="fad"
                height={32}
                width={32}
              />
              <Image
                src="Instagram.svg"
                className="mx-2 inline"
                alt="fad"
                height={32}
                width={32}
              />
              <Image
                src="Discord.svg"
                className="mx-2 inline"
                alt="fad"
                height={32}
                width={32}
              />
              <Image
                src="Linked.svg"
                className="mx-2 inline"
                alt="fad"
                height={32}
                width={32}
              />
            </div>
          </div>
        </div>
        <div className="Navigation">
          <div className="links text-white flex flex-col justify-center items-center">
            <Link className="px-2" href="">
              Schedule
            </Link>
            <Link className="px-2" href="">
              Organizers
            </Link>
            <Link className="px-2" href="">
              Winners
            </Link>
          </div>
        </div>
        <div className="Event_summary text-white ">
          <p className="font-[700]">Event Summary</p>
          <p>Mode:In-person</p>
          <p>Venue:Deerwalk Complex</p>
          <p>Date:5th-7th May, 2024</p>
        </div>
      </div>
      <span>All Rights</span>
      <div className="visuals bg-white">
        <Image
          src="FooterArt.svg"
          alt="footer Art"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Footer;
