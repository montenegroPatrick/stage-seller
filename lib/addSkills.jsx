import { baseUrl } from "./baseUrl";

export async function addSkills(token, id, data) {
  // console.log("je fetch");
  const res = await fetch(`${baseUrl}users/${id}/skill`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    switch (res.status) {
      case "422":
        break;
      case "401":
        break;
      case "302":
        return res.json();
        break;
      case "500":
        return res;
        break;
      default:
        break;
    }
    throw new Error(`error ${res.status}`);
  }
  return res.json();
}
