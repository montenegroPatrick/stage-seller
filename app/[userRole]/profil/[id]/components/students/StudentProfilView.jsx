"use client";

import { FiSettings } from "react-icons/fi";
import StudentProfilSettings from "./StudentProfileSettings";
import StudentProfile from "./StudentProfile";
import { useState } from "react";
import Button from "@/app/utilsComponents/Buttons/Button";

export default function StudentProfilView({ student, id }) {
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
        <StudentProfilSettings
          isSettings={isSettings}
          setIsSettings={setIsSettings}
          student={student}
        />
      ) : (
        <StudentProfile student={student} studentId={id} />
      )}
    </div>
  );
}
