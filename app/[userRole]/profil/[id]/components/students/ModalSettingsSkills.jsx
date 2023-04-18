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

export default function ModalSettingsSkills({ showSettings, studentsSkills }) {
  const token = Cookies.get("jwt");
  const userId = Cookies.get("user-id");
  const [open, setOpen] = useState(false);
  const [userSkills, setUserSkills] = useState(
    studentsSkills ? studentsSkills : []
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
    setIsLoading(true);
    // todo the api execpted the ID of the skills

    const response = await addSkills(token, userId, userSkills);
    if (response) {
      setIsLoading(false);
      setOpen(!open);
    } else {
      setIsLoading(false);
      setErrorMessage(response.message);
    }
  };
  const handleChange = (event) => {
    console.log(event);
    if (userSkills.includes(event)) {
      setUserSkills(userSkills);
    } else {
      const userSkillsArray = [...userSkills, event];
      setUserSkills(userSkillsArray);
    }
  };
  const handleRemoveEvent = (event) => {
    // console.log(event.target.parentElement.firstChild);
    const newArraySkills = [...userSkills];
    newArraySkills.filter((skill) => skill.id !== event.target.id);
    // newArraySkills.remove(event.target.parentElement.firstChild);
    setUserSkills(newArraySkills);
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
              {userSkills.map((skill, index) => (
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
