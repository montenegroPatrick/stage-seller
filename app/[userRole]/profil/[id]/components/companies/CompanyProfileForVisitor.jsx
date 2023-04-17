
//Components
import CompanyMatch from "./CompanyMatch";
import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";

import { cookies } from "next/headers";

export default function ({
  companyName,
  description,
  city,
  zipCode,
  picture,
  skills,
  id,
  stage,
  connectedUserId
}) {

  
  return (
    <>
      <div className="sticky flex flex-col items-center scrolling-animation">
        <h2 className=" font-baskerville text-4xl sm:text-4xl md:text-5xl text-black text-center py-6 px-8">
          Profil
        </h2>
        <div className="w-full max-w-[80vw] bg-black h-[1px]" />
      </div>
      <section className="flex flex-col justify-center md:flex-row w-full font-mono">
        <div className="w-[100%] md:w-[50%] mx-auto my-5 h-full flex flex-col items-between">
          <CompanyNameAvatar name={companyName} picture={picture} />
          <div className="w-full mt-5 flex flex-col xl:flex-row justify-between rounded-xl p-5 mx-auto">
            <CompanySkills skills={skills} />
            <CompanyStage />
          </div>
        </div>
        <div className="w-full md:w-[50%] mx-auto my-5 border-dotted md:border-l md:border-black">
          <CompanyDescription />
          <CompanyMatch />
        </div>
      </section>
    </>
  );
}
