import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function addOrUpdateStages(token, data, id = null) {
  const response = id
    ? await axios
        .put(
          `${baseUrl}stages/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => res)
        .catch((err) => err.message)
    : await axios
        .post(`${baseUrl}stages`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res)
        .catch((err) => err);
  return response;
}
