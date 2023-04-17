"use client";

import { Checkbox, Input, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateUser } from "@/lib/updateUser";
import Cookies from "js-cookie";

export default function StageDescription({
  isSettings,
  setIsSettings,
  currentUser,
  input,
  handleChange,
  setInput,
}) {
  // const token = Cookies.get("jwt");
  // const [input, setInput] = useState({});
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setInput((prev) => ({ ...prev, [name]: value }));
  // };
  // const handleSubmit = async (event) => {
  //   // todo fetch put avec les nouvelles data
  //   event.preventDefault();
  //   await updateUser(token, currentUser.id, input);
  //   setIsSettings(!isSettings);
  // };
  if (isSettings) {
    return (
      <div className=" flex flex-col gap-2 ">
        <Input
          className="rounded-xl  mb-2 p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.description}
          onChange={handleChange}
          name="description"
          label="description de ta recherche"
        />
        <Input
          className="rounded-xl mb-2 w-full p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.start_date}
          onChange={handleChange}
          name="start_date"
          label="la date de début de stage"
        />
        <Input
          className="rounded-xl w-full p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.duration}
          onChange={handleChange}
          name="duration"
          label="la durée souhaitée"
        />
        <Input
          className="rounded-xl p-2 border-white bg-transparent border-2 "
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
                remoteFriendly: !input.remote,
              }))
            }
          />
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 flex flex-col gap-4 lg:w-7/12 float-right">
      <Typography variant="paragraph" className="">
        {currentUser.stages.description
          ? currentUser.stages.description
          : "la description de votre recherche apparaitra ici. cliquer sur le boutton settings pour la modifier"}
      </Typography>
      <ul className="grid place-content-end gap-1">
        <li>
          {currentUser.stages.start_date
            ? currentUser.stages.start_date
            : "la date souhaitée apparaitra ici"}
        </li>
        <li>
          {currentUser.stages.duration
            ? currentUser.stages.duration
            : "la durée souhaitée apparaitra ici"}
        </li>
        <li>
          {currentUser.stages.remoteFriendly
            ? "je préfère être en télétravail"
            : "je préfère le présentiel"}
        </li>
        <li>{currentUser.stages.location}</li>
      </ul>
    </div>
  );
}
