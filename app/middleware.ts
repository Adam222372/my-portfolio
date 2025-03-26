import { NextResponse } from 'next/server';

const locales = ['en', 'cs'];
const defaultLocale = 'en';

function getLocale(request: Request) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    for (const locale of locales) {
        if (acceptLanguage.includes(locale)) return locale;
    }
    return defaultLocale;
}

export function middleware(request: Request) {
    const pathname = request.nextUrl.pathname;

    if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }
}
