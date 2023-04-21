"use client";
import getPicture from "@/lib/users/getPicture";
import { Card, CardHeader, CardBody, Input } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { baseUrl } from "@/lib/baseUrl";
import uploadFile from "@/lib/users/uploadFile";
import Button from "@/app/utilsComponents/Buttons/Button";
import ButtonForm from "../companies/ButtonForm";
export default function ImageProfile({
  isSettings,
  setShowSettings,
  show,
  student,
}) {
  const token = Cookies.get("jwt");
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "profile_photo");
    const response = await uploadFile(token, student.id, formData).then(
      (res) => {
        console.log(res);
      }
    );
  };
  const handleChange = (event) => {
    setFile(event.target);
    console.log(file);
  };
  return (
    <Card className=" relative grid h-[20vh] lg:h-[30vh] w-[20vh] lg:w-[30vh] items-end justify-center text-center rounded-full">
      <CardHeader
        color="transparent"
        className="rounded-full  w-full  bg-cover bg-center"
      >
        {
          <img
            src={`http://franck-roger-server.eddi.cloud/uploads/${student.profileImage}`}
            className=""
          />
        }
        {/* <div className="to-bg-black-10 inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" /> */}
      </CardHeader>
      <CardBody className="block px-6 md:px-12">
        {isSettings && (
          <form onSubmit={(event) => handleSubmit(event)}>
            <label for="avatar">Choose a profile picture:</label>
            <input
              name="avatar"
              id="avatar"
              type="file"
              onChange={(event) => handleChange(event)}
              className=" border-0 p-5 w-50vh"
              icon={<MdAddAPhoto size={20} />}
              label=""
            />
            <button type="submit">envoyer</button>
          </form>
        )}
      </CardBody>
    </Card>
  );
}
