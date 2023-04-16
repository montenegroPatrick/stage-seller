import CompanyMatch from "./CompanyMatch";
import CompanyStage from "./CompanyStage";
import CompanySkills from "./CompanySkills";
import CompanyNameAvatar from "./CompanyNameAvatar";
import CompanyDescription from "./CompanyDescription";

export default function () {
  return (
    <section className="flex flex-col justify-center md:flex-row min-h-[calc(100vh-4rem)] font-mono mx-2 sm:mx-4 md:mx-6 2xl:mx-24">
      <div className="w-[100%] md:w-[50%] mx-auto my-5 ">
        <CompanyNameAvatar />
        <div className="w-[90%] mt-5 flex flex-col xl:flex-row justify-between bg-white/30 border-l-purple-200 rounded-xl p-5 mx-auto">
          <CompanySkills />
          <CompanyStage />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] mx-auto my-5">
        <CompanyDescription />
        <CompanyMatch />
      </div>
    </section>
  );
}
