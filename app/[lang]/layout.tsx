import "../globals.css";
import React from "react";
import MenuBar from "../components/MenuBar";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className}>
      <body>
        <MenuBar lang={lang} />
        {children}
      </body>
    </html>
  );
}
