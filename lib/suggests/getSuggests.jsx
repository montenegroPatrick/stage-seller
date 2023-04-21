import axios from "axios";
import { baseUrl } from "../baseUrl";

export default async function getSuggest(token) {
  const response = await axios
    .get(`${baseUrl}users/suggest`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
  return response;
}
