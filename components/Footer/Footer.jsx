"use client";
import { Typography } from "@material-tailwind/react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="w-full relative bottom-0 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 bg-transparent text-center py-1 px-2 md:py-2 md:px-10 md:justify-between">
        <Logo />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 p-5 font-lobster">
          <li>
            <Typography
              href="#"
              color="blue-gray"
              className=" text-whiteSmoke transition-colors hover:text-whiteSmoke focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
            >
              Mentions Legales
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
