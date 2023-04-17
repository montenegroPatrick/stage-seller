import { baseUrl } from "./baseUrl";

export async function updateUser(token, id, data) {
  // console.log("je fetch");
  const res = await fetch(`${baseUrl}users/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return res.status;
  }
  return res.status;
}
