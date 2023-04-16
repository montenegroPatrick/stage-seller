import Skills from "./Skill";

export default function CompanySkills() {
  return (
    <div className="w-full xl:w-[45%] flex flex-col justify-center bg-grayLilac rounded-xl p-5 mx-auto my-5 ">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-medium text-center text-black font-lobster">
        Skills de l'entreprise
      </h2>
      <div className="mt-5 w-[80%] bg-white mx-auto rounded-xl flex flex-wrap justify-between py-4 px-2">
        <Skills>Javascript</Skills>
        <Skills>PHP</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
      </div>
    </div>
  );
}
