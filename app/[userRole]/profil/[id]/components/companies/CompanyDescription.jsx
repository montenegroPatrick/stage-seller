import settingButton from "./SettingButton";
export default function CompanyDescription({description}) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-magenta p-5 mx-auto border-dotted border-b border-black px-auto my-5 md:mb-0">
      <h2 className="font-baskerville text-2xl sm:text-3xl 2xl:text-4xl text-center text-white underline">
        Description
      </h2>

      <p className="my-8 px-12 xl:text-lg 2xl:text-xl xl:px-18 text-white dark:text-gray-400 first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-1 first-letter:float-left">
        {!description ? 'Description non renseignée.' : description}
      </p>
      
    </div>
  );
}
