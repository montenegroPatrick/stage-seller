"use client";

//Components
import Logo from "./Logo";
import Button from "../Buttons/Button";

//Dependancies anc hooks
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {

  const [mobileNav, setMobileNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between py-2 px-4 text-whiteSmoke items-center">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-lobster text-4xl"
          >
            StageSeller
          </h1>
        </Link>
        {/* <Logo /> */}
        <div
          style={{ color: `${textColor}` }}
          className="hidden md:flex md:items-center hover:text-indigo-700 ease-in duration-300"
        >
          <Link
            className="px-10 font-jetbrains"
            target="_blank"
            href="https://oclock.io/methode"
          >
            {">"} La méthode O'Clock {"<"}
          </Link>
          <Button>Se connecter</Button>
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block md:hidden z-10">
          {mobileNav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            mobileNav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <Link
            className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
            href="https://oclock.io/"
          >
            La méthode O'Clock
          </Link>
          <Link
            className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
            href="/login"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
