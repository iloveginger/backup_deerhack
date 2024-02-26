import HeroIcon from "@/app/assets/icons/Hero";
import { cabinetExtraBold } from "@/fonts";
import GoBackToHome from "../GoBack/GoBackToHome";

const Announced = ({
    description,
}:{
    description: string;
}) => {
    return (
        <div className=" flex justify-center ">
            <HeroIcon className="w-fit fixed left-0" />
            <div className="absolute gap-[40px] top-[190px] flex flex-col text-center lg:top-48 sm:top-56">
                <p className={`${cabinetExtraBold.className} text-secondary-gradient-color-reverse w-fit text-5xl px-4 text-center`}>
                    {description}
                </p>
                <GoBackToHome/>
            </div>
        </div>
    );
};

export default Announced;
