import ApplicantsSVG from "@/app/assets/images/applicants";

import { cabinetBold, cabinetLight, cabinetRegular } from "@/app/utils/fonts";

export default function CardMedium() {
  return (
    <div className="h-52 w-80 lg:w-[24rem] bg-violet rounded-2xl px-6  pt-4 pb-10 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <ApplicantsSVG height={40} width={40} />
        <p className={`${cabinetBold.className} text-white text-2xl`}>
          Total Applicants
        </p>
      </div>
      <p className={`${cabinetRegular.className} text-white text-4xl`}>1107</p>
    </div>
  );
}
