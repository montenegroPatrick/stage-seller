import Skills from "./Skill";

export default function CompanyStage({stage}) {



const skills = ['Php', 'Javascript', 'React']

  return (
    <div className="w-full xl:w-[50%] flex flex-col items-center rounded-xl p-5 mx-auto my-5 bg-white">
      <h2 className="text-2xl sm:text-3xl text-black text-center font-baskerville">Profil recherché</h2>
      <article className="flex flex-col 2xl:flex-row mt-5 w-full border border-black rounded-md p-2">
        <div className=" flex flex-wrap gap-2">
          {skills.map((skill) => 
            <Skills bgColor="bg-blackNext">{skill}</Skills>
          )}
          
        </div>
        <div className="text-center font-jetbrains">
          <p className="font-md p-1 text-magenta">À partir du 25 Mai</p>
        </div>
      </article>
    </div>
  );
}
