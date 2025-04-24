import { NextRequest, NextResponse } from 'next/server';
import { match } from "@formatjs/intl-localematcher"
import Negotiator from 'negotiator'

const locales = ['en', 'cs'];
const defaultLocale = 'en';
let prefferedLang = "";

export function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const negotiator = new Negotiator({
        headers: { "accept-language": acceptLanguage }
    });
    const languages = negotiator.languages();
    const matchedLang = match(languages, locales, defaultLocale);

    return matchedLang;
}


export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    

    const matchedLocale = getLocale(request);

    if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
         prefferedLang = request.nextUrl.pathname;
        return NextResponse.next();
    }

    if(!locales.some((locale) => pathname.startsWith(`${locales}`))){ 
        const url = request.nextUrl.clone();
        url.pathname = `/${matchedLocale}${pathname}`;
        return NextResponse.redirect(url);
    }
    
}

export const config = {
    matcher: [ '/',
        '/((?!_next|.*\\.(?:jpg|jpeg|png|webp|svg|ico|gif|css|js|woff2?|ttf|otf)).*)',
    ],
}