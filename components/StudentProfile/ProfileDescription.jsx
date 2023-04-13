"use client";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfileDescription({ isSettings, setIsSettings }) {
  const router = useRouter();
  const [input, setInput] = useState({
    cvLink: "le lien vers ton cv",
    description: "présente toi en quelque mot",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    setIsSettings(!isSettings);

    router.refresh();
  };
  if (isSettings) {
    return (
      <form
        className="flex flex-col gap-2  p-5 lg:w-7/12 "
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-xl p-2 border-white bg-transparent border-2 "
          onChange={handleChange}
          value={input.cvLink}
          name="cvLink"
        />
        <input
          onChange={handleChange}
          className="rounded-xl p-2 border-white bg-transparent border-2 "
          value={input.description}
          name="description"
        />
        <button hidden type="submit"></button>
      </form>
    );
  }
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
