//Componants
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import CardProfile from "@/app/[userRole]/lists/components/CardProfile";
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
      <div className="flex flex-col items-center mb-20 bg-white">
        <h2 className="bg-white font-chivo text-4xl sm:text-4xl md:text-5xl text-black text-center py-6 px-8">
          {role === "students"
            ? "Nos étudiants"
            : "Nos entreprises"}
        </h2>
        <div className="w-full max-w-[1240px] bg-black h-[2px]"/>
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
