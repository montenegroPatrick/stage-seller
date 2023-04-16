export default function CompanyDescription() {
  return (
    <div className="w-[90%] flex flex-col justify-center bg-magenta rounded-xl p-5 mx-auto my-5 ">
      <h2 className="font-lobster text-2xl sm:text-3xl 2xl:text-4xl text-center text-white font-medium">
        Description
      </h2>

      <p class="mt-3 text-gray-200 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      
    </div>
  );
}
