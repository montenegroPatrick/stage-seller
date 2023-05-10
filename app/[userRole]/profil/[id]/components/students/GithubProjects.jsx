"use client";

import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";
import GetReposGithub from "@/lib/users/getReposGithub";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GithubProjects({
  isSettings,
  setIsSettings,
  currentUser,
  handleSubmit,
  handleChange,
  input,
}) {
  // false data to try

  const [repos, setRepos] = useState();
  const getRepos = () => {
    GetReposGithub(currentUser.github).then((res) => setRepos(res.data));
  };
  useEffect(() => {
    getRepos();
  }, []);
  const [indexProjectInView, setIndexProjectInView] = useState(1);

  if (!repos) {
    return (
      <section className="flex flex-col text-center gap-2 items-center justify-center underline">
        <p> Ton pseudo github n'existe pas ! </p>
        <p>
          {" "}
          Si tu le renseigne en mode EDIT les visiteurs pourront accèder à tes
          repository publics.{" "}
        </p>
        <p>
          On te conseille bien documenter tes repos sur github, l'affichage se
          fait par rapport à ses données.
        </p>
      </section>
    );
  }
  return (
    <section className=" glassMorph w-full h-full  group projectShadow rounded-3xl shadows-text ">
      {repos
        .filter((repo, index) => {
          return index === indexProjectInView;
        })
        .map((repo, index) => (
          <div
            key={repo.id}
            className="flex items-center p-5 h-full grow justify-between"
          >
            <div
              className="font-bold md:text-5xl lg:text-7xl cursor-pointer hover:scale-110"
              onClick={() => {
                const indexRepos = Object.keys(repos);

                if (indexProjectInView > 0) {
                  setIndexProjectInView(indexProjectInView - 1);
                } else {
                  setIndexProjectInView(Math.max(...indexRepos));
                }
              }}
            >
              {" "}
              {"<"}{" "}
            </div>
            <Link
              href={repo.html_url}
              target="_blank"
              className="h-full flex flex-col justify-center"
            >
              <div className="  p-2 rounded-3xl h-3/4 flex flex-col items-center justify-between gap-4 cursor-pointer">
                <h1 className="text-2xl   lg:uppercase font-semibold  ">
                  {repo.name}
                </h1>
                <p className="lg:px-10 py-2 text-center font-titilliumWeb italic text-md md:text-sm lg:text-xl   shadowBox w-full">
                  {repo.description}
                </p>
                <ul className="flex flex-end flex-row flex-wrap">
                  {repo.topics.map((topic) => (
                    <div key={topic.id}>
                      <li className="mt-3  dark:text-white text-sm  bg-lime-50/[0.1] px-2 shadowBox rounded-xl">
                        #{topic}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </Link>

            <div
              className="font-bold text-xl md:text-5xl lg:text-7xl
               cursor-pointer duration-700"
              onClick={() => {
                if (indexProjectInView === Math.max(...Object.keys(repos))) {
                  setIndexProjectInView(0);
                } else {
                  setIndexProjectInView(indexProjectInView + 1);
                }
              }}
            >
              {" "}
              {">"}{" "}
            </div>
          </div>
        ))}
    </section>
  );
}
