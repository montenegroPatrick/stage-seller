"use client";
import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ModalSettingsSkills from "./ModalSettingsSkills";
import { getSkills } from "@/lib/skills/getSkills";
import { usePathname } from "next/navigation";
import ModalSettingsSkillsStages from "./ModalSettingsSkillsStage";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

export default function Skills({
  classes,
  isSettings,
  setShowSettings,
  show,
  skills,
  stages,
  setInputStages,
}) {
  if (!skills) {
    return;
  }
  const token = Cookies.get("jwt");
  const [skillsList, setSkillsList] = useState([]);
  const getSkillsData = async () =>
    getSkills(token).then((skills) => setSkillsList(skills));
  //todo//
  useEffect(() => {
    getSkillsData();
  }, []);
  const skillsStage = skillsList.filter((skill) =>
    skills.map((skillStudent) => {
      console.log(skillStudent.id);
    })
  );
  return (
    <section className={classes}>
      <div className="flex flex-wrap gap-3 m-1">
        {skillsStage &&
          skillsStage.map((skill) => (
            <Avatar
              key={skill.id}
              variant="rounded"
              size="xxl"
              alt={skill.name}
              src={`https://img.shields.io/badge/-${skill.name}-black?style=for-the-badge&logo=${skill.name}&logoColor=61DAFB&color=white`}
              className="border-2 w-20 h-7 border-whiteSmoke hover:z-10"
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
              <p>{stages ? "STAGES-SKILLS" : "SKILLS"}</p>
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
