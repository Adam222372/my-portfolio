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
        <footer className="flex flex-col items-center  h-[125px]">
          <h3 className="mt-4 mb-2 font-bold">Adam Holeček</h3>
          <Link href={"mailto:adamholecek22@gmail.com"}>adamholecek22@gmail.com</Link>
          <Link href={"tel:+420603488922"}>+420603488922</Link>
          <div className="flex space-x-2">
            <Link href={"https://github.com/Adam222372"}><i className="bi bi-github text-white"></i></Link>
            <Link href="https://www.linkedin.com/in/adam-holeček-28b606312/"><i className="bi bi-linkedin text-white"></i></Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
