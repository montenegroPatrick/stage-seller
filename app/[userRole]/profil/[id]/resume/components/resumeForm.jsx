"use client";

import { Alert } from "@material-tailwind/react";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

import uploadFile from "@/lib/users/uploadFile";
import Button from "@/app/utilsComponents/Buttons/Button";
import { RxResume } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function ResumeForm({ student }) {
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
    formData.append("type", "resume");
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
  return (
    <form
      className="flex flex-col justify-center gap-5 items-center border-4 p-5 rounded-xl w-full"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div>
        <label
          className="flex cursor-pointer flex-col items-center justify-center "
          htmlFor="resume"
        >
          Choisis ton cv :
          <RxResume />
          <input
            name="resume"
            id="resume"
            type="file"
            onChange={(event) => handleChange(event)}
            className="cursor-pointer"
            label=""
          />
        </label>
      </div>
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
