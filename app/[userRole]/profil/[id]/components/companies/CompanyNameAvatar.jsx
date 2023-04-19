import Image from "next/image";

export default function CompanyNameAvatar({city, postCode, companyName, profileImage}) {
  return (
    <div className="w-full flex flex-col justify-center border-l-purple-200 p-5 mt-5 border-dotted border-b border-black">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-blackNext font-baskerville">{companyName}</h2>
      <p className="text-center text-lg 2xl:text-xl text-green-500">{city}, {postCode}</p>
      <div className="w-[100%] py-5">
        <Image
          src={"/company.jpeg"}
          width={200}
          height={200}
          className="mx-auto rounded-md"
          alt="Logo ou photo de l'entreprise"
        />
      </div>
    </div>
  );
}
