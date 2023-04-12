"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function ProfileDescription() {
  return (
    <article className="flex flex-col gap-2  p-5 lg:w-7/12 ">
      <Link className="font-bold italic" href="#">
        lien vers le CV
      </Link>
      <Typography variant="paragraph" className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        numquam similique atque praesentium voluptatibus repellat rerum sunt
        pariatur omnis quo cupiditate fuga consequatur expedita a veniam, quae
        blanditiis quos sed.
      </Typography>
    </article>
  );
}
