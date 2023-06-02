"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/navigation";
import Button from "@/app/utilsComponents/Buttons/Button";
import CardProfile from "../../lists/components/CardProfile";

export default function Slider({ usersToDisplay }) {
  const [sliderRef] = useKeenSlider();

  if (usersToDisplay.length < 1) {
    throw new Error("no result");
  }
  return (
    <>
      <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
        <div ref={sliderRef} className="keen-slider flex-row">
          {usersToDisplay.map((user, index) => (
            <CardProfile
              classes={`flex justify-center items-center  keen-slider__slide number-slide${
                index + 1
              }`}
              user={user}
            />
          ))}
        </div>
      </div>
    </>
  );
}
