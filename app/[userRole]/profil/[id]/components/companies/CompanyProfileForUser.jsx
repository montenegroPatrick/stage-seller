'use client'

//Components
import CompanyMatch from "./CompanyMatch";
import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";

import { useState } from "react";

export default function CompanyProfileForUser({ userPersonnalPage }) {

const [nameSettings, setNameSettings] = useState(false)
const [skillSettings, setSkillSettings] = useState(false)
const [stageSettings, setStageSettings] = useState(false)
const [descriptionSettings, setDescriptionSettings] = useState(false)
const [userData, setUserData] = useState(userPersonnalPage)

const {company,
  description,
  siret,
  city,
  postCode,
  profilImage,
  skills,
  id,
  stages,
  connectedUserId,
  email} = userPersonnalPage

  return (
    <>
      <div className="sticky flex flex-col items-center scrolling-animation">
        <h2 className=" font-baskerville text-4xl sm:text-4xl md:text-5xl text-blackNext text-center py-6 px-8">
          Profil
        </h2>
        <div className="w-full 2xl:w-[90vw] bg-black h-[1px]" />
      </div>
      <section className="flex flex-col md:flex-row font-mono w-full 2xl:w-[90vw] mx-auto">
        <div className="w-[100%] md:w-[50%] mx-auto my-5 h-full flex flex-col">
          <CompanyNameAvatar companyName={companyName} picture={profilImage} city={city} postCode={postCode} openSettings={setNameSettings} />
          <div className="w-full flex flex-col xl:flex-row justify-between px-5 mx-auto bg-magenta">
            <CompanySkills skills={skills} openSettings={setSkillSettings}/>
            <CompanyStage stages={stages} openSettings={setStageSettings}/>
          </div>
        </div>
        <div className="w-full md:w-[50%] mx-auto my-5 border-dotted md:border-l md:border-black">
          <CompanyDescription description={description} openSettings={setDescriptionSettings}/>
          <CompanyMatch />
        </div>
      </section>
    </>
  );
}
