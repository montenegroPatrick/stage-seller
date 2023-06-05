"use client";

import Logo from "@/app/components/Logo";
import { baseUrl } from "@/lib/baseUrl";
import { BsDot } from "react-icons/bs";
import {
  Card,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  Alert,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkPassword } from "../checkPassword";

export default function SignUpForm({ role }) {
  const [input, setInput] = useState(
    role === "companies"
      ? {
          companyName: "",
          siret: "",
          email: "",
          password: "",
          verifyPassword: "",
          address: "",
          city: "",
        }
      : {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          verifyPassword: "",
          address: "",
          city: "",
        }
  );
  const [postCode, setPostCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordNotValid, setPasswordNotValid] = useState([]);
  const [disable, setDisable] = useState(true);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorVerifPassword, setIsErrorVerifPassword] = useState(false);
  const [mentionLegal, setMentionLegal] = useState(false);
  const [labelPassword, setLabelPassword] = useState(" * password");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  // check if the all the fields are not empty

  const mediumPassword =
    /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

  useEffect(() => {
    if (!!input.password) {
      setLabelPassword("* password-faible");
    }
    setErrorMessage("");
    setIsErrorEmail(false);
    setIsErrorVerifPassword(false);
    setDisable(false);
    for (const key in input) {
      if (input[key] !== "" && postCode !== "") {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
    if (!mentionLegal) {
      setDisable(true);
    }
    if (input.password !== "") {
      checkPassword(input.password, setPasswordNotValid);
    }
    if (passwordNotValid.length > 0) {
      setDisable(true);
    }
    if (input.password !== input.verifyPassword) {
      setIsErrorVerifPassword(true);
    } else {
      setIsErrorVerifPassword(false);
    }
    if (mediumPassword.test(input.password)) {
      setLabelPassword("* password-fort");
    }
  }, [input, mentionLegal]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if the fields are not empty
    const type = role === "companies" ? "COMPANY" : "STUDENT";
    if (!input.email || !input.password) {
      setErrorMessage("Les champs obligatoire doivent être rempli");
    } else {
      setIsLoading(true);
      axios
        .post(`${baseUrl}register`, {
          ...input,
          postCode: Number(postCode),
          type,
        })
        .then(({ headers, data }) => {
          setIsLoading(false);
          Cookies.set("jwt", headers["authorization"]);
          Cookies.set("user-id", data.user.id);
          const role =
            data.user.type.toLowerCase() === "student"
              ? "students"
              : "companies";
          Cookies.set("roleUser", role);
          router.push(`/${role}/profil/${data.user.id}`);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMessage("une erreur est survenue veuillez réessayer");
        });
    }
  };

  return (
    <Card className="flex flex-col w-full " color="transparent" shadow={true}>
      <CardHeader
        variant="filled"
        className="mb-2 py-1 grid rounded-lg h-24 md:h-40  place-items-center bg-transparent"
      >
        <Logo height={100} width={100} />
      </CardHeader>
      <form className="mt-8 mb-2 mx-2 " onSubmit={handleSubmit}>
        <div className="mb-4 flex w-full flex-col gap-6 ">
          {role === "companies" ? (
            <>
              <Input
                className="w-full shadow-inputShadow focus:shadow-lg text-black3"
                label="nom de l'entreprise"
                name="companyName"
                value={input.companyName}
                onChange={handleChange}
                type="text"
              />
              <Input
                className="w-full shadow-inputShadow focus:shadow-lg text-black3 "
                value={input.siret}
                name="siret"
                onChange={handleChange}
                label="numéro de siret"
                type="text"
              />
            </>
          ) : (
            <>
              <Input
                className="w-full shadow-inputShadow focus:shadow-lg text-black3"
                label="nom"
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
              />
              <Input
                className="w-full shadow-inputShadow focus:shadow-lg text-black3 "
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
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
            value={input.email}
            onChange={handleChange}
            label="* Email"
            type="email"
          />
          <Input
            name="address"
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
            value={input.address}
            onChange={handleChange}
            label="* adresse postale"
            type="text"
          />
          <Input
            name="city"
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
            value={input.city}
            onChange={handleChange}
            label="* city"
            type="text"
          />
          <Input
            name="postCode"
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
            value={postCode}
            onChange={(event) => setPostCode(event.target.value)}
            label="* code postale"
            type="number"
          />
          <Input
            name="password"
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
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
            className="w-full shadow-inputShadow focus:shadow-lg text-black3"
            onChange={handleChange}
            value={input.verifyPassword}
            type="password"
            label="* password verification"
          />
          <ul className="flex flex-col gap-1">
            {passwordNotValid.length > 0 &&
              passwordNotValid.map((error, index) => (
                <li className="flex gap-2 font-bold" key={index}>
                  <span>{BsDot}</span>
                  {error}
                </li>
              ))}
          </ul>
        </div>

        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal "
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
          <>
            <Alert
              show={!!errorMessage}
              dismissible={{
                onClose: () => setErrorMessage(""),
              }}
              className="duration-700"
              color="gray"
            >
              {errorMessage}
            </Alert>
          </>
        )}
        <Button
          disabled={disable}
          type="submit"
          className="mt-6 bg-black/[0.2] text-black3"
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
