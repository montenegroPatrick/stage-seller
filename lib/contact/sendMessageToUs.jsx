import axios from "axios";
import { baseUrl } from "../baseUrl";

export default async function SendMessageToUs(token, body) {
  const response = await axios
    .post(`${baseUrl}mail`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
  return response;
}
