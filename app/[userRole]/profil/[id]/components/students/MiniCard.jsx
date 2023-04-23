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
import LikeButton from "@/app/[userRole]/lists/components/LikeButton";

export default function MiniCard({ objectLike, matches }) {
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
  return (
    <section className="bg-transparent cardProfile boxShadow-inputShadow rounded-3xl p-3 mb-3">
      <div className="flex gap-5  bg-gray-200/[0.3] shadows-text p-3 items-center justify-start rounded-3xl ">
        <Avatar
          size="lg"
          variant="rounded"
          alt="php"
          src={`${imageUrl}${userForCard.profileImage}`}
          className="border-2 border-whiteSmoke hover:z-10  bg-cover"
        />
        <div className="flex flex-col gap-2 w-4/5 justify-between">
          <Link href={`/companies/profil/${userForCard.id}`}>
            <h6 className="text-md lg:text-xl">{userForCard.companyName}</h6>
          </Link>
          <div className="hidden lg:block">
            <Skills classes="w-full " skills={userForCard.skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
