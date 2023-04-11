import { NextResponse } from "next/server";

export default function middleware(req) {
  let response = NextResponse.next();
  console.log("req", req);
  const token = req.cookies.get("jwt");
  token && req.headers.set("authorization", token);
  return response;
}
