"use client";

import NavBarMarginContainer from "@/components/NavBarMarginContainer";

export default function Loading() {
  return (
    <NavBarMarginContainer classes="bg-white h-[calc(100vh-4rem)]">
      <div className="flex justify-center items-center">
        <h2 className="text-4xl">Loading ...</h2>
      </div>
    </NavBarMarginContainer>
  );
}
