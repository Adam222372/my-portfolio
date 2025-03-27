import {Funnel_Display} from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

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
        <header className={"border-b border-white w-full"}>
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
        <footer className={"flex justify-center border-t border-white"}>
            <p>Adam Jiří Holeček</p>
        </footer>
        {children}
        </body>
        </html>
    );
}