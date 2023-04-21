import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function deleteLike(data, token, id) {
  const response = await axios
    .delete(`${baseUrl}matches/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return response;
}
