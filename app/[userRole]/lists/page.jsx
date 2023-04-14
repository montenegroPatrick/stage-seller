//Componants
import NavBarMarginContainer from "@/components/NavBarMarginContainer";
import CardProfile from "@/components/StudentProfile/CardProfile";
//Dependancies
import { cookies } from "next/headers";
import Cookies from "js-cookie";
//Fetch function
import getAllUsers from "@/lib/getAllUsers";
import Page from "@/lib/getCookie";

export default async function Lists({ params }) {
  const token = cookies().get("jwt")?.value;
  const role = params.userRole;
  const roleUserCardsToFetch =
    params.userRole === "companies" ? "students" : "company";

  const usersData = getAllUsers(roleUserCardsToFetch, token);
  const users = await usersData;
  console.log("usersList page=list", users);
  if (users.error) {
    throw new Error(users.error);
  }

  return (
    <NavBarMarginContainer classes="bg-gradient-to-r from-teal-300 to-indigo-900 min-h-[calc(100vh-4rem)]">
      <div className="flex justify-center">
        <h2 className="font-chivo text-5xl text-white font-semi-bold bg-black1 text-center py-4 px-8 rounded-full inline-block my-10">
          {role === "students"
            ? "Tous nos étudiants"
            : "Toutes nos entreprises"}
        </h2>
      </div>
      <div className="flex flex-wrap">
        {users &&
          users.map((user) => {
            return <CardProfile key={user.id} user={user} />;
          })}
      </div>
    </NavBarMarginContainer>
  );
}
