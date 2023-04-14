import { cookies } from "next/headers"


export default function getToken() {
    const cookieStore = cookies();
    return cookieStore.get("jwt")?.value;
  }

