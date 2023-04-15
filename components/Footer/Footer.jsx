"use client";
import { Typography } from "@material-tailwind/react";
import Logo from "../Logo";

export default function Footer() {
  return (
    // <footer className="w-full relative bottom-0 ">
    //   <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 bg-transparent text-center py-1 px-2 md:py-2 md:px-10 md:justify-between">
    //     <Logo />
    //     <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 p-5 font-lobster">
    //       <li>
    //         <Typography
    //           href="#"
    //           color="blue-gray"
    //           className=" text-whiteSmoke transition-colors hover:text-whiteSmoke focus:text-blue-500"
    //         >
    //           About Us
    //         </Typography>
    //       </li>

    //       <li>
    //         <Typography
    //           as="a"
    //           href="#"
    //           color="blue-gray"
    //           className=" transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
    //         >
    //           Mentions Legales
    //         </Typography>
    //       </li>
    //       <li>
    //         <Typography
    //           as="a"
    //           href="#"
    //           color="blue-gray"
    //           className=" transition-colors text-whiteSmoke hover:text-blue-500 focus:text-blue-500"
    //         >
    //           Contact Us
    //         </Typography>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
    <footer aria-label="Site Footer" className="bg-indigo-700">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Logo />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
