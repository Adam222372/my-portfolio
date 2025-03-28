import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'cs'];
const defaultLocale = 'en';

// Helper to determine the preferred locale
export function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    // Match the first supported locale found in the accept-language header
    const matchedLocale = locales.find((locale) => acceptLanguage.includes(locale));
    return matchedLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    // Redirect root path `/` to the preferred locale
    if (pathname === '/') {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${search}`, request.url));
    }

    // Redirect if path does not start with a valid locale
    if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}${search}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
