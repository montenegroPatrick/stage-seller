import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function setLike(data, token) {
  const response = await axios
    .post(`${baseUrl}matches`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return response;
}
