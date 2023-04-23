import axios from "axios";

export default async function GetReposGithub(username) {
  const response = await axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((res) => res)
    .catch((err) => err);

  return response;
}
