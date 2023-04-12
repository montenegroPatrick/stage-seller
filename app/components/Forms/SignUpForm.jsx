"use client";

import { PostSignUp } from "@/FetchFunctions/POST/PostFunctions";
import {
  Card,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  Alert,
  Input,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SignUpForm({ role }) {
  const [input, setInput] = useState(
    role === "companies"
      ? {
          companyName: "",
          companyNumber: "",
          email: "",
          password: "",
          verifyPassword: "",
        }
      : {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          verifyPassword: "",
        }
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorVerifPassword, setIsErrorVerifPassword] = useState(false);
  const [mentionLegal, setMentionLegal] = useState(false);
  const [labelPassword, setLabelPassword] = useState(" * password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // check if the all the fields are πnot empty

  const mediumPassword =
    /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

  useEffect(() => {
    setErrorMessage("");
    setIsErrorEmail(false);
    setIsErrorVerifPassword(false);
    setDisable(false);

    for (const key in input) {
      input[key] === "" ? setDisable(true) : setDisable(false);
    }
    mentionLegal === false ? setDisable(true) : setDisable(false);
    console.log("map");

    if (input.password !== input.verifyPassword) {
      setIsErrorVerifPassword(true);
    } else {
      setIsErrorVerifPassword(false);
    }
    if (input.password === mediumPassword) {
      setLabelPassword("fort");
    }
  }, [input, mentionLegal]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if the fields are not empty
    if (!input.email || !input.password) {
      setErrorMessage("Les champs obligatoire doivent être rempli");
    } else {
      setIsLoading(true);
      try {
        const postResult = await PostSignUp({
          email: input.email,
          password: input.password,
          companyName: role === "companies" ? input.companyName : null,
          lastname: role === "students" ? input.lastname : null,
          companyNumber: role === "companies" ? input.companyNumber : null,
          firstName: role === "students" ? input.firstname : null,
        });
        setIsLoading(false);
        console.log("post", postResult);
        if (postResult.status === 200) {
          const { id } = postResult;
          router.push(`/${role}/profil/${id}`);
        }
      } catch (error) {
        console.log("error", error);
        setErrorMessage("erreur");
      }
    }
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
      <form className="mt-8 mb-2 mx-2 " onSubmit={handleSubmit}>
        <div className="mb-4 flex w-full flex-col gap-6">
          {role === "companies" ? (
            <>
              <Input
                className="w-full"
                label="nom de l'entreprise"
                name="companyName"
                value={input.companyName}
                onChange={handleChange}
                type="text"
              />
              <Input
                className="w-full"
                value={input.companyNumber}
                name="companyNumber"
                onChange={handleChange}
                label="numéro de siret"
                type="text"
              />
            </>
          ) : (
            <>
              <Input
                className="w-full"
                label="nom"
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
              />
              <Input
                className="w-full"
                name="firstname"
                onChange={handleChange}
                value={input.firstname}
                label="prénom / surnom"
                type="text"
              />
            </>
          )}
          <Input
            error={isErrorEmail}
            name="email"
            className="w-full"
            value={input.email}
            onChange={handleChange}
            label="* Email"
            type="email"
          />
          <Input
            name="password"
            className="w-full"
            value={input.password}
            type="password"
            onChange={handleChange}
            label={labelPassword}
            // onChange={(event) => {
            //   setPasswordValue(event.target.value);
            //   mediumPassword.test(passwordValue)
            //     ? setLabelPassword("bon")
            //     : passwordValue !== ""
            //     ? setLabelPassword("faible")
            //     : setLabelPassword("* password");
            // }}
          />
          <Input
            name="verifyPassword"
            error={isErrorVerifPassword}
            className="w-full"
            onChange={handleChange}
            value={input.verifyPassword}
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
            {errorMessage}
          </Alert>
        )}
        <Button
          disabled={disable}
          type="submit"
          className="mt-6 bg-black3"
          fullWidth
        >
          {isLoading ? "loading..." : "s'inscrire"}
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Déjà inscrit ?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            log in
          </Link>
        </Typography>
      </form>
    </Card>
  );
}