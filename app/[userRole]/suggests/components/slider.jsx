"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ProfileCarte from "../../lists/components/CardProfile";

import { useRouter } from "next/navigation";
import Button from "@/app/utilsComponents/Buttons/Button";

export default function Slider({ usersToDisplay }) {
  const router = useRouter();
  const [sliderRef] = useKeenSlider();

  // const user = {
  //   id: 2,
  //   email: "younes@seller.com",
  //   type: "STUDENT",
  //   companyName: null,
  //   siret: null,
  //   firstName: "Younesss youness",
  //   lastName: "kechiche kechihce",
  //   address: "Front O'ffice main street",
  //   postCode: 78180,
  //   city: "Montigny-le-Bretonneux",
  //   isUserActive: true,
  //   showTuto: true,
  //   isProfileCompleted: false,
  //   profileImage: "",
  //   description:
  //     "Je suis dire, je suis soupir, plus rien ne m'inspire. Pourtant, rien qu'un brin de scintillement me ferait frémir. Y'a rien à dire, personne ne m'aime, on m'évite, on m'ignore. La faune m'embête, la flore me snobe, méprise mon sort. Je m'appelle Albert, le merle noir et gris. Je m'appelle Albert Pompourrie, Je m'appelle Albert, le merle maudit, le merle maudit.",
  //   resume: null,
  //   linkedin: null,
  //   github: "",
  //   lastConnected: null,
  //   skills: [
  //     { id: 1, type: "hard", name: "React" },
  //     { id: 2, type: "hard", name: "Symfony" },
  //     { id: 3, type: "hard", name: "Next" },
  //     { id: 4, type: "hard", name: "Laravel" },
  //     { id: 5, type: "hard", name: "Python" },
  //     { id: 6, type: "hard", name: "MySQL" },
  //   ],
  //   stages: [
  //     {
  //       id: 1,
  //       description: "présente toi en quelque motsscscsc",
  //       startDate: "2023-04-30T00:00:00+02:00",
  //       duration: 5,
  //       location: "Corse, bastia",
  //       isRemoteFriendly: true,
  //       isTravelFriendly: false,
  //       skills: [Array],
  //     },
  //   ],
  // };

  if (usersToDisplay === null) {
    return (
      <aside className="h-screen w-screen flex flex-col text-sm items-center lg:text-xl gap-10 p-5 lg:p-28 m-5 text-justify">
        <h1>
          Nous sommes navré nous n'avons pas d'entreprises à vous proposer pour
          le moment
        </h1>
        <p>veuillez réessayer plus tard</p>
        <img
          className="w-30vh h-30vh"
          src="https://img.freepik.com/vecteurs-premium/homme-sous-loupe-concept-recherche-personnes-postes-vacants-ressources-humaines-vecteur_174639-2013.jpg"
        />
        <Button onClick={() => router.back()}>back</Button>
      </aside>
    );
  }
  return (
    <>
      <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
        <div ref={sliderRef} className="keen-slider">
          {usersToDisplay.map((user, index) => (
            <ProfileCarte
              classes={`keen-slider__slide number-slide${index + 1}`}
              user={user}
            />
          ))}
        </div>
      </div>
    </>
  );
}
