import Logo from "./Logo";
import Button from "../Buttons/Button";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function NavBar() {



  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between py-2 px-4 text-whiteSmoke items-center">
        <Logo />
        <div className="hidden sm:block">
          <Button>Se connecter</Button>
        </div>

        {/* Mobile Menu */}
        <div className="block sm:hidden z-10">
          <AiOutlineMenu size={20} />
        </div>
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 ">
          <Link className="text-2xl border py-4 px-2 rounded-md hover:text-indigo-700 ease-in duration-300" href="/login">Se connecter</Link>
        </div>
      </div>
    </div>
  );
}
