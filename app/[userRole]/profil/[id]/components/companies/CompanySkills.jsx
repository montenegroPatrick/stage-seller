"use client";
import Skill from "./Skill";
import ButtonForm from "./ButtonForm";
import SettingButton from "./SettingButton";
import { useState, useEffect } from "react";
import { getSkills } from "@/lib/skills/getSkills";

export default function CompanySkills({ skills, submitForm, allSkills, setMessage }) {
  const [settings, setSettings] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(skills);


  useEffect(() => {
    setMessage("");
  }, [settings]);

  //Recip skill and add or delete of the state
  const handleSelectSkill = (skillId) => {
    if (!selectedSkills.some((selectedSkill) => selectedSkill.id === skillId)) {
      const skillToAdd = allSkills.filter((skill) => skill.id === skillId);
      setSelectedSkills([...selectedSkills, ...skillToAdd]);
    } else {
      const newSelectedSkills = selectedSkills.filter(
        (selectedSkill) => selectedSkill.id !== skillId
      );
      setSelectedSkills([...newSelectedSkills]);
    }
  };
  /*  ************************************ */
  console.log("allSkills", allSkills);
  console.log(selectedSkills);
  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center px-2 py-5 my-5 mx-auto relative">
      <h2 className="text-2xl 2xl:text-3xl text-center">Technologies</h2>
      <div
        className={`mt-5 w-full bg-white mx-auto rounded-lg flex flex-wrap justify-evenly py-4 px-2 gap-[6px] border border-black`}
      >
        {settings ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitForm({ skills: [...selectedSkills] })
              setSettings(!settings);
            }}
          >
            <ul className="flex flex-wrap justify-center">
              {allSkills.map((skill) => (
                <li key={skill.id} className="p-2">
                  <label className="text-lg mx-auto px-4 text-paleKaki font-medium">
                    <input
                      type="checkbox"
                      value={skill.id}
                      checked={selectedSkills.some(
                        (selectedSkill) => selectedSkill.id === skill.id
                      )}
                      onChange={() => handleSelectSkill(skill.id)}
                    />
                    {skill.name}
                  </label>
                </li>
              ))}
            </ul>
            <ButtonForm />
          </form>
        ) : selectedSkills.length > 0 ? (
          <ul className="flex flex-wrap justify-center">
            {selectedSkills.map((skill) => (
              <li key={skill.id} className="p-2">
                <Skill>{skill.name}</Skill>
              </li>
            ))}
          </ul>
        ) : (
          <p>Pas de skills renseignés</p>
        )}
      </div>
      <div
        onClick={() => setSettings(!settings)}
        className="absolute top-0 right-0"
      >
        <SettingButton />
      </div>
    </div>
  );
}
