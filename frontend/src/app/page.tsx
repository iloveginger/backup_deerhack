import localFont from "next/font/local";
// import { cabinetLight, cabinetBold } from "./utils/fonts";

import { cabinetBold, satoshiRegular } from "@/fonts";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between min-h-screen bg-dark-purple`}
    >
      <p
        className={`bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent text-5xl ${cabinetBold.className}`}
      >
        Hello to The DeerHack 2024!
      </p>
      <p className={`${cabinetBold.className} text-white font-[500]`}>
        This is satoshiiiii
      </p>
    </main>
  );
}
