import axios from "axios";
import { baseUrl } from "../baseUrl";

export default async function getCv(token, id) {
  const response = await axios
    .post(
      `${baseUrl}users/${id}/download`,
      { type: "resume" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => err);
  return response;
}
