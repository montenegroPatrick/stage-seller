"use client";
import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";
import MatchHistoric from "./MatchHistoric";
import { FiSettings } from "react-icons/fi";
import { useRef, useState } from "react";
import StudentProfile from "./StudentProfile";
import { useRouter } from "next/navigation";
import updateUser from "@/FetchFunctions/PUT/updateUser";
import Cookies from "js-cookie";

export default function StudentProfilSettings({
  isSettings,
  setIsSettings,
  student,
}) {
  const token = Cookies.get("jwt");
  // todo mettre les données récupérer de la bdd
  const router = useRouter();
  const [input, setInput] = useState({
    lastname: student.lastName,
    firstname: student.firstName,
    localisation: student.city,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    // todo fetch put avec les nouvelles data
    updateUser(token, student.id, input);
    event.preventDefault();
    setIsSettings(!isSettings);

    router.refresh();
  };

  const [showSettings, setShowSettings] = useState(false);
  const { lastname, firstname, localisation } = input;

  return (
    <div className=" m-2 flex w-full flex-col lg:flex-row-reverse h-85vh font-mono bg-transparent">
      <section className="flex flex-row justify-between  lg:w-96 h-1/3 lg:h-full">
        <div className="w-1/4 h-full md:w-2/6 lg:w-full overflow-hidden">
          <ImageProfile
            isSettings={isSettings}
            setShowSettings={setShowSettings}
            show={showSettings}
          />
        </div>
        {/* image de profile en background avec dessus nom prenom lieu skills  */}
        <form
          onSubmit={handleSubmit}
          className="lg:hidden px-10 flex flex-col gap-1  "
        >
          <input
            className="rounded-xl p-2 border-white bg-transparent border-2  "
            onChange={handleChange}
            name="lastname"
            value={lastname}
          />

          <input
            className="rounded-xl p-2 border-white bg-transparent border-2 "
            onChange={handleChange}
            name="firstname"
            value={firstname}
          />

          <input
            className="rounded-xl p-2 border-white bg-transparent border-2 "
            onChange={handleChange}
            name="localisation"
            value={localisation}
          />
          <button type="submit" hidden></button>
        </form>
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
              setIsSettings={setIsSettings}
              setShowSettings={setShowSettings}
              student={student}
            />
          </article>
          <article className="lg:text-right">
            <StageDescription
              isSettings={isSettings}
              setIsSettings={setIsSettings}
              student={student}
            />
          </article>
        </div>
        <div className=" hidden lg:flex w-full h-1/3 max-h-[100rem]">
          <div className=" items-center w-1/2">
            <GithubProjects
              setIsSettings={setIsSettings}
              isSettings={isSettings}
              setShowSettings={setShowSettings}
              student={student}
            />
          </div>
          <div className="overflow-hidden h-48 items-center w-1/2 ">
            <MatchHistoric currentUser={student} />
          </div>
        </div>
      </section>
    </div>
  );
}
