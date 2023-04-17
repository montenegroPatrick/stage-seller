export default function CompanyDescription() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-rhubard p-5 mx-auto border-dotted border-b border-black px-auto mb-5 md:mb-0">
      <h2 className="font-baskerville text-2xl sm:text-3xl 2xl:text-4xl text-center text-white">
        Description
      </h2>

      <p className="my-8 px-12 xl:px-24 text-white dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
    </div>
  );
}
