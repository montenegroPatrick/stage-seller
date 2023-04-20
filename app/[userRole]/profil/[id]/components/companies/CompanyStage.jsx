"use client";
import Skills from "./Skill";
import SettingButton from "./SettingButton";
import { useState } from "react";

export default function CompanyStage({ stages }) {
  const userSkills = [
    "Php",
    "Javascript",
    "React",
    "Php",
    "Javascript",
    "React",
  ];

  const { skills, description, start_date, location, is_remote_friendly, duration } =
    stages;

  const [settings, setSettings] = useState(false);

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl px-2 py-5 mx-auto my-5 bg-white relative">
      <h2 className="text-3xl 2xl:text-4xl text-blackNext text-center font-normal">
        Profil recherché
      </h2>

      <section className="mt-5 w-full border border-black rounded-lg py-4 px-2">
        <div className="flex flex-wrap justify-center">
          <ul className="flex flex-wrap w-full justify-center gap-2">
            {userSkills.map((skill, index) => (
              <li>
                <Skills key={index}>
                  {skill}
                </Skills>
              </li>
            ))}
          </ul>
        </div>
        <article className="flex flex-col items-center">
          <h3 className="text-xl underline mt-3 text-magenta text-center">
            Description du stage proposé
          </h3>
          <p className="mt-3 text-lg">{description}Ceci est ma description</p>
        </article>
        <article className="flex flex-col items-center">
          <h3 className="text-xl underline mt-3 text-magenta text-center">
            Localisation
          </h3>
          <p className="mt-3 text-lg">{location}Paris</p>
        </article>
        <article className="flex flex-col items-center">
          <h3 className="text-xl underline mt-3 text-magenta text-center">
            Remote friendly
          </h3>
          <p className="text-lg">{is_remote_friendly ? "Oui" : "Non"}</p>
        </article>
        <div className="text-center">
          <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">À partir du 24 mars{start_date}</p>
          <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">Pour une durée de 2 mois{duration}</p>
        </div>
      </section>
      <div
        onClick={() => setSettings(!settings)}
        className="absolute top-0 right-0"
      >
        <SettingButton />
      </div>
    </div>
  );
}
