"use client";


//Components
import Logo from "./Logo";
import Button from "../Buttons/Button";
import LoginModal from "../Forms/LoginModal";

import { useRef, useState } from "react";

export default function Header() {

  //Modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //Modal inputs ref
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInput.current.value
    const password = passwordInput.current.value
  };

  return (
    <header className="bg-fixed bg-center bg-cover custom-img h-screen flex items-center justify-center" >
      {/* <Logo />
      <Button onClick={() => setOpen(!open)} openModal={handleOpen}>Se Connecter</Button>
      <LoginModal open={open} handleOpen={handleOpen} emailInput={emailInput} passwordInput={passwordInput} handleSubmit={handleSubmit}/> */}
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]" />
    <div className="p-5 text-whiteSmoke lg:ml-[-5rem] lg:mt-[-5rem] z-[2]">
      <h2 className="text-5xl font-jetbrains">Trouvez votre stagiaire</h2>
      <p className="py-5 text-xl">Choisissez parmis nos élèves le collaborateur avec qui ça matchera !</p>
      <button className="px-8 py-2 border mt-2">Commencer</button>
    </div>
    </header>
  );
}
