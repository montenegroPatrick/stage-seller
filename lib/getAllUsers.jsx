import { baseUrl } from "./baseUrl"
export default async function getAllUsers(role, token) {
    const res = await fetch(`${baseUrl}users/type/${role}`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    if(!res.ok){ 
        throw new Error ('La requête a échouée')
    }

    return res.json()
}

//`http://franck-roger-server.eddi.cloud/api/users/type/${role}`