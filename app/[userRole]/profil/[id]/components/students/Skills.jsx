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
  student,
  isSettings,
  setShowSettings,
  show,
  skills,
  stages,
  setInputStages,
  setInput,
}) {
  // if (!skills) {
  //   return;
  // }
  console.log("skills on skills comp", skills);
  const token = Cookies.get("jwt");
  const [skillsList, setSkillsList] = useState([]);
  const [skillsStateStage, setSkillsStateStage] = useState(skills ?? []);
  const [userSkills, setUserSkills] = useState(skills ?? []);
  const getSkillsData = () =>
    getSkills(token).then((skills) => setSkillsList(skills));
  //todo//
  useEffect(() => {
    getSkillsData();
  }, [show, skillsStateStage, userSkills]);

  return (
    <section className={classes}>
      <div className="flex flex-wrap gap-3 m-1">
        {skillsStateStage && stages
          ? skillsStateStage.map((skill) =>
              skill.map((objSkill) => (
                <Avatar
                  key={objSkill.id}
                  variant="rounded"
                  alt={objSkill.name}
                  className="border-2 w-20 lg:w-20 h-5 border-whiteSmoke hover:z-10"
                  src={`https://img.shields.io/badge/-${objSkill.name}-black?style=for-the-badge&logo=${objSkill.name}&logoColor=61DAFB&color=white`}
                />
              ))
            )
          : userSkills &&
            userSkills.map((skill) => (
              <Avatar
                key={skill.id}
                variant="rounded"
                alt={skill.name}
                className="border-2 w-20 lg:w-20 h-5 border-whiteSmoke hover:z-10"
                src={`https://img.shields.io/badge/-${skill.name}-black?style=for-the-badge&logo=${skill.name}&logoColor=61DAFB&color=white`}
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
                stageSkills={skillsStateStage}
                setStageSkills={setSkillsStateStage}
                showSettings={show}
                skills={skills}
                setInputStages={setInputStages}
              />
            ) : (
              <ModalSettingsSkills
                stages={stages}
                showSettings={show}
                userSkills={userSkills}
                setUserSkills={setUserSkills}
                setInputUser={setInput}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
