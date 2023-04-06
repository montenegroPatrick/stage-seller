"use client";
//Hooks
import Link from "next/link";

//Components
import Logo from "./Logo";
import Container from "../Container";
import Button from "../Buttons/Button";
import { useEffect, useState } from "react";

export default function Header() {
  
  return (
    <header className="bg-black1 fixed w-full h-15vh flex items-center justify-between mx-auto xl:px-20 md:px-10 sm:px-2 px-4 z-20">
      <Logo />
      <Button >Se Connecter</Button>
      
    </header>
  );
}
