import { NextRequest, NextResponse } from 'next/server';
import { match } from "@formatjs/intl-localematcher"
import Negotiator from 'negotiator'

const locales = ['en', 'cs'];
let headers = {"accept-language":'en-US,en;q=0.5' };
let language = new Negotiator({headers}).languages();
const defaultLocale = 'en';


export function getLocale(request:NextRequest){
    const headers = request.headers.get("accept-language");
    return headers;
}

const mathedLang = match(language, locales, defaultLocale);

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${mathedLang}${search}`, request.url));
    }

    if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
        return NextResponse.redirect(new URL(`/${mathedLang}${pathname}${search}`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
       '/((?!_next|.*\\.(?:jpg|jpeg|png|webp|svg|ico|gif|css|js|woff2?|ttf|otf)).*)',
    ],
}