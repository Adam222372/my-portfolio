import {Funnel_Display} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";

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
            
        <header className={"w-full"}>
            <nav className="mx-8 my-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl">Adam Holeček</h1>
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="">Home</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="">Contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
        </body>
        </html>
    );
}