import DWITSVG from "@/app/assets/icons/DwitLogo";
import LinkedInSVG from "@/app/assets/icons/LinkedIn";
import Judge from "@/app/types/judge";
import { cabinetRegular } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const JudgeCard = ({ name, position, image, linkedin_url }: Judge) => {
  return (
    <div className="mb-5 flex justify-center items-center" key="container">
      <div
        key="cardContainer"
        className="relative flex items-center justify-center rounded-xl h-70 w-full bg-gradient-to-br p-0.5 from-grape to-saffron"
      >
        <div key="imageContainer" className="w-full h-full">
          <Image
            src={image}
            width={200}
            height={375}
            alt="test"
            className="rounded-xl ojbect-cover h-full"
          />
        </div>
        <div
          key="linkedinContainer"
          className="absolute top-[80%] flex flex-row items-center  justify-between bg-[#110C24] rounded-lg py-2 px-4 w-[80%]"
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
