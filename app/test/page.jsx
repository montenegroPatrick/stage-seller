import { cookies } from "next/headers";

export default function test() {
  const cookieStore = cookies();
  cookieStore.getAll().map((cookie) => console.log(cookie));
  return cookieStore.getAll().map((cookie) => (
    <div className="flex flex-col justify-between h-[100%]" key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
