import Cookies from "js-cookie";
import { notFound } from "next/navigation";
/**
 * Sends a POST request to register a user and sets JWT cookie on successful response.
 *
 * @param {Object} data - The user registration data to be sent in the request body.
 * @returns {Promise<Object>} A Promise that resolves with the server response object or rejects with an error object.
 */
export const PostSignUp = async (data) => {
  try {
    const res = await fetch(
      "http://anis-farsi-server.eddi.cloud/api/register",
      {
        headers: {
          "content-type": "application/json",
          Origin: "http://localhost:3000/",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) {
      throw res;
    } else if (res.status === 404) {
      notFound();
    } else {
      const response = await res.json();
      const { token } = response;

      Cookies.set("jwt", token, { httpOnly: true });
      return response;
    }
  } catch (error) {
    return error;
  }
};
