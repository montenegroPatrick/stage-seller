import axios from "axios";
import { baseUrl } from "./baseUrl";

export async function addSkills(token, id, data) {
  // console.log("je fetch");
  const res = await axios
    .post(`${baseUrl}users/${id}/skill`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
}
