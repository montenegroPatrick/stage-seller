import { NextResponse } from "next/server";

export default function middleware(req) {
  let response = NextResponse.next();
  response.headers.set("youhou", "je suis le token");
  console.log("middleware res", response.cookies);
  const token = req.cookies.get("jwt");
  token && req.headers.set("authorization", token);
  //   if (!token) {
  //     // Respond with JSON indicating an error message
  //     return new NextResponse(
  //       JSON.stringify({ success: false, message: "authentication failed" }),
  //       { status: 401, headers: { "content-type": "application/json" } }
  //     );
  //   }
  return response;
}
