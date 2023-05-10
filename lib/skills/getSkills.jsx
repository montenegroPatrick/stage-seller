import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function getSkills(token) {
  const response = await axios
    .get(`${baseUrl}skills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
  return response;
}
