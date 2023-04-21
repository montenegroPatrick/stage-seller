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
import { Alert, Input } from "@material-tailwind/react";
import {
  addOrUpdateStages,
  updateStages,
} from "@/lib/stages/addOrUpdateStages";
import Button from "@/app/utilsComponents/Buttons/Button";
import { RxCrossCircled } from "react-icons/rx";
import { GrValidate } from "react-icons/gr";

export default function StudentProfilSettings({
  isSettings,
  setIsSettings,
  student,
}) {
  const token = Cookies.get("jwt");
  // todo mettre les données récupérer de la bdd
  const router = useRouter();
  const [profilMessage, setProfilMessage] = useState("");
  const [stageMessage, setStageMessage] = useState("");
  const [input, setInput] = useState({
    lastname: student.lastName ?? "",
    firstname: student.firstName ?? "",
    localisation: student.city ?? "",
    github: student.github ?? "",
    resume: student.resume ?? "",
    profileImage: student.profileImage ?? "",
    description: student.description ?? "",
    skills: student.skills ?? [],
  });
  const { stages } = student;
  console.log(stages);
  const [inputStages, setInputStages] = useState({
    stages,
    // description: stage.description ?? "",
    // startDate: stage.start_date ?? "",
    // duration: stage.duration ?? "",
    // location: stage.location ?? "",
    // isRemoteFriendly: stage.isRemoteFriendly ?? false,
    // isTravelFriendly: stage.isTravelFriendly ?? false,
    // skills: stage.map((stage) => stage.skills) ?? [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeStages = (event) => {
    const { name, value } = event.target;
    setInputStages((prev) => ({ ...prev, [name]: value }));
  };
  // const checkInputNotEmpty = (inputObject) => {
  //   for (const input of inputObject) {
  //     if (input === "") {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(input);
    const responseUserUpdate = await updateUser(token, student.id, input);
    console.log(responseUserUpdate);
    switch (responseUserUpdate.status) {
      case 204:
        setProfilMessage("Changement effectué");
        break;
      case 422:
        setProfilMessage(
          "vos renseignements sont incomplet, merci de les completer avant de les envoyer"
        );
      default:
        break;
    }
    router.refresh();
  };

  const handleSubmitStages = async (event) => {
    event.preventDefault();
    const duration = Number(inputStages.duration);
    const createOrUpdateStages = await addOrUpdateStages(
      token,
      { ...inputStages, duration },
      student
    );
    switch (createOrUpdateStages.status) {
      case 200:
        setStageMessage("Changement effectué");
        break;
      case 422:
        setStageMessage(
          "vos renseignements sont incomplet, merci de les completer avant de les envoyer"
        );
      default:
        break;
    }
    router.refresh();
  };
  const [showSettings, setShowSettings] = useState(false);
  const { lastname, firstname, localisation, linkedin, github } = input;

  return (
    <div className=" flex flex-col  h-full w-full gap-5 min-h-[calc(100vh-4rem)] font-mono text-black3 bg-blue">
      <div className="flex flex-col gap-5 ">
        <div className=" overflow-hidden">
          <ImageProfile
            isSettings={isSettings}
            setShowSettings={setShowSettings}
            show={showSettings}
            student={student}
          />
        </div>

        <div className="flex flex-row flex-wrap  justify-between lg:w-full ">
          {/* image de profile en background avec dessus nom prenom lieu skills  */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center border-4 p-5 rounded-xl w-screen"
          >
            <p className="p-2 ">Information personnelle</p>
            <Input
              error={lastname === ""}
              icon={
                lastname !== "" ? (
                  <GrValidate className="text-green" />
                ) : (
                  <RxCrossCircled className="text-red" />
                )
              }
              onChange={handleChange}
              name="lastname"
              value={lastname}
              label="ton nom de famille"
            />
            <Input
              error={firstname === ""}
              icon={
                firstname !== "" ? (
                  <GrValidate className="text-green" />
                ) : (
                  <RxCrossCircled className="text-red" />
                )
              }
              onChange={handleChange}
              name="firstname"
              value={firstname}
              label="ton prénom"
            />
            <Input
              error={localisation === ""}
              icon={
                localisation !== "" ? (
                  <GrValidate className="text-green" />
                ) : (
                  <RxCrossCircled className="text-red" />
                )
              }
              onChange={handleChange}
              name="localisation"
              value={localisation}
              label="ta ville"
            />
            <Input
              error={github === ""}
              icon={
                github !== "" ? (
                  <GrValidate className="text-green" />
                ) : (
                  <RxCrossCircled className="text-red" />
                )
              }
              onChange={handleChange}
              name="github"
              value={github}
              label="ton pseudo github"
            />
            <Input
              error={linkedin === ""}
              icon={
                linkedin !== "" ? (
                  <GrValidate className="text-green" />
                ) : (
                  <RxCrossCircled className="text-red" />
                )
              }
              onChange={handleChange}
              name="linkedin"
              value={linkedin}
              label="lien vers profil linkedin"
            />
            <p className="p-2">description</p>

            <ProfileDescription
              isSettings={isSettings}
              setIsSettings={setIsSettings}
              setShowSettings={setShowSettings}
              currentUser={student}
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Skills
              stage={false}
              setInput={setInput}
              isSettings={isSettings}
              student={student}
              skills={student.skills}
              show={showSettings}
              setShowSettings={setShowSettings}
              classes="flex flex-col py-2 gap-1 text-black3"
            />
            <Button type="submit">Confirmer</Button>
            {profilMessage && (
              <>
                <Alert
                  show={profilMessage}
                  dismissible={{
                    onClose: () => setProfilMessage(""),
                  }}
                  className="duration-700"
                  color="gray"
                >
                  {profilMessage}
                </Alert>
              </>
            )}
          </form>
        </div>
      </div>
      <section className="flex flex-col ">
        {/* cv link / profile description / stage description / mathHistoric / githubProject / */}
        <form
          onSubmit={handleSubmitStages}
          className="flex flex-col gap-2 h-full flex-wrap items-center lg:w-full justify-between rounded-xl border-4 p-5"
        >
          <p>stage description</p>
          <StageDescription
            isSettings={isSettings}
            setIsSettings={setIsSettings}
            currentUser={student}
            setInput={setInputStages}
            input={inputStages}
            handleChange={handleChangeStages}
          />
          {stageMessage && (
            <>
              <Alert
                show={stageMessage}
                dismissible={{
                  onClose: () => setStageMessage(""),
                }}
                className="duration-700"
                color="gray"
              >
                {stageMessage}
              </Alert>
            </>
          )}
          <Button type="submit">Confirmer</Button>
        </form>
        <div className="lg:flex w-full h-1/3 max-h-[100rem]">
          <div className="items-center w-full">
            {/* <GithubProjects
              setIsSettings={setIsSettings}
              isSettings={isSettings}
              setShowSettings={setShowSettings}
              currentUser={student}
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
