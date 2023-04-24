"use client";
import getPicture from "@/lib/users/getPicture";
import { Alert } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { baseUrl } from "@/lib/baseUrl";
import uploadFile from "@/lib/users/uploadFile";
import Button from "@/app/utilsComponents/Buttons/Button";
import { imageUrl } from "@/lib/imageUrl";
import { useRouter } from "next/navigation";
export default function ImageProfile({
  isSettings,
  setShowSettings,
  show,
  student,
}) {
  const token = Cookies.get("jwt");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "profile_photo");
    uploadFile(token, student.id, formData).then((res) => {
      switch (res.status) {
        case 500:
          setMessage(
            "une erreur est survenue lors de l'enregistrement de l'image réessayer plus tard"
          );
          break;
        case 200:
          setMessage("image chargée");
          break;
        case 400:
          setMessage("merci de choisir un fichier");
        default:
          break;
      }
    });
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  if (isSettings) {
    return (
      <form
        className="flex flex-col gap-4 items-center border-4 p-5 rounded-xl w-full"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label
          className="flex cursor-pointer flex-col items-center justify-center "
          htmlFor="avatar"
        >
          Choisis ta photo
          <MdAddAPhoto size={20} />
          <input
            name="avatar"
            id="avatar"
            type="file"
            onChange={(event) => handleChange(event)}
            className=" border-0 p-5 w-50vh"
            label=""
          />
        </label>
        <Button type="submit">Confirmer</Button>
        {message && (
          <>
            <Alert
              show={!!message}
              dismissible={{
                onClose: () => setMessage(""),
              }}
              className="duration-700"
              color="gray"
            >
              {message}
            </Alert>
          </>
        )}
      </form>
    );
  }
  return (
    <div className="relative p-2 h-[20vh] lg:h-[30vh] w-[20vh] lg:w-[30vh] rounded-full">
      <img
        src={`${imageUrl}${student.profileImage}`}
        className="absolute p-2 top-0 left-0 rounded-full h-full w-full "
      />

      {/* <div className="to-bg-black-10 inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" /> */}
    </div>
  );
}
