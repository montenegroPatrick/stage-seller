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
  } = user;
  const role = companyName ? "companies" : "students";

  return (
    // <Card className="max-w-[100%] h-[20rem] m-3 overflow-hidden p-2 mx-6 font-chivo">
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="transparent"
    //     className="m-0 grid place-content-center rounded-none h-fit "
    //   >
    //     <div className="flex justify-end">
    //       <LikeButton userReceivingId={id} />
    //     </div>

    //     <Typography variant="h4" className="p-1 text-blue-600 ">
    //       {role === "students" ? `${lastName}  ${firstName}` : `${companyName}`}
    //     </Typography>
    //     <p className="text-end">
    //       {city}Paris,75002{postCode}
    //     </p>
    //   </CardHeader>
    //   <CardBody className="flex flex-row gap-2">
    //     <Image
    //       width="100"
    //       height="100"
    //       src={profilImage ? profilImage : "/chien-smoking.jpg"}
    //       alt=""
    //     />
    //     <div className="flex flex-col gap-2">
    //       <Typography variant="h6" color="blue-gray">
    //         Ici les dates de stage
    //       </Typography>
    //       <Typography
    //         variant="paragraph"
    //         color="gray"
    //         className="mt-3 pl-2 font-normal bg-black h-14"
    //       >
    //         {!description ? "Pas de description" : description}
    //       </Typography>
    //     </div>
    //   </CardBody>
    //   <CardFooter className="flex items-center justify-between">
    //     <div className="flex items-center -space-x-3">
    //       <Tooltip content="javascript">
    //         <Avatar
    //           size="sm"
    //           variant="circular"
    //           alt="javascript"
    //           src="https://clipground.com/images/logo-javascript-clipart-1.jpg"
    //           className="border-2 border-whiteSmoke hover:z-10"
    //         />
    //       </Tooltip>
    //       <Tooltip content="php">
    //         <Avatar
    //           size="sm"
    //           variant="circular"
    //           alt="php"
    //           src="https://th.bing.com/th/id/OIP.pkqphAig1t-PCsy4dkVrfAHaD5?pid=ImgDet&rs=1"
    //           className="border-2 border-whiteSmoke hover:z-10"
    //         />
    //       </Tooltip>
    //     </div>
    //     <div>
    //       <Typography className="font-normal">{city}</Typography>
    //       <Typography className="font-normal">remote</Typography>
    //     </div>
    //   </CardFooter>
    //   <div className="flex justify-center">
    //     <Link href={`/${role}/profil/${id}`}>
    //       <button>Voir le profil</button>
    //     </Link>
    //   </div>
    // </Card>
    <div className="relative hover:scale-105 ">
      <a
        href="#"
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
              src={profilImage}
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
          <div className="flex flex-col flex-wrap w-1/2">
            <dt className="text-sm font-medium text-gray-800">
              Remote friendly
            </dt>
            <dd className="text-xs text-red-900">Du 25 Avril au 25 Mai </dd>
          </div>

          <div className="flex flex-wrap w-1/2">
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
            <span className="whitespace-nowrap rounded-full bg-magenta px-2.5 py-0.5 text-sm text-white w-fit m-0.5">
              Live
            </span>
          </div>
        </dl>
      </a>
      <LikeButton userReceivingId={id} />
    </div>
  );
}
