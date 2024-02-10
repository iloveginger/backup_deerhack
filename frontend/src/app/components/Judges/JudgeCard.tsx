import DWITSVG from "@/app/assets/icons/DwitLogo";
import LinkedInSVG from "@/app/assets/icons/LinkedIn";
import Judge from "@/app/types/judge";
import { cabinetRegular } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const JudgeCard = ({ name, position, image, linkedin_url }: Judge) => {
  return (
    <div className="mb-5 flex justify-center items-center" key="cardContainer">
      <div
        key="card"
        className="relative flex items-center justify-center rounded-xl h-80 w-64 lg:w-56 bg-gradient-to-br p-1 from-grape to-saffron"
      >
        <div key="imageContainer" className="w-full h-full">
          <Image
            src={image}
            width={300}
            height={375}
            alt="test"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <div
          key="linkedinContainer"
          className="absolute bottom-[3%] flex flex-row items-center  justify-between bg-[#110C24] rounded-lg py-4 px-5 w-[90%]"
        >
          <div>
            <p
              className={`text-white text-xs font-[700] ${cabinetRegular.className}`}
            >
              {name}
            </p>
            <p className={`text-white font-[150] text-xs`}>{position}</p>
          </div>
          <div key="icon">
            <Link href={linkedin_url}>
              <LinkedInSVG />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeCard;