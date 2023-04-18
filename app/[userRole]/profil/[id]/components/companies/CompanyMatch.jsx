"use client";
import { useState } from "react";

import CardMatch from "./CardMatch";

export default function CompanyMatch() {
  const [activeTab, setActiveTab] = useState("tabs-like");

  
  return (
    <div className= " mx-auto w-full  border-t  md:border-t-0  border-black">
      <div className="rounded-t-lg">
        <div className="flex justify-around items-center px-5 py-8 border-b border-black">
          <div className="">
            <h3 className="underline text-2xl sm:text-3xl 2xl:text-4xl leading-6 text-blackNext text-center font-baskerville">
              Vos interactions
            </h3>

          </div>
        </div>
        <div className="px-4 py-2 sm:p-2 font-chivo">
          <div className="">
            <nav className="flex justify-around border-b border-black pb-1">
              <button
                className={`${
                  activeTab === "tabs-like"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-blackNext hover:text-gray-700 hover:border-green-500"
                } whitespace-no-wrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none`}
                onClick={() => setActiveTab("tabs-like")}
              >
                Ils m'ont liké
              </button>
              <button
                className={`${
                  activeTab === "tabs-liked"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-blackNext hover:text-gray-700 hover:border-green-500"
                } ml-8 whitespace-no-wrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none`}
                onClick={() => setActiveTab("tabs-liked")}
              >
                J'ai liké
              </button>
              <button
                className={`${
                  activeTab === "tabs-match"
                    ? "border-magenta text-magenta"
                    : "border-transparent text-blackNext hover:text-gray-700 hover:border-green-500"
                } ml-8 whitespace-no-wrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none`}
                onClick={() => setActiveTab("tabs-match")}
              >
                Match
              </button> 
            </nav>
          </div>
        </div>
      </div>
      <div className="min-h-[10vh] rounded-b-lg bg-white p-8 flex flex-col items-center">
        <div
          className={`opacity-${
            activeTab === "tabs-like" ? "100" : "0 hidden"
          } transition-opacity duration-150 ease-linear w-full`}
        >
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
