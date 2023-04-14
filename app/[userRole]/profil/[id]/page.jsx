import { notFound } from "next/navigation";
//Components
import NavBarMarginContainer from "@/components/NavBarMarginContainer";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";
import ProfilView from "@/components/studentProfile/profilView";
import getAllUsers from "@/lib/getAllUsers";

import { getUser } from "@/lib/getUser";
import { cookies } from "next/headers";
export const dynamic = "auto";
export const dynamicParams = true;
export const fetchCache = "auto";
export const preferredRegion = "auto";

// .then((res) => {
//   if (!res.ok) {
//     if (res.status === "401") {
//       throw new Error("vous n'avez pas les droits d'acces");
//     }
//     //console.log("erreur", res.status);
//     throw new Error(`error ${res}`);
//   }
//   return res.json();
// })
// .then((data) => data)
// .catch((err) => {
//   throw new Error("error", err);
// });

async function Profil({ params }) {
  const cookieStore = cookies(); 
  // const id = cookieStore.get('user-id')?.value; 
  const token = cookieStore.get('jwt')?.value;
  const userData = getUser(token, params.id);
  const connectedUser = await userData
  //console.log('user page profil', user)

  if(params.userRole !== connectedUser.type){
    "on fetch les données du type inverse"
    const users = await getAllUsers(params.userRole, token)
    const otherUser = users.filter((user) => user.id === params.id)
  }
 // si on est l'user connecter on peut faire getUser sinon il faut un getProfilCompany fetch('/api/users/type/company') => !role.filter ((user)=> user.id === params.id)
  if(connectedUser.error){
    throw new Error(connectedUser.error)
  }

  if (!connectedUser) {
    console.log('no user je suis dans la page de profil ')
    throw new Error("vous n'avez pas accès")
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
