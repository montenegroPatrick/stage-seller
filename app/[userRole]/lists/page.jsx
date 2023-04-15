//Componants
import NavBarMarginContainer from "@/components/NavBarMarginContainer";
import CardProfile from "@/components/profils/StudentProfile/CardProfile";
//Dependancies
import { cookies } from "next/headers";
import Cookies from "js-cookie";
//Fetch function
import getAllUsers from "@/lib/getAllUsers";
import Page from "@/lib/getCookie";
import Error from "./error";

export default async function Lists({ params }) {
  const token = cookies().get("jwt")?.value;
  const role = params.userRole;
  const roleUserCardsToFetch =
    params.userRole === "companies" ? "students" : "company";
  roleUserCardsToFetch, token;

  const usersData = getAllUsers();
  const users = await usersData;

  return (
    <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)]">
      <div className="flex justify-center bg-white mb-10 border-b border-black">
        <h2 className="font-chivo text-4xl sm:text-4xl md:text-5xl text-blue-800 font-semi-bold text-center py-4 px-8">
          {role === "students"
            ? "Tous nos étudiants"
            : "Toutes nos entreprises"}
        </h2>
      </div>
      <div className="flex flex-wrap justify-around">
        {users &&
          users.map((user) => {
            return <CardProfile key={user.id} user={user} />;
          })}
      </div>
    </NavBarMarginContainer>
  );
}
