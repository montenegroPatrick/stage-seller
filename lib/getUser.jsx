import { baseUrl } from "./baseUrl";

export async function getUser(token, id) {
  const res = await fetch(`${baseUrl}users/${id}`, {
    next: { revalidate: false },
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    switch (res.status) {
      case 302:
        console.log(res.status);
        return res.json();
        break;

      default:
        break;
    }
  }
  return res;
}
