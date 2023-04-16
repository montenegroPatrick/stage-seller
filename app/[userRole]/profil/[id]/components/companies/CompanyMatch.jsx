export default function CompanyMatch() {
  return (
    <div>
      <div className="sm:hidden">
        <label for="tabs" className="sr-only">
          Suivez vos likes
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Vous avex liké</option>
          <option>Ils vous ont liké</option>
          <option>Match</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium  text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mx-auto w-[90%]">
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4  bg-green-500 rounded-tl-lg focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 active focus:outline-none dark:bg-gray-700 dark:text-white text-black "
            aria-current="page"
          >
            J'ai liké
          </a>
          <article className="bg-gray-400 min-h-[50vh] overflow-y-auto rounded-bl-lg p-2"></article>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-blue-500 text-black hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Ils m'ont liké
          </a>
          <article className="bg-gray-600 min-h-[50vh] overflow-y-auto p-2"></article>
        </li>
        <li className="w-full">
          <a
            href="#"
            className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-tr-lg text-black "
          >
            Match
          </a>
          <article className="bg-gray-800 min-h-[50vh] overflow-y-auto rounded-br-lg p-2"></article>
        </li>
        
      </ul>
    </div>
  );
}
