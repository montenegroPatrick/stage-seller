"use client";

import { Checkbox, Input, Typography } from "@material-tailwind/react";
import Skills from "./Skills";
import { useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GiDuration } from "react-icons/gi";
import { FcWorkflow } from "react-icons/fc";
export default function StageDescription({
  isSettings,
  setIsSettings,
  currentUser,
  input,
  handleChange,
  setInput,
  handleSubmit,
}) {
  const [showSettings, setShowSettings] = useState(false);
  const skills = currentUser.stages.map((stage) =>
    stage.skills.map((skill) => skill)
  );

  if (isSettings) {
    return (
      <div className=" flex flex-col gap-2 w-full ">
        <Input
          type="text"
          value={input.description}
          onChange={handleChange}
          name="description"
          label="description de ta recherche"
        />
        <Input
          type="date"
          value={input.starDate}
          onChange={handleChange}
          name="startDate"
          label="la date de début de stage"
        />
        <Input
          type="number"
          value={input.duration}
          onChange={handleChange}
          name="duration"
          label="la durée souhaitée en mois"
        />
        <Input
          type="text"
          value={input.location}
          onChange={handleChange}
          name="location"
          label="le lieux souhaité"
        />
        <div className="flex justify-between rounded-xl p-2 border-white bg-transparent border-2 ">
          <Checkbox
            label="coche la case si tu souhaite travailler en full-remote"
            className=" p-0 w-5 h-5 min-w-0"
            type="checkbox"
            name="remoteFriendly"
            checked={input.remote}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                isRemoteFriendly: !input.isRemoteFriendly,
              }))
            }
          />
          <Checkbox
            label="coche la case si tu peux/souhaite te déplacer"
            className=" p-0 w-5 h-5 min-w-0"
            type="checkbox"
            name="remoteFriendly"
            checked={input.remote}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                isTravelFriendly: !input.isTravelFriendly,
              }))
            }
          />
        </div>
        {/* skills STAGE */}
        <Skills
          stages={true}
          student={currentUser}
          show={showSettings}
          skills={skills}
          isSettings={isSettings}
          setInputStages={setInput}
          setShowSettings={setShowSettings}
        />
      </div>
    );
  }
  return (
    <>
      {currentUser.stages.map((stage) => (
        <div className="p-5 w-full text-left flex border-[0.1rem] border-black3/[0.2] flex-col gap-16 float-right rounded-lg ">
          <h2 className="text-xl text-bold border-b-[0.1rem] border-black3/[0.2] py-2">
            ma recherche
          </h2>
          <p className="">
            {stage.description
              ? stage.description
              : "la description de votre recherche apparaitra ici. cliquer sur le boutton settings pour la modifier"}
          </p>
          <ul className="grid place-content-end gap-1">
            <li className=" py-2 flex flex-row-reverse items-center gap-2 border-b-[1px] border-black3/[0.1]">
              <BsCalendar2DateFill />
              <p>
                {" "}
                {stage.start_date
                  ? stage.start_date
                  : "la date souhaitée apparaitra ici"}
              </p>
            </li>
            <li className=" py-2 flex flex-row-reverse items-center gap-2 border-b-[1px] border-black3/[0.1] ">
              <GiDuration />
              <p>
                {stage.duration
                  ? stage.duration
                  : "la durée souhaitée apparaitra ici"}
              </p>
            </li>
            <li className=" py-2 flex flex-row-reverse items-center gap-2 border-b-[1px] border-black3/[0.1]">
              <FcWorkflow />
              <p>
                {stage.isRemoteFriendly
                  ? "je préfère être en télétravail"
                  : "je préfère le présentiel"}
              </p>
            </li>
            <li className=" py-2 flex flex-row-reverse items-center gap-2 border-b-[1px] border-black3/[0.1]">
              <FcWorkflow />
              <p>
                {stage.isTravelFriendly
                  ? "je peux me déplacer"
                  : "impossibilité de se déplacer"}
              </p>
            </li>
            <li className=" py-2  flex flex-row-reverse items-center gap-2">
              {stage.location}
            </li>
            <li className=" py-2  flex flex-row-reverse items-center gap-2">
              {/* !skills STAGE */}
              <div className="flex items-center gap-2">
                <p className="text-[0.7rem] w-full">
                  skills pour la recherche ={" "}
                </p>
                <Skills
                  stages={true}
                  show={showSettings}
                  skills={skills}
                  isSettings={isSettings}
                  setInputStages={setInput}
                  setShowSettings={setShowSettings}
                />
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
