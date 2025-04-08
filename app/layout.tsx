import {Funnel_Display} from "next/font/google";
import "./globals.css";
import React from "react";

const funelDisplay = Funnel_Display({
    subsets: ['latin'],
    weight: ['400']
})

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html className={funelDisplay.className}>
        <body>
        {children}
        </body>
        </html>
    );
}