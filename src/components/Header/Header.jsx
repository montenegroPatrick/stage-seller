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
    <header className="bg-black1 fixed w-full h-15vh flex items-center justify-between mx-auto xl:px-20 md:px-10 sm:px-2 px-4 z-10">
      <Logo />
      <Button onClick={() => setOpen(!open)} openModal={handleOpen}>Se Connecter</Button>
      <LoginModal open={open} handleOpen={handleOpen} emailInput={emailInput} passwordInput={passwordInput} handleSubmit={handleSubmit}/>

    </header>
  );
}
