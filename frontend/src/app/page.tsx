import localFont from "next/font/local";
// import { cabinetLight, cabinetBold } from "./utils/fonts";

import { cabinetBold, satoshiRegular } from "@/fonts";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-dark-purple`}
    >
      <p
        className={`bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent text-5xl ${cabinetBold.className}`}
      >
        Hello to The DeerHack 2024!
      </p>
      <p className={`${satoshiRegular.className} text-white font-[500]`}>
        This is satoshiiiii
      </p>
    </main>
  );
}
