"use client";
//Components
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import CardProfile from "@/app/components/StudentProfile/CardProfile";

//Dependancies and hooks
import { usePathname } from "next/navigation";

export default function Lists({ params }) {
  //todo si currentUser est role alors afficher seulement !role
  //todo fetch user ici pour lui passer en paramètre à la carte
  //todo map sur user pour pouvoir créer une carte pour chaque user
  const role = params.userRole;

  return (
    <NavBarMarginContainer
      bg="bg-gradient-to-r from-teal-300 to-indigo-900"
      height="min-h-[calc(100vh-4rem)]"
    >
      <div className="flex justify-center">
        <h2 className="font-chivo text-5xl text-white font-semi-bold bg-black1 text-center py-4 px-8 rounded-full inline-block my-10">
          {role === "students"
            ? "Tous nos étudiants"
            : "Toutes nos entreprises"}
        </h2>
      </div>
      <div className="flex flex-wrap">
        <CardProfile />
        <CardProfile />
        <CardProfile />
        <CardProfile />
      </div>
    </NavBarMarginContainer>
  );
}
