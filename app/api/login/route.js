import { NextResponse } from "next/server";

export async function POST(req, res) {
  console.log("req login", req);
  let response = NextResponse.next();
  req.cookies.set("token", "token", { httpOnly: true });
  console.log("res login", response.cookies.getAll());
  //   fetch("http://anis-farsi-server.eddi.cloud/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Origin: "http://localhost:3000/",
  //     },
  //     body: JSON.stringify({
  //       data,
  //     }),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         if (res.status === "401") {
  //           console.log("401");
  //         }
  //         console.log("erreur", res.status);
  //         throw new Error(`error ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data.token);
  //       let response = NextResponse.next();
  //       // Set a cookie to hide the banner
  //       response.cookies.set("jwt", data.token);
  //       return response.json();
  //     })
  //     .catch((err) => console.log("error", err));
  return;
}
export async function GET(req) {
  let response = NextResponse.next();
  console.log("res login GET", req.cookies.getAll());
}
