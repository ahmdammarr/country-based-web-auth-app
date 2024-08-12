import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { Urls } from "../constants/urls";
import { getLocale } from "./localeMiddleware";

export const authMiddleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const token = await getToken({ req: request });
  const isAuthRoute = pathname.includes("/auth");
  const locale = getLocale(request);
  const header = new Headers();

  if (!token && !isAuthRoute) {
    header.set("redirect", `/${locale}/${Urls.login}`);
    return NextResponse.next({
      request: {
        headers: header,
      },
    });
  }

  if (token && isAuthRoute) {
    header.set("redirect", `/${locale}/`);
    return NextResponse.next({
      request: {
        headers: header,
      },
    });
  }

  return NextResponse.next();
};
