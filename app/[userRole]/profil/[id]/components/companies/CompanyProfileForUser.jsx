"use client";
import Cookies from "js-cookie";
//Components
import CompanyMatch from "./CompanyMatch";
import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import ErrorAlert from "@/app/utilsComponents/Error/ErrorAlert";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";
import { getSkills } from "@/lib/skills/getSkills";

import { updateUser } from "@/lib/users/updateUser";
import { useState, useEffect } from "react";

export default function CompanyProfileForUser({ userProfilePage }) {
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

  const token = Cookies.get("jwt");
  const [userData, setUserData] = useState(userProfilePage);
  const [message, setMessage] = useState("");
  
  const [allSkills, setAllSkills] = useState([
    { id: 1, type: 'hard', name: 'React' },
    { id: 2, type: 'hard', name: 'Symfony' },
    { id: 3, type: 'hard', name: 'Next' },
    { id: 4, type: 'hard', name: 'Laravel' },
    { id: 5, type: 'hard', name: 'Python' },
    { id: 6, type: 'hard', name: 'MySQL' }
  ]);

  // //Fetch list of all skills
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const listSkills = await getSkills(token);
  //     setAllSkills(listSkills);
  //   };
  //   fetchData();
  // }, []);
  // /*  ******************** */

  const handleSubmit = async (newData) => {
    setMessage("");
    const newDataUser = { ...userData, ...newData };
    setUserData(newDataUser);
    const response = await updateUser(newDataUser);
    if (response.ok) {
      setMessage("Modifications validées");
    } else {
      setMessage("Erreur lors de la modification");
    }
    console.log(newDataUser);
  };

  return (
    <>
      <div className="sticky flex flex-col items-center scrolling-animation">
        <h2 className="text-5xl md:text-6xl text-black text-center py-6">
          PROFIL
        </h2>
        <div className="w-full 2xl:w-[90vw] bg-black h-[1px]" />
        {message ? (
          message === "Modifications validées" ? (
            <ErrorAlert color={'green'} message={message} />
            
          ) : (
            <ErrorAlert color={'red'} message={message} />
          )
        ) : null}
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
            <CompanySkills
              skills={skills}
              submitForm={handleSubmit}
              token={token}
              allSkills={allSkills}
              setMessage={setMessage}
            />
            {stages.length > 0 ? (
              stages.map((stage) => (
                <CompanyStage
                  currentStage={stage}
                  setMessage={setMessage}
                  token={token}
                  key={stage.id}
                  allSkills={allSkills}
                />
              ))
            ) : (
              <CompanyStage
                currentStage={null}
                setMessage={setMessage}
                token={token}
              />
            )}
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
