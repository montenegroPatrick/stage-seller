import Skill from "./Skill";

export default function CompanySkills({ skills }) {
  return (
    <div className="w-full xl:w-[50%] flex flex-col justify-center  p-5 mx-auto my-5 ">
      <h2 className="text-2xl sm:text-3xl text-center text-white font-baskerville underline">
        Skills de l'entreprise
      </h2>
      <div className="mt-5 w-full bg-white mx-auto rounded-xl flex flex-wrap justify-evenly py-4 px-2 gap-[6px] border-2 border-black">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <Skill key={index} bgColor="bg-blueDark">
              {skill}
            </Skill>
          ))
        ) : (
          <p>Pas de skills renseignés</p>
        )}
      </div>
    </div>
  );
}
