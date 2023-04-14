import { baseUrl } from "./baseUrl";

export async function getSkills(token) {
  const res = await fetch(`${baseUrl}skills`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) undefined;
  return res.json();
}
