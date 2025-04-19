import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'cs'];
const defaultLocale = 'en';

export function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const matchedLocale = locales.find((locale) => acceptLanguage.includes(locale));
    return matchedLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    if (pathname === '/') {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${search}`, request.url));
    }

    if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}${search}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}
