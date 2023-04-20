import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function updateUser(token, id, data) {
  // console.log("je fetch");
  const response = await axios
    .put(`${baseUrl}users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);
  return response;
}
