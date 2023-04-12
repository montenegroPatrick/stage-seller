"use client";
import { Avatar } from "@material-tailwind/react";
import { useState } from "react";
import ModalSettingsSkills from "./ModalSettingsSkills";

export default function Skills({ classes, isSettings, setShowSettings, show }) {
  //todo recuprer en props les skills et map sur tous les skills pour les afficher
  return (
    <section className={classes}>
      <div className="flex gap-3 m-1">
        <Avatar
          variant="rounded"
          alt="javascript"
          src="https://clipground.com/images/logo-javascript-clipart-1.jpg"
          className="border-2 w-7 h-7 border-whiteSmoke hover:z-10"
        />
        <Avatar
          variant="rounded"
          alt="javascript"
          src="https://clipground.com/images/logo-javascript-clipart-1.jpg"
          className="border-2 w-7 h-7 border-whiteSmoke hover:z-10"
        />
        {isSettings && (
          <>
            <div
              onClick={() => setShowSettings(!show)}
              className="px-1 rounded-md overflow-hidden bg-gray-500 w-fit"
            >
              {" "}
              +{" "}
            </div>
            <ModalSettingsSkills showSettings={show} />
          </>
        )}
      </div>
    </section>
  );
}
