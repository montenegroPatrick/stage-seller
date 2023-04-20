"use client";

//Components
import CompanyMatch from "./CompanyMatch";
import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";

import { useState } from "react";

export default function CompanyProfileForUser({ userProfilePage }) {
  const [userData, setUserData] = useState(userProfilePage);

  const {
    companyName,
    description,
    siret,
    city,
    postCode,
    profilImage,
    skills,
    id,
    stages,
    connectedUserId,
    email,
  } = userProfilePage;

  const handleSubmit = (newData) => {
    const newDataUser = { ...userData, ...newData };
    setUserData(newDataUser);
    console.log(newDataUser);
  };

  return (
    <>
      <div className="sticky flex flex-col items-center scrolling-animation">
        <h2 className="text-5xl md:text-6xl text-black text-center py-6">
          PROFIL
        </h2>
        <div className="w-full 2xl:w-[90vw] bg-black h-[1px]" />
      </div>
      <section className="flex flex-col md:flex-row w-full 2xl:w-[90vw] mx-auto">
        <div className="w-[100%] md:w-[50%] mx-auto my-5 h-full flex flex-col">
          <CompanyNameAvatar
            companyName={companyName}
            picture={profilImage}
            city={city}
            postCode={postCode}
            submitForm={handleSubmit}
          />
          <div className="w-full flex flex-col xl:flex-row justify-between px-5 mx-auto">
            <CompanySkills skills={skills} submitForm={handleSubmit}/>
            <CompanyStage stages={stages} submitForm={handleSubmit}/>
          </div>
        </div>
        <div className="w-full md:w-[50%] mx-auto my-5 border-dotted md:border-l-2 border-black">
          <CompanyDescription
            description={description}
            submitForm={handleSubmit}
          />
          <CompanyMatch />
        </div>
      </section>
    </>
  );
}
