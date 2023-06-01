import axios from "axios";
import { baseUrl } from "../baseUrl";
export default async function getAllUsers(token) {
  const response = await axios
    .get(`${baseUrl}users/type`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.data);
  return response;
}

//`http://franck-roger-server.eddi.cloud/api/users/type/${role}`
