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
import { updateUser } from "@/lib/users/updateUser";
import { addSkills } from "@/lib/users/addSkills";
import { RxCross2 } from "react-icons/rx";
import { addOrUpdateStages } from "@/lib/stages/addOrUpdateStages";

export default function ModalSettingsSkillsStages({
  showSettings,
  student,
  stages,
  setInputStages,
}) {
  const token = Cookies.get("jwt");
  const userId = Cookies.get("user-id");
  const [open, setOpen] = useState(false);
  const [stageSkills, setStageSkills] = useState(
    student ? student.stages.map((stage) => stage.skills) : []
  );
  // skill List fixed who's get with the function getSkills
  const [skillsList, setSkillsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleOpen = () => setOpen(!open);

  const getSkillsData = async () =>
    getSkills(token).then((skills) => setSkillsList(skills));
  useEffect(() => {
    getSkillsData();
    showSettings && handleOpen();
  }, [showSettings]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleOpen();
    // setIsLoading(true);
    // todo the api execpted the ID of the skills
  };

  const handleChange = (event) => {
    if (stageSkills.includes(event)) {
      setStageSkills(stageSkills);
    } else {
      const userSkillsArray = [...stageSkills, event];
      setStageSkills(userSkillsArray);
      const dataSkillUpdate = stageSkills.map((skillName) =>
        skillsList.filter((skill) => skill.name === skillName)
      );
      const skillIds = [];
      dataSkillUpdate.map((object) =>
        object.map((data) => skillIds.push(data.id))
      );
      console.log(skillIds);
      setInputStages((prev) => ({ ...prev, skills: skillIds }));
    }
  };
  const handleRemoveEvent = (event) => {
    // console.log(event.target.parentElement.firstChild);
    //const newArraySkills = [...stageSkills];
    //newArraySkills.filter((skill) => skill.id !== event.target.id);
    // newArraySkills.remove(event.target.parentElement.firstChild);
    //setStageSkills(newArraySkills);
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
        <DialogHeader>
          Voici tes skills, tu peux en rajouter en selectionnant dans la liste
          ci-dessous
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody divider>
            <div className="flex flex-row">
              {stageSkills.map((skill, index) => (
                <div className="flex ">
                  <Avatar
                    key={index}
                    variant="rounded"
                    size="xxl"
                    alt={skill}
                    src={`https://img.shields.io/badge/-${skill}-black?style=for-the-badge&logo=${skill}&logoColor=61DAFB&color=white`}
                    className="border-2 w-20 h-7 border-whiteSmoke hover:z-10"
                  />
                  <RxCross2 onClick={handleRemoveEvent} />
                </div>
              ))}
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
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" type="submit">
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <span>Confirm Change</span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </Fragment>
  );
}
