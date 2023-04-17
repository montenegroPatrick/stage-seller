"use client";
import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";
import MatchHistoric from "./MatchHistoric";
import { useEffect, useState } from "react";
import Tuto from "./Tuto";

export default function StudentProfile({ id, student }) {
  const [openTuto, setOpenTuto] = useState(false);
  useEffect(() => {
    if (student.tuto) {
      setOpenTuto(true);
    } else {
      setOpenTuto(false);
    }
  }, [student.tuto]);
  return (
    <div className="m-2 flex flex-col w-full lg:flex-row-reverse min-h-[calc(100vh-4rem)] font-mono text-black3 bg-transparent">
      <section className="flex flex-row justify-between lg:w-7/12 h-[15vh] sm:h-[25vh] md:h-[30vh] lg:h-[calc(100vh-4rem)]">
        <Tuto openTuto={openTuto} type="student" />
        <div className="w-1/4 h-full md:w-2/6 lg:w-full overflow-hidden">
          <ImageProfile />
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
        <div className="lg:hidden px-10">
          <h2>{student.lastName}</h2>
          <h3>{student.firstName}</h3>
          <h4>{student.city}</h4>
        </div>
      </section>
      <Skills
        classes="flex flex-col gap-1 lg:hidden"
        userId={id}
        skills={student.skills}
      />
      <section className="grow  flex flex-col">
        <div className="w-full p-5 flex flex-col gap-5 lg:justify-between grow">
          <article className="text-left">
            <ProfileDescription student={student} />
          </article>
          <article className="lg:text-right">
            <StageDescription stage={student.stage} />
          </article>
        </div>
        <div className=" hidden lg:flex w-full h-1/3 max-h-[100rem]">
          <div className=" items-center w-1/2">
            <GithubProjects github={student.github} />
          </div>
          <div className="overflow-hidden h-48 items-center w-1/2 ">
            <MatchHistoric currentUser={student} />
          </div>
        </div>
      </section>
    </div>
  );
}
