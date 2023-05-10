import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function TheMath({ openMatch, setIsMatch }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setIsMatch(false);
  };

  useEffect(() => {
    openMatch ? setOpen(true) : setOpen(false);
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>It's a match</DialogHeader>
        <DialogBody divider>
          Prochainement ici on aura possibilité de dialoguer avec l'employeur
          intérréssé
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
