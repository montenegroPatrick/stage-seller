"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

export default function GithubProjects({ isSettings, setIsSettings, student }) {
  // false data to try
  const [indexProjectInView, setIndexProjectInView] = useState(1);
  const [input, setInput] = useState({
    github: student.github,
    githubApi: "",
  });
  // const repos = {
  //   data: [
  //     {
  //       id: 1,
  //       name: "test1",
  //       description: "je suis le repo numéro 1",
  //       topics: ["test1", "test1topic", "array"],
  //     },
  //     {
  //       id: 2,
  //       name: "test2",
  //       description: "je suis le repo numéro 2",
  //       topics: ["test1", "test1topic", "array"],
  //     },
  //     {
  //       id: 3,
  //       name: "test3",
  //       description: "je suis le repo numéro 3",
  //       topics: ["test1", "test1topic", "array"],
  //     },
  //   ],
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    // todo fetch put avec les nouvelles data
    event.preventDefault();
    await updateUser(token, student.id, input);
    setIsSettings(!isSettings);
    //router.refresh();
  };
  return (
    <section className="flex flex-row items-center justify-between w-full h-full group projectShadow  rounded-3xl ">
      {isSettings ? (
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            value={input.github}
            onChange={handleChange}
            name="github"
          />{" "}
          <input
            type="text"
            value={input.githubApi}
            onChange={handleChange}
            name="githubApi"
          />{" "}
          <button hidden type="submit"></button>
        </form>
      ) : (
        repos.data
          .filter((repo, index) => {
            return index === indexProjectInView;
          })
          .map((repo, index) => (
            <>
              <div
                className="font-bold text-xl md:text-5xl lg:text-9xl text-gray-200 cursor-pointer hover:scale-110"
                onClick={() => {
                  const indexRepos = Object.keys(repos.data);

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
                href="#"
                target="_blank"
                className="h-full flex flex-col justify-center "
              >
                <div className="  p-2 text-black3 rounded-3xl h-3/4 flex flex-col items-center justify-between gap-4 cursor-pointer">
                  <h1 className="text-2xl   lg:uppercase font-semibold  ">
                    {repo.name}
                  </h1>
                  <p className="lg:px-10 py-2 text-justify font-titilliumWeb italic text-md md:text-sm lg:text-xl   shadowBox w-full">
                    {repo.description}
                  </p>
                  <ul className="flex flex-end flex-row flex-wrap">
                    {repo.topics.map((topic) => (
                      <div key={topic.id}>
                        <li className="mt-3  dark:text-white text-sm mr-2 bg-lime-50/[0.1] px-2 shadowBox rounded-xl">
                          #{topic}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </Link>

              <div
                className="font-bold text-xl md:text-5xl lg:text-9xl text-gray-200
               cursor-pointer duration-700"
                onClick={() => {
                  if (
                    indexProjectInView === Math.max(...Object.keys(repos.data))
                  ) {
                    setIndexProjectInView(0);
                  } else {
                    setIndexProjectInView(indexProjectInView + 1);
                  }
                }}
              >
                {" "}
                {">"}{" "}
              </div>
            </>
          ))
      )}
    </section>
  );
}
