import Image from "next/image";

export default function CompanyNameAvatar() {
  return (
    <div className="w-[90%] flex flex-col justify-center bg-magenta border-l-purple-200 rounded-xl p-5 mx-auto my-5">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-white font-medium font-lobster">Nom de l'entreprise</h2>
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
