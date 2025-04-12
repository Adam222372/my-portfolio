import "../globals.css";
import React from "react";
import MenuBar from "../components/MenuBar";
import { Particles } from "../components/magicui/partiles";

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'cs' }]
}

export default async function RootLayout({
    children,
    params
}: {
    params: { lang: string };
    children: React.ReactNode;
}) {
    const dic = await params;

    return (
        <html lang={dic.lang}>
            <body>
                <MenuBar lang={dic.lang}></MenuBar>
                {children}
            </body>
        </html>
    );
}