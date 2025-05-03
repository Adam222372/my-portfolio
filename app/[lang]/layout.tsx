import "../globals.css";
import React from "react";
import MenuBar from "@/components/MenuBar";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getDictionary } from "./dictionaries";
import "bootstrap-icons/font/bootstrap-icons.css"


const dynamic = "force-dynamic"

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
        <MenuBar dictionary={dictionary} lang={lang}/>
        {children}
        <footer className="flex flex-col items-center h-[125px] p-2">
          <div className="mt-4 flex flex-col items-center">
            <h3 className="font-bold">Adam Holeček</h3>
            <div className="flex flex-col items-center">
              <Link href={"mailto:adamholecek22@gmail.com"} className="p-1">adamholecek22@gmail.com</Link>
              <Link href={"tel:+420603488922"} className="p-1">+420603488922</Link>
            </div>
          </div>
          <div className="flex space-x-2 p-2">
            <Link href={"https://github.com/Adam222372"}><i className="bi bi-github text-white text-2xl"></i></Link>
            <Link href="https://www.linkedin.com/in/adam-holeček-28b606312/"><i className="bi bi-linkedin text-white text-2xl"></i></Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
