"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import img1 from "@/public/chien-smoking.jpg";
import img2 from "@/public/company.jpeg";
import ProfileCarte from "../../lists/components/CardProfile";
const images = [img1, img2];
export default function Slider() {
  console.log(img1);

  const [sliderRef] = useKeenSlider();
  const user = {
    id: 2,
    email: "younes@seller.com",
    type: "STUDENT",
    companyName: null,
    siret: null,
    firstName: "Younesss youness",
    lastName: "kechiche kechihce",
    address: "Front O'ffice main street",
    postCode: 78180,
    city: "Montigny-le-Bretonneux",
    isUserActive: true,
    showTuto: true,
    isProfileCompleted: false,
    profileImage: "",
    description:
      "Je suis dire, je suis soupir, plus rien ne m'inspire. Pourtant, rien qu'un brin de scintillement me ferait frémir. Y'a rien à dire, personne ne m'aime, on m'évite, on m'ignore. La faune m'embête, la flore me snobe, méprise mon sort. Je m'appelle Albert, le merle noir et gris. Je m'appelle Albert Pompourrie, Je m'appelle Albert, le merle maudit, le merle maudit.",
    resume: null,
    linkedin: null,
    github: "",
    lastConnected: null,
    skills: [
      { id: 1, type: "hard", name: "React" },
      { id: 2, type: "hard", name: "Symfony" },
      { id: 3, type: "hard", name: "Next" },
      { id: 4, type: "hard", name: "Laravel" },
      { id: 5, type: "hard", name: "Python" },
      { id: 6, type: "hard", name: "MySQL" },
    ],
    stages: [
      {
        id: 1,
        description: "présente toi en quelque motsscscsc",
        startDate: "2023-04-30T00:00:00+02:00",
        duration: 5,
        location: "Corse, bastia",
        isRemoteFriendly: true,
        isTravelFriendly: false,
        skills: [Array],
      },
    ],
  };
  return (
    <>
      <div className=" h-[calc(100vh-4rem)] w-full flex justify-center items-center ">
        <div
          ref={sliderRef}
          className="keen-slider flex justify-center items-center w-1/2 "
        >
          <div className="keen-slider__slide w-1/2">
            <ProfileCarte user={user} />
          </div>
          <div className="keen-slider__slide w-1/2">
            <ProfileCarte user={user} />
          </div>
          <div className="keen-slider__slide w-1/2">
            <ProfileCarte user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
