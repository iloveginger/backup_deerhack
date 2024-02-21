import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

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
    <html>
      <body className=" bg-dark-purple">
        <header className="fixed w-screen mx-auto z-10 isolate shadow-lg backdrop-blur-lg ">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
