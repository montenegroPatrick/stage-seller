"use client";

export default function Header() {
  const handleScrollBottom = () => {
    const element = document.getElementById("commencer");
    element.scrollIntoView();
  };

  return (
    <header className="bg-fixed bg-center bg-cover custom-img h-screen flex items-center justify-center">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-whiteSmoke z-[2]">
        <h2 className="text-6xl font-jetbrains">Trouvez votre stagiaire</h2>
        <p className="py-5 text-2xl">
          Choisissez parmis nos élèves le collaborateur avec qui ça matchera !
        </p>

        <button onClick={handleScrollBottom} className="px-8 py-2 border mt-2">
          Commencer
        </button>
      </div>
    </header>
  );
}
