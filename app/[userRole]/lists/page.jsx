//Componants
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import CardProfile from "@/app/[userRole]/lists/components/CardProfile";
//Dependancies
import { cookies } from "next/headers";
//Fetch function
import getAllUsers from "@/lib/users/getAllUsers";
export const cache = "no-store";
export default async function Lists({ params }) {
  const token = cookies().get("jwt")?.value;
  const role = params.userRole;

  const users = await getAllUsers(token);
  if (!users) {
    throw new Error("users not found");
  }
  return (
    <NavBarMarginContainer classes="min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center mb-20 bg-white scrolling-animation">
        <h2 className="bg-white text-4xl sm:text-4xl md:text-5xl text-black text-center py-6 px-8">
          {role === "students" ? "Nos étudiants" : "Nos entreprises"}
        </h2>
        <div className="w-full max-w-[80vw] bg-black h-[1px]" />
      </div>
      <div className="flex flex-col gap-5 items-center justify-around">
        {users.map((user) => {
          return <CardProfile key={user.id} user={user} />;
        })}
      </div>
    </NavBarMarginContainer>
  );
}
