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

import { getUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const id = Cookies.get("user-id");
  const token = Cookies.get("jwt");
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState(false);
  const [color, setColor] = useState("bg-gray-800");
  const [textColor, setTextColor] = useState("white");
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
        setTextColor("#ffffff");
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
      <div className="max-w-[80vw] h-[3.5rem] sm:h-[4rem] flex justify-between py-2 px-4 text-whiteSmoke items-center m-auto border-b border-black">
        <Link href="/">
          <h1 className="font-lobster text-4xl  text-black">
            Stage{" "}
            <span className="bg-black tracking-wide text-white text-2xl text-medium font-lobster px-1">
              Seller
            </span>
          </h1>
        </Link>
        <div className="hidden md:flex md:items-center hover:text-indigo-700 ease-in duration-300">
          <Link
            className="px-10 font-jetbrains text-black"
            target="_blank"
            href="https://oclock.io/methode"
          >
            {">"} La méthode O'Clock {"<"}
          </Link>
          {data ? (
            <>
              <Link href={`/students/profil/${data.id}`}>
                <Button>{`${data.lastName} ${data.firstName}`}</Button>
              </Link>
              <Link href="/logout">
                <Button className="p-0 mr-1">liste des types</Button>
              </Link>
              <Link href="/logout">
                <Button>Suggestions by stageSeller</Button>
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
          {data ? (
            <>
              <Link
                onClick={handleNav}
                className="text-2xl py-2 hover:text-indigo-700 ease-in duration-300"
                href={`/${data.type}/profil/${data.id}`}
              >
                {`${data.lastName} ${data.firstName}`}
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
