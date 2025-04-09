import "../globals.css";
import React from "react";
import {getDictionary}  from "@/dictionaries/getDictionary";
import MenuBar from "../components/MenuBar";


export default async function RootLayout({
    children,
    params
}: {
    params: { lang: string };
    children: React.ReactNode;
}) {
    const dictionary = await getDictionary(params.lang);
    return (
        <html lang={dictionary}>
            <body>
                <MenuBar lang={dictionary}></MenuBar>
                {children}
            </body>
        </html>
    );
}