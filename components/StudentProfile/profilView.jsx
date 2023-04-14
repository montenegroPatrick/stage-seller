"use client";

import { FiSettings } from "react-icons/fi";
import StudentProfilSettings from "./StudentProfileSettings";
import StudentProfile from "./StudentProfile";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getCookie from "@/FetchFunctions/getCookies";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { QueryCache } from "@tanstack/react-query";

export default function ProfilView({ user, id }) {
  const [isTheUserProfil, setIsTheUserProfil] = useState(false);
  const router = useRouter();
  const token = getCookie();
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: (data, error) => {
      console.log(data, error);
    },
  });

  const query = queryCache.find(["user"]);
  console.log(query);
  // console.log(user);
  // if (!user) {
  //   router.push("/");
  // }
  // if (user) {
  //   if (id === user.id) {
  //     setIsTheUserProfil(true);
  //   }
  // }
  const [isSettings, setIsSettings] = useState(false);

  return (
    <div className="text-whiteSmoke">
      {/* {isTheUserProfil && ( */}
      <button
        className=" flex flex-col p-3"
        onClick={() => setIsSettings(!isSettings)}
      >
        <FiSettings />
      </button>
      {/* )} */}
      {isSettings ? (
        <StudentProfilSettings
          isSettings={isSettings}
          setIsSettings={setIsSettings}
        />
      ) : (
        <StudentProfile />
      )}
    </div>
  );
}
