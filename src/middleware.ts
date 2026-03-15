import { NextRequest, NextResponse } from "next/server";

const locales = ["az", "en", "ru"];
const defaultLocale = "az";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) return NextResponse.next();

  // Redirect to default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
