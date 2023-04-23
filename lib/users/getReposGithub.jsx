import axios from "axios";

export default function GetReposGithub(username) {
  const response = axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then((res) => res)
    .catch((err) => err);

  return response;
}
