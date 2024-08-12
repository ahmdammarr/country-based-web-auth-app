import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "ar", "hi"];

export const getLocale = (request: NextRequest) => {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
};

export const localeMiddleWare = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const isPathnameMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  const locale = getLocale(request);

  const header = new Headers();

  if (isPathnameMissingLocale) {
    header.set("redirect", `/${locale}/${pathname}`);

    return NextResponse.next({
      request: {
        headers: header,
      },
    });
  }
  return NextResponse.next();
};
