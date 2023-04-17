import { baseUrl } from "./baseUrl";

export async function getUser(token, id) {
  const res = await fetch(`${baseUrl}users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) undefined;
  return res.json();
}
