//Dependancies and hooks

import { redirect } from "next/navigation";

//Fetch functions

//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

import getAllUsers from "@/lib/users/getAllUsers";
import { cookies } from "next/headers";

import { getUser } from "@/lib/users/getUser";

import StudentProfileForVisitor from "./components/students/studentProfileForVisitor";
import StudentProfilView from "@/app/[userRole]/profil/[id]/components/students/StudentProfilView";
import CompanyProfileForUser from "@/app/[userRole]/profil/[id]/components/companies/companyProfileForUser/CompanyProfileForUser";
import CompanyProfileForVisitor from "@/app/[userRole]/profil/[id]/components/companies/companyProfileForVisitor/CompanyProfileForVisitor";

export default async function Profil({ params }) {
  //Verification user
  const cookieStore = cookies();
  const roleUser = cookieStore.get("roleUser")?.value;
  const token = cookieStore.get("jwt")?.value;

  if (!params.id || !token) {
    redirect("/sign-in");
  }

  const userProfilePage = await getUser(token, params.id);

  //if it's not the profil user return the profil who's clicked

  if (!userProfilePage) {
    redirect("/");
  }
  // if we have a different role we must be a visitor
  if (roleUser !== params.userRole) {
    const users = await getAllUsers(token);
    const otherUser = users.find((user) => user.id === parseInt(params.id));

    return (
      <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)] ">
        {params.userRole === "students" ? (
          <StudentProfileForVisitor id={params.id} student={otherUser} />
        ) : (
          <CompanyProfileForVisitor
            connectedUserId={params.id}
            otherUser={otherUser}
          />
        )}
      </NavBarMarginContainer>
    );
  }

  // 1.we can't see the other profil with the same userRole, so if my userRole match with the role on url, i'm the profil user ! we are verifying the id on back-end (tokenId === userID)
  return (
    <NavBarMarginContainer classes="max-w-[95vw]  min-h-[calc(100vh-4rem)] mx-auto">
      <StudentProfilView id={params.id} student={userProfilePage} />
    </NavBarMarginContainer>
  );
}
{
  /* <NavBarMarginContainer classes="max-w-[95vw]  min-h-[calc(100vh-4rem)] mx-auto">
      {params.userRole === "students" ? (
        <StudentProfilView id={params.id} student={userProfilePage} />
      ) : (
        <CompanyProfileForUser
          connectedUserId={params.id}
          userProfilePage={userProfilePage}
        />
      )}
    </NavBarMarginContainer> */
}
