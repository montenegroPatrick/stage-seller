/**
 * Sends a GET request to "url" for getting all Students or Companies
 *
 * @param {string} user  - student or company
 */
export default async function getAllUsers(user) {
    const res = await fetch(`url${user}`)

    return  res.json()

}