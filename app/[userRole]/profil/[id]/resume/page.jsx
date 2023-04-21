import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import { imageUrl } from "@/lib/imageUrl";
import { getUser } from "@/lib/users/getUser";
import { cookies } from "next/headers";

export default async function Resume({ params }) {
  const token = cookies().get("jwt");
  const user = getUser(token, params.id);
  return (
    <NavBarMarginContainer>
      <div className="h-screen w-80vh">
        <img src={`${imageUrl}${user.resume}`} />
      </div>
    </NavBarMarginContainer>
  );
}
