import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function TheMatch({ openMatch }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    openMatch ? setOpen(true) : setOpen(false);
  }, [openMatch]);

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
          <p>
            Prochainement à ce stade il y aura la possibilité d'ouvrir un chat
            entre les deux utilisateurs et pleins d'autres fonctionnalitées
          </p>
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
