import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";

import { Suspense } from "react";

import { VscGithub } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";
import { RxResume } from "react-icons/rx";
export default function StudentProfileForVisitor({ role, user }) {
  return (
    <div className="shadows-text rounded-lg lg:p-20 flex flex-col w-full xl:flex-row font-mono text-black3">
      <section className="flex flex-row justify-between">
        <div className="flex xl:flex-col gap-5 w-full lg:h-full border-dotted border-r-2 border-black pr-4">
          <ImageProfile user={user} />
          <section className="flex flex-wrap flex-row justify-between w-full">
            <div className="flex flex-col gap-5 w-full ">
              <h3 className="text-xl md:uppercase py-5 font-extrabold">
                {role === "students"
                  ? `${user.firstName} ${user.lastName}`
                  : `${user.companyName}`}
              </h3>
              <div className="flex flex-row items-center gap-2">
                <MdLocationOn />
                <h6 className=" font-bold">{`${user.city}`}</h6>
              </div>
              <div className="font-bold flex flex-row items-center gap-2">
                <SlSocialLinkedin />
                <Link href={user.linkedin ?? ""}>{`${
                  user.linkedin ? user.linkedin : "non renseigné"
                }`}</Link>
              </div>
              {role === "students" && (
                <>
                  <div className="font-bold flex flex-row items-center gap-2">
                    <VscGithub />
                    <Link href={user.github ?? ""}>{`${
                      user.github
                        ? `https://github.com/${user.github}`
                        : "non renseigné"
                    }`}</Link>
                  </div>

                  <div className="text-[0.7rem]  font-bold flex flex-row items-center gap-2">
                    <RxResume />
                    <Link href={`/students/profil/${user.id}/resume`}>
                      mon CV
                    </Link>
                  </div>
                </>
              )}
              <div>
                <Skills
                  stages={false}
                  classes="flex flex-col gap-1"
                  skills={user.skills}
                />
              </div>
            </div>
          </section>
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
      </section>
      <section className="grow flex  flex-col gap-10">
        {/* <div className=" order-2 overflow-hidden z-0 mt-10 hide-scrollBar h-56  overflow-y-scroll items-center w-full ">
          <MatchHistoric currentUser={user} />
        </div> */}
        <div className="w-full p-5 flex flex-col gap-16 items-center lg:justify-between grow order-1">
          <article className="text-left w-full">
            <ProfileDescription currentUser={user} />
          </article>
          <article className="lg:text-right w-full">
            <StageDescription currentUser={user} />
          </article>
        </div>
        {role === "students" && (
          <div className=" lg:flex w-full h-1/3 max-h-[20rem] p-10 order-last">
            <div className=" items-center w-full ">
              <GithubProjects visitor={true} currentUser={user} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
