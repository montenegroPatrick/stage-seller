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

export default function ModalSettingsSkills({ showSettings }) {
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState(["skills"]);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    showSettings && handleOpen();
  }, [showSettings]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    //update settings
    //if ok
    setOpen(!open);
  };
  const handleChange = (event) => {
    const skillsArray = [...skills, event];
    setSkills(skillsArray);
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
            {skills.map((skill, index) => (
              <Avatar
                key={index}
                variant="rounded"
                alt={skill}
                src={`https://clipground.com/images/logo-${skill}-clipart-1.jpg`}
                className="border-2 w-7 h-7 border-whiteSmoke hover:z-10"
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
                {/* todo : map on skills table */}
                <Option value="react">react</Option>
                <Option value="Next">Next</Option>
                <Option value="Symphony">Symphony</Option>
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
            <Button variant="gradient" color="green" type="submit">
              <span>Confirm Change</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </Fragment>
  );
}
