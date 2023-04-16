// Initialization for ES Users
import {
  Tab,
  initTE,
} from "tw-elements";

initTE({ Tab });

export default function CompanyMatch() {
  return (
    // <div>
    //   <div className="sm:hidden">
    //     <label for="tabs" className="sr-only">
    //       Suivez vos likes
    //     </label>
    //     <select
    //       id="tabs"
    //       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //     >
    //       <option>Vous avex liké</option>
    //       <option>Ils vous ont liké</option>
    //       <option>Match</option>
    //     </select>
    //   </div>
    //   <ul className="hidden text-sm font-medium  text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mx-auto w-[90%]">
    //     <li className="w-full">
    //       <a
    //         href="#"
    //         className="inline-block w-full p-4  bg-green-500 rounded-tl-lg focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 active focus:outline-none dark:bg-gray-700 dark:text-white text-black "
    //         aria-current="page"
    //       >
    //         J'ai liké
    //       </a>
    //       <article className="bg-gray-400 min-h-[50vh] overflow-y-auto rounded-bl-lg p-2"></article>
    //     </li>
    //     <li className="w-full">
    //       <a
    //         href="#"
    //         className="inline-block w-full p-4 bg-blue-500 text-black hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
    //       >
    //         Ils m'ont liké
    //       </a>
    //       <article className="bg-gray-600 min-h-[50vh] overflow-y-auto p-2"></article>
    //     </li>
    //     <li className="w-full">
    //       <a
    //         href="match"
    //         className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-tr-lg text-black "
    //       >
    //         Match
    //       </a>
    //       <article id='match' className="bg-gray-800 min-h-[50vh] w-full overflow-y-auto rounded-br-lg p-2"></article>
    //     </li>

    //   </ul>
    // </div>

    //autre tab
    <div className="bg-magenta mx-auto my-5 w-[90%] rounded-lg p-3">
      <ul
        className=" flex list-none flex-row flex-wrap border-b-0 pl-0 w-full bg-white rounded-tl-lg rounded-tr-lg"
        id="tabs-tab3"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation bg-white">
          <a
            href="#tabs-home3"
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            id="tabs-home-tab3"
            data-te-toggle="pill"
            data-te-target="#tabs-home3"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home3"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-profile3"
            className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            id="tabs-profile-tab3"
            data-te-toggle="pill"
            data-te-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-messages3"
            className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            id="tabs-messages-tab3"
            data-te-toggle="pill"
            data-te-target="#tabs-messages3"
            role="tab"
            aria-controls="tabs-messages3"
            aria-selected="false"
          >
            Messages
          </a>
        </li>
      </ul>

      <div>
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-white"
          id="tabs-home3"
          role="tabpanel"
          data-te-tab-active
          aria-labelledby="tabs-home-tab3"
        >
          Tab 1 content button version
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile3"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab3"
        >
          Tab 2 content button version
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages3"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab3"
        >
          Tab 3 content button version
        </div>
      </div>
    </div>
  );
}
