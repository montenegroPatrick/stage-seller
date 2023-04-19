'use client'
import Skills from "./Skill";
import SettingButton from "./SettingButton";
import {useState} from 'react';

export default function CompanyStage({ stages }) {
  const skills = ["Php", "Javascript", "React"];

  const [settings, setSettings] = useState(false)

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl p-5 mx-auto my-5 bg-white relative">
      <h2 className="text-2xl sm:text-3xl text-blackNext text-center font-baskerville underline">
        Profil recherché
      </h2>
      <article className="flex flex-col 2xl:flex-row mt-5 w-full border-2 border-black rounded-lg py-4 px-2">
       
          <ul className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <li>
            <Skills key={index} bgColor="bg-blueDark">
              {skill}
            </Skills>
            </li>
          ))}
          </ul>
        <div className="text-center font-jetbrains">
          <p className="font-md p-1 text-magenta">À partir du {stages.date}</p>
        </div>
      </article>
      
      <article>
      <h3 className="text-xl underline">Description du stage proposé</h3>
      </article>
      <div
        onClick={() => setSettings(!settings)}
        className="absolute top-0 right-0"
      >
        <SettingButton />
      </div>
    </div>
  );
}
