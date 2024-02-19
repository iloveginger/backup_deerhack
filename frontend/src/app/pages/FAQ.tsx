import Image from "next/image"
import Faq from "../sections/FAQ/FAQ"
import { cabinetBold } from "../utils/fonts"
import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg"

const FAQ = () => {
  return (
    <div className="flex flex-col items-center bg-dark-purple md:mb-24 sm:mb-80 h-[100%]">
        <Image
            src={leaf_deerhack2023_right}
            alt="leaf"
            height={250}
            style={{ transform: "scaleX(-1)" }}
            className="absolute left-1 top-46 hidden lg:block"
          />
      <h1
        className={`bg-gradient-to-r text-center from-primary to-secondary text-4xl bg-clip-text text-transparent font-[800] mb-8 md:mb-24 sm:mb-8 ${cabinetBold.className}`}
      >
        FAQ
      </h1>
      <Faq/>
    </div>
  )
}

export default FAQ