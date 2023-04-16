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

import { getSkills } from "@/lib/getSkills";

import Cookies from "js-cookie";
import updateUser from "@/FetchFunctions/PUT/updateUser";

export default function ModalSettingsSkills({ showSettings, userId }) {
  const token = Cookies.get("jwt");
  const [open, setOpen] = useState(false);
  const [userSkills, setUserSkills] = useState([]);
  const [skillsList, setskillsList] = useState([]);
  const handleOpen = () => setOpen(!open);

  const getSkillsData = async () =>
    getSkills(token).then((skills) => setskillsList(skills));
  console.log(skillsList);
  useEffect(() => {
    getSkillsData();
    showSettings && handleOpen();
  }, [showSettings]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updateSkills = await updateUser(token, userId, userSkills);
    // todo les conditions de updateSkills
    setOpen(!open);
  };

  const handleChange = (event) => {
    const userSkillsArray = [...userSkills, event];
    setUserSkills(userSkillsArray);
  };
  return (
    <Fragment>
      <Dialog
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
            {userSkills.map((skill, index) => (
              <Avatar
                key={index}
                variant="rounded"
                size="xxl"
                alt={skill}
                src={`https://img.shields.io/badge/-${skill}-black?style=for-the-badge&logo=${skill}&logoColor=61DAFB&color=#505050`}
                className="border-2 w-20 h-7 border-whiteSmoke hover:z-10"
              />
            ))}
            <div className="p-5 w-72">
              <Select
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
                  skillsList.map((skill, index) => (
                    <Option key={index} value={skill.name}>
                      {skill.name}
                    </Option>
                  ))}
              </Select>
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
              <span>Confirm Change</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </Fragment>
  );
}
