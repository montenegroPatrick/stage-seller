"use client";
import PropTypes from "prop-types";

import { useRouter } from "next/router";
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
  return (
    <div className=" my-2 border border-black rounded-lg flex flex-col justify-center items-center lg:flex-row text-blackNext px-4 py-4 lg:justify-around">
      <div className="font-jetbrains font-medium">
        <h3 className="text-2xl">
          Kechiche Younes{firstName} {lastName}
        </h3>
        <p className="text-lg text-blue-500">
          Paris{city}, {zipCode}75002
        </p>
      </div>
      <Link
        
        href="/download"
      >
        <Button>Voir le profil</Button>
      </Link>
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
