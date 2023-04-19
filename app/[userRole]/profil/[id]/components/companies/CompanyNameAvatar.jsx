'use state'
import Image from "next/image";
import SettingButton from "./SettingButton";
import { useState } from 'react';

export default function CompanyNameAvatar({
  city,
  postCode,
  companyName,
  profileImage,
}) {

  const [settings, setSettings] = useState(false)


  return (
    <div className="w-full md:h-35vh flex flex-col justify-between border-l-purple-200 p-5 border-dotted border-b-2 border-magenta relative">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center text-blackNext font-baskerville">
        {companyName}
      </h2>
      <p className="text-center text-lg 2xl:text-xl text-green-500">
        {city}, {postCode}
      </p>
      <div className="w-[100%] py-5">
        <Image
          src={"/company.jpeg"}
          width={200}
          height={200}
          className="mx-auto rounded-md"
          alt="Logo ou photo de l'entreprise"
        />
      </div>
      <SettingButton top='2' right='2'/>
    </div>
  );
}
