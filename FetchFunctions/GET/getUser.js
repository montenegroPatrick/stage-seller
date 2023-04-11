import { cookies } from "next/headers";

export default async function getUser(id) {
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");
  console.log(jwt);
  const res = await fetch(`http:/anis-farsi-server.eddi.cloud/api/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000/",
      Authorization: `Bearer ${jwt}`,
    },
  });
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
