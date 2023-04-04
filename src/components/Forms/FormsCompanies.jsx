"use client";
import InputByUs from "./Input";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FormCompanies() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorVerifPassword, setIsErrorVerifPassword] = useState(false);
  const passwordVerifInput = useRef();
  const [mentionLegal, setMentionLegal] = useState(false);
  const [newsletters, setNewsletters] = useState(false);
  useEffect(() => {});
  console.log(emailInput.current.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordInput.current.value !== passwordVerifInput.current.value) {
      setIsErrorVerifPassword(true);
    }
    // check = mentionlegal must be true,
    // password === passwordVerif
    // emailInput need to be an valid email
    // check password
  };

  return (
    <Card
      className="flex flex-col w-full mx-14 "
      color="transparent"
      shadow={true}
    >
      <Typography className="w-full mx-2" variant="h4" color="blue-gray">
        Inscription
      </Typography>
      <form className="mt-8 mb-2 mx-2 " onSubmit={handleSubmit}>
        <div className="mb-4 flex w-full flex-col gap-6">
          <InputByUs className="w-full" inputRef={emailInput} label="Email" />
          <InputByUs
            error={isErrorPassword}
            className="w-full"
            inputRef={passwordInput}
            type="password"
            label="Password"
          />
          <InputByUs
            error={isErrorVerifPassword}
            className="w-full"
            inputRef={passwordVerifInput}
            type="password"
            label="password verification"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              J'accepte les
              <Link
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;mentions légales
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Envoyer
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Déjà inscrit ?{" "}
          <Link
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            log in
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
