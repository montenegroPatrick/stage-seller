"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FiSettings } from "react-icons/fi";
import { updateUser } from "@/lib/users/updateUser";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Tuto({ role, user }) {
  const router = useRouter();
  const token = Cookies.get("jwt");
  const [openTuto, setOpenTuto] = useState(false);

  useEffect(() => {
    user.showTuto ? setOpenTuto(true) : setOpenTuto(false);
  }, []);
  const handleOpen = () => {
    setOpenTuto(!openTuto);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(token, user.id, { showTuto: false }).then(() => {
      handleOpen();
      router.refresh();
    });
  };
  return (
    <Fragment>
      <Dialog
        size="xl"
        open={openTuto}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        {role === "students" ? (
          <DialogHeader className="text-md">{`Bienvenue sur ton profil ${user.lastName} ${user.firstName}! `}</DialogHeader>
        ) : (
          <DialogHeader className="text-md">{`Bienvenue sur ton profil ${user.companyName} ! `}</DialogHeader>
        )}
        <DialogBody className="flex flex-col gap-2 text-sm" divider>
          <p>
            Nous t'invitons à le remplir attentivement car c'est la clé de ta
            réussite en tant
            {role === "companies"
              ? " qu'entreprise en recherche de stagiaire motivé"
              : " que candidat motivé"}
            .
          </p>
          <p>
            Premièrement, à la fin de ce mini tuto tu arriveras sur la page
            visible par tous, en haut à gauche il y a un petit bouton settings{" "}
            <FiSettings className="inline-block mb-1" /> <br />
            qui te permettra de passer en mode settings où tu pourras modifier
            ton profil. Clique sur OK pour continuer et compléter ton profil !
          </p>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="blue" onClick={handleSubmit}>
            <span>OK</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
