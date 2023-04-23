"use client";
import { Avatar, Typography } from "@material-tailwind/react";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import getAllUsers from "@/lib/users/getAllUsers";
import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";
import { imageUrl } from "@/lib/imageUrl";
import SkeletonLoaderCard from "@/app/utilsComponents/Loaders/skeletonLoaderCard";
import Link from "next/link";

export default function MiniCard({ objectLike }) {
  const token = Cookies.get("jwt");
  const [users, setUsers] = useState();

  useEffect(() => {
    const getDataUsers = async () =>
      await getAllUsers(token).then((data) => setUsers(data));
    getDataUsers();
  }, []);
  const userForCard =
    users && users.find((user) => user.id === objectLike.user.id);

  if (!userForCard) {
    return <SkeletonLoaderCard />;
  }
  return (
    <section className="bg-transparent rounded-3xl p-3 mb-3">
      <Link href={`/companies/profil/${userForCard.id}`}>
        <div className="flex gap-5 glassMorph bg-gray-200/[0.3] shadows-text p-3 items-center justify-start rounded-3xl ">
          <Avatar
            size="lg"
            variant="rounded"
            alt="php"
            src={`${imageUrl}${userForCard.profileImage}`}
            className="border-2 border-whiteSmoke hover:z-10  bg-cover"
          />
          <div className="flex w-4/5 justify-between">
            <Typography variant="h5">{userForCard.companyName}</Typography>

            <Skills skills={userForCard.skills} />
          </div>
        </div>
      </Link>
    </section>
  );
}
