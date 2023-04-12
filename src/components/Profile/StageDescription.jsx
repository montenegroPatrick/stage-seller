"use client";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StageDescription({ isSettings, setIsSettings }) {
  const router = useRouter();
  const [input, setInput] = useState({
    description: "description de ce que tu recherche",
    date: "date au format DD/MM/YYYY",
    localisation:
      "lieu du stage veuillez écrire un lieu ou vous souhaitez faire le stage",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    setIsSettings(!isSettings);
    console.log("submit");
    router.refresh();
  };
  if (isSettings) {
    return (
      <div className="p-5 flex flex-col gap-2 lg:w-7/12 float-right">
        <input
          type="text"
          value={input.description}
          onChange={handleChange}
          name="description"
        />
        <ul className="grid place-content-end">
          <input
            type="text"
            value={input.date}
            onChange={handleChange}
            name="date"
          />
          <input
            type="text"
            value={input.localisation}
            onChange={handleChange}
            name="localisation"
          />
          // checkbox
        </ul>
      </div>
    );
  }
  return (
    <div className="p-5 flex flex-col gap-2 lg:w-7/12 float-right">
      <Typography variant="paragraph" className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        numquam similique atque praesentium voluptatibus repellat rerum sunt
        pariatur omnis quo cupiditate fuga consequatur expedita a veniam, quae
        blanditiis quos sed.
      </Typography>
      <ul className="grid place-content-end">
        <li>date</li>
        <li>remote</li>
        <li>lieu</li>
      </ul>
    </div>
  );
}
