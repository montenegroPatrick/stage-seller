import axios from "axios";
import { baseUrl } from "../baseUrl";

export default async function getPicture(token, id) {
  const response = await axios
    .post(
      `${baseUrl}users/${id}/download`,
      { type: "profile_photo" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => err);
  response;
}
