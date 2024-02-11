import Image from "next/image";
import { ReactElement } from "react";
import expectation_image from "@/app/assets/images/expectation_image.jpg";

export default function ExpectationImage(): ReactElement {
  return (
    <div className="relative h-[22rem] sm:h-[27rem] w-64 sm:w-80 bg-saffron rounded-lg mt-10">
      <div className="absolute bottom-3 left-2 z-[5] rounded-lg h-full w-full">
        <Image
          src={expectation_image}
          alt="Placeholder"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
