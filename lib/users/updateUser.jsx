import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function updateUser(token, id, data) {
   console.log("je fetch", data);
  const response = await axios
    .put(`${baseUrl}users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {return res})
    .catch((err) => {return err.response});
}
