import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function getUserMatches(token) {
  const response = await axios
    .get(`${baseUrl}users/matches/mutual`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);

  return response;
}
