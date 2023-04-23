import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Button from "@/app/utilsComponents/Buttons/Button";
import { imageUrl } from "@/lib/imageUrl";
import { getUser } from "@/lib/users/getUser";
import { cookies } from "next/headers";
import Image from "next/image";
import ResumeImage from "./components/ResumeImage";

export default async function Resume({ params }) {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  const user = await getUser(token, params.id).then((res) => res);
  return (
   <ResumeImage user={user}/>
  );
}
