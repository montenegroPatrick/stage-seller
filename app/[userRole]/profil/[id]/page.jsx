import { notFound } from "next/navigation";
import NavBarMarginContainer from "@/components/NavBarMarginContainer";
import CompanyProfile from "@/components/CompanyProfile/CompanyProfile";

import ProfilView from "@/components/studentProfile/profilView";

import { baseUrl, getToken } from "@/app/layout";

export const dynamic = "auto";
export const dynamicParams = true;
export const fetchCache = "auto";
export const preferredRegion = "auto";

export async function getUser(id) {
  if (!getToken()) {
    console.log("token not found");
  }
  const token = getToken();
  const user = await fetch(`${baseUrl}users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user.json();
}
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
  const user = await getUser(params.id);

  console.log("user", user);

  if (!user) {
    notFound();
  }
  //todo fetch user with id get on params
  return (
    <NavBarMarginContainer classes="bg-gradient-to-br from-blue-400 to-purple-800 bg-repeat bg-opacity-5 min-h-[calc(100vh-4rem)] ">
      {params.userRole === "students" ? (
        <ProfilView id={params.id} student={user} />
      ) : (
        <CompanyProfile company="user" />
      )}
    </NavBarMarginContainer>
  );
}

export default Profil;
