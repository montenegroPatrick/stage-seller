"use client";

import { Input, Textarea, Typography } from "@material-tailwind/react";
import { RxCrossCircled } from "react-icons/rx";
import { GrValidate } from "react-icons/gr";
import { useEffect } from "react";
export default function ProfileDescription({
  isSettings,
  setIsSettings,
  currentUser,
  handleSubmit,
  input,
  handleChange,
}) {
  if (isSettings) {
    return (
      <Textarea
        error={input.description.length < 4}
        icon={
          input.description !== "" ? (
            <GrValidate className="text-green" />
          ) : (
            <RxCrossCircled className="text-red" />
          )
        }
        onChange={handleChange}
        value={input.description}
        name="description"
        label="description de ta personnalité"
      />
    );
  }
  return (
    <article className=" text-left flex flex-col gap-2 p-5 w-full border-[0.1rem] border-black3/[0.2] rounded-lg">
      <h2 className="text-xl text-bold border-b-[0.1rem] border-black3/[0.2] py-2">
        biographie
      </h2>
      <Typography variant="paragraph" className="">
        {currentUser.description
          ? currentUser.description
          : "votre description apparaitra ici. cliquer sur le boutton settings pour la modifier"}
      </Typography>
    </article>
  );
}
