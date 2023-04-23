"use client";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Avatar,
//   Tooltip,
// } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "@/app/[userRole]/lists/components/LikeButton";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { imageUrl } from "@/lib/imageUrl";
import Skills from "../../profil/[id]/components/students/Skills";
import { Suspense } from "react";
import SkeletonLoaderCard from "@/app/utilsComponents/Loaders/skeletonLoaderCard";

export default function ProfileCarte({ user }) {
  //TODO regarder si le user.role est company ou student pour éventuellement changer des champs dynamiquement
  //console.log("user dans card profil", user);
  const {
    lastName,
    firstName,
    companyName,
    id,
    email,
    city,
    postCode,
    profilImage,
    description,
    stages,
    skills,
  } = user;
  const role = companyName ? "companies" : "students";

  return (
    <div className="relative hover:scale-105 ">
      <Link
        href={`${role}/profil/${id}`}
        className="relative block overflow-hidden rounded-lg bg-white border border-black p-4 sm:p-6 lg:p-8 mt-4 mx-2"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-black sm:text-3xl ">
              {role === "students"
                ? `${lastName}  ${firstName}`
                : `${companyName}`}
            </h3>

            <p className="mt-1 text-xs font-medium text-green-600">
              Paris, 75002
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt={profilImage}
              src={`${imageUrl}${profilImage}`}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4 min-w-[18rem] max-w-sm">
          <p className="w-full max-h-[5rem] text-sm text-gray-700 bg-white overflow-y-auto rounded-lg py-2 px-2 border border-black">
            {description ? description : "Pas de description"}
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          {stages.map((stage) => (
            <div className="flex flex-col flex-wrap w-1/2">
              <dt className="text-sm font-medium text-gray-800">
                {stage.remoteFriendly
                  ? "le télétravail c'est la vie"
                  : "travailler au bureau y'a rien de mieu"}
              </dt>
              <dd className="text-xs text-red-900">
                {`${stage.start_date} pour une durée de ${stage.duration}`}{" "}
              </dd>
              <dd className="text-xs text-red-900">
                {`${stage.start_date} pour une durée de ${stage.duration}`}{" "}
              </dd>
            </div>
          ))}
          <div className="flex flex-wrap w-1/2">
            <Skills skills={skills} stages={false} />
          </div>
        </dl>
      </Link>
      <LikeButton userReceivingId={id} />
    </div>
  );
}
