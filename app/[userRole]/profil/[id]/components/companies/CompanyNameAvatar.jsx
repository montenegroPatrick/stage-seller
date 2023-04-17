import Image from "next/image";

export default function CompanyNameAvatar() {
  return (
    <div className="w-full flex flex-col justify-center border-l-purple-200 p-5 mt-5 border-dotted border-b border-black">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-blueDark font-baskerville">Nom de l'entreprise</h2>
      <p className="text-center text-lg text-magenta">Paris, 75002</p>
      <div className="w-[100%] py-5">
        <Image
          src="/company.jpeg"
          width={200}
          height={200}
          className="mx-auto rounded-md"
        />
      </div>
    </div>
  );
}
