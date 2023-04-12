"use client";

import { FiSettings } from "react-icons/fi";
import StudentProfilSettings from "./StudentProfileSettings";
import StudentProfile from "./StudentProfile";
import { useState } from "react";

export default function ProfilView() {
  const [isSettings, setIsSettings] = useState(false);
  console.log(isSettings);
  return (
    <div>
      <button
        className=" flex flex-col p-3"
        onClick={() => setIsSettings(!isSettings)}
      >
        <FiSettings />
      </button>
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
