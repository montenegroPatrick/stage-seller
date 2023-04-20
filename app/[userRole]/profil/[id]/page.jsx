import { redirect } from "next/navigation";
//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import CompanyProfileForUser from "@/app/[userRole]/profil/[id]/components/companies/CompanyProfileForUser";
import CompanyProfileForVisitor from "@/app/[userRole]/profil/[id]/components/companies/CompanyProfileForUser";
import StudentProfilView from "@/app/[userRole]/profil/[id]/components/students/StudentProfilView";
import getAllUsers from "@/lib/users/getAllUsers";
import { cookies } from "next/headers";
import StudentProfile from "@/app/[userRole]/profil/[id]/components/students/StudentProfile";
import { getUser } from "@/lib/users/getUser";

export default async function Profil({ params }) {
  //Verification user
  const cookieStore = cookies();
  const id = cookieStore.get("user-id")?.value;
  const connectedUserId = cookieStore.get("user-id")?.value;
  const token = cookieStore.get("jwt")?.value;
  
  //zadujpaizufjaz
  //  if (!id || !token) {
  //    redirect("/sign-in");
  //  }

  //const userProfilePage = await getUser(token, params.id);

  const userProfilePage = {
    id: 2,
    email: "younes@seller.com",
    type: "STUDENT",
    companyName: 'la belle entreprise',
    siret: '344033',
    firstName: "Younes",
    lastName: "Kechiche",
    address: "Front O'ffice main street",
    postCode: 78180,
    city: "Montigny-le-Bretonneux",
    isUserActive: true,
    showTuto: true,
    isProfileCompleted: false,
    profileImage: null,
    description: "sqd",
    resume: null,
    linkedin: null,
    github: null,
    lastConnected: null,
    skills: [],
    stages: [{
      id: 2,
      description: 'Ma description',
      location: 'paris',
      start_date: '20/04/2023',
      is_remote_friendly: true,
      duration: '3 mois',
      skills: ['Angular', 'Assembleur', 'Swift', 'Flutter']
    }],
  };

  const otherUser = {
    id: 3,
    email: "younes@seller.com",
    type: "COMPANY",
    companyName: 'la belle entreprise',
    siret: null,
    firstName: null,
    lastName: null,
    address: "Front O'ffice main street",
    postCode: 78180,
    city: "Montigny-le-Bretonneux",
    isUserActive: true,
    showTuto: true,
    isProfileCompleted: false,
    profileImage: null,
    description: "sqd",
    resume: null,
    linkedin: null,
    github: null,
    lastConnected: null,
    skills: [],
    stages: [],
  };
   console.log(
     "user page profil <oooooooOOoOOOoOoOo></oooooooOOoOOOoOoOo>",
     userProfilePage
   );

  //if it's not the profil user return the profil who's clicked
  if (!userProfilePage) {
    console.log("no user je suis dans la page de profil ");
    redirect("/");
  }
// const role = params.userRole
//   //const role = userProfilePage.type === "STUDENT" ? "students" : "companies";
//   if (role && params.userRole !== role) {
//     // const users = await getAllUsers(params.userRole, token);
//     // const otherUser = users && users.filter((user) => user.id === params.id);

//     return (
//       <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)] ">
//         {params.userRole === "students" ? (
//           <StudentProfile id={params.id} student={otherUser} />
//         ) : (
//           <CompanyProfileForVisitor
//             connectedUserId={connectedUserId}
//             otherUser={otherUser}
//           />
//         )}
//       </NavBarMarginContainer>
//     );
//   }
  
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
