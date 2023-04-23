"use client";

import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";
import Logo from "./components/Logo";

export default function Loading() {
  return (
    <NavBarMarginContainer classes="bg-black3 h-[calc(100vh-4rem)]">
      <div className="flex bg-black3 justify-center items-center w-screen h-screen">
        <Logo additionalClasses="animate-spin" />
      </div>
    </NavBarMarginContainer>
  );
}
