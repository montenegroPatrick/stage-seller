import { notFound } from "next/navigation";
//Components
import NavBarMarginContainer from "@/components/NavBarMarginContainer";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import ProfilView from "@/components/studentProfile/profilView";
import getAllUsers from "@/lib/getAllUsers";

import { getUser } from "@/lib/getUser";
import { cookies } from "next/headers";
// export const dynamic = "auto";
// export const dynamicParams = true;
// export const fetchCache = "auto";
// export const preferredRegion = "auto";

async function Profil({ params }) {
  const cookieStore = cookies();
  // const id = cookieStore.get('user-id')?.value;
  const token = cookieStore.get("jwt")?.value;
  if (!params.id) {
    return;
  }
  const userData = token && params.id && (await getUser(token, params.id));
  const connectedUser = await userData;

  console.log("user page profil", connectedUser);
  const role = connectedUser.companyName === null ? "companies" : "students";
  if (params.userRole !== role) {
    ("on fetch les données du type inverse");
    const users = await getAllUsers(params.userRole, token);
    console.log("tous les user sur la page profil ", users);
    //  const otherUser = users.filter((user) => user.id === params.id);
  }
  // si on est l'user connecter on peut faire getUser sinon il faut un getProfilCompany fetch('/api/users/type/company') => !role.filter ((user)=> user.id === params.id)
  if (connectedUser.error) {
    throw new Error(connectedUser.error);
  }

  if (!connectedUser) {
    console.log("no user je suis dans la page de profil ");
    throw new Error("vous n'avez pas accès");
  }

  return (
    <NavBarMarginContainer classes="bg-gradient-to-br from-blue-400 to-purple-800 bg-repeat bg-opacity-5 min-h-[calc(100vh-4rem)] ">
      {params.userRole === "students" ? (
        <ProfilView id={params.id} student={connectedUser} />
      ) : (
        <CompanyProfile company="user" />
      )}
    </NavBarMarginContainer>
  );
}

export default Profil;
