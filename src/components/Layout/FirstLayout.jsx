import Container from "../Container";
import Image from "next/image";

export default function FirstLayout() {
  return (
    <div className="h-85vh flex items-center mt-15vh">
      <Container>
      <div className="border border-gray-300 min-w-full rounded flex flex-col justify-around h-60vh shadow-lg shadow-black3/50">
        <h1 className="font-extrabold font-mono text-black2 text-6xl text-center">
          Trouvez le stagiaire qu'il vous faut !
        </h1>
        <p className="text-black2 text-2xl text-center">
          Les étudiants d' O'Clock sont formés avec les bonnes pratiques
        </p>
      </div>
      </Container>
    </div>
  );
}
