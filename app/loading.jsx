"use client";

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Logo from "./components/Logo";

export default function Loading() {
  return (
    <NavBarMarginContainer classes="bg-black3 h-[calc(100vh-4rem)]">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="loader" />
      </div>
    </NavBarMarginContainer>
  );
}
