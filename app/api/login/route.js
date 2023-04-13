import Cookies from "js-cookie";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  fetch("http://franck-roger-server.eddi.cloud/api/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === "401") {
          console.log("401");
        }
        console.log("erreur", res.status);
        throw new Error(`error ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      //console.log(data);
      req.cookies.set("jwt", `${data.token}`);
      const instance = headers();

      //   let response = NextResponse.next();
      //   // Set a cookie to hide the banner
      //   response.cookies.set("jwt", data.token);
    })
    .catch((err) => console.log("error", err));
}

export async function GET(req) {
  const cookiesStore = cookies();
  const coookies = cookiesStore.getAll();
}
