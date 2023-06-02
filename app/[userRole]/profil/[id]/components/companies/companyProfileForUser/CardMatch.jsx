"use client";
import PropTypes from "prop-types";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/app/utilsComponents/Buttons/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import SkeletonLoaderCard from "@/app/utilsComponents/Loaders/skeletonLoaderCard";
import getAllUsers from "@/lib/users/getAllUsers";

export default function CardMatch({ objectLike, matches }) {
  const router = useRouter();
  const token = Cookies.get("jwt");
  const [users, setUsers] = useState();

  useEffect(() => {
    const getDataUsers = async () =>
      await getAllUsers(token).then((data) => setUsers(data));
    getDataUsers();
  }, []);
  const userForCard = matches
    ? users && users.find((user) => user.id === objectLike.id)
    : users && users.find((user) => user.id === objectLike.user.id);

  if (!userForCard) {
    return <SkeletonLoaderCard />;
  }
  // if (!matches) {
  //   return (
  //     objectLike.length > 0 &&
  //     objectLike.map((like) => (
  //       <div className=" my-2 border border-black rounded-lg flex flex-col justify-center items-center lg:flex-row text-black px-4 py-2 lg:justify-around bg-graySand">
  //         <div>
  //           <h3 className="text-xl">
  //             {like.firstName} {like.lastName}
  //           </h3>
  //           <p className="text-md text-teal-800 italic">
  //             {like.city}, {like.postCode}
  //           </p>
  //         </div>
  //         <Button onClick={() => router.push(`/students/profil/${id}`)}>
  //           Voir le profil
  //         </Button>
  //       </div>
  //     ))
  //   );
  // }
  return (
    <div className=" my-2 border border-black rounded-lg flex flex-col justify-center items-center lg:flex-row text-black px-4 py-2 lg:justify-around bg-graySand">
      <div>
        <h3 className="text-xl">
          {userForCard.firstName} {userForCard.lastName}
        </h3>
        <p className="text-md text-teal-800 italic">
          {userForCard.city}, {userForCard.postCode}
        </p>
      </div>
      <Button onClick={() => router.push(`/students/profil/${id}`)}>
        Voir le profil
      </Button>
    </div>
  );
}

// CardMatch.propTypes = {
//   city: PropTypes.string.isRequired,
//   postCode: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };
