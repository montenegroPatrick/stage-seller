"use client";

import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Alert, Input } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { baseUrl } from "@/lib/baseUrl";
import axios from "axios";
import Logo from "@/app/components/Logo";
import NavBarMarginContainer from "@/app/components/NavBarMarginContainer";

export default function LogIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setErrorMessage("");
  }, [input]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    const { email, password } = input;
    await axios
      .post(`${baseUrl}login`, { email, password })
      .then(({ headers, data }) => {
        setIsLoading(false);
        Cookies.set("jwt", headers["authorization"]);
        Cookies.set("user-id", data.user.id);
        const role =
          data.user.type.toLowerCase() === "student" ? "students" : "companies";
        Cookies.set("roleUser", role);
        router.push(`/${role}/profil/${data.user.id}`);
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage(err.response.data.error);
        }
      });
  };

  return (
    <NavBarMarginContainer>
      <div className="flex w-full h-screen items-center justify-center p-4 bg-white ">
        <div className="w-full h-full bg-whiteSmoke text-white p-8 sm:p-14 rounded-lg flex flex-col items-center">
          <Logo width={100} height={100} />
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">
              Connexion
            </h2>
            <div className="mt-2 text-center text-sm text-black">
              ou{" "}
              <Link
                href="/students/signUp"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                créer un compte
              </Link>
            </div>
          </div>
          <form
            method="post"
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col gap-2">
              <Input
                name="email"
                type="email"
                value={input.email}
                label="email"
                onChange={handleChange}
                autoComplete="email"
                required
                className="shadow-inputShadow  focus:shadow-lg text-black3"
              />

              <Input
                value={input.password}
                onChange={handleChange}
                label="password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="shadow-inputShadow focus:shadow-lg text-black3"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600 mr-2"
                >
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 underline"
                >
                  Mot de passe oublié
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {isLoading ? "loading..." : "sign in"}
              </button>
              {errorMessage && (
                <Alert
                  className={`${
                    errorMessage ? "opacity-0 " : "opacity-0"
                  } duration-700`}
                  color="red"
                >
                  {errorMessage}
                </Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </NavBarMarginContainer>
  );
}
