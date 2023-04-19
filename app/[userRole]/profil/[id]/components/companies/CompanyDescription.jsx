"use client";
import { useState } from "react";
import SettingButton from "./SettingButton";
import InputFormCompany from "./InputFormCompany";

export default function CompanyDescription({ description, submitForm }) {
  const [settings, setSettings] = useState(false);
  const [userDescription, setDescription] = useState(description);

  const handleChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  return (
    <div className="relative w-full md:min-h-[35vh] flex flex-col items-center p-5 mx-auto border-dotted border-t-2 border-b-2 md:border-t-0 border-magenta px-auto md:mb-0">
      <h2
        className={
          settings
            ? `font-baskerville text-2xl sm:text-3xl 2xl:text-4xl text-center text-blackNext underline md:mb-10`
            : `font-baskerville text-2xl sm:text-3xl 2xl:text-4xl text-center text-blackNext underline `
        }
      >
        Description
      </h2>
      {settings ? (
        <form
          className="w-full"
          onSubmit={(event) => {
            event.preventDefault()
            submitForm({ description: userDescription });
            setSettings(!settings);
          }}
        >
          <div className="mb-3 w-full ">
            <textarea
              type="text"
              value={userDescription}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-lg border border-slate-300 outline-none focus:outline-none focus:ring w-full"
            />
            <button
              className="bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 mx-auto block"
              type="submit"
            >
              Valider
            </button>
          </div>
        </form>
      ) : (
        <p className="my-8 px-12 xl:text-lg 2xl:text-xl xl:px-18 text-blackNext dark:text-gray-400 first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-1 first-letter:float-left">
          {userDescription === ""
            ? "Description non renseignée."
            : userDescription}
        </p>
      )}

      <div
        onClick={() => setSettings(!settings)}
        className="absolute top-2 right-2"
      >
        <SettingButton />
      </div>
    </div>
  );
}
