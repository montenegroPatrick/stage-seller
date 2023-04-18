import Skills from "./Skill";

export default function CompanyStage({ stages }) {
  const skills = ["Php", "Javascript", "React"];

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl p-5 mx-auto my-5 bg-white border-2 border-black">
      <h2 className="text-2xl sm:text-3xl text-blackNext text-center font-baskerville underline">
        Profil recherché
      </h2>
      <article className="flex flex-col 2xl:flex-row mt-5 w-full border border-black rounded-md p-2">
        <div className=" flex flex-wrap justify-center gap-2">
          {stages.skills.map((skill, index) => (
            <Skills key={index} bgColor="bg-blueDark">
              {skill}
            </Skills>
          ))}
        </div>
        <div className="text-center font-jetbrains">
          <p className="font-md p-1 text-magenta">À partir du {stages.date}</p>
        </div>
      </article>
    </div>
  );
}
