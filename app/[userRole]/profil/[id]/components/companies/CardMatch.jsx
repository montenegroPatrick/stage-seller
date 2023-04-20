"use client";
import PropTypes from "prop-types";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/utilsComponents/Buttons/Button";

export default function CardMatch({
  firstName,
  lastName,
  city,
  postCode,
  id,
}) {
  const router = useRouter();

  return (
    <div className=" my-2 border border-black rounded-lg flex flex-col justify-center items-center lg:flex-row text-blackNext px-4 py-4 lg:justify-around bg-magenta/10">
      <div>
        <h3 className="text-xl">
          Kechiche Younes{firstName} {lastName}
        </h3>
        <p className="text-md text-teal-800 italic">
          Paris{city}, {postCode}75002
        </p>
      </div>
      <Button onClick={()=>router.push(`/students/profil/${id}`)}>Voir le profil</Button>
    </div>
  );
}

// CardMatch.propTypes = {
//   city: PropTypes.string.isRequired,
//   postCode: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };
