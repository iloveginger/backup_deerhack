import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function Sponsor({ image,alt,url }: { image: StaticImageData,alt:string,url:string }) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-[15rem]">
      <div className="inset-0 flex flex-row justify-center items-center">
        <div className="rounded-full flex flex-row justify-center items-center">
          <Link href = {url} target="_blank">
            <Image src={image} alt = {alt} width={100} height = {100} loading="lazy" className="object-cover w-full h-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}

