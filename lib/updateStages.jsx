import { baseUrl } from "./baseUrl";

export async function updateStages(token, data, id) {
  // console.log("je fetch");
  const res = await fetch(`${baseUrl}stages/${id}`, {
    method: "PUT",
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
        return;
        break;
      case "500":
        return res;
        break;
      default:
        break;
    }
    throw new Error(`error ${res.status}`);
  }
  return res;
}
