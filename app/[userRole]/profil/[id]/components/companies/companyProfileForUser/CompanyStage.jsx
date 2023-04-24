"use client";

import Skill from "../Skill";
import { useEffect, useState } from "react";
import ButtonForm from "./ButtonForm";
import SettingButton from "./SettingButton";
import { getSkills } from "@/lib/skills/getSkills";
import { updateOrAddWithId } from "@/lib/stages/updateOrAddWithId";

export default function CompanyStage({
  currentStage,
  setMessage,
  token,
  allSkills,
  visitor,
}) {
  const [settings, setSettings] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [stage, setStage] = useState(currentStage);
  const [listAllSkills, setListAllSkills] = useState(allSkills);
  const options = { day: "numeric", month: "numeric", year: "numeric" };

  console.log("La valeur de mon stage actuel ", stage);

  function handleChange(event) {
    const { name, value } = event.target;
    setStage((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (currentStage.skills) {
      setSelectedSkills(currentStage.skills);
    }
  }, [currentStage]);

  useEffect(() => {
    if (typeof setMessage === "function") {
      setMessage("");
    }
  }, [settings]);

  const handleSelectSkill = (skill) => {
    if (!selectedSkills) {
      setSelectedSkills([skill]);
    } else if (!selectedSkills.includes(skill)) {
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

  const handleSubmitPutForm = async () => {
    setMessage("");
    const selectedSkillsIds = selectedSkills.map((skill) => skill.id);

    try {
      const response = await updateOrAddWithId(
        token,
        {
          ...stage,
          skills: [...selectedSkillsIds],
        },
        stage.id
      );
      if (!response.status) {
        setMessage("Modifications validées");
      } else {
        setMessage("Erreur lors de la modification");
      }
    } catch (error) {
      setMessage("Erreur lors de la modification");
    }
  };

  const handleSubmitPostForm = async () => {
    setMessage("");
    const selectedSkillsIds = selectedSkills.map((skill) => skill.id);
    try {
      const response = await updateOrAddWithId(
        token,
        {
          ...stage,
          isTravelFriendly: false,
          skills: [...selectedSkillsIds],
        },
        stage.id
      );

      console.log("la reponse de mon fetch", response);
      if (!response.status) {
        setMessage("Modifications validées");
      } else {
        setMessage("Erreur lors de la modification");
      }
    } catch (error) {
      console.log("Ici est mon erreur ", error);
      setMessage("Erreur lors de la modification");
    }
  };

  // function convertDateToInputValue(date) {
  //   const [day, month, year] = date.split("/");
  //   const isoDate = new Date(`${year}-${month}-${day}`)
  //     .toISOString()
  //     .split("T")[0];
  //   return isoDate;
  // }
  if (settings && Object.keys(stage).length === 8) {
    return (
      <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl py-5 mx-auto my-5 bg-white relative">
        <h2 className="text-2xl 2xl:text-3xl text-black text-center ">
          Profil recherché
        </h2>
        <form
          className="mt-5 w-full border border-black rounded-lg py-4 px-2"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmitPutForm();
            setSettings(!settings);
          }}
        >
          <div className="mb-3 w-[80%] mx-auto">
            <p className="mt-3 italic underline text-sm">
              Skills requis pour le stage
            </p>
            <ul className="flex flex-wrap justify-center">
              {listAllSkills.map((skill) => (
                <li key={skill.id}>
                  <label className="text-md mx-auto px-4 text-paleKaki font-medium">
                    <input
                      type="checkbox"
                      checked={selectedSkills.some(
                        (selectedSkill) => selectedSkill.id === skill.id
                      )}
                      onChange={() => handleSelectSkill(skill)}
                    />
                    {skill.name}
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-3 italic underline text-sm">
              Description du stage
            </p>
            <textarea
              type="text"
              value={stage.description}
              onChange={(e) =>
                setStage((previous) => ({
                  ...previous,
                  description: e.target.value,
                }))
              }
              placeholder="Description du stage"
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative text-center bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full"
              required
            />
            <p className="mt-3 italic underline text-sm">Lieu du stage</p>
            <input
              value={stage.location}
              onChange={(e) =>
                setStage((previous) => ({
                  ...previous,
                  location: e.target.value,
                }))
              }
              type="text"
              placeholder="Lieu du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
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
                    checked={stage.isRemoteFriendly === true}
                    onChange={(e) =>
                      setStage((previous) => ({
                        ...previous,
                        is_remote_friendly: true,
                      }))
                    }
                    required
                  />
                  Oui
                </label>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={stage.isRemoteFriendly === false}
                    onChange={(e) =>
                      setStage((previous) => ({
                        ...previous,
                        is_remote_friendly: false,
                      }))
                    }
                    required
                  />
                  Non
                </label>
              </div>
            </div>

            <p className="mt-3 italic underline text-sm">Début du stage</p>
            <input
              value={stage.startDate}
              onChange={(e) =>
                setStage((previous) => ({
                  ...previous,
                  startDate: e.target.value,
                }))
              }
              type="date"
              placeholder="Date de début du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
            />
            <p className="mt-3 italic underline text-sm">Durée du stage</p>
            <input
              value={stage.duration}
              onChange={(e) => {
                const inputValue = parseInt(e.target.value);
                if (inputValue >= 1 && inputValue <= 6) {
                  setStage((previous) => ({
                    ...previous,
                    duration: inputValue,
                  }));
                }
              }}
              type="number"
              min="1"
              max="6"
              placeholder="Durée du stage en mois"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
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
  } else if (settings && Object.keys(stage).length < 8) {
    return (
      <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl px-2 py-5 mx-auto my-5 bg-white relative">
        <h2 className="text-2xl 2xl:text-3xl text-black text-center ">
          Profil recherché
        </h2>
        <form
          className="mt-5 w-full border border-black rounded-lg py-4 px-2"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmitPostForm();
            setSettings(!settings);
          }}
        >
          <div className="mb-3 w-[80%] mx-auto">
            <p className="mt-3 italic underline text-sm">
              Skills requis pour le stage
            </p>
            <ul className="flex flex-wrap justify-center">
              {listAllSkills.map((skill) => (
                <li key={skill.id}>
                  <label className="text-md mx-auto px-4 text-paleKaki font-medium">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill) ? true : false}
                      onChange={() => handleSelectSkill(skill)}
                    />
                    {skill.name}
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-3 italic underline text-sm">
              Description du stage
            </p>
            <textarea
              type="text"
              name="description"
              value={stage.description ? stage.description : ""}
              onChange={(e) => handleChange(e)}
              placeholder="Description du stage"
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full"
              required
            />
            <p className="mt-3 italic underline text-sm">Lieu du stage</p>
            <input
              value={stage.location ? stage.location : ""}
              name="location"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Lieu du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
            />
            <div>
              <p className="mt-3 italic underline text-sm">
                Possibilité de remote
              </p>
              <div className="flex justify-around">
                <label>
                  <input
                    type="radio"
                    name="isRemoteFriendly"
                    value={true}
                    checked={stage.isRemoteFriendly === true}
                    onChange={() =>
                      setStage((previous) => ({
                        ...previous,
                        isRemoteFriendly: true,
                      }))
                    }
                  />
                  Oui
                </label>
                <label>
                  <input
                    type="radio"
                    value={false}
                    name="isRemoteFriendly"
                    checked={stage.isRemoteFriendly === false}
                    onChange={() =>
                      setStage((previous) => ({
                        ...previous,
                        isRemoteFriendly: false,
                      }))
                    }
                  />
                  Non
                </label>
              </div>
            </div>

            <p className="mt-3 italic underline text-sm">Début du stage</p>
            <input
              value={stage.startDate ? stage.startDate : ""}
              name="startDate"
              onChange={(e) =>
                setStage((previous) => ({
                  ...previous,
                  startDate: e.target.value,
                }))
              }
              type="date"
              placeholder="Date de début du stage"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
            />
            <p className="mt-3 italic underline text-sm">Durée du stage</p>
            <input
              value={stage.duration ? stage.duration : ""}
              name="duration"
              onChange={(e) => {
                const inputValue = parseInt(e.target.value);
                if (inputValue >= 1 && inputValue <= 6) {
                  setStage((prevState) => ({
                    ...prevState,
                    duration: inputValue,
                  }));
                }
              }}
              type="number"
              min="1"
              max="6"
              placeholder="Durée du stage en mois"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
              required
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
        {Object.keys(stage).length === 8 ? (
          <>
            <div className="flex flex-wrap justify-center">
              <h3 className="text-xl font-medium text-magenta text-center">
                Stage skills
              </h3>
              <ul className="flex flex-wrap w-full justify-center gap-2">
                {stage.skills.map((skill) => (
                  <li key={skill.id}>
                    <Skill>{skill.name}</Skill>
                  </li>
                ))}
              </ul>
            </div>
            <article className="flex flex-col my-3 items-center">
              <h3 className="text-xl mt-3 font-medium text-magenta text-center">
                Description du stage proposé
              </h3>
              <p className="mt-0.5 text-center">{stage.description}</p>
            </article>
            <article className="flex flex-col mb-3 items-center">
              <h3 className="text-xl mt-3 font-medium text-magenta text-center">
                Localisation
              </h3>
              <p className="mt-0.5">{stage.location}</p>
            </article>
            <article className="flex flex-col mb-3 items-center">
              <h3 className="text-xl mt-3 font-medium text-magenta text-center">
                Remote friendly
              </h3>
              <p className="mt-0.5">
                {stage.is_remote_friendly ? "Oui" : "Non"}
              </p>
            </article>
            <div className="text-center">
              <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">
                À partir du{" "}
                {new Date(stage.startDate).toLocaleDateString("fr-FR", options)}
              </p>
              <p className="font-md mt-3 text-teal-800 font-semibold text-center leading-tight">
                Pour une durée de {stage.duration} mois
              </p>
            </div>
          </>
        ) : (
          <p className="text-center">Pas de stage proposé</p>
        )}
      </section>
      {!visitor ? (
        <div
          onClick={() => setSettings(!settings)}
          className="absolute top-0 right-0"
        >
          <SettingButton />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
