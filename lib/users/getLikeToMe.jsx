import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function getLikeToMe(token) {
  const response = await axios
    .get(`${baseUrl}users/matches/to`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  return response;
}
