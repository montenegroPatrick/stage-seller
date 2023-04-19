"use client";
import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ModalSettingsSkills from "./ModalSettingsSkills";
import { getSkills } from "@/lib/skills/getSkills";
import { usePathname } from "next/navigation";
import ModalSettingsSkillsStages from "./ModalSettingsSkillsStage";

export default function Skills({
  classes,
  isSettings,
  setShowSettings,
  show,
  skills,
  stages,
  setInputStages,
}) {
  return (
    <section className={classes}>
      <div className="flex gap-3 m-1">
        {skills &&
          skills.map((skill) => (
            <Avatar
              variant="rounded"
              alt="javascript"
              src={`https://img.shields.io/badge/-${skill}-black?style=for-the-badge&logo=${skill}&logoColor=61DAFB&color=ffffff`}
              className="border-2 w-7 h-7 border-whiteSmoke hover:z-10"
            />
          ))}
        {isSettings && (
          <>
            <div className="flex gap-2">
              <div
                onClick={() => setShowSettings(!show)}
                className="px-1 rounded-md overflow-hidden bg-gray-500 w-fit"
              >
                {" "}
                +{" "}
              </div>
              <p>SKILLS</p>
            </div>
            {stages ? (
              <ModalSettingsSkillsStages
                stages={stages}
                showSettings={show}
                skills={skills}
                setInputStages={setInputStages}
              />
            ) : (
              <ModalSettingsSkills
                stages={stages}
                showSettings={show}
                skills={skills}
                setInputStages={setInputStages}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
