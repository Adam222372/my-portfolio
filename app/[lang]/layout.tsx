import "../globals.css";
import React from "react";
import MenuBar from "@/components/MenuBar";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getDictionary } from "./dictionaries";


const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ lang: "cs" | "en" }>; 
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang); 

  return (
    <html lang={lang} className={inter.className}>
      <body>
        <MenuBar dictionary={dictionary} />
        {children}
        <footer className="flex flex-col items-center  h-[125px]">
                <h3 className="mt-4 mb-2 font-bold">Adam Holeček</h3>
                <Link href={"mailto:adamholecek22@gmail.com"}>adamholecek22@gmail.com</Link>
                <Link href={"tel:+420603488922"}>+420603488922</Link>
        </footer>
      </body>
    </html>
  );
}
