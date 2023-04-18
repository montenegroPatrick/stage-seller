"use client";
import GithubProjects from "./GithubProjects";
import ImageProfile from "./ImageProfile";
import ProfileDescription from "./ProfileDescription";
import StageDescription from "./StageDescription";
import Skills from "./Skills";
import MatchHistoric from "./MatchHistoric";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { updateUser } from "@/lib/users/updateUser";
import { Input } from "@material-tailwind/react";
import { updateStages } from "@/lib/stages/addOrUpdateStages";

export default function StudentProfilSettings({
  isSettings,
  setIsSettings,
  student,
}) {
  const token = Cookies.get("jwt");
  // todo mettre les données récupérer de la bdd
  const router = useRouter();
  // console.log(student);
  const [input, setInput] = useState({
    lastname: student.lastName ?? "",
    firstname: student.firstName ?? "",
    localisation: student.city ?? "",
    github: student.github ?? "",
    githubApi: student.githubApi ?? "",
    profileImage: student.profileImage ?? "",
    description: student.description ?? "",
  });
  const [inputStages, setInputStages] = useState({
    description: student.stages.description ?? "",
    startDate: student.stages.start_date ?? "",
    duration: student.stages.duration ?? "",
    location: student.stages.location ?? "",
    isRemoteFriendly: student.stages.isRemoteFriendly ?? false,
    isTravelFriendly: student.stages.isTravelFriendly ?? false,
    Skills: student.skills ?? [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeStages = (event) => {
    const { name, value } = event.target;

    setInputStages((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    //console.log(input);
    const duration = Number(inputStages.duration);
    const responseUserUpdate = await updateUser(token, student.id, input);

    const createOrUpdateStages = await updateStages(
      token,
      { ...inputStages, duration, skills: [1, 4] },
      student
    );
  };

  const [showSettings, setShowSettings] = useState(false);
  const { lastname, firstname, localisation } = input;

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col lg:justify-around h-screen w-full lg:gap-5 min-h-[calc(100vh-4rem)] font-mono text-whiteSmoke bg-blue"
    >
      <div className="flex lg:flex-col h-screen gap-5 ">
        <div className="w-1/4 min-w-[25%] h-[60%] md:w-2/6 lg:w-full overflow-hidden">
          <ImageProfile
            isSettings={isSettings}
            setShowSettings={setShowSettings}
            show={showSettings}
            student={student}
          />
        </div>
        <Skills
          isSettings={isSettings}
          studentSkills={student.skills}
          show={showSettings}
          setShowSettings={setShowSettings}
          classes="flex flex-col py-2 gap-1 lg:hidden text-black3"
        />
        <section className="flex flex-row flex-wrap  justify-between lg:w-full h-1/3 lg:h-full">
          {/* image de profile en background avec dessus nom prenom lieu skills  */}
          <div className="flex flex-col gap-2 items-center text-black3 lg:w-screen">
            <p className="p-2 text-black3">Information personnelle</p>
            <Input
              className="rounded-xl p-2 border-white bg-transparent border-2  "
              onChange={handleChange}
              name="lastname"
              value={lastname}
              label="ton nom de famille"
            />

            <Input
              className="rounded-xl p-2 border-white bg-transparent border-2 "
              onChange={handleChange}
              name="firstname"
              value={firstname}
              label="ton prénom"
            />

            <Input
              className="rounded-xl p-2 border-white bg-transparent border-2 "
              onChange={handleChange}
              name="localisation"
              value={localisation}
              label="ta ville"
            />
            <p className="p-2">description</p>
          </div>
        </section>
      </div>
      <section className="flex flex-col ">
        {/* cv link / profile description / stage description / mathHistoric / githubProject / */}
        <div className="flex flex-col gap-2 h-full flex-wrap lg:w-full justify-between">
          <ProfileDescription
            isSettings={isSettings}
            setIsSettings={setIsSettings}
            setShowSettings={setShowSettings}
            currentUser={student}
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <StageDescription
            isSettings={isSettings}
            setIsSettings={setIsSettings}
            currentUser={student}
            setInput={setInputStages}
            input={inputStages}
            handleChange={handleChangeStages}
          />
        </div>
        <div className="lg:flex w-full h-1/3 max-h-[100rem]">
          <div className="items-center w-full">
            <GithubProjects
              setIsSettings={setIsSettings}
              isSettings={isSettings}
              setShowSettings={setShowSettings}
              currentUser={student}
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
      <button type="submit" hidden></button>
    </form>
  );
}
