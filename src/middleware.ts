import { NextRequest, NextResponse } from "next/server";
import { middlewares } from "./utils/middlewares/config";

export async function middleware(request: NextRequest) {
  const nextResponse = NextResponse.next();

  const middlewareFunctions = middlewares.map((fn) => fn(request));
  const middlewareHeader = [];

  for (const customMiddleware of middlewareFunctions) {
    const result = await customMiddleware;

    if (!result?.ok) {
      return result;
    }
    middlewareHeader.push(result.headers);
  }

  const headers = middlewareHeader.find((header) => {
    const redirect = header.get("x-middleware-request-redirect");
    return !!redirect;
  });

  const path = headers?.get("x-middleware-request-redirect");
  if (path) {
    return NextResponse.redirect(new URL(path, request.url), {
      status: 307,
    });
  }

  return nextResponse;
}
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
