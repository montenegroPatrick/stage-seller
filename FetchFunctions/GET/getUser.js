// import { cookies, headers } from "next/headers";
// import { notFound } from "next/navigation";

export default async function getUser(id) {
  // const cookieStore = cookies();
  // const jwt = cookieStore.get("jwt");
  // console.log(jwt);
  // const headerInstance = headers();
  // const authorization = headerInstance.get("authorization");
  // console.log("auth", authorization);
  // if (!jwt) {
  //   notFound();
  // }
  const res = await fetch(`http:/anis-farsi-server.eddi.cloud/api/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000/",
      // Authorization: `Bearer ${jwt}`,
    },
  });
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
