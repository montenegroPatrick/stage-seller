"use client";
import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";
import MatchHistoric from "./MatchHistoric";
import { FiSettings } from "react-icons/fi";
import { useRef, useState } from "react";
import StudentProfilSettings from "./StudentProfileSettings";

export default function StudentProfile() {
  return (
    <div className="m-2 flex flex-col lg:flex-row-reverse h-85vh font-mono text-black3 bg-whiteSmoke">
      <section className="flex flex-row justify-between  lg:w-7/12 h-1/3 lg:h-full">
        <div className="w-1/4 h-full md:w-2/6 lg:w-full overflow-hidden">
          <ImageProfile />
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
        <div className="lg:hidden px-10">
          <h2>name</h2>
          <h3>firstname</h3>
          <h4>lieux</h4>
        </div>
      </section>
      <Skills classes="flex flex-col gap-1 lg:hidden" />

      <section className="grow  flex flex-col">
        {/* cv link / profile description / stage description / mathHistoric / githubProject / */}
        <div className="w-full p-5 flex flex-col gap-5 lg:justify-between grow">
          <article className="text-left">
            <ProfileDescription />
          </article>
          <article className="lg:text-right">
            <StageDescription />
          </article>
        </div>
        <div className=" hidden lg:flex w-full h-1/3 max-h-[100rem]">
          <div className=" items-center w-1/2">
            <GithubProjects />
          </div>
          <div className="overflow-hidden h-48 items-center w-1/2 ">
            <MatchHistoric />
          </div>
        </div>
      </section>
    </div>
  );
}
