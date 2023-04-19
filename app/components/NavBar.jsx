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
  //console.log("dataNavBar", data);

  useEffect(() => {
    if (token && id) {
      getData();
    }
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#000000");
      }
    };
    window.addEventListener("scroll", changeColor);
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
      className=" fixed h-[3.5rem] sm:h-[4rem] left-0 top-0 w-full z-10 ease-in duration-300 bg-white"
    >
      <div className="max-w-[90vw] h-[3.5rem] sm:h-[4rem] flex justify-between py-2 px-1 text-whiteSmoke items-center m-auto border-b border-black">
        <Link href="/">
          <h1 className="font-lobster text-4xl  text-black">
            Stage{" "}
            <span className="bg-black tracking-wide text-white text-2xl text-medium font-lobster px-1">
              Seller
            </span>
          </h1>
        </Link>
        <div className="hidden lg:flex lg:items-center text-[0.8rem] px-3 text-black3 hover:text-indigo-700 ease-in duration-300">
          <Link
            className="px-10 font-jetbrains text-black"
            target="_blank"
            href="https://oclock.io/methode"
          >
            {">"} La méthode O'Clock {"<"}
          </Link>
          {data ? (
            <>
              <Link
                className="px-2"
                href={`/${
                  data.type === "STUDENT" ? "students" : "companies"
                }/profil/${data.id}`}
              >
                {data.type !== "COMPANY"
                  ? `${data.lastName} ${data.firstName}`
                  : data.companyName}
              </Link>
              <Link
                className="px-2"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/lists`}
              >
                liste des types
              </Link>
              <Link
                className="px-2"
                href={`${
                  data.type === "STUDENT" ? "companies" : "students"
                }/suggests`}
              >
                Suggestions by stageSeller
              </Link>

              <Button onClick={handleLogout}>Se déconnecter</Button>
            </>
          ) : (
            <Link href="/sign-in">
              <Button>Se connecter</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {mobileNav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={
            mobileNav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center flex-col w-full h-screen bg-black text-center ease-in duration-300"
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
                onClick={handleNav}
                className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
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
                className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
                href="/"
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
