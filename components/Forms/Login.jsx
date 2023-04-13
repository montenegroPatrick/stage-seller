"use client";
import postUserLogin from "@/FetchFunctions/POST/postUserLogin";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Alert } from "@material-tailwind/react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import cookie from "cookie";
import { NextResponse } from "next/server";
export default function LogIn() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const response = NextResponse.next();

  response.cookies.set("cookie", "cookie motha fucka");

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

  const handleSubmit = (event) => {
    setErrorMessage("");
    setIsLoading(true);
    event.preventDefault();
    const { email, password } = input;
    fetch("http://franck-roger-server.eddi.cloud/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === "401") {
            console.log("401");
          }
          console.log("erreur", res.status);
          throw new Error(`error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        Cookies.set("jwt", data.token);
        console.log(data.user.id);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <div className="flex h-[100vh] items-center justify-center p-4 bg-black1">
        <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-14 rounded-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Connexion
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ou{" "}
              <Link
                href="/students/signUp"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                créer un compte
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Adresse mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Adresse mail"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  value={input.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 pl-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Mot de passe"
                />
              </div>
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
                  className="ml-2 block text-sm text-gray-900"
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
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
    </>
  );
}
