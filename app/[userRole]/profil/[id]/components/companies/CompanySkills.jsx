import Skills from "./Skill";

export default function CompanySkills() {
  return (
    <div className="w-full xl:w-[50%] flex flex-col justify-center  p-5 mx-auto my-5 ">
      <h2 className="text-2xl sm:text-3xl text-center text-black font-baskerville">
        Skills de l'entreprise
      </h2>
      <div className="mt-5 w-full bg-white mx-auto rounded-xl flex flex-wrap justify-evenly py-4 px-2 gap-[6px]">
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>PHP</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
        <Skills bgColor={'bg-blueDark'}>Javascript</Skills>
      </div>
    </div>
  );
}
