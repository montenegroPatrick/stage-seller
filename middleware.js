import { NextRequest, NextResponse } from "next/server";

export async function middleware(request, res) {
  if (request.nextUrl.pathname.startsWith("/api/login")) {
    //console.log("midd", response.cookies);
    //   if (!token) {
    //     // Respond with JSON indicating an error message
    //     return new NextResponse(
    //       JSON.stringify({ success: false, message: "authentication failed" }),
    //       { status: 401, headers: { "content-type": "application/json" } }
    //     );
  }
  const coo = request.cookies.get("jwt");
  console.log("cookie", coo);
}
