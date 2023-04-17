import { baseUrl } from "./baseUrl";

export async function getUser(token, id) {
  const response = await fetch(`${baseUrl}users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);

  return response;
}
