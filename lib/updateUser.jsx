import axios from "axios";
import { baseUrl } from "./baseUrl";

export async function updateUser(token, id, data) {
  // console.log("je fetch");
  const res = await axios.put(`${baseUrl}users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    return res.status;
  }
  return res.status;
}
