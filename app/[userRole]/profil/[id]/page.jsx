import { notFound } from "next/navigation";
import getUser from "@/FetchFunctions/GET/getUser";
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

import CompanyProfile from "@/src/components/Profile/CompanyProfile";

import getUser from "@/FetchFunctions/GET/getUser";
import { cookies, headers } from "next/headers";
import ProfilView from "@/src/components/Profile/profilView";

async function Profil({ params }) {
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");
  console.log("jwt", jwt);
  const headerInstance = headers();
  const authorization = headerInstance.get("authorization");
  console.log("auth", authorization);
  const user = "bli";
  // const user = await getUser(params.id);
  //console.log(user);
  // if (!user) {
  //   notFound();
  // }
  // if (user.tuto) {
  //   return; //tuto
  // }
  //todo fetch user with id get on params
  return (
    <NavBarMarginContainer bg="bg-gradient-to-br from-blue-400 to-purple-800 bg-repeat bg-opacity-5" height="min-h-[calc(100vh-4rem)]">
      {params.userRole === "students" ? ( 
        <ProfilView student={user} />
      ) : (
        <CompanyProfile company="user" />
      )}
    </NavBarMarginContainer>
  );
}

export default Profil;
