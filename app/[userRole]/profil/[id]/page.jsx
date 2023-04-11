import StudentProfile from "@/src/components/Profile/StudentProfile";
import CompanyProfile from "@/src/components/Profile/CompanyProfile";
import { notFound } from "next/navigation";

import getUser from "@/FetchFunctions/GET/getUser";
import { cookies, headers } from "next/headers";

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
    <div>
      {params.userRole === "students" ? (
        <StudentProfile student={user} />
      ) : (
        <CompanyProfile company={user} />
      )}
    </div>
  );
}

export default Profil;
