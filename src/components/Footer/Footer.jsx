"use client";
import { Typography } from "@material-tailwind/react";
import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black1 text-center rounded-xl py-5 md:justify-between px-10">
        <Logo />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 p-5">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-whiteSmoke transition-colors hover:text-whiteSmoke focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
            >
              Mentions Legales
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; Copyright Stage-Seller
      </Typography>
    </footer>
  );
}
