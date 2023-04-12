"use client";

import { FiSettings } from "react-icons/fi";
import StudentProfilSettings from "./StudentProfileSettings";
import StudentProfile from "./StudentProfile";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilView({ user, id }) {
  const [isTheUserProfil, setIsTheUserProfil] = useState(false);
  const router = useRouter();
  // if (!user) {
  //   router.push("/");
  // }
  // if (user) {
  //   if (id === user.id) {
  //     setIsTheUserProfil(true);
  //   }
  // }
  const [isSettings, setIsSettings] = useState(false);
  console.log(isSettings);
  return (
    <div>
      {isTheUserProfil && (
        <button
          className=" flex flex-col p-3"
          onClick={() => setIsSettings(!isSettings)}
        >
          <FiSettings />
        </button>
      )}
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
