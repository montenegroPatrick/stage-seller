"use client";
import Skills from "./Skill";
import { useEffect, useState } from "react";
import ButtonForm from "./ButtonForm";
import SettingButton from "./SettingButton";
import { updateStages } from "@/lib/stages/addOrUpdateStages";

export default function CompanyStage({ stages, setMessage }) {
  console.log(stages);
  if(stages.length > 1){
    const [stage] = stages;
    const {
      id,
      description,
      start_date,
      location,
      is_remote_friendly,
      duration,
      skills,
    } = stage;
  }
  

  const [settings, setSettings] = useState(false);
  const [stageSkills, setStageSkills] = useState(skills);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [stageLocation, setStageLocation] = useState(location);
  const [stageDuration, setStageDuration] = useState(duration);
  const [stageStartDate, setStageStartDate] = useState(start_date);
  const [stageRemote, setStageRemote] = useState(is_remote_friendly);
  const [stageDescription, setStageDescription] = useState(description);

  useEffect(() => {
    setMessage("");
  }, [settings]);

  const [allSkills, setAllSkills] = useState([
    "React",
    "Php",
    "Python",
    "tailwind",
  ]);

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

  const handleSubmitForm = async () => {
    setMessage("")
    const response = await updateStages({
      id,
      description: stageDescription,
      start_date: stageStartDate,
      location: stageLocation,
      is_remote_friendly: stageRemote,
      duration: stageDuration,
      skills: stageSkills,
    });
    if (response.ok) {
      setMessage("Modifications validées");
    } else {
      setMessage("Erreur lors de la modification");
    }
  };

  if (settings) {
    return (
      <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl px-2 py-5 mx-auto my-5 bg-white relative">
        <h2 className="text-2xl 2xl:text-3xl text-black text-center ">
          Profil recherché
        </h2>
        <form
          className="mt-5 w-full border border-black rounded-lg py-4 px-2"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmitForm();
            setSettings(!settings);
          }}
        >
          <div className="mb-3 w-[80%] mx-auto">
            <p className="mt-3 italic underline text-sm">
              Skills requis pour le stage
            </p>
            <ul className="flex flex-wrap justify-center">
              {allSkills.map((skill) => (
                <li key={skill}>
                  <label className="text-md mx-auto px-4 text-paleKaki font-medium">
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
            <p className="mt-3 italic underline text-sm">
              Description du stage
            </p>
            <textarea
              type="text"
              value={stageDescription}
              onChange={(e) => setStageDescription(e.target.value)}
              placeholder="Description du stage"
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-lg border border-slate-300 outline-none focus:outline-none focus:ring w-full"
            />
            <p className="mt-3 italic underline text-sm">Lieu du stage</p>
            <input
              value={stageLocation}
              onChange={(e) => setStageLocation(e.target.value)}
              type="text"
              placeholder="Lieu du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
            />
            <div>
              <p className="mt-3 italic underline text-sm">
                Possibilité de remote
              </p>
              <div className="flex justify-around">
                <label>
                  <input
                    type="radio"
                    value={true}
                    checked={stageRemote === true}
                    onChange={(e) => setStageRemote(e.target.value)}
                  />
                  Oui
                </label>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={stageRemote === false}
                    onChange={(e) => setStageRemote(e.target.value)}
                  />
                  Non
                </label>
              </div>
            </div>

            <p className="mt-3 italic underline text-sm">Début du stage</p>
            <input
              value={stageStartDate}
              onChange={(e) => setStageStartDate(e.target.value)}
              type="date"
              placeholder={stageStartDate}
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
            />
            <p className="mt-3 italic underline text-sm">Durée du stage</p>
            <input
              value={stageDuration}
              onChange={(e) => setStageDuration(e.target.value)}
              type="text"
              placeholder="Durée du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
            />
            <ButtonForm />
          </div>
        </form>
        <div
          onClick={() => setSettings(!settings)}
          className="absolute top-0 right-0"
        >
          <SettingButton />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl px-2 py-5 mx-auto my-5 bg-white relative">
      <h2 className="text-2xl 2xl:text-3xl text-black text-center">
        Profil recherché
      </h2>
      <section className="mt-5 w-full border border-black rounded-lg py-4 px-2">
        <div className="flex flex-wrap justify-center">
          <ul className="flex flex-wrap w-full justify-center gap-2">
            {stageSkills.map((skill, index) => (
              <li>
                <Skills key={index}>{skill}</Skills>
              </li>
            ))}
          </ul>
        </div>
        <article className="flex flex-col my-3 items-center">
          <h3 className="text-xl mt-3 text-magenta text-center">
            Description du stage proposé
          </h3>
          <p className="mt-0.5">{description}</p>
        </article>
        <article className="flex flex-col mb-3 items-center">
          <h3 className="text-xl mt-3 text-magenta text-center">
            Localisation
          </h3>
          <p className="mt-0.5">{location}</p>
        </article>
        <article className="flex flex-col mb-3 items-center">
          <h3 className="text-xl mt-3 text-magenta text-center">
            Remote friendly
          </h3>
          <p className="mt-0.5">{is_remote_friendly ? "Oui" : "Non"}</p>
        </article>
        <div className="text-center">
          <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">
            À partir du {start_date}
          </p>
          <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">
            Pour une durée de {duration}
          </p>
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
