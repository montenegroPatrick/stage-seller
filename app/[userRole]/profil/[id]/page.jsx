import { notFound, redirect } from "next/navigation";
//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import CompanyProfile from "@/app/[userRole]/profil/[id]/components/companies/CompanyProfile";
import StudentProfilView from "@/app/[userRole]/profil/[id]/components/students/StudentProfilView";
import getAllUsers from "@/lib/getAllUsers";
import { getUser } from "@/lib/getUser";
import { cookies } from "next/headers";
import StudentProfile from "@/app/[userRole]/profil/[id]/components/students/StudentProfile";
import { baseUrl } from "@/lib/baseUrl";

export default async function Profil({ params }) {
  const cookieStore = cookies();

  const id = cookieStore.get("user-id")?.value;

 // const connectedUserId = cookieStore.get('user-id')?.value;

  const token = cookieStore.get("jwt")?.value;

  if (!id || !token) {
    redirect("/sign-in");
  }
  const res = await fetch(`${baseUrl}users/${id}`, {
    next: { revalidate: 0 },
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const userProfilePage = await res.json();

  console.log("user page profil", userProfilePage);
  const role = userProfilePage.type === "STUDENT" ? "students" : "companies";

  // if it's not the profil user return the profil who's clicked
  if (params.userRole !== role) {
    const users = await getAllUsers(params.userRole, token);
    console.log("tous les user sur la page profil ", users);
    const otherUser = users && users.filter((user) => user.id === params.id);

    return (
      <NavBarMarginContainer classes="bg-gradient-to-br from-blue-400 to-purple-800 bg-repeat bg-opacity-5 min-h-[calc(100vh-4rem)] ">
        {params.userRole === "students" ? (
          <StudentProfile id={params.id} student={otherUser} />
        ) : (
          <CompanyProfile connectedUserId={connectedUserId} {...otherUser} />
        )}
      </NavBarMarginContainer>
    );
  }

  // si on est l'user connecter on peut faire getUser sinon il faut un getProfilCompany fetch('/api/users/type/company') => !role.filter ((user)=> user.id === params.id)
  if (userProfilePage.error) {
    throw new Error(userProfilePage.error);
  }

  if (!userProfilePage) {
    console.log("no user je suis dans la page de profil ");
    throw new Error("vous n'avez pas accès");
  }

  return (
    <NavBarMarginContainer classes="max-w-[80vw] min-h-[calc(100vh-4rem)] mx-auto">
      {params.userRole === "students" ? (
        <StudentProfilView id={params.id} student={userProfilePage} />
      ) : (
        <CompanyProfile connectedUserId={connectedUserId} company={userProfilePage} />
      )}
    </NavBarMarginContainer>
  );
}
