import Link from "next/link";
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo";
import NavLinks from "./Navlinks";
// import Counter from "../counter/Counter";
import { cabinetBold, satoshiBlack } from "@/app/utils/fonts";
import dynamic from "next/dynamic";

const Navbar = () => {
  const Counter = dynamic(() => import('@/app/components/counter/Counter'), { ssr: false })

  return (

    <nav className="flex flex-col md:flex-row justify-between mx-auto p-5 items-center container-fluid isolate shadow-lg backdrop-blur-lg">
      <Link href={"/"} className="lg:ml-20">
        <DeerhackLogo />
      </Link>
      <Counter />
      <ul className={`md:flex flex-col md:flex-row md:justify-around gap-10 font-[16px] text-magnolia ${cabinetBold.className}`}>
        <NavLinks />
      </ul>
      <Link href="/register">
        <button className={` ${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-xl p-3 rounded lg:mr-20 bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}>
          Register Now
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
