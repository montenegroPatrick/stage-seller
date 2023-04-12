import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from "@material-tailwind/react";

export default function ModalSettingsSkills({ showSettings }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    showSettings && handleOpen();
  }, [showSettings]);
  const handleSubmit = (event) => {
    event.preventDefault();
    //update settings
    //if ok
    setOpen(!open);
  };
  const handleSelect = () => {};
  return (
    <form onSubmit={handleSubmit}>
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
        <DialogBody divider>
          <Avatar
            variant="rounded"
            alt="javascript"
            src="https://clipground.com/images/logo-javascript-clipart-1.jpg"
            className="border-2 w-7 h-7 border-whiteSmoke hover:z-10"
          />
          <div class="mb-3 xl:w-96">
            <select
              data-te-select-init
              data-te-select-placeholder="Choisit tes skills"
              multiple
            >
              <option value="1">Next</option>
              <option value="2">React</option>
              <option value="2">Symphony</option>
            </select>
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
      </Dialog>
    </form>
  );
}
