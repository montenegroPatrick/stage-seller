import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function unLike(token, id) {
  const response = await axios
    .delete(`${baseUrl}matches/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response);
  console.log("unlike", response);
  return response;
}
