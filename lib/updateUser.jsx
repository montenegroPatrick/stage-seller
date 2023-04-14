import { baseUrl } from "./baseUrl";

export async function updateUser(token, id, data) {
  const res = await fetch(`${baseUrl}users/${id}`, {
    method: "PATH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.log(res);
    undefined;
  }
  console.log(res.status, res);
  return res.json();
}
