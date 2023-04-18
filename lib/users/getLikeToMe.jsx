import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function getLikeToMe(token) {
  const response = await axios
    .get(`${baseUrl}users/matches/to`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
  console.log("to me", response);
  return response;
}
