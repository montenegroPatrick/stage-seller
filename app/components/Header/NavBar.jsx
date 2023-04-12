"use client";

//Components
import Logo from "../Logo";
import Button from "../Buttons/Button";

//Dependancies anc hooks
import Link from "next/link";
import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import getUser from "@/FetchFunctions/GET/getUser";
import { useSearchParams } from "next/navigation";

export default function NavBar() {
  const params = useSearchParams("");
  const id = params.get("id");
  let user;
  useEffect(() => {
    user = async () => id && params.id && (await getUser(params.id));
  }, [params]);
  // console.log(segment);
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
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed h-[3.5rem] sm:h-[4rem] left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] h-[3.5rem] sm:h-[4rem] m-auto flex justify-between py-2 px-4 text-whiteSmoke items-center">
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
          {user ? (
            <>
              <Link href={`/${user.type}/profil/${user.id}`}>
                <Button>{`${user.lastname} ${user.firstname}`}</Button>
              </Link>
              <Link href="/logout">
                <Button>Se déconnecter</Button>
              </Link>
            </>
          ) : (
            <Link href="/sign-in">
              <Button>Se connecter</Button>
            </Link>
          )}
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
            onClick={handleNav}
          >
            La méthode O'Clock
          </Link>
          {user ? (
            <>
              <Link
                onClick={handleNav}
                className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
                href={`/${user.type}/profil/${user.id}`}
              >
                {`${user.lastname} ${user.firstname}`}
              </Link>
              <Link
                onClick={handleNav}
                className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
                href="/logout"
              >
                Se déconnecter
              </Link>
            </>
          ) : (
            <Link
              onClick={handleNav}
              className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
              href="/sign-in"
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
