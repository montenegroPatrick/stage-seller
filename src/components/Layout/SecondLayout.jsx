"use client";
//Dependancies
import Image from "next/image";

// Components
import Container from "../Container";
import Button from "../Buttons/Button";

import { useRouter } from "next/navigation";

export default function SecondLayout() {
  const router = useRouter();
  return (
    <section id="commencer" className="bg-white min-h-screen w-full flex flex-wrap items-center font-jetbrains">
      <article className="w-90vh h-50vh 2xl:h-70vh 2xl:w-1/2 m-4 flex relative rounded-xl">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[1] rounded-xl"/>
        <div className="flex flex-col justify-around items-center text-center px-2 z-[2] text-white">
          <h2 className=" font-normal text-xl lg:text-5xl ">Étudiants</h2>
          <p className="text-md lg:text-xl">
            Créez votre profil, parlez de vous et de vos attentes et soyez
            visibles par les recruteurs.
          </p>
          <Button type="button" onClick={() => router.push("/students/signUp")}>
            Inscription
          </Button>
        </div>
        <Image
          fill
          src="/school.jpeg"
          quality={100}
          style={{
            objectFit: "cover",
          }}
          className="rounded-xl"
          alt="Photo d'une salle de classe"
        />
        {/* </div> */}
      </article>

      <article className="w-90vh h-50vh 2xl:h-70vh 2xl:w-1/2 m-4 rounded-lg flex relative">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[1] rounded-xl" />

        <Image
          fill
          src="/company.jpeg"
          quality={100}
          style={{
            objectFit: "cover",
          }}
          className="rounded-xl"
          alt="Photo de grands buildings"
        />
        <div className="flex flex-col justify-around items-center text-center px-2 z-[2] text-white ">
          <h2 className="text-xl lg:text-5xl">Entreprises</h2>
          <p className="text:md lg:text-xl">
            Créez un compte et recherchez votre prochain stagiaire en fonction
            de vos préférences.
          </p>
          <Button
            type="button"
            onClick={() => router.push("/companies/signUp")}
          >
            Inscription
          </Button>
        </div>
      </article>
      {/* </div> */}
    </section>
  );
}
