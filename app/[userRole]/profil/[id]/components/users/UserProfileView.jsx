"use client";

import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import Button from "@/app/utilsComponents/Buttons/Button";
import UserProfilSettings from "./UserProfileSettings";
import UserProfile from "./UserProfile";

export default function UserProFileView({ user, role }) {
  const [isSettings, setIsSettings] = useState(false);
  return (
    <div className="text-black3 w-full p-5">
      <Button
        addClasses="flex flex-row items-center gap-2 mb-5"
        onClick={() => setIsSettings(!isSettings)}
      >
        <FiSettings />
        <p>{isSettings ? "profil" : "edit"}</p>
      </Button>
      {isSettings ? (
        <UserProfilSettings
          role={role}
          isSettings={isSettings}
          setIsSettings={setIsSettings}
          user={user}
        />
      ) : (
        <UserProfile user={user} role={role} />
      )}
    </div>
  );
}
