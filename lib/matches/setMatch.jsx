import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function setMatch(token, matchId) {
  const response = await axios
    .put(
      `${baseUrl}matches/${matchId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return response;
}
