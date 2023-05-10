// import { NextRequest, NextResponse } from "next/server";

export function middleware(){

}


// export async function middleware(request, res) {
//   const jwt = request.cookies.get("jwt")?.value;
//   const userId = request.cookies.get("user-Id")?.value;
//   const role = request.cookies.get("roleUser")?.value;
//   console.log(jwt);
//   console.log(userId);
//   console.log(role);

//   if (request.nextUrl.pathname.startsWith("/companies") && !jwt) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   }
//   if (request.nextUrl.pathname.startsWith("/students") && !jwt) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   }
//   if (
//     request.nextUrl.pathname.startsWith("/companies/lists") &&
//     role === "companies"
//   ) {
//     return NextResponse.redirect(
//       new URL(`/companies/profil/${userId}`, request.url)
//     );
//   }
//   if (
//     request.nextUrl.pathname.startsWith("/students/lists") &&
//     role === "students"
//   ) {
//     return NextResponse.redirect(
//       new URL(`/students/profil/${userId}`, request.url)
//     );
//   }
//   if (
//     request.nextUrl.pathname.startsWith("/companies/profil") &&
//     role === "students"
//   ) {
//     return NextResponse.redirect(
//       new URL(`/students/profil/${userId}`, request.url)
//     );
//   }
//   if (
//     request.nextUrl.pathname.startsWith("/students/profil") &&
//     role === "students"
//   ) {
//     return NextResponse.redirect(
//       new URL(`/students/profil/${userId}`, request.url)
//     );
//   }
// }


// export const config = {
//   matcher: ["/companies/:path*", "/students/:path*"],
// };
