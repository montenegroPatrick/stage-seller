"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import SettingButton from "./SettingButton";
import ButtonForm from "./ButtonForm";
import InputFormCompany from "../InputFormCompany";

export default function CompanyNameAvatar({
  city,
  postCode,
  companyName,
  profileImage,
  submitForm,
  setMessage,
  visitor
}) {
  const [settings, setSettings] = useState(false);
  const [userCity, setUserCity] = useState(city);
  const [userPostCode, setUserPostCode] = useState(postCode);
  const [userCompanyName, setCompanyName] = useState(companyName);
  const [userProfileImage, setProfileImage] = useState(profileImage);

  useEffect(() => {
    if (typeof setMessage === "function") {
      setMessage("");
    }
  }, [settings]);

  if (settings) {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitForm({
            city: userCity,
            postCode: parseInt(userPostCode),
            companyName: userCompanyName,
            // profileImage: userProfileImage,
          });
          setSettings(!settings);
        }}
      >
        <div className="w-full md:min-h-[35vh] flex flex-col border-l-purple-200 p-5 border-dotted border-b-2 border-black relative">
          <div className="mb-3 pt-0">
            <p className="mt-3 italic underline text-sm">Nom de l'entreprise</p>
            <input
              value={userCompanyName}
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              placeholder="Nom de l'entreprise"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full font-normal"
            />
          </div>
          <div className="mb-3 pt-0">
            <p className="mt-3 italic underline text-sm">
              Localisation de l'entreprise
            </p>
            <input
              value={userCity}
              onChange={(e) => {
                setUserCity(e.target.value);
              }}
              type="text"
              placeholder="Ville"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div className="mb-3 pt-0">
            <p className="mt-3 italic underline text-sm">Code postal</p>
            <input
              value={userPostCode}
              onChange={(e) => setUserPostCode(e.target.value)}
              type="text"
              placeholder="Code postal"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full"
            />
          </div>
          <div className="mb-3 pt-0">
            <p className="mt-3 italic underline text-sm">
              Image ou logo de l'entreprise
            </p>
            <input
              value=""
              onChange={(e) => setProfileImage(e.target.files[0])}
              type="file"
              multiple={false}
              accept="image/png,image/jpeg,image/gif,image/svg+xml,application/pdf"
              placeholder="Logo de l'entreprise"
              className="px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-md border border-slate-300 outline-none focus:outline-none focus:ring w-full"
            />
            <p className="pl-2 text-rhubard">png, pdf, jpeg, gif, svg, pdf.</p>
          </div>
          <ButtonForm />
          <div
            onClick={() => setSettings(!settings)}
            className="absolute top-2 right-2"
          >
            <SettingButton />
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="w-full md:h-35vh flex flex-col justify-between border-l-purple-200 p-5 border-dotted border-b-2 border-black relative">
      <h2 className="text-3xl 2xl:text-5xl text-center text-black">
        {userCompanyName}
      </h2>
      <p className="text-center text-lg 2xl:text-xl text-teal-800 italic">
        {userCity}, {userPostCode}
      </p>
      <div className="w-[100%] py-5">
        <Image
          src={profileImage ? profileImage : "/company.jpeg"}
          width={200}
          height={200}
          className="mx-auto rounded-md"
          alt="Logo ou photo de l'entreprise"
        />
      </div>
      {!visitor ? (
        <div
          onClick={() => setSettings(!settings)}
          className="absolute top-0 right-0"
        >
          <SettingButton />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
