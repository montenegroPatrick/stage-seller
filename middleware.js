import { NextRequest, NextResponse } from "next/server";

export async function middleware(request, res) {
  const cookie = request.cookies.get("jwt");
  // if (!cookie) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

export const config = {
  matcher: ["/companies/:path*/:path*", "/students/:path*/:path*"],
};
