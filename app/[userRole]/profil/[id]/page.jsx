import StudentProfile from "@/app/components/StudentProfile/StudentProfile";
import CompanyProfile from "@/app/components/CompanyProfile/CompanyProfile";
import { notFound } from "next/navigation";

import getUser from "@/FetchFunctions/GET/getUser";
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

async function Profil({ params }) {
  // //const user = await getUser(params.id);
  // console.log(user);
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
        <StudentProfile student="user" />
      ) : (
        <CompanyProfile company="user" />
      )}
    </NavBarMarginContainer>
  );
}

export default Profil;
