import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function getLikeFromMe(token) {
  const response = await axios
    .get(`${baseUrl}users/matches/from`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
  console.log("from me", response);
  return response;
}
