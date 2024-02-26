import { ReactElement } from "react";
import OrganizersPage from "../pages/OrganizersPage";
import Image from "next/image";
import longLeafSVG from "../assets/images/long_leaf.svg";
import shortFatLeaf from "../assets/images/leaf_deerhack2023_right.svg";
import shortLeaf from "../assets/images/leaf_prizes_right.svg";

export default function Page(): ReactElement {
  return (
    <div className="relative">
      <Image
        src={longLeafSVG}
        height={50}
        width={50}
        alt="leaf"
        className="absolute top-4"
      />
      <Image
        src={shortLeaf}
        height={90}
        width={90}
        alt="leaf"
        className="absolute top-20 right-3"
      />
      <Image
        src={shortLeaf}
        height={55}
        width={55}
        alt="leaf"
        className="absolute top-[35rem] -left-3"
        style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
      />
      <Image
        src={longLeafSVG}
        height={70}
        width={70}
        alt="leaf"
        className="absolute top-[35rem] right-6"
        style={{ transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }}
      />
      <OrganizersPage />
    </div>
  );
}
