import axios from "axios";
import { baseUrl } from "./baseUrl";

export async function removeSkills(token, id, data) {
  // console.log("je fetch");
  const res = await axios.delete(`${baseUrl}users/${id}/skill`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
