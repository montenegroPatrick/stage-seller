import Cookies from "js-cookie";

export default function getCookie() {
  const token = Cookies.get("jwt");

  return;
}
