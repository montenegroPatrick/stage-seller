"use client";
import { PostFetch } from "@/FetchFunctions/POST/PostFunctions";
import InputByUs from "./Input";
import {
  Card,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  Alert,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SignUpForm({ role }) {
  const [errorMessage, setErrorMessage] = useState("");
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
  const [labelPassword, setLabelPassword] = useState(" * password");

  // check if the all the fields are not empty

  const validEmail = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]/;

  const mediumPassword =
    /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

  useEffect(() => {
    setErrorMessage("");
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
    // check if the fields are not empty
    !emailInput.current.value || !passwordInput.current.value
      ? setErrorMessage("Les champs obligatoire doivent être rempli")
      : PostFetch({
          email: emailInput.current.value,
          password: passwordInput.current.value,
          name:
            role === "companies"
              ? companyName.current.value
              : lastname.current.value,
          firstName: role === "students" && firstname.current.value,
          companyNumber: role === "companies" && companyNumber.current.value,
        })
          .then((res) => res.data)
          .catch((err) => console.log(err));
  };

  return (
    <Card className="flex flex-col w-full" color="transparent" shadow={true}>
      <CardHeader
        variant="filled"
        color="black"
        className="mb-4 py-1 grid rounded-lg h-16 md:h-28 place-items-center text-white bg-black3"
      >
        <Typography variant="h4" className="">
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
                type="text"
              />
              <InputByUs
                className="w-full"
                inputRef={companyNumber}
                label="numéro de siret"
                type="text"
              />
            </>
          ) : (
            <>
              <InputByUs className="w-full" inputRef={lastname} label="name" />
              <InputByUs
                className="w-full"
                inputRef={firstname}
                label="prénom / surnom"
                type="text"
              />
            </>
          )}
          <InputByUs
            error={isErrorEmail}
            className="w-full"
            inputRef={emailInput}
            label="* Email"
            type="email"
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
                : setLabelPassword("* password");
            }}
          />
          <InputByUs
            error={isErrorVerifPassword}
            className="w-full"
            inputRef={passwordVerifInput}
            type="password"
            label="* password verification"
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
        {errorMessage && (
          <Alert className="duration-700" color="red">
            {" "}
            {errorMessage}{" "}
          </Alert>
        )}
        <Button
          disabled={!mentionLegal}
          type="submit"
          className="mt-6 bg-black3"
          fullWidth
        >
          s'inscrire
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
