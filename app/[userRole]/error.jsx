"use client"; // Error components must be Client components

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getUser } from "@/lib/users/getUser";

export default function Error({ error, reset }) {
  const router = useRouter();
  //console.error(error);
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  const path = usePathname();
  const userId = Cookies.get("user-id");
  const token = Cookies.get("jwt");
  const userData = getUser(token, userId).then((res) => res);
  const role = userData.type === "STUDENT" ? "students" : "companies";
  return (
    <NavBarMarginContainer classes="h-[calc(100vh-4rem)] bg-white">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl py-20vh">{error.message}</h2>
        <button
          className="bg-red-700 py-3 px-5 rounded-full text-white mb-5"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Rafraîchir
        </button>

        {userId ? (
          <button
            className="bg-blue-700 py-3 px-5 rounded-full text-white"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push(path)
            }
          >
            Revenir sur la page de profil
          </button>
        ) : (
          <button
            className="bg-blue-700 py-3 px-5 rounded-full text-white"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push(`/${role}/sign-up`)
            }
          >
            Retour au formulaire
          </button>
        )}
      </div>
    </NavBarMarginContainer>
  );
}
