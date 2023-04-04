'use client'
//Hooks
import Link from "next/link";

//Components
import Logo from "./Logo";
import Container from "../Container";
import Button from "./Buttons/Button";
import { useEffect, useState } from "react";


export default function Header() {
  

  return (
    <header className="fixed w-full bg-black3 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
           <Button>Se Connecter</Button>
        </div>
      </Container> 
    </header>
  );
}
