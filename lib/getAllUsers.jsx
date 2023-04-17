import axios from "axios";
import { baseUrl } from "./baseUrl";
export default async function getAllUsers(role, token) {
  console.log(role);
  const res = await axios
    .get(`${baseUrl}/users/type/${role}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
  return res;
}

//`http://franck-roger-server.eddi.cloud/api/users/type/${role}`
