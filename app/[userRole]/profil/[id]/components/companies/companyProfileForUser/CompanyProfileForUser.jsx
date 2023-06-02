"use client";
import Cookies from "js-cookie";
//Components

import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import ErrorAlert from "@/app/utilsComponents/Error/ErrorAlert";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";
import { getSkills } from "@/lib/skills/getSkills";
import LoaderSkeleton from "@/app/utilsComponents/Loaders/LoaderSkeleton";
import { updateUser } from "@/lib/users/updateUser";
import { useState, useEffect } from "react";
import MatchHistoricCompanies from "./MatchHistoricCompanies";

export default function CompanyProfileForUser({ userProfilePage }) {
  const token = Cookies.get("jwt");
  const [message, setMessage] = useState("");
  const [allSkills, setAllSkills] = useState([]);
  //Fetch list of all skills
  useEffect(() => {
    const fetchData = async () => {
      const listSkills = await getSkills(token);
      setAllSkills(listSkills);
    };
    fetchData();
  }, []);
  /*  ******************** */

  const handleSubmit = async (newData) => {
    setMessage("");
    //const newDataUser = { ...userData, ...newData };
    try {
      const response = await updateUser(token, userProfilePage.id, newData);
      if (response.status === 204) {
        setMessage("Modifications validées");
        // setUserData((previous) => ({ ...previous, ...newData }));
      } else {
        setMessage("Erreur lors de la modification");
      }
    } catch (error) {
      setMessage("Erreur lors de la modification");
    }
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
            <ErrorAlert color={"green"} message={message} />
          ) : (
            <ErrorAlert color={"red"} message={message} />
          )
        ) : null}
      </div>
      <section className="flex flex-col md:flex-row w-full 2xl:w-[90vw] mx-auto">
        <div className="w-[100%] md:w-[50%] mx-auto my-5 h-full flex flex-col">
          <CompanyNameAvatar
            token={token}
            user={userProfilePage}
            submitForm={handleSubmit}
            setMessage={setMessage}
            visitor={false}
          />
          <div className="w-full flex flex-col xl:flex-row justify-between sm:px-5 mx-auto">
            {allSkills.length > 0 ? (
              <>
                <CompanySkills
                  skills={userProfilePage.skills}
                  submitForm={handleSubmit}
                  token={token}
                  allSkills={allSkills}
                  setMessage={setMessage}
                  visitor={false}
                />
                {userProfilePage.stages.length || !userProfilePage.stages ? (
                  userProfilePage.stages.map((stage) => (
                    <CompanyStage
                      currentStage={stage}
                      setMessage={setMessage}
                      token={token}
                      key={stage.id}
                      allSkills={allSkills}
                      visitor={false}
                    />
                  ))
                ) : (
                  <CompanyStage
                    currentStage={{}}
                    setMessage={setMessage}
                    token={token}
                    allSkills={allSkills}
                    visitor={false}
                  />
                )}
              </>
            ) : (
              <>
                <LoaderSkeleton />
                <LoaderSkeleton />
              </>
            )}
          </div>
        </div>
        <div className="w-full md:w-[50%] mx-auto my-5 border-dotted md:border-l-2 border-black">
          <CompanyDescription
            description={userProfilePage.description}
            submitForm={handleSubmit}
            visitor={false}
          />
          {/* <CompanyMatch /> */}
          <MatchHistoricCompanies />
        </div>
      </section>
    </>
  );
}
