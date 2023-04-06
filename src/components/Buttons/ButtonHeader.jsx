"use client";

import { useState } from "react";
import Link from "next/link";

export default function ButtonHeader({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-20vh font-mono">
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block hover:scale-110 shadow-lg px-4 py-3 bg-indigo-700 hover:bg-whiteSmoke hover:text-indigo-700 text-whiteSmoke text-sm sm:text-md font-mono rounded-lg gradient"
        type="button"
        onClick={() => setOpenModal(!openModal)}
      >
        Toggle modal
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          openModal
            ? "fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
            : "hidden"
        }
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-black3 rounded-lg shadow text-whiteSmoke">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 className="text-center text-3xl font-semibold dark:text-white">
                Connexion
              </h3>
              <button
                type="button"
                className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => setOpenModal(!openModal)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="flex flex-col items-center p-6 space-y-3">
            <label htmlFor="">E-mail</label>
              <input className="w-60vh h-8" type="email" value={'lui'} onChange={()=>console.log('onChange input')}/>
              <label htmlFor="">Mot de passe</label>
              <input className="w-60vh h-8" type="password" value={'lui'} onChange={()=>console.log('onChange input')}/>
              <Link href={"/"}>Mot de passe oublié</Link>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="hover:scale-110 shadow-lg px-4 py-3 bg-indigo-700 hover:bg-whiteSmoke hover:text-indigo-700 text-whiteSmoke text-sm sm:text-md font-mono rounded-lg gradient"
              >
                Se connecter
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="hover:scale-110 shadow-lg px-4 py-3 bg-red-700 hover:bg-whiteSmoke hover:text-indigo-700 text-whiteSmoke text-sm sm:text-md font-mono rounded-lg gradient"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
