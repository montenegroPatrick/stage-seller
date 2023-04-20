"use client";
import Skill from "./Skill";
import ButtonForm from "./ButtonForm";
import SettingButton from "./SettingButton";

import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { getSkills } from "@/lib/skills/getSkills";

export default function CompanySkills({ skills, submitForm }) {
  const token = Cookies.get("jwt");
  const [allSkills, setAllSkills] = useState(["React", "Php", "Python", "tailwind"]);
  const [settings, setSettings] = useState(false);
  const [userSkills, setUserSkills] = useState(skills);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // //Fetch list of all skills
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const listSkills = await getSkills(token);
  //     setAllSkills(listSkills);
  //   };
  //   fetchData();
  // }, []);

  //Push userSkills into selectedSkills for checked them into checkbox
  useEffect(() => {
    setSelectedSkills(skills);
  }, [skills]);

  const handleSelectSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      handleDeselectSkill(skill);
    }
  };

  const handleDeselectSkill = (skill) => {
    setSelectedSkills(
      selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center px-2 py-5 my-5 mx-auto relative">
      <h2 className="text-3xl 2xl:text-4xl text-center font-normal">
        Technologies
      </h2>
      <div className={`mt-5 w-full bg-white mx-auto rounded-lg flex flex-wrap justify-evenly py-4 px-2 gap-[6px] border border-black`}>
        {settings ? (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitForm({skills: [...selectedSkills]});
            }}
          >
            <ul className="flex flex-wrap justify-center">
              {allSkills.map((skill) => (
                <li key={skill}>
                  <label className="text-lg mx-auto px-4 text-paleKaki font-medium">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSelectSkill(skill)}
                    />
                    {skill}
                  </label>
                </li>
              ))}
            </ul>
            <ButtonForm />
          </form>
        ) : userSkills.length > 0 ? (
          userSkills.map((skill, index) => (
            <ul>
              <li>
                <Skill key={index} bgColor="bg-blueDark">
                  {skill}
                </Skill>
              </li>
            </ul>
          ))
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
