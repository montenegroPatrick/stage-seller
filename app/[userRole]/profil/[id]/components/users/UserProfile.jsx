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

export default function UserProfile({ role, user, visitor }) {
  return (
    <div className="shadows-text glassMorph rounded-lg lg:p-20 flex flex-col w-full xl:flex-row font-mono text-black3">
      {!visitor && <Tuto user={user} role={role} />}
      <section className="flex flex-row justify-between">
        <div className="flex xl:flex-col gap-5 w-full lg:h-full border-dotted border-r-2 border-black pr-4">
          <ImageProfile user={user} />

          <section className="flex flex-wrap flex-row justify-between w-full">
            <div className="flex flex-col gap-5 w-full ">
              <h3 className=" text-xl md:uppercase py-5 font-extrabold">
                {role === "students"
                  ? `${user.firstName} ${user.lastName}`
                  : `${user.companyName}`}
              </h3>
              <div className="flex flex-row items-center gap-2">
                <MdLocationOn />
                <h6 className="font-bold">{`${user.city}`}</h6>
              </div>
              <div className="  font-bold flex flex-row items-center gap-2">
                <SlSocialLinkedin />
                <Link target="_blanck" href={user.linkedin ?? ""}>{`${
                  user.linkedin ? user.linkedin : ""
                }`}</Link>
              </div>
              {role === "students" && (
                <>
                  <div className="  font-bold flex flex-row items-center gap-2">
                    <VscGithub />
                    <Link
                      target="_blanck"
                      href={`https://github.com/${user.github}`}
                    >{`${
                      user.github ? `https://github.com/${user.github}` : ""
                    }`}</Link>
                  </div>

                  <div className="  font-bold flex flex-row items-center gap-2">
                    <RxResume />
                    <Link href={`/${role}/profil/${user.id}/resume`}>
                      {visitor ? "voir le cv" : "Mon CV"}
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
      <section className="grow flex flex-col gap-10 ">
        {!visitor && (
          <div className="order-2 w-full p-5 flex flex-col gap-16 items-center lg:justify-between grow ">
            <div className="  z-0 p-5   h-50vh w-full profile-background glassMorph text-left flex flex-col gap-5 border border-black rounded-lg">
              <h2 className="text-xl font-bold border-b md:uppercase border-black py-2">
                Voici tes likes et matchs
              </h2>
              <MatchHistoric />
            </div>
          </div>
        )}
        <div className="w-full p-5 flex flex-col gap-16 items-center lg:justify-between grow order-1">
          <article className="text-left w-full">
            <ProfileDescription currentUser={user} />
          </article>
          <article className="lg:text-right w-full">
            <StageDescription currentUser={user} />
          </article>
        </div>
        {role === "students" && (
          <div className="w-full p-5 flex flex-col gap-16 items-center lg:justify-between grow  h-1/3 max-h-[20rem]  order-last">
            <aside className="profile-background glassMorph text-left flex flex-col gap-2 p-5 w-full border border-black rounded-lg">
              <div className="items-center w-full ">
                <GithubProjects visitor={visitor} currentUser={user} />
              </div>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}
