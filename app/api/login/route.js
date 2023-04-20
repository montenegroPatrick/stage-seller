import Cookies from "js-cookie";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = req.json();
  const res = await fetch("http://franck-roger-server.eddi.cloud/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) return undefined;

  const data = await res.json();
  const token = data.token;

  return NextResponse({
    statusCode: 200,
    body: {
      message: "Authentication succeeded",
      data,
    },
    headers: {
      "Set-Cookie": `accessToken=${token}; HttpOnly; Max-Age=86400; Path=/`,
    },
  });
}
