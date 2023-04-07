import Container from "../Container";
import Image from "next/image";

export default function FirstLayout() {
  return (
    <div className="h-85vh flex items-center mt-15vh">
      <div className="border border-gray-300 min-w-full rounded flex flex-col justify-around h-60vh shadow-lg shadow-black3/50">
        <h1 className="font-extrabold font-mono text-black2 text-5xl md:text-7xl px-10 lg:text-8xl text-center">
          Trouvez le stagiaire qu'il vous faut !
        </h1>
        <p className="text-black2 text-xl md:text-2xl lg:text-3xl px-20 text-justify">
          Les étudiants de l’école sont formés de manière professionnelle avec
          les bonnes pratiques, les technologies qui sont demandés sur le
          marché. Recrutez des profils atypiques avec des expériences diverses
          et variées pour enrichir votre team.
        </p>
      </div>
    </div>
  );
}
