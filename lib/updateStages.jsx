import axios from "axios";
import { baseUrl } from "./baseUrl";

export async function updateStages(token, data, id) {
  // console.log("je fetch");
  const res = await axios
    .put(`${baseUrl}stages/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.message);
  return res;
}
