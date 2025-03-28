import "../globals.css";
import React from "react";

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'cs' }];
}


export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    params: {lang: string};
    children: React.ReactNode;
}) {
    const {lang} = await params;

    return (
        <html lang={lang}>
        <body>
        {children}
        </body>
        </html>
    );
}