import Image from "next/image";

export default function CompanyNameAvatar() {
  return (
    <div className="w-[90%] flex flex-col justify-center bg-white/50 border-l-purple-200 rounded-xl p-5 mx-auto">
      <h2 className="text-3xl sm:text-4xl text-center text-black font-medium">Nom de l'entreprise</h2>
      <div className="w-[100%] py-5">
        <Image
          src="/company.jpeg"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
