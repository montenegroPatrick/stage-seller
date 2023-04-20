"use client";

//Components
import Logo from "./Logo";
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
  const [color, setColor] = useState("bg-gray-800");
  const [textColor, setTextColor] = useState("#000000");
  const [data, setData] = useState(null);
  const path = usePathname();
  //const id = path.slice(-1);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: () => getUser(token, id),
  // });
  // console.log("navbar", data);
  const getData = async () => getUser(token, id).then((user) => setData(user));
  //  console.log("dataNavBar", data);

  useEffect(() => {
    if (token && id) {
      getData();
    }
    // const changeColor = () => {
    //   if (window.scrollY >= 90) {
    //     setColor("#ffffff");
    //     setTextColor("#000000");
    //   } else {
    //     setColor("transparent");
    //     setTextColor("#ffffff");
    //   }
    // };
    // window.addEventListener("scroll", changeColor);
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
    <header
      //style={{ backgroundColor: `${color}` }}
      className=" fixed h-[3.5rem] sm:h-[4rem] left-0 top-0 w-full z-20 ease-in duration-300 bg-white"
    >
      <div className="w-full 2xl:w-[90vw] h-[3.5rem] sm:h-[4rem] flex justify-between py-2 px-4 items-center m-auto border-b border-black bg-white">
        <Link href="/">
          <h1 className="font-lobster flex items-end text-3xl 2xl:text-4xl text-black w-24 normal-case">
            StageSeller
          </h1>
        </Link>
        <div className={data ? ` hidden w-[85%] xl:justify-between xl:flex xl:items-center text-black3 ` : 'hidden xl:justify-between xl:flex xl:items-center text-black3 '}>
          {data ? (
            <>
              <Link
                className="font-jetbrains text-black text-sm underline hover:text-magenta underline-offset-1 hover:text-indigo-700"
                target="_blank"
                href="https://oclock.io/methode"
              >
                La méthode O'Clock
              </Link>
              <Link
                className="font-jetbrains text-black text-sm underline hover:text-magenta underline-offset-1 "
                href={`/${
                  data.type === "STUDENT" ? "students" : "companies"
                }/profil/${data.id}`}
              >
                {data.type !== "COMPANY"
                  ? `${data.lastName} ${data.firstName}`
                  : data.companyName}
              </Link>
              <Link
                className="font-jetbrains text-black text-sm underline hover:text-magenta underline-offset-1 "
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/lists`}
              >
                {data.type === "STUDENT"
                  ? "Toutes les entreprises"
                  : "Tous les étudiants"}
              </Link>
              <Link
                className="font-jetbrains text-black text-sm underline hover:text-magenta underline-offset-1 "
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/suggests`}
              >
                Suggestions by stageSeller
              </Link>

              <Button onClick={handleLogout}>Se déconnecter</Button>
            </>
          ) : (
            <Link href="/sign-in" >
              <Button>SE CONNECTER</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block xl:hidden z-10">
          {mobileNav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
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
            className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
            href="https://oclock.io/"
            onClick={handleNav}
          >
            La méthode O'Clock
          </Link>
          {data ? (
            <>
              <Link
                className="text-2xl py-4 hover:text-indigo-700 ease-in duration-300"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/lists`}
              >
                {data.type === "STUDENT"
                  ? "Toutes les entreprises"
                  : "Tous les étudiants"}
              </Link>
              <Link
                className="text-2xl py-4 text-white hover:text-indigo-700 ease-in duration-300"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/suggests`}
              >
                Suggestions by stageSeller
              </Link>
              <Link
                onClick={handleNav}
                className="text-2xl py-2 text-white hover:text-indigo-700 ease-in duration-300"
                href={`/${
                  data.type === "STUDENT" ? "students" : "companies"
                }/profil/${data.id}`}
              >
                {data.type !== "COMPANY"
                  ? `${data.lastName} ${data.firstName}`
                  : data.companyName}
              </Link>
              <Link
                onClick={handleLogout}
                className="text-2xl py-4 hover:text-indigo-700 ease-in duration-300"
                href="/"
              >
                Se déconnecter
              </Link>
            </>
          ) : (
            <Link
              onClick={handleNav}
              className="text-2xl py-4 hover:text-indigo-700 ease-in duration-300"
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
