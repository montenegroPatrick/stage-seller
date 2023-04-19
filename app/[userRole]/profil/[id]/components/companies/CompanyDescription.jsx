'use state'
import SettingButton from "./SettingButton";
import {useState} from 'react';

export default function CompanyDescription({description}) {
  const [settings, setSettings] = useState(false)


  return (
    <div className="relative w-full md:h-35vh flex flex-col items-center p-5 mx-auto border-dotted border-t-2 border-b-2 md:border-t-0 border-magenta px-auto md:mb-0">
      <h2 className="font-baskerville text-2xl sm:text-3xl 2xl:text-4xl text-center text-blackNext underline">
        Description
      </h2>

      <p className="my-8 px-12 xl:text-lg 2xl:text-xl xl:px-18 text-blackNext dark:text-gray-400 first-letter:text-4xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-1 first-letter:float-left">
        {!description ? 'Description non renseignée.' : description}
      </p>
      <SettingButton top='2' right='2'/>
    </div>
  );
}
