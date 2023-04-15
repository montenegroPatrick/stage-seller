"use client";
import getToken from "@/lib/getToken";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StageDescription({
  isSettings,
  setIsSettings,
  currentUser,
}) {
  const router = useRouter();
  const [input, setInput] = useState({
    description: currentUser.stages.description,
    date: currentUser.stages.date,
    duration: currentUser.stages.duration,
    location: currentUser.stages.location,
    remote: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    await updateUser(getToken(), currentUser.id, input);
    setIsSettings(!isSettings);
  };
  if (isSettings) {
    return (
      <form
        onSubmit={handleSubmit}
        className="p-5 flex flex-col gap-2 lg:w-7/12 float-right"
      >
        <input
          className="rounded-xl p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.description}
          onChange={handleChange}
          name="description"
        />
        <input
          className="rounded-xl w-full p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.date}
          onChange={handleChange}
          name="date"
        />
        <input
          className="rounded-xl w-full p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.duration}
          onChange={handleChange}
          name="duration"
        />
        <input
          className="rounded-xl p-2 border-white bg-transparent border-2 "
          type="text"
          value={input.location}
          onChange={handleChange}
          name="location"
        />
        <div className="flex justify-between rounded-xl p-2 border-white bg-transparent border-2 ">
          <label htmlFor="remote">
            si tu souhaite travaillé en remote coche la case
          </label>
          <input
            type="checkbox"
            name="remote"
            checked={input.remote}
            onChange={() =>
              setInput((prev) => ({ ...prev, remote: !input.remote }))
            }
          />
        </div>
        <button hidden type="submit"></button>
      </form>
    );
  }
  return (
    <div className="p-5 flex flex-col gap-2 lg:w-7/12 float-right">
      <Typography variant="paragraph" className="">
        {currentUser.stages.description}
      </Typography>
      <ul className="grid place-content-end">
        <li>{currentUser.stages.start_date}</li>
        <li>
          {currentUser.remote
            ? "je préfère être en télétravail"
            : "je préfère le présentiel"}
        </li>
        <li>{currentUser.location}</li>
      </ul>
    </div>
  );
}
