"use client";

import { Input, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateUser } from "@/lib/users/updateUser";
export default function ProfileDescription({
  isSettings,
  setIsSettings,
  currentUser,
  handleSubmit,
  input,
  handleChange,
}) {
  // console.log(currentUser);
  if (isSettings) {
    return (
      <Input
        onChange={handleChange}
        className="rounded-xl p-2 border-white bg-transparent border-2  "
        value={input.description}
        name="description"
        label="description de ta personnalité"
      />
    );
  }
  return (
    <article className=" text-left flex flex-col gap-2 p-5 lg:w-7/12 shadows-text rounded-lg">
      <Typography variant="paragraph" className="">
        {currentUser.description
          ? currentUser.description
          : "votre description apparaitra ici. cliquer sur le boutton settings pour la modifier"}
      </Typography>
    </article>
  );
}
