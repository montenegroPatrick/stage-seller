"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  Select,
  Option,
} from "@material-tailwind/react";

import { getSkills } from "@/lib/skills/getSkills";

import Cookies from "js-cookie";

export default function ModalSettingsSkillsStages({
  showSettings,
  stageSkills,
  setStageSkills,
  setInputStages,
}) {
  const token = Cookies.get("jwt");
  const [open, setOpen] = useState(false);
  // skill List fixed who's get with the function getSkills
  const [skillsList, setSkillsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleOpen = () => setOpen(!open);

  const getSkillsData = async () =>
    getSkills(token).then((skills) => setSkillsList(skills));
  useEffect(() => {
    handleClick();
    getSkillsData();

    showSettings && handleOpen();
  }, [showSettings]);

  const handleChange = (event) => {
    const clickedOnExistedSkill = stageSkills.find((stage) =>
      stage.find((skill) => skill.name === event)
    );
    if (clickedOnExistedSkill !== undefined) {
      // const newSkillsArray = stageSkills.filter((skill) =>
      //   skill.filter((skill) => skill.name !== event)
      // );
      // setStageSkills(newSkillsArray);
    } else {
      const skillToPush = skillsList.find((skill) => skill.name === event);

      const stageSkillsArray = [];
      stageSkillsArray.push(skillToPush);

      setStageSkills([...stageSkills, stageSkillsArray]);
    }
  };
  // click on confirm Button,
  const handleClick = () => {
    open && handleOpen();
    const dataSkillUpdate = stageSkills.map((stage) =>
      stage.map((skillOnStage) =>
        skillsList.find((skillOnList) => skillOnList.name === skillOnStage.name)
      )
    );
    skillsList.length > 0
      ? transformSkillsOnId(dataSkillUpdate)
      : transformSkillsOnId(stageSkills);
  };
  //transform for update DB, db await an array of skill's id
  const transformSkillsOnId = (listToTransform) => {
    const skillIds = [];
    listToTransform.map((object) =>
      object.map((data) => skillIds.push(data.id))
    );
    setInputStages((prev) => ({ ...prev, skills: skillIds }));
  };
  const handleRemove = () => {
    setStageSkills([]);
  };
  return (
    <Fragment>
      <Dialog
        className="text-[0.2rem]"
        size="xl"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-lg ">
          Voici tes skills, tu peux en rajouter en selectionnant dans la liste
          ci-dessous
        </DialogHeader>

        <DialogBody divider>
          <div className="flex flex-row">
            {stageSkills.map((skill) =>
              skill.map((obj) => (
                <div className="flex ">
                  <Avatar
                    key={obj.id}
                    variant="rounded"
                    size="xxl"
                    alt={obj.name}
                    src={`https://img.shields.io/badge/-${obj.name}-black?style=for-the-badge&logo=${obj.name}&color=white`}
                    className="border-2 w-20 h-7 border-whiteSmoke hover:z-10"
                  />
                </div>
              ))
            )}
          </div>
          <div className="py-5 ">
            <Select
              error={errorMessage}
              multiple
              variant="static"
              aria-multiselectable
              label="choisit tes skills parmis cette liste"
              onChange={handleChange}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              {skillsList &&
                skillsList.map((skill) => (
                  <Option key={skill.id} value={skill.name}>
                    {skill.name}
                  </Option>
                ))}
            </Select>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleRemove}
            className="mr-1"
          >
            remove all
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={handleClick}>
            {isLoading ? <span>Loading...</span> : <span>Confirm Change</span>}
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
