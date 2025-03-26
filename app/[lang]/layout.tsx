import React from "react";

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'cs' }];
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{lang: "en-US" | "cs-CZ"}>;
}) {
    return (
        <html lang={(await params).lang} >
        <body>
        {children}
        </body>
        </html>
    );
}
