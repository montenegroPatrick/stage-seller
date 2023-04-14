import Cookies from "js-cookie";

export default function getCookie() {
  const token = Cookies.get("jwt");
  console.log("token dans focntion cookie", token);
  return;
}
