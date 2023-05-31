"use client";

//Components
import Button from "../utilsComponents/Buttons/Button";

//Dependancies anc hooks
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { usePathname } from "next/navigation";

import { getUser } from "@/lib/users/getUser";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const id = Cookies.get("user-id");
  const token = Cookies.get("jwt");
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);
  const [data, setData] = useState(null);
  const path = usePathname();

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  const getData = async () => getUser(token, id).then((user) => setData(user));

  useEffect(() => {
    if (token && id) {
      getData();
    }
  }, [path]);

  const handleLogout = () => {
    Cookies.remove("user-id");
    Cookies.remove("jwt");
    router.push("/");
    router.refresh();
    handleNav();
    setData(null);
  };
  return (
    <header className=" fixed h-[3.5rem] sm:h-[4rem] left-0 top-0 w-full z-20 ease-in duration-300 bg-white">
      <div className="w-full 2xl:w-[90vw] h-[3.5rem] sm:h-[4rem] flex justify-between py-2 px-4 items-center m-auto border-b border-black bg-white">
        <Link href="/">
          <h1 className="font-lobster flex items-end text-3xl 2xl:text-4xl text-black w-24 normal-case">
            StageSeller
          </h1>
        </Link>
        <div
          className={
            data
              ? ` hidden w-[85%] xl:justify-between xl:flex xl:items-center text-black3 `
              : "hidden xl:justify-between xl:flex xl:items-center text-black3 "
          }
        >
          {data ? (
            <>
              <Link
                className="font-jetbrains text-black text-sm xl:text-md 2xl:text-lg underline hover:text-magenta underline-offset-1 "
                target="_blank"
                href="https://oclock.io/methode"
              >
                La méthode O'Clock
              </Link>
              <Link
                onClick={handleNav}
                className="font-jetbrains text-black text-sm xl:text-md 2xl:text-lg underline hover:text-magenta underline-offset-1 "
                href={`/${
                  data.type === "STUDENT" ? "students" : "companies"
                }/profil/${data.id}`}
              >
                Mon profil
              </Link>
              <Link
                onClick={handleNav}
                className="font-jetbrains text-black text-sm xl:text-md 2xl:text-lg underline hover:text-magenta underline-offset-1 "
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/lists`}
              >
                {data.type === "STUDENT"
                  ? "Toutes les entreprises"
                  : "Tous les étudiants"}
              </Link>
              <Link
                onClick={handleNav}
                className="font-jetbrains text-black text-sm xl:text-md 2xl:text-lg underline hover:text-magenta underline-offset-1 "
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/suggests`}
              >
                Suggestions by StageSeller
              </Link>

              <Button onClick={handleLogout}>Se déconnecter</Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button>SE CONNECTER</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block xl:hidden z-10">
          {mobileNav ? (
            <AiOutlineClose size={20} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `black` }} />
          )}
        </div>
        <div
          className={
            mobileNav
              ? "xl:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
              : "xl:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <Link
            className="text-2xl py-2 hover:text-indigo-700 text-white ease-in duration-300"
            href="https://oclock.io/"
            target="_blank"
            onClick={handleNav}
          >
            La méthode O'Clock
          </Link>
          {data ? (
            <>
              <Link
                onClick={handleNav}
                className="text-2xl py-4 hover:text-indigo-700 text-white ease-in duration-300"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/lists`}
              >
                {data.type === "STUDENT"
                  ? "Toutes les entreprises"
                  : "Tous les étudiants"}
              </Link>
              <Link
                onClick={handleNav}
                className="text-2xl py-4 text-white hover:text-indigo-700 ease-in duration-300"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/suggests`}
              >
                Suggestions by StageSeller
              </Link>
              <Link
                onClick={handleNav}
                className="text-2xl py-2 text-white hover:text-indigo-700 ease-in duration-300"
                href={`/${
                  data.type === "STUDENT" ? "students" : "companies"
                }/profil/${data.id}`}
              >
                Mon profil
              </Link>
              <Link
                onClick={handleLogout}
                className="text-2xl py-4 hover:text-indigo-700 ease-in text-white duration-300"
                href="/"
              >
                Se déconnecter
              </Link>
            </>
          ) : (
            <Link
              onClick={handleNav}
              className="text-2xl py-4 hover:text-indigo-700 ease-in text-white duration-300"
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
