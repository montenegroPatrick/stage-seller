"use client"; // Error components must be Client components

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getUser } from "@/lib/users/getUser";
import Button from "../../utilsComponents/Buttons/Button";

export default function Error({ error, reset }) {
  const router = useRouter();
  return (
    <NavBarMarginContainer classes="h-[calc(100vh-4rem)] bg-white">
      <aside className="h-screen w-screen flex flex-col text-sm items-center lg:text-xl gap-10 p-5 lg:p-28 m-5 text-justify">
        <h1>
          Nous sommes navré nous n'avons pas d'entreprises à vous proposer pour
          le moment
        </h1>
        <p>veuillez réessayer plus tard</p>
        <img
          className="w-30vh h-30vh"
          src="https://img.freepik.com/vecteurs-premium/homme-sous-loupe-concept-recherche-personnes-postes-vacants-ressources-humaines-vecteur_174639-2013.jpg"
        />
        <Button onClick={() => router.back()}>back</Button>
      </aside>
    </NavBarMarginContainer>
  );
}
