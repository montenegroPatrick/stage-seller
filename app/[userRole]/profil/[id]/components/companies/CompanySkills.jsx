'use state'
import Skill from "./Skill";
import SettingButton from "./SettingButton";
import {useState} from 'react';

export default function CompanySkills({ skills }) {
  const [settings, setSettings] = useState(false)



  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center p-5 my-5 mx-auto relative">
      <SettingButton top='0' right='0'/>
      <h2 className="text-2xl sm:text-3xl text-center font-baskerville underline">
        Skills de l'entreprise
      </h2>
      <div className="mt-5 w-full bg-white mx-auto rounded-lg flex flex-wrap justify-evenly py-4 px-2 gap-[6px] border-2 border-black">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <Skill key={index} bgColor="bg-blueDark">
              {skill}
            </Skill>
          ))
        ) : (
          <p>Pas de skills renseignés</p>
        )}
      </div>
    </div>
  );
}
