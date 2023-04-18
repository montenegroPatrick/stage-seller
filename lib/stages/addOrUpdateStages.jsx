import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function addOrUpdateStages(token, data, student) {
  console.log(student);
  const response =
    student.stages.length !== 0
      ? await axios
          .put(
            `${baseUrl}stages/${student.stages.map((stage) => stage.id)}`,
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
