import axios from "axios";
import { baseUrl } from "./baseUrl";

export async function getUser(token, id) {
  const response = await axios
    .get(`${baseUrl}users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 302) {
        return res.data;
      }
      return res.data;
    })
    .catch((err) => err.response.data);

  return response;
}
