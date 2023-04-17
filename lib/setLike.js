import axios from "axios";
import { baseUrl } from "./baseUrl";
export default async function setLike(data, token) {
  const res = await axios
    .post(`${baseUrl}matches`, data, {
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000/",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
}
