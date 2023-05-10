import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function getUser(token, id) {
  const response = await axios
    .get(`${baseUrl}users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);

  return response;
}
