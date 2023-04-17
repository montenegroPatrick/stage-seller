"use client";

import { FiSettings } from "react-icons/fi";
import StudentProfilSettings from "./StudentProfileSettings";
import StudentProfile from "./StudentProfile";
import { useState } from "react";

export default function StudentProfilView({ student, id }) {
  const [isSettings, setIsSettings] = useState(false);

  return (
    <div className="text-black3">
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
          student={student}
        />
      ) : (
        <StudentProfile student={student} studentId={id} />
      )}
    </div>
  );
}
