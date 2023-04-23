import axios from "axios";
import { baseUrl } from "../baseUrl";

export async function updateOrAddWithId(token, data, id = null) {
  console.log(data)
  try {
    const response = id
      ? await axios.put(`${baseUrl}stages/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : await axios.post(`${baseUrl}stages`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

    // Retourne seulement les données JSON de la réponse en cas de succès
    return response.data;
  } catch (error) {
    // Traite les erreurs ici, par exemple :
    console.error("Une erreur est survenue lors de l'envoi de la requête", error);

    // Retourne une erreur personnalisée
    return { error: "Une erreur est survenue lors de l'envoi de la requête" };
  }
}
