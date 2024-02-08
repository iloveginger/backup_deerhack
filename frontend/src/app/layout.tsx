import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/page";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Deerhack 2024",
  description: "To be worked",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <header className="fixed w-full mx-auto">
        <Navbar />
      </header>
      <main>{children}</main>
    </>

  );
}
