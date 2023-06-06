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
import ResumeForm from "../../resume/components/resumeForm";

export default function UserProfilSettings({
  isSettings,
  setIsSettings,
  user,
  role,
}) {
  const token = Cookies.get("jwt");

  const router = useRouter();
  const [profilMessage, setProfilMessage] = useState("");
  const [stageMessage, setStageMessage] = useState("");
  const [input, setInput] = useState(
    role === "students"
      ? {
          lastname: user.lastName ?? "",
          firstname: user.firstName ?? "",
          localisation: user.city ?? "",
          github: user.github ?? "",
          profileImage: user.profileImage ?? "",
          description: user.description ?? "",
          skills: user.skills ?? [],
        }
      : {
          companyName: user.companyName ?? "",

          localisation: user.city ?? "",
          github: user.github ?? "",
          profileImage: user.profileImage ?? "",
          description: user.description ?? "",
          skills: user.skills ?? [],
        }
  );
  const { stages } = user;

  const [inputStages, setInputStages] = useState(
    stages.length > 0
      ? stages.find((stage) => ({
          description: stage.description,
          startDate: stage.startDate ?? "",
          duration: stage.duration ?? "",
          location: stage.location ?? "",
          isRemoteFriendly: stage.isRemoteFriendly ?? false,
          isTravelFriendly: stage.isTravelFriendly ?? false,
          skills: stage.skills ?? [],
        }))
      : {
          description: "",
          startDate: "",
          duration: "",
          location: "",
          isRemoteFriendly: false,
          isTravelFriendly: false,
          skills: [],
        }
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeStages = (event) => {
    const { name, value } = event.target;
    if (name === "startDate") {
      // do nothing
    }
    //else
    setInputStages((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const responseUserUpdate = await updateUser(token, user.id, input);

    switch (responseUserUpdate.status) {
      case 204:
        setProfilMessage("Changement effectué");
        break;
      case 422:
        setProfilMessage(
          "vos renseignements sont incomplet, merci de les completer avant de les envoyer"
        );
      case 500:
        setProfilMessage(
          "Nous rencontrons des problèmes avec le serveur merci de revalider vos données "
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
      user
    );
    switch (createOrUpdateStages.status) {
      case 200:
        setStageMessage("Changement effectué");
        break;
      case 422:
        setStageMessage(
          "vos renseignements sont incomplet, merci de les completer avant de les envoyer"
        );
      case 500:
        setStageMessage(
          "nous rencontrons des problèmes avec le serveur merci de réessayer ultérieurement"
        );
      default:
        break;
    }
    router.refresh();
  };
  const [showSettings, setShowSettings] = useState(false);
  const { lastname, companyName, firstname, localisation, linkedin, github } =
    input;

  return (
    <div className=" flex flex-col  h-full w-full gap-5 min-h-[calc(100vh-4rem)] font-mono text-black3 bg-blue">
      <div className="flex flex-col gap-5 ">
        <div className=" overflow-hidden">
          <ImageProfile
            isSettings={isSettings}
            setShowSettings={setShowSettings}
            show={showSettings}
            user={user}
          />
        </div>
        {role === "students" && <ResumeForm student={user} />}
        <div className="flex flex-row flex-wrap  justify-between lg:w-full ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center border-4 p-5 rounded-xl w-screen"
          >
            <p className="p-2 ">Information personnelle</p>
            {role === "students" ? (
              <>
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
              </>
            ) : (
              <Input
                error={companyName === ""}
                icon={
                  companyName !== "" ? (
                    <GrValidate className="text-green" />
                  ) : (
                    <RxCrossCircled className="text-red" />
                  )
                }
                onChange={handleChange}
                name="companyName"
                value={companyName}
                label="nom de l'entreprise"
              />
            )}
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
            {role === "students" && (
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
            )}
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
              currentUser={user}
              input={input}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Skills
              stage={false}
              setInput={setInput}
              isSettings={isSettings}
              user={user}
              skills={user.skills}
              show={showSettings}
              setShowSettings={setShowSettings}
              classes="flex flex-col py-2 gap-1 text-black3"
            />
            <Button type="submit">Confirmer</Button>
            {profilMessage && (
              <>
                <Alert
                  show={!!profilMessage}
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
        {/* cv link / profile description / stage description / mathHistoric */}
        <form
          onSubmit={handleSubmitStages}
          className="flex flex-col gap-2 h-full flex-wrap items-center lg:w-full justify-between rounded-xl border-4 p-5"
        >
          <p>stage description</p>
          <StageDescription
            isSettings={isSettings}
            setIsSettings={setIsSettings}
            currentUser={user}
            setInput={setInputStages}
            input={inputStages}
            handleChange={handleChangeStages}
          />

          {stageMessage && (
            <>
              <Alert
                show={!!stageMessage}
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
      </section>
    </div>
  );
}
