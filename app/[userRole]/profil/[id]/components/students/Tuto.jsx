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

export default function Tuto({ openTuto, setOpenTuto, type, student }) {
  const router = useRouter();
  const token = Cookies.get("jwt");
  const handleOpen = () => {
    setOpenTuto(!openTuto);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(token, student.id, { showTuto: false }).then(() => {
      handleOpen();
      router.refresh();
    });
  };
  return (
    <Fragment>
      <Dialog
        open={openTuto}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Bienvenue sur ton profil !</DialogHeader>
        <DialogBody divider>
          <p>
            Nous t'invitons à le remplir attentivement car c'est la clé de ta
            réussite en tant
            {type === "companies"
              ? "qu'entreprise en recherche de stagiaire motivé"
              : "que candidat motivé"}
            .
          </p>
          <p>
            premièrement à la fin de ce mini tuto tu arriveras sur la page que
            tout le monde peut voir, en haut à gauche il y a un petit bouton
            settings{" "}
            <span>
              <FiSettings />
            </span>{" "}
            qui te permettra de passer en mode settings ou tu pourras modifier
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