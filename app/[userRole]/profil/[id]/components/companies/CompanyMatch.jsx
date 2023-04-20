"use client";
import { useState } from "react";

import CardMatch from "./CardMatch";

export default function CompanyMatch({ company }) {
  const [activeTab, setActiveTab] = useState("tabs-like");

  return (
    <div className=" mx-auto w-full border-black">
      <div className="rounded-t-lg">
        <div className="flex justify-around items-center px-5 py-8 border-b border-black">
          <div>
            <h3 className="text-3xl 2xl:text-4xl leading-6 text-black text-center">
              VOS INTERACTIONS
            </h3>
          </div>
        </div>
        <div className="px-4 py-2 sm:p-2">
          <div className="">
            <nav className="flex justify-around border-b border-black pb-1">
              <button
                className={`${
                  activeTab === "tabs-like"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-black hover:text-gray-700 hover:border-green-500"
                } whitespace-no-wrap py-4 px-1 border-b-2 text-lg focus:outline-none uppercase`}
                onClick={() => setActiveTab("tabs-like")}
              >
                Ils m'ont liké
              </button>
              <button
                className={`${
                  activeTab === "tabs-liked"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-black hover:text-gray-700 hover:border-green-500"
                } ml-8 whitespace-no-wrap py-4 px-1 border-b-2 text-lg focus:outline-none uppercase`}
                onClick={() => setActiveTab("tabs-liked")}
              >
                J'ai liké
              </button>
              <button
                className={`${
                  activeTab === "tabs-match"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-black hover:text-gray-700 hover:border-green-500"
                } ml-8 whitespace-no-wrap py-4 px-1 border-b-2 text-lg focus:outline-none uppercase`}
                onClick={() => setActiveTab("tabs-match")}
              >
                Match
              </button>
            </nav>
          </div>
        </div>
      </div>
      <div className="min-h-[20vh] max-h-40vh rounded-b-lg bg-white p-8 flex flex-col items-center overflow-y-scroll">
        <div
          className={`opacity-${
            activeTab === "tabs-like" ? "100" : "0 hidden"
          } transition-opacity duration-150 ease-linear w-full`}
        >
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          <CardMatch />
          
        </div>
        <div
          className={`opacity-${
            activeTab === "tabs-liked" ? "100" : "0 hidden"
          } transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
        >
          Tab 2 content button version
        </div>
        <div
          className={`opacity-${
            activeTab === "tabs-match" ? "100" : "0 hidden"
          } transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
        >
          Tab 3 content button version
        </div>
      </div>
    </div>
  );
}
