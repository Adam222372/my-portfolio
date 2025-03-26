export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'cs' }];
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: { lang: 'en' | 'cs' };
}) {
    return (
        <html lang={params.lang}>
        <body>{children}</body>
        </html>
    );
}
