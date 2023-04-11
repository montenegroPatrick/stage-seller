/**
 * Sends a GET request to "url" for getting all Students or Companies
 *
 * @param {string} user  - student or company
 */
export default async function getAllUsers(users) {
  const res = await fetch(`http:/anis-farsi-server.eddi.cloud/api/${users}`);

  return res.json();
}
