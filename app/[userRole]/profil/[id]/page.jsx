//Dependancies and hooks
import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//Fetch functions
import { getUser } from "@/lib/users/getUser";
import getAllUsers from "@/lib/users/getAllUsers";

//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
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

  // if (!params.id || !token) {
  //   redirect("/sign-in");
  // }
  // const userData = {
  //   id: 2,
  //   email: "younes@seller.com",
  //   type: "STUDENT",
  //   companyName: "Mon entreprise",
  //   siret: null,
  //   firstName: "Babi girl",
  //   lastName: "kechiche kechihce",
  //   address: "Front O'ffice main street",
  //   postCode: 78180,
  //   city: "Montigny-le-Bretonneux",
  //   isUserActive: true,
  //   showTuto: true,
  //   isProfileCompleted: false,
  //   profileImage: "",
  //   description:
  //     "Je suis dire, je suis soupir, plus rien ne m'inspire. Pourtant, rien qu'un brin de scintillement me ferait frémir. Y'a rien à dire, personne ne m'aime, on m'évite, on m'ignore. La faune m'embête, la flore me snobe, méprise mon sort. Je m'appelle Albert, le merle noir et gris. Je m'appelle Albert Pompourrie, Je m'appelle Albert, le merle maudit, le merle maudit.",
  //   resume: null,
  //   linkedin: null,
  //   github: "",
  //   lastConnected: null,
  //   skills: [
  //     { id: 1, type: "hard", name: "React" },
  //   ],
  //   stages: [
  //     {
  //       id: 1,
  //       description: "présente toi en quelque motsscscsc",
  //       startDate: "2023-04-30T00:00:00+02:00",
  //       duration: 5,
  //       location: "Corse, bastia",
  //       isRemoteFriendly: true,
  //       isTravelFriendly: false,
  //       skills: [
  //         { id: 5, type: "hard", name: "Python" },
  //         { id: 6, type: "hard", name: "MySQL" },
  //       ],
  //     },
  //   ],
  // };

   //const userProfilePage = await getUser(token, params.id);

   const userProfilePage = {
     id: 2,
     email: "younes@seller.com",
     type: "COMPANY",
     companyName: "Mon entreprise",
     siret: null,
     firstName: "Younesss youness",
     lastName: "kechiche kechihce",
     address: "Front O'ffice main street",
     postCode: 78180,
     city: "Montigny-le-Bretonneux",
     isUserActive: true,
     showTuto: true,
     isProfileCompleted: false,
     profileImage: "",
     description:
       "Je suis dire, je suis soupir, plus rien ne m'inspire. Pourtant, rien qu'un brin de scintillement me ferait frémir. Y'a rien à dire, personne ne m'aime, on m'évite, on m'ignore. La faune m'embête, la flore me snobe, méprise mon sort. Je m'appelle Albert, le merle noir et gris. Je m'appelle Albert Pompourrie, Je m'appelle Albert, le merle maudit, le merle maudit.",
     resume: null,
     linkedin: null,
     github: "",
     lastConnected: null,
     skills: [
       { id: 1, type: "hard", name: "React" },
       { id: 2, type: "hard", name: "Symfony" },
       { id: 3, type: "hard", name: "Next" },
       
     ],
     stages: [
       {
         id: 1,
         description: "présente toi en quelque motsscscsc",
         startDate: "2023-04-30T00:00:00+02:00",
         duration: 5,
         location: "Corse, bastia",
         isRemoteFriendly: true,
         isTravelFriendly: false,
         skills: [
           { id: 5, type: "hard", name: "Python" },
           { id: 6, type: "hard", name: "MySQL" },
         ],
       },
     ],
   };

   //if it's not the profil user return the profil who's clicked
   if (!userProfilePage) {
     redirect("/");
   }
   const role = userProfilePage.type === "STUDENT" ? "students" : "companies";
   if (params.userRole !== role) {
     const users = await getAllUsers(token);
     const otherUser = users && users.filter((user) => user.id === params.id)
     return (
       <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)] ">
         {params.userRole === "students" ? (
           <StudentProfile id={params.id} student={otherUser} />
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
      <Suspense fallback={<h1>chargement...</h1>}>
        {params.userRole === "students" ? (
          <StudentProfilView id={params.id} student={userProfilePage} />
        ) : (
          <CompanyProfileForUser
            connectedUserId={connectedUserId}
            userProfilePage={userProfilePage}
          />
        )}
      </Suspense>
    </NavBarMarginContainer>
  );
}
