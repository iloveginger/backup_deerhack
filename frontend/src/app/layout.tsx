import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// export const cabinetFont = localFont({
//   // src: "./assets/fonts/cabinet_grotesk/CabinetGrotesk-Regular.woff2",
//   // style: "bold",
//   src: [
//     {
//       path: "./assets/fonts/cabinet_grotesk/CabinetGrotesk-Regular.woff2",
//       style: "normal",
//     },
//     {
//       path: "./assets/fonts/cabinet_grotesk/CabinetGrotesk-Extrabold.woff2",
//       style: "bold",
//     },
//   ],
// });

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
