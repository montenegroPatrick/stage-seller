"use client";

import { Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateUser } from "@/lib/updateUser";
export default function ProfileDescription({
  isSettings,
  setIsSettings,
  student,
}) {
  console.log(student);
  const token = Cookies.get("jwt");
  const router = useRouter();
  const [input, setInput] = useState({
    cvLink: "le lien vers ton cv",
    description: "présente toi en quelque mot",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    await updateUser(token, student.id, input);
    setIsSettings(!isSettings);
    //router.refresh();
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
      <Typography variant="paragraph" className="">
        {student.description}
      </Typography>
    </article>
  );
}
