"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCarte({user}) {
  //TODO regarder si le user.role est company ou student pour éventuellement changer des champs dynaiquement
  console.log('user dans card profil', user)
  const {lastName, firstName, companyName, id, email, city, postCode, profilImage, description} = user
  const role = companyName ? "students" : "companies";
  
  console.log(role)
  return (
     <Link href={`/${role}/profil/${id}`}>
    <Card className="max-w-[100%] h-[20rem] m-3 overflow-hidden p-2 mx-auto">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 grid place-content-center rounded-none h-fit "
      >
        <Typography variant="h4" className="p-1 ">
          { role === "companies" ?`${lastName} / ${firstName}` : `${companyName}`  }
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-row gap-2">
        <Image width="100" height="100" src={profilImage ? profilImage : "chien-smoking.jpg"} alt="" />
        <div className="flex flex-col gap-2">
          <Typography variant="h6" color="blue-gray">
            name of stage looking for
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mt-3 pl-2 font-normal"
          >
            {!description ? "Pas de description" : description}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="javascript">
            <Avatar
              size="sm"
              variant="circular"
              alt="javascript"
              src="https://clipground.com/images/logo-javascript-clipart-1.jpg"
              className="border-2 border-whiteSmoke hover:z-10"
            />
          </Tooltip>
          <Tooltip content="php">
            <Avatar
              size="sm"
              variant="circular"
              alt="php"
              src="https://th.bing.com/th/id/OIP.pkqphAig1t-PCsy4dkVrfAHaD5?pid=ImgDet&rs=1"
              className="border-2 border-whiteSmoke hover:z-10"
            />
          </Tooltip>
        </div>
        <div>
          <Typography className="font-normal">{city}</Typography>
          <Typography className="font-normal">remote</Typography>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
}
