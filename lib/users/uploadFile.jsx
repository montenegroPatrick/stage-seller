import axios from "axios";
import { baseUrl } from "../baseUrl";

export default async function uploadFile(token, id, data) {
  const response = await axios
    .post(`${baseUrl}users/${id}/upload`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
  return response;
}
