"use client"; // Error components must be Client components

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  return (
    <NavBarMarginContainer classes="bg-rhubard h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl py-20vh text-white">Something went wrong!</h2>
        <button
          className="bg-red-700 py-3 px-5 rounded-full text-white mb-5"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Rafraîchir
        </button>
      </div>
    </NavBarMarginContainer>
  );
}
