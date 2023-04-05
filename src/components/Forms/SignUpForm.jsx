"use client";
import InputByUs from "./Input";
import {
  Card,
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SignUpForm({ role }) {
  const [formChange, setFormChange] = useState("");
  const companyName = useRef(null);
  const companyNumber = useRef(null);
  const firstname = useRef(null);
  const lastname = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorVerifPassword, setIsErrorVerifPassword] = useState(false);
  const passwordVerifInput = useRef(null);
  const [mentionLegal, setMentionLegal] = useState(false);
  const [labelPassword, setLabelPassword] = useState("password");

  const validEmail = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;

  const mediumPassword =
    /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

  useEffect(() => {
    setIsErrorEmail(false);
    setIsErrorVerifPassword(false);
    if (emailInput.current !== null) {
      !validEmail.test(emailInput.current.value) &&
      emailInput.current.value !== ""
        ? setIsErrorEmail(true)
        : setIsErrorEmail(false);
    }
    if (passwordInput.current !== null) {
      passwordInput.current.value !== passwordVerifInput.current.value
        ? setIsErrorVerifPassword(true)
        : setIsErrorVerifPassword(false);
    }
  }, [formChange]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsErrorEmail(false);
    setIsErrorVerifPassword(false);
    console.log("/todo fetch");
    // fetch post > all value
  };

  return (
    <Card className="flex flex-col w-full" color="transparent" shadow={true}>
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Inscription
        </Typography>
      </CardHeader>
      <form
        className="mt-8 mb-2 mx-2 "
        onSubmit={handleSubmit}
        onFocus={(event) => setFormChange(event.target.value)}
        onChange={(event) => setFormChange(event.target.value)}
      >
        <div className="mb-4 flex w-full flex-col gap-6">
          {role === "companies" ? (
            <>
              <InputByUs
                className="w-full"
                inputRef={companyName}
                label="nom de l'entreprise"
              />
              <InputByUs
                className="w-full"
                inputRef={companyNumber}
                label="numéro de siret"
              />
            </>
          ) : (
            <>
              <InputByUs className="w-full" inputRef={lastname} label="name" />
              <InputByUs
                className="w-full"
                inputRef={firstname}
                label="prénom / surnom"
              />
            </>
          )}
          <InputByUs
            error={isErrorEmail}
            className="w-full"
            inputRef={emailInput}
            label="Email"
          />
          <InputByUs
            className="w-full"
            inputRef={passwordInput}
            value={passwordValue}
            type="password"
            label={labelPassword}
            onChange={(event) => {
              setPasswordValue(event.target.value);
              mediumPassword.test(passwordValue)
                ? setLabelPassword("bon")
                : passwordValue !== ""
                ? setLabelPassword("faible")
                : setLabelPassword("password");
            }}
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
          onChange={() => setMentionLegal(!mentionLegal)}
          checked={mentionLegal}
        />
        {mentionLegal ? (
          <Button type="submit" className="mt-6" fullWidth>
            Envoyer
          </Button>
        ) : (
          <Button disabled={true} type="submit" className="mt-6" fullWidth>
            Envoyer
          </Button>
        )}
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
