"use client";
import { Typography } from "@material-tailwind/react";

export default function StageDescription() {
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
