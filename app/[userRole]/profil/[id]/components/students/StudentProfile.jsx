import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";

import Tuto from "./Tuto";

import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

import { RxResume } from "react-icons/rx";

import MatchHistoric from "./MatchHistoric";

export default function StudentProfile({ id, student }) {
  return (
    <div className="shadows-text glassMorph rounded-lg lg:p-20 flex flex-col w-full lg:flex-row font-mono text-black3">
      <Tuto student={student} type="students" />
      <section className="flex flex-row justify-between">
        <div className="flex lg:flex-col gap-5 w-full lg:h-full border-dotted border-r-2 border-black pr-4">
          <ImageProfile student={student} />

          <section className="flex flex-wrap flex-row justify-between w-full">
            <div className="flex flex-col gap-5 w-full ">
              <h3 className=" text-xl md:uppercase py-5 font-extrabold">{`${student.firstName} ${student.lastName}`}</h3>
              <div className="flex flex-row items-center gap-2">
                <MdLocationOn />
                <h6 className="font-bold">{`${student.city}`}</h6>
              </div>
              <div className="  font-bold flex flex-row items-center gap-2">
                <SlSocialLinkedin />
                <Link href={student.linkedin ?? ""}>{`${
                  student.linkedin ? student.linkedin : ""
                }`}</Link>
              </div>
              <div className="  font-bold flex flex-row items-center gap-2">
                <VscGithub />
                <Link href={student.github ?? ""}>{`${
                  student.github ? `https://github.com/${student.github}` : ""
                }`}</Link>
              </div>
              <div className="  font-bold flex flex-row items-center gap-2">
                <RxResume />
                <Link href={`/students/profil/${student.id}/resume`}>
                  mon CV
                </Link>
              </div>
              <div>
                <Skills
                  stages={false}
                  classes="flex flex-col gap-1"
                  userId={id}
                  skills={student.skills}
                />
              </div>
            </div>
          </section>
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
      </section>
      <section className="grow flex flex-col gap-10 ">
        <div className=" order-2  overflow-hidden z-0 p-5 overflow-y-scroll h-50vh items-center w-full ">
          <MatchHistoric />
        </div>
        <div className="w-full p-5 flex flex-col gap-16 items-center lg:justify-between grow order-1">
          <article className="text-left w-full">
            <ProfileDescription currentUser={student} />
          </article>
          <article className="lg:text-right w-full">
            <StageDescription currentUser={student} />
          </article>
          <h2 className="text-2xl underline text-center">
            Voici tes likes et matchs
          </h2>
        </div>
        <div className=" lg:flex w-full h-1/3 max-h-[20rem] p-10 order-last">
          <div className=" items-center w-full ">
            <GithubProjects currentUser={student} />
          </div>
        </div>
      </section>
    </div>
  );
}
