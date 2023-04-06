//Dependancies
import Image from "next/image";

// Components
import Container from "../Container";
import Button from "../Buttons/Button";

export default function SecondLayout() {
  return (
    <section className="bg-black1 min-h-screen flex items-center">
      <Container>
        <div className=" bg-black2 min-w-full rounded flex flex-wrap justify-center 2xl:flex-nowrap shadow-lg shadow-black3/50 sm:p-2">
          <article className="bg-whiteSmoke border-black1 w-90vh h-50vh 2xl:h-70vh 2xl:w-1/2 m-4 rounded-lg flex">
            <div className="w-1/2 margin flex flex-col justify-around items-center text-center font-mono px-2">
              <h2 className="text-xl lg:text-3xl">Étudiants</h2>
              <p className="text:md lg:text-lg">
                Créez votre profil, parlez de vous et de vos attentes et soyez
                visibles par les recruteurs.
              </p>
              <Button>Inscription</Button>
            </div>
            <div className="shadow-sm shadow-transparent w-1/2 relative">
              <Image
                fill
                src="/school.jpeg"
                quality={100}
                style={{
                  objectFit: "cover",
                }}
                className="rounded-r-lg"
                alt="Photo d'une salle de classe"
              />
            </div>
          </article>
          <article className="bg-whiteSmoke border-black1 w-90vh h-50vh 2xl:h-70vh 2xl:w-1/2 m-4 rounded-lg flex">
            <div className="shadow-sm shadow-transparent w-1/2 relative">
              <Image
                fill
                src="/company.jpeg"
                quality={100}
                style={{
                  objectFit: "cover",
                }}
                className="rounded-l-lg"
                alt="Photo de grands buildings"
              />
            </div>
            <div className="w-1/2 margin flex flex-col justify-around items-center text-center font-mono px-2">
              <h2 className="text-xl lg:text-3xl">Entreprises</h2>
              <p className="text:md lg:text-lg">
                Créez un compte et recherchez votre prochain stagiaire en
                fonction de vos préférences.
              </p>
              <Button>Inscription</Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
