"use client";
import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";
import MatchHistoric from "./MatchHistoric";
import { FiSettings } from "react-icons/fi";
import { useRef, useState } from "react";

export default function StudentProfile() {
  const [isSettings, setIsSttings] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const refElement = useRef(null);

  const handleShowSettings = (event) => {
    setShowSettings(true);
  };
  return (
    <div className="m-2 flex flex-col lg:flex-row-reverse h-85vh font-mono text-black3 bg-whiteSmoke">
      <section className="flex flex-row justify-between  lg:w-7/12 h-1/3 lg:h-full">
        <div className="w-1/4 h-full md:w-2/6 lg:w-full overflow-hidden">
          <ImageProfile
            isSettings={isSettings}
            setShowSettings={setShowSettings}
          />
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
        <div className="lg:hidden px-10">
          <h2>name</h2>
          <h3>firstname</h3>
          <h4>lieux</h4>
        </div>
        <button
          className=" flex flex-col p-3"
          onClick={() => setIsSttings(!isSettings)}
        >
          <FiSettings />
        </button>
      </section>
      <Skills
        isSettings={isSettings}
        show={showSettings}
        setShowSettings={setShowSettings}
        classes="flex flex-col gap-1 lg:hidden"
      />

      <section className="grow  flex flex-col">
        {/* cv link / profile description / stage description / mathHistoric / githubProject / */}
        <div className="w-full p-5 flex flex-col gap-5 lg:justify-between grow">
          <article className="text-left">
            <ProfileDescription
              isSettings={isSettings}
              setShowSettings={setShowSettings}
            />
          </article>
          <article className="lg:text-right">
            <StageDescription
              isSettings={isSettings}
              setShowSettings={setShowSettings}
            />
          </article>
        </div>
        <div className=" hidden lg:flex w-full h-1/3 max-h-[100rem]">
          <div className=" items-center w-1/2">
            <GithubProjects
              isSettings={isSettings}
              setShowSettings={setShowSettings}
            />
          </div>
          <div className="overflow-hidden h-48 items-center w-1/2 ">
            <MatchHistoric
              isSettings={isSettings}
              setShowSettings={setShowSettings}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
