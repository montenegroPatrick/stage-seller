import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function removeSkills(token, id, data) {
  const response = await axios
    .delete(`${baseUrl}users/${id}/skill`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
  return response;
}
