import "../globals.css";
import React from "react";
import MenuBar from "../components/MenuBar";

export default async function RootLayout({
  children,
  params
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
    const dictionary = await params;
  return (
    <html>
      <body>
        <MenuBar lang={dictionary.lang} />
        {children}
      </body>
    </html>
  );
}
