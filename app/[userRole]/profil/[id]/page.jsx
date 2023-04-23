//Dependancies and hooks
import { Suspense } from "react";

import { redirect } from "next/navigation";

//Fetch functions

//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

import getAllUsers from "@/lib/users/getAllUsers";
import { cookies } from "next/headers";

import { getUser } from "@/lib/users/getUser";

import StudentProfileForVisitor from "./components/students/studentProfileForVisitor";

import StudentProfile from "@/app/[userRole]/profil/[id]/components/students/StudentProfile";
import StudentProfilView from "@/app/[userRole]/profil/[id]/components/students/StudentProfilView";
import CompanyProfileForUser from "@/app/[userRole]/profil/[id]/components/companies/CompanyProfileForUser";
import CompanyProfileForVisitor from "@/app/[userRole]/profil/[id]/components/companies/CompanyProfileForVisitor";

export default async function Profil({ params }) {
  //Verification user
  const cookieStore = cookies();
  const id = cookieStore.get("user-id")?.value;
  const connectedUserId = cookieStore.get("user-id")?.value;
  const token = cookieStore.get("jwt")?.value;

  if (!params.id || !token) {
    redirect("/sign-in");
  }

  const userProfilePage = await getUser(token, params.id);

  //if it's not the profil user return the profil who's clicked

  if (!userProfilePage) {
    redirect("/");
  }

  const role = userProfilePage.type === "STUDENT" ? "students" : "companies";
  if (role && params.userRole !== role) {
    const users = await getAllUsers(token);
    const otherUser = users && users.filter((user) => user.id === params.id);

    return (
      <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)] ">
        {params.userRole === "students" ? (
          <StudentProfileForVisitor id={params.id} student={otherUser} />
        ) : (
          <CompanyProfileForVisitor
            connectedUserId={connectedUserId}
            otherUser={otherUser}
          />
        )}
      </NavBarMarginContainer>
    );
  }

  //si on est l'user connecter on peut faire getUser sinon il faut un getProfilCompany fetch('/api/users/type/company') => !role.filter ((user)=> user.id === params.id)
  return (
    <NavBarMarginContainer classes="max-w-[95vw] min-h-[calc(100vh-4rem)] mx-auto">
      {params.userRole === "students" ? (
        <StudentProfilView id={params.id} student={userProfilePage} />
      ) : (
        <CompanyProfileForUser
          connectedUserId={connectedUserId}
          userProfilePage={userProfilePage}
        />
      )}
    </NavBarMarginContainer>
  );
}
