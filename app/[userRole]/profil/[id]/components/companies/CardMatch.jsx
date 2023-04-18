"use client";
import PropTypes from "prop-types";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/utilsComponents/Buttons/Button";

export default function CardMatch({
  firstName,
  lastName,
  city,
  zipCode,
  id,
  companyName,
}) {
  const router = useRouter();

  return (
    <div className=" my-2 border border-black rounded-lg flex flex-col justify-center items-center lg:flex-row text-blackNext px-4 py-4 lg:justify-around bg-gray-300">
      <div className="font-jetbrains font-medium">
        <h3 className="text-xl">
          Kechiche Younes{firstName} {lastName}
        </h3>
        <p className="text-md text-blue-500">
          Paris{city}, {zipCode}75002
        </p>
      </div>
      <Button onClick={() => router.push("/")}>Voir le profil</Button>
    </div>
  );
}

CardMatch.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
};
