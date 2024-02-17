import Register from "../sections/Register/RegisterSection";
import RegisterCard from "@/app/components/Register/RegisterCard";
import leaf_prizes_right from "@/app/assets/images/leaf_prizes_right.svg";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="overflow-hidden mb-[3rem]">
      <div className="relative">
        <Image
          src={leaf_prizes_right}
          alt="leaf"
          height={250}
          className="absolute right-3 top-46 hidden lg:block -rotate-12"
        />
      </div>
      <Register />
    </div>
  );
}
