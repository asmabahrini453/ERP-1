import type { Metadata } from "next";
import {DM_Sans} from "next/font/google"
import "./globals.css";
import {twMerge} from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERP Pro ",
  description: "Gestion des tâches simplifiée pour équipes et particuliers",
  icons: {
    icon:"/erplogo.png" ,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased  bg-[#F6F7FA]")}>
        {/*    antialiased is used to match the wanted font from the figma file khtr sa3at fl browser 
        the font looks bigger or bolder so this makes sure to match the exact font. */}


        {children}
      </body>
    </html>
  );
}