import axios from 

/**
 * Sends a POST request for log the user
 *
 * @param {string} mail - User mail
 * @param {string} password - User password
 * @returns {string}
 */
export default async function postUserLogin(mail, password) {
  
    const response = await fetch("url", {
    method: "POST",
    body: JSON.stringify({ mail, password }),
    cache: 'force-cache',
  });

    const tokenJwt = res.json({ token });
  
}
