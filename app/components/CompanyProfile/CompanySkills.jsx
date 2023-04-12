import Skills from "./Skill";


export default function CompanySkills() {
  return (
    <div className="w-[90%] flex flex-col justify-center bg-white/50 border-l-purple-200 rounded-xl p-5 mx-auto my-5 ">
      <h2 className="text-3xl sm:text-4xl font-medium text-center">Skills de l'entreprise</h2>
      <div className="mt-5 w-[80%] bg-whiteSmoke mx-auto rounded-xl flex flex-wrap justify-around py-4 px-2">
        <Skills>Javascript</Skills>
        <Skills>PHP</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
        <Skills>Javascript</Skills>
      </div>
    </div>
  );
}