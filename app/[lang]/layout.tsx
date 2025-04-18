import "../globals.css";
import React from "react";
import MenuBar from "../components/MenuBar";
import { Inter } from "next/font/google";

export const dynamic = "force-dynamic"; 

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ lang: string }>; // Correct type for params
  children: React.ReactNode;
}) {
  const { lang } = await params; // Access lang directly from params

  return (
    <html lang={lang} className={inter.className}>
      <body>
        <MenuBar lang={lang} />
        {children}
      </body>
    </html>
  );
}
