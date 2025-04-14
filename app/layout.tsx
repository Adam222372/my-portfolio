import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}